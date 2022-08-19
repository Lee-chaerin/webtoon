import React, {useState} from 'react';
import { WebtoonAPIList } from '../services/webtoon';
import "../App.css";

// 여기가 헤더화면이에요
const Header = () => {
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

  

  return (
    <div id='header'>
      <h1 id='logo'>WEBTooN</h1>
      <div>
        <div>
          <input onChange={search}/>
          <button onClick={() => searchWebtoon(keyword)}><img className='img' alt='search' src='img/search.png'/></button>
        </div>
        <img className='img' alt='user' src='img/user.png'/>
      </div>
    </div>
  )
}

export default Header;