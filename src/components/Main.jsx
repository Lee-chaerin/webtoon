import React, {useState, useEffect} from 'react';
import { WebtoonAPIList } from '../services/webtoon';
import "../App.css";
import Loading from './Loading';
//import Loading from './Loading';

// 여기가 메인화면이에요
const Main = () => {

  let forms = ["네이버", "카카오", "카카오페이지"];
  let formList = forms.map(function(form, index){
    return <li key={index}><a href='#!' onClick={() => clickForm(form)}>{form}</a></li>
  });


  const [platform, setPlatform] = useState('네이버');
  const [form, setForm] = useState('naver');

  const clickForm = (e) => {
    switch(e){
      case "네이버":
        setPlatform("네이버");
        setForm("naver");
        WebtoonForm("naver");
        break;
      case "카카오":
        setPlatform("카카오");
        setForm("kakao");
        WebtoonForm("kakao");
        break;
      case "카카오페이지":
        setPlatform("카카오페이지");
        setForm("kakao-page");
        WebtoonForm("kakao-page");
        break;
      default:
        console.log("플랫폼 오류");
    }
  }

  const WebtoonForm = async(platform) => {
    try {
      const Form = await WebtoonAPIList.getWebtoonForm(platform);
      console.log(Form);
    } catch (e) {
      console.log(e);
    }
  }



  let days = ["월", "화", "수", "목", "금", "토", "일"];


  let week = days.map(function(day, index){
    return <h3 onClick={() => AllDay(form, index)} key={index}>{day}</h3>
  });  

  const AllDay = async(platform, week) => {
    try {
      const day = await WebtoonAPIList.getPlatformDay(platform, week);
      console.log(day);
    } catch (e) {
      console.log(e);
    }
  }



  useEffect(() => {
    readDay(form, 0);
    readDay(form, 1);
    readDay(form, 2);
    readDay(form, 3);
    readDay(form, 4);
    readDay(form, 5);
    readDay(form, 6);
    
    setLoading(false);
  }, [form]);


  const [webtoonMon, setWebtoonMon] = useState([]);
  const [webtoonTue, setWebtoonTue] = useState([]);
  const [webtoonWed, setWebtoonWed] = useState([]);
  const [webtoonThu, setWebtoonThu] = useState([]);
  const [webtoonFri, setWebtoonFri] = useState([]);
  const [webtoonSat, setWebtoonSat] = useState([]);
  const [webtoonSun, setWebtoonSun] = useState([]);

  const readDay = async(platform, day) => {
    const readDay = await WebtoonAPIList.getPlatformDay(platform, day);

    switch(day){
      case 0:
        setWebtoonMon(readDay.data);
        break;
      case 1:
        setWebtoonTue(readDay.data);
        break;
      case 2:
        setWebtoonWed(readDay.data);
        break;
      case 3:
        setWebtoonThu(readDay.data);
        break;
      case 4:
        setWebtoonFri(readDay.data);
        break;
      case 5:
        setWebtoonSat(readDay.data);
        break;
      case 6:
        setWebtoonSun(readDay.data);
        break;
      default:
        console.log("요일 error")
    }
  };

  let webtoonsMon = webtoonMon;
  let webtoonsTue = webtoonTue;
  let webtoonsWed = webtoonWed;
  let webtoonsThu = webtoonThu;
  let webtoonsFri = webtoonFri;
  let webtoonsSat = webtoonSat;
  let webtoonsSun = webtoonSun;


  let readWebtoonMon = webtoonsMon.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  }); 

  let readWebtoonTue = webtoonsTue.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  }); 

  let readWebtoonWed = webtoonsWed.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  }); 

  let readWebtoonThu = webtoonsThu.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  }); 
  
  let readWebtoonFri = webtoonsFri.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  });
  
  let readWebtoonSat = webtoonsSat.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  }); 
  
  let readWebtoonSun = webtoonsSun.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  }); 

    /*
  const [webtoon, setWebtoon] = useState([]);

  const readDay = async(day) => {
    const readDay = await WebtoonAPIList.getPlatformDay("naver", day);
    console.log(readDay);
    setWebtoon(readDay.data);
  };

  let webtoons = webtoon;
  let readWebtoon = webtoons.map(function(webtoon, index){
    return(
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  });  
  */


  const [loading, setLoading] = useState(true);






  return (
    <div>
      {loading ? <Loading/> : 
      <div id='main'>
        <div id='dropForm'>
          <ul>
            <li><a href='#!'>{platform} ▼</a>
              <ul>
                {formList}
              </ul>
            </li>
          </ul>
        </div>
      
      
        <div id='week'>
          <div className='day'>
            {week}
          </div>

          <div id='webtoon'>
            <div>
              {readWebtoonMon}
            </div>
            <div>
              {readWebtoonTue}
            </div>
            <div>
              {readWebtoonWed}
            </div>
            <div>
              {readWebtoonThu}
            </div>
            <div>
              {readWebtoonFri}
            </div>
            <div>
              {readWebtoonSat}
            </div>
            <div>
              {readWebtoonSun}
            </div>
          </div>
        </div>
      </div>
      }
    </div>

    
  )
}

export default Main;