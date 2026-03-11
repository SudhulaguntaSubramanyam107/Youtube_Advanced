import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat"

const Watchpage = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const videoID = searchParams.get("v")

  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  const handleLike = () => {
    if(!liked){
      setLikes(likes + 1)
      setLiked(true)

      if(disliked){
        setDislikes(dislikes - 1)
        setDisliked(false)
      }
    }
  }

  const handleDislike = () => {
    if(!disliked){
      setDislikes(dislikes + 1)
      setDisliked(true)

      if(liked){
        setLikes(likes - 1)
        setLiked(false)
      }
    }
  }

  return (
    <div className="p-2 m-2">

      <div className="flex">

        <div>
          <iframe
            width="1400"
            height="600"
            src={"https://www.youtube.com/embed/" + videoID}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat/>
        </div>

      </div>

      <div className="bg-gray-300 h-24 rounded-lg m-2 flex items-center justify-center gap-10">

        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLike}>
          <img
            className="h-12 w-12 p-2"
            src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
            alt="like"/>
          <span className="text-lg font-bold">{likes}</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleDislike}>
          <img
            className="h-12 w-12 p-2"
            src="https://cdn-icons-png.flaticon.com/512/126/126504.png"
            alt="dislike"/>
          <span className="text-lg font-bold">{dislikes}</span>
        </div>
      </div>
      <CommentsContainer/>

    </div>
  )
}

export default Watchpage