import React from "react";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="video_container">
        <Video
          url="https://instagram.flko3-1.fna.fbcdn.net/v/t50.2886-16/136071006_676545623016991_6378254058208727763_n.mp4?_nc_ht=instagram.flko3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xSZqeXhpC34AX8dOfKx&oe=60205DB0&oh=28084d5f6098f3a6b86d0c1f55989dc4"
          user="Piyush816"
          desc="This is a funny video 😂"
          song="this is a song listem carefully"
          like={1544}
          comment="278"
          share="348"
        />
        <Video
          url="https://instagram.flko3-1.fna.fbcdn.net/v/t50.2886-16/144046451_437136664153605_4952764025748147009_n.mp4?_nc_ht=instagram.flko3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=aQtvDkr1DZoAX-VrS0_&oe=6020C390&oh=b8226adac81ad85ba3112ddf704ebfb3"
          user="Unkown reel"
          desc="visualizing magnetic field"
          song="awesome background music"
          like={2057}
          comment="635"
          share="74"
        />
        <Video
          url="https://instagram.flko3-1.fna.fbcdn.net/v/t50.2886-16/142082043_1086576741861627_7783007697521660933_n.mp4?_nc_ht=instagram.flko3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=apLC-csseV4AX9bHvcp&oe=602035F6&oh=aeb5bc2ff48769275fbd851ddd4aee16"
          user="Piyush kumar"
          desc="funny video i don't understand"
          song="ting ting tring ..."
          like={1030}
          comment="394"
          share="15"
        />
      </div>
    </div>
  );
}

export default App;
