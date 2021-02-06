import React, { useRef, useState } from "react";
import Videofooter from "./Videofooter";
import Videosidebar from "./Videosidebar";

const Video = ({ url, user, desc, song, like, share, comment }) => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  function playVideo() {
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video">
      <video onClick={playVideo} ref={ref} className="video_player" src={url} />
      <Videofooter user={user} desc={desc} song={song} />
      <Videosidebar like={like} share={share} comment={comment} />
    </div>
  );
};

export default Video;
