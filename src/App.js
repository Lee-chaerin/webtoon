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

  const AllDay = async(week) => {
    try {
      const day = await WebtoonAPIList.getAllDay(week);
      setData(day);
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

  
  return (
    <div>
      <div>
        <button onClick={() => AllDay(0)}>월요일</button>
        <button onClick={() => AllDay(1)}>화요일</button>
        <button onClick={() => AllDay(2)}>수요일</button>
        <button onClick={() => AllDay(3)}>목요일</button>
        <button onClick={() => AllDay(4)}>금요일</button>
        <button onClick={() => AllDay(5)}>토요일</button>
        <button onClick={() => AllDay(6)}>일요일</button>
      </div>

      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} cols={20} defaultValue={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;