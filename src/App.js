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

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} cols={20} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;