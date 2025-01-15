import { useState } from "react"

export function Likes({post}){
    const [likes, setLikes] = useState(post.data.score)
    const [hasVoted, setHasVoted] = useState(false)

    function handleUpVote(){
        if (!hasVoted){
            setLikes((prev) => prev + 1)
            setHasVoted((prev) =>!prev)
        }
    }
    function handleDownVote(){
        if (!hasVoted){
            setLikes((prev) => prev - 1)
            setHasVoted((prev) =>!prev)
        }
    }
    return(
        <div className="likes">
            <button onClick={handleUpVote}>Up</button>
            <strong>Likes: {likes}</strong>
            <button onClick={handleDownVote}>Down</button>
        </div>

    )
}
