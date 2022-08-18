import React, {useState} from 'react';
import { WebtoonAPIList } from './services/webtoon';
import './App.css';

const App = () => {


  //요일 버튼
  const AllDay = async(week) => {
    try {
      const day = await WebtoonAPIList.getAllDay(week);
      console.log(day);
    } catch (e) {
      console.log(e);
    }
  }

  let days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
  let week = days.map(function(day, index){
    return <button key={index} onClick={() => AllDay(index)}>{day}</button>;
  });
  

  //검색
  const [keyword, setKeyword] = useState('');

  const search = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  const searchWebtoon = async(keyword) => {
    try {
      const search = await WebtoonAPIList.getSearchWebtoon(keyword);
      console.log(search);
      
      if (search.data.error === "Not Found"){
        alert("해당하는 웹툰은 없어요.");
      }
    } catch (e) {
      console.log(e);
    }
  }







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





  
  return (
    <div>
      <div>
        <input onChange={search}/>
        <button onClick={() => searchWebtoon(keyword)}>검색</button>
      </div>

      <div>
        {week}
      </div>

      <div>
        <div className='dropForm'>
          <ul>
            <li><a href='#!'>{platform} ▼</a>
              <ul>
                {formList}
              </ul>
            </li>
          </ul>
        </div>

      </div>
      


    </div>
  );
}

export default App;