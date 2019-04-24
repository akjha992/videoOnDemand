import React from "react";
// import ReactPlayer from 'react-player';
import styles from './index.css';
import sub from './subs/flashs05e19.vtt';
import { data } from './constants';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedIndex:'0'
    }
  }
  onChange(name, value){
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <div className={styles.header}>
        <label className={styles.selectLabel}>Playing</label>
          <div className={styles.select}>
              <select name="slct" id="slct" onChange={(e) => {this.onChange('selectedIndex', e.target.value)}}>
                {data.map((item, i) => (<option key={i} value={i}>{item.name}</option>))}
              </select>
            </div>
        </div>
        {/* <ReactPlayer width='100%' height='600px' controls={true} url={data[this.state.selectedIndex].url} playing 
        /> */}
        <video controls="controls" id="video1" style={{'width': '100%'}}>
            <source src={data[this.state.selectedIndex].url} type="video/mp4" />
            <track src={sub} kind="subtitles" srclang="en" label="English" />
        </video>
      </div>
    );
  }
}
export default App;
