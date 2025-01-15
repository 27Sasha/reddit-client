import { useState,useEffect } from "react"
import { fetchData } from "../../services/api";


export function SubredditListing({handleSubredditClick}){
    const [subredditpost, setSubRedditPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const getPost = async () => {
            const data = await fetchData();
            setSubRedditPost(data|| []);
            setIsLoading(false);
        };
        getPost();
    }, []);  // Added empty dependency array
    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="subreddit">
            <span className="subredditHalf">
            {subredditpost.map((item, index) => {
                return (
                    <div key={index}>
                        <button key={index} onClick={(e) => handleSubredditClick(item.data.url)}>{item.data.display_name}</button>
                    </div>
                );
            })}
            </span>
        </div>
    );
}
