import React, {useState} from 'react';
import { WebtoonAPIList } from '../services/webtoon';
import "../App.css";
import { Link } from 'react-router-dom';

import Search from './Search';


// 여기가 헤더화면이에요
const Header = () => {
  const [keyword, setKeyword] = useState('');
  const [searchToon, setSearchToon] = useState();

  const search = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };
  
  const searchWebtoon = async(keyword) => {
    try {
      const search = await WebtoonAPIList.getSearchWebtoon(keyword);
      console.log(search);
      setSearchToon(search.data);
      if (search.data.error === "Not Found"){
        alert("해당하는 웹툰은 없어요.");
      }
    } catch (e) {
      console.log(e);
    }
  }




  return (
    <div>
      <div id='header'>
        <Link to={'/'}><h1 id='logo' onClick={() => setSearchToon('')}>WEBTooN</h1></Link>
        <div>
          <div>
            <input onChange={search}/>
            <Link to={'/search'}><button onClick={() => searchWebtoon(keyword)}><img className='img' alt='search' src='img/search.png'/></button></Link>
          </div>
          <img className='img' alt='user' src='img/user.png'/>
        </div>
      </div>
      <Search keyword={searchToon}/>
    </div>
  )
}

export default Header;