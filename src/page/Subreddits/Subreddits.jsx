import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchSubreddits, selectSubreddits } from '../../stores/subRedditSlice';
import './Subreddits.css';
import {
    setSelectedSubreddit,
    selectSelectedSubreddit,
} from '../../stores/redditSlice';
const ICON_URL = "https://ui-avatars.com/api/?background=ededed&color=3d5af1&bold=true&name=";

export default function Subreddits() {
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <Card className="subreddit-card">
            <h2>Subreddits</h2>
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.id}
                        className={`${selectedSubreddit === subreddit.url && `selected-subreddit`
                            }`}
                    >
                        <button
                            type="button"
                            onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                        >
                            <img
                                src={
                                    subreddit.icon_img || `${ICON_URL}${subreddit.display_name}`
                                }
                                alt={`${subreddit.display_name}`}
                                className="subreddit-icon"
                                style={{ border: `3px solid ${subreddit.primary_color}` }}
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};