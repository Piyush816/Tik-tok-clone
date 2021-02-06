import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";

const Videosidebar = ({ like, comment, share }) => {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  return (
    <div className="sidebar">
      <div onClick={handleLike} className="iconrow">
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        <p>{liked ? like + 1 : like}</p>
      </div>
      <div className="iconrow">
        <ChatIcon />
        <p>{comment}</p>
      </div>
      <div className="iconrow">
        <ShareIcon />
        <p>{share}</p>
      </div>
    </div>
  );
};

export default Videosidebar;
