import { useState,useEffect } from "react"
import { Comments } from "../comments/Comment";
import { Likes } from "../likes/Likes";

export function SubRedditPage({subredditUrl = "r/popular" }){
    const [subredditpost, setSubRedditPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showComments, setShowComments] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const data = await fetch(`https://www.reddit.com${subredditUrl}.json`);
            setSubRedditPost(data|| []);
            setIsLoading(false);
        };
        getPost();
    }, [subredditUrl]);  // Added empty dependency array
    if (isLoading) return <p>Loading...</p>;
    function timePosted(post){
        const data = post.data.created_utc
        const now = Math.floor(Date.now() / 1000); // Current time in seconds
        const elapsed = now - data;
        if (elapsed < 3600) {
            const minutes = Math.floor(elapsed / 60);
            return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
        } else if (elapsed < 86400) {
            const hours = Math.floor(elapsed / 3600);
            return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
        } else if (elapsed < 2592000) {
            const days = Math.floor(elapsed / 86400);
            return `${days} day${days !== 1 ? "s" : ""} ago`;
        } else if (elapsed < 31536000) {
            const months = Math.floor(elapsed / 2592000);
            return `${months} month${months !== 1 ? "s" : ""} ago`;
        } else {
            const years = Math.floor(elapsed / 31536000);
            return `${years} year${years !== 1 ? "s" : ""} ago`;
        }
    };
     
    const toggleComments = () => {
        setShowComments((prev) => (!prev));
    };

    return (
        <div className="subredditpost">
            <span className="subredditpost">
            {subredditpost.map((item, index) => {
                const postId = item.data.id;
               return (
                    <div key={index}>
                        <a href={item.data.url}>
                            <h2>{item.data.title}</h2> 
                            <img src={item.data.thumbnail} alt='thumbnail'></img>
                        </a>
                        <Likes post={item}/>
                        <footer>
                            <p>{item.data.author}</p>
                            <p>{timePosted(item)}</p>
                            <button onClick={() => toggleComments()}>{item.data.num_comments} Comments</button>
                        </footer>
                        {showComments ? <Comments subredditUrl={subredditUrl} postId= {postId} /> : ''}
                        
                        
                    </div>
                );
            })}
            </span>
        </div>
    );
}
