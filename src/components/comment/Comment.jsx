import { useEffect, useState } from "react";

export function Comments ({postId, subredditUrl}){
    const [comment, setComments] =useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchComments = async () => {
            const resolvedSubredditUrl = subredditUrl || "r/popular";
            try {
                const response = await fetch(
                    `https://www.reddit.com/${resolvedSubredditUrl}/comments/${postId}.json`
                );
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const data = await response.json();
                // Comments are in the second element of the returned JSON array
                const commentData = data[1].data.children;
                setComments(commentData);
            } catch (error) {
                console.error("Error fetching comments:", error);
            } finally {
                setLoading(false);
            }
    };
    fetchComments()
})
    if (loading) return <p>Loading Comments...</p>;
    return (
        <div className="commentList">
            {comment.map((comment, index) => {
                return(
                <div key={index}>
                    <p>{comment.data.body}</p>
                    <strong>{comment.data.author}</strong>
                </div>
                )
            })}
        </div>
    )
}
