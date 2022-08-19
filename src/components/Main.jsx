import React, {useState} from 'react';
import { WebtoonAPIList } from '../services/webtoon';
import "../App.css";

// 여기가 메인화면이에요
const Main = () => {

  //플랫폼 이동
  let forms = ["네이버", "카카오", "카카오페이지"];
  let formList = forms.map(function(form, index){
    return <li key={index}><a href='#!' onClick={() => clickForm(form)}>{form}</a></li>
  });


  const [platform, setPlatform] = useState('네이버');

  const clickForm = (e) => {
    switch(e){
      case "네이버":
        setPlatform("네이버");
        WebtoonForm("naver");
        break;
      case "카카오":
        setPlatform("카카오")
        WebtoonForm("kakao");
        break;
      case "카카오페이지":
        setPlatform("카카오페이지")
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
    return (
      <div className='day' key={index}>
        <h3 onClick={() => AllDay(index)}>{day}</h3>
        <div>

          <div className='webtoon' title='알고보니 내 이름은 이채린?!'>
            <img alt='test' src='img/test.jpg'/>
            <h6>알고보니 내 이름은 이채린?!</h6>
          </div>

          <div className='webtoon'>
            <img alt='test' src='img/test.jpg'/>
            <h6>테스트</h6>
          </div>

        </div>
      </div>
    )
  });  

  const AllDay = async(week) => {
    try {
      const day = await WebtoonAPIList.getAllDay(week);
      console.log(day);
    } catch (e) {
      console.log(e);
    }
  }





  return (
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
        {week}
      </div>
      
    </div>
  )
}

export default Main;