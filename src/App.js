import React from "react";
import ReactPlayer from 'react-player';
class App extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <h3>Playing Game Of Thrones Season 8 Episode 1</h3>
        <ReactPlayer width='100%' height='600px' controls={true} url='https://nl19.seedr.cc/ff_get/447246216/Game.of.Thrones.S08E01.Kings.Landing.1080p.WEB-HD.x264.ESub-KatmovieHD.Eu.mkv.mp4?st=fwi2cIr9z5w2F4aqqw2ihw&e=1555784428' playing />
      </div>
    );
  }
}
export default App;
