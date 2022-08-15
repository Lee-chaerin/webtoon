import React, {useState, useEffect} from 'react';
import { WebtoonAPIList } from './services/webtoon';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async() => {
    try {
      const res = await WebtoonAPIList.getAllWebtoon();
      setData(res);
    } catch (e) {
      console.log(e);
    }
  };


  const AllMon = async() => {
    try {
      const res = await WebtoonAPIList.getAllMon();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const AllTue = async() => {
    try {
      const res = await WebtoonAPIList.getAllTue();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const AllWed = async() => {
    try {
      const res = await WebtoonAPIList.getAllWed();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const AllThu = async() => {
    try {
      const res = await WebtoonAPIList.getAllThu();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const AllFri = async() => {
    try {
      const res = await WebtoonAPIList.getAllFri();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const AllSat = async() => {
    try {
      const res = await WebtoonAPIList.getAllSat();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const AllSun = async() => {
    try {
      const res = await WebtoonAPIList.getAllSun();
      setData(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dateApi();
  })

  const dateApi = async() => {
    let week = new Date().getDay();

    console.log(week);

    const Sun = await WebtoonAPIList.getAllSun();
    const Mon = await WebtoonAPIList.getAllMon();
    const Tue = await WebtoonAPIList.getAllTue();
    const Wed = await WebtoonAPIList.getAllWed();
    const Thu = await WebtoonAPIList.getAllThu();
    const Fri = await WebtoonAPIList.getAllFri();
    const Sat = await WebtoonAPIList.getAllSat(); 

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

  
  return (
    <div>
      <div>
        <button onClick={AllMon}>월요일</button>
        <button onClick={AllTue}>화요일</button>
        <button onClick={AllWed}>수요일</button>
        <button onClick={AllThu}>목요일</button>
        <button onClick={AllFri}>금요일</button>
        <button onClick={AllSat}>토요일</button>
        <button onClick={AllSun}>일요일</button>
      </div>

      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} cols={20} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;