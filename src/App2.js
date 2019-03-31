import React from "react";
import ReactHLS from 'react-hls';
import styles from './index.css';
const baseUrl = {
  hin: "https://live12.akt.hotstar-cdn.net/hls/live/2003697/ipl2019/hin/fulldvrm0",
  eng: "https://live11.akt.hotstar-cdn.net/hls/live/2003689/ipl2019/eng/fulldvrm0"
};
class App extends React.Component {
  constructor(){
    super();
    this.load = this.load.bind(this);
    this.quality = React.createRef();
    this.language = React.createRef();
    this.state = {
      url: '',
      loaded: false
    }
  }
  load(){
    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const month = monthNames[d.getMonth()].toLowerCase();
    let date = d.getDate();
    let matchNo =1;
    if (d.getHours() >=20){
      matchNo = 2;
    }
    if (d.getHours() <1){
      date--;
      matchNo = 2;
    }
    if (date<10){
      date='0'+date;
    }
    this.setState((state) => ({
      url: baseUrl[this.language.current.value]+matchNo + date + month + "2019/master_"+this.quality.current.value+".m3u8",
      loaded: true
    }));
  }
  render() {
    return (
      <div>
        <div className={styles.sideBar}>
        <label className={styles.label}>Select Language</label>
              <select className={styles['select-css']} name="language" ref={this.language} defaultValue='eng'>
                <option value='eng'>English</option>
                <option value='hin'>Hindi</option>
              </select>
            <label className={styles.label}>Select Quality</label>
            <select className={styles['select-css']} name="quality" ref={this.quality} defaultValue='1'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <button className={styles.button} onClick={this.load}>LOAD</button>
        </div>
        <div className={styles.mainBody} hidden={!this.state.loaded}>
          <ReactHLS hidden={!this.state.loaded} width={800} height={600} url={this.state.url} autoplay/>
        </div>
      </div>
    );
  }
}
export default App;
