import React, {useState, useEffect} from 'react';
import { WebtoonAPIList } from './services/webtoon';

const App = () => {
  const AllDay = async(week) => {
    try {
      const day = await WebtoonAPIList.getAllDay(week);
      console.log(day);
    } catch (e) {
      console.log(e);
    }
  }

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

  let days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
  let week = days.map(function(day, index){
    return <button key={index} onClick={() => AllDay(index)}>{day}</button>;
  });




  const [keyword, searchKeyword] = useState('');

  const search = e => {
    searchKeyword(e.target.value);
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
  
  return (
    <div>
      <div>
        <input onChange={search}/>
        <button onClick={() => searchWebtoon(keyword)}>검색</button>
      </div>

      <div>
        {week}
      </div>
    </div>
  );
}

export default App;