

export const fetchData = async ({subreddit}) =>{
    const api = `https://www.reddit.com/${subreddit}.json`
    if (!subreddit){
        subreddit= `r/popular`
    }
    try{
        const resp = await fetch(api)
        if (!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`)
        }
        const data = await resp.json()
        return data.data.children
    }
    catch (error){
        console.log(error)

    }
}
