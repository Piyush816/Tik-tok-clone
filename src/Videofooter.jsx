import React from "react";
import disk from "./disk.png";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

const Videofooter = ({ user, desc, song }) => {
  return (
    <div className="video_footer">
      <div className="top">
        <div className="info">
          <h5>@{user}</h5>
          <small>{desc}</small>
        </div>
        <img className="disk_logo" src={disk} alt="disk" />
      </div>
      <div className="bottom">
        <MusicNoteIcon />
        <Ticker mode="smooth" speed={4} className="ticker">
          {({ index }) => <small>{song}</small>}
        </Ticker>
      </div>
    </div>
  );
};

export default Videofooter;
