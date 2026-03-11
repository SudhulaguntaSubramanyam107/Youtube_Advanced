
const Videocard = ({info}) =>{
    console.log(info)
    const {snippet, statistics} = info
    const {thumbnails,localized} = snippet
    return (
        <div className="m-2 p-2 w-80 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
            src={thumbnails?.high?.url}
            alt="videocard"
            className="w-full h-60 object-cover rounded-lg"/>

        <h3 className="mt-3 font-semibold text-sm line-clamp-2">
            {localized?.title}
        </h3>

        <h4 className="mt-2 text-xs text-gray-600">
            {statistics?.viewCount} views
        </h4>
        </div>
      
    )
}
export const AdVideoCard = ({info})=>{
      return (
        <div className="m-2 p-2 border border-red-800">
             <Videocard info = {info}/>
        </div>
      )
    }
export default Videocard