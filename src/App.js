import React from "react";
import ReactHLS from 'react-hls';
const baseUrl = "https://live11.akt.hotstar-cdn.net/hls/live/2003689/ipl2019/eng/fulldvrm0";
class App extends React.Component {
  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.goLive = this.goLive.bind(this);
    this.matchNo = React.createRef();
    this.date = React.createRef();
    this.month = React.createRef();
    this.state = {
      url: ''
    };
  }
  componentDidMount(){
    this.goLive();
  }
  goLive(){
    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const month = monthNames[d.getMonth()].toLowerCase();
    let date = d.getDate();
    let matchNo =1;
    if (d.getHours() >=20){
      matchNo = 2;
    }
    if (d.getHours() <6){
      date--;
      matchNo = 2;
    }
    if (date<10){
      date='0'+date;
    }  
    console.log(matchNo, date, month, baseUrl+matchNo + date + month + "2019/master_5.m3u8");
    this.setState((state) => ({
      url: baseUrl+matchNo + date + month + "2019/master_5.m3u8"
    }));
  }
  onClick(e){
    e.preventDefault();
    if(e.target.name === "load"){
      console.log(this.matchNo.current.value, this.month.current.value, this.date.current.value);
      let date = this.date.current.value;
      if (date<10){
        date='0'+date;
      } 
      this.setState((state) => ({
        url: baseUrl+this.matchNo.current.value + date + this.month.current.value + "2019/master_5.m3u8"
      }));
    } else {
      this.goLive();
    }
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value 
    });
  }
  render() {
    const date = [];
    for(let i=1;i<=31;i++){
      date.push(i);
    }
    return (
      <div>
        MatchNo: 
        <select name="matchNo" ref={this.matchNo}>
          <option value='1'>First Match of the day</option>
          <option value='2'>Second Match of the day</option>
        </select>
        Date: 
        <select name="date" ref={this.date}>
          {date.map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))}
        </select>
        Month: 
        <select name="month" ref={this.month}>
          <option value='march'>March</option>
          <option value='april'>April</option>
        </select>
        <button name="load" onClick={this.onClick}>Load this match</button>
        <button name="goLive" onClick={this.onClick}>GO LIVE</button>
      <ReactHLS url={this.state.url} autoplay fullscreen/>
      </div>
    );
  }
}
export default App;
