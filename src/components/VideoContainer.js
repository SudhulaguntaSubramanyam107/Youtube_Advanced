import { useEffect, useState } from "react";
import { GOOGLE_YOUTUBE_API } from "../utils/constants";
import Videocard, { AdVideoCard } from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const youtubeData = async () => {
      const data = await fetch(GOOGLE_YOUTUBE_API);
      const json = await data.json();
      console.log(json?.items);
      setVideos(json?.items || []);
    };
    youtubeData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video?.id} to={`/watchpage?v=${video?.id}`}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;