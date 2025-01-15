import { useState } from "react";
import { Card } from "../card/Card"
import { SubredditListing } from "../subredditListing/SubredditListing"
import './Page.css'
import { SubRedditPage } from "../subredditPage/SubRedditPage";

export function Page(){
    const [subredditClicked, setSubredditClicked] = useState(false);
    const [subredditUrl, setSubRedditUrl] = useState('')

    const handleSubredditClick = (url) => {
        setSubredditClicked(true)
        setSubRedditUrl(url);
    }
    return(
        <div className="page">
            <div className="cardSection">
                {subredditClicked ? <SubRedditPage subredditUrl = {subredditUrl}/> :<Card /> }
            </div>
            <div className="subreddit">
                <h1>Subreddit</h1>
                {<SubredditListing handleSubredditClick = {handleSubredditClick} />}
            </div>
        </div>

    )
}
