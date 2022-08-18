import React, { useState, useEffect } from 'react';
import axios from 'axios';


// 이해가될때 보자.
function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://korea-webtoon-api.herokuapp.com/all/week'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map(webtoon => (
        <li>
          {webtoon.author} ({webtoon.title})
        </li>
      ))}
    </ul>
  );
}

export default Users;


/*
useEffect(() => {
    dateApi();
  })

  const dateApi = async() => {
    let week = new Date().getDay();

    console.log(week);

    const Mon = await WebtoonAPIList.getAllDay(0);
    const Tue = await WebtoonAPIList.getAllDay(1);
    const Wed = await WebtoonAPIList.getAllDay(2);
    const Thu = await WebtoonAPIList.getAllDay(3);
    const Fri = await WebtoonAPIList.getAllDay(4);
    const Sat = await WebtoonAPIList.getAllDay(5); 
    const Sun = await WebtoonAPIList.getAllDay(6);

    switch(week){
      case 0:
        console.log(Sun);
        break;
      case 1:
        console.log(Mon);
        break;
      case 2:
        console.log(Tue);
        break;
      case 3:
        console.log(Wed);
        break;
      case 4:
        console.log(Thu);
        break;
      case 5:
        console.log(Fri);
        break;
      case 6:
        console.log(Sat);
        break;
      default:
        console.log("요일 error")
    }
  };

*/




/*
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

*/