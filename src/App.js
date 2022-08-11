import React, {useState} from 'react';
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


  //기본 월요일로 설정하고, 날짜 받아와서 설정
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