import { useEffect } from "react"
import { GOOGLE_YOUTUBE_API } from "../utils/constants"
import Videocard,{AdVideoCard} from "./Videocard"
import { useState } from "react"
import { Link } from "react-router-dom"
const Videocontainer = () =>{
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        youtubeData()
    },[])
    const youtubeData =async  () =>{
        const data = await fetch(GOOGLE_YOUTUBE_API)
        const json= await data.json()
        console.log(json?.items)
        setVideos(json?.items || [])
        console.log(videos)
    }
    return (
        <div className="flex flex-wrap">
            { videos[0] && <AdVideoCard info={videos[0]}/>}
            {videos.map((video)=><Link to ={`/watchpage?v=${video.id}`}><div><Videocard key = {video?.id} info = {video}/></div></Link>)}
        </div>
    )
}
export default Videocontainer