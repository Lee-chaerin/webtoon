import React, {useState} from 'react';
import { WebtoonAPIList } from '../services/webtoon';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';



// 여기가 헤더화면이에요
const Header = () => {
  const [keyword, setKeyword] = useState('');
  
  const navigate = useNavigate();
  const searchToon = () => {
    navigate({
      pathname: '/search',
      search: `?keyword=${keyword}`
    });
  }


  
  const search = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };
  
  const searchWebtoon = async(keyword) => {
    if(!sessionStorage.getItem("userInfo")) {
      alert('로그인 해주세요!!');
      navigate('/login');
      return
    }
    try {
      const search = await WebtoonAPIList.getSearchWebtoon(keyword);
      if(keyword.length > 0){
        if (search.data.error === "Not Found"){
          alert("해당하는 웹툰은 없어요.");
        } else{
          searchToon();
        }
      }
    } catch (e) {
      console.log(e);
    }
  }



  return (
    <div id="header">
      <Link to={'/'}>
        <h1 id="logo">WEBTooN</h1>
      </Link>
      <div>
        <div>
          <input onChange={search} />
          <button onClick={() => searchWebtoon(keyword)}>
            <img className="img" alt="search" src="img/search.png" />
          </button>
        </div>
        {sessionStorage.getItem('userInfo') ? (
          <img className="img" alt="login-user" src="img/user(3).png" />
        ) : (
          <Link to={'/login'}>
            <img className="img" alt="user" src="img/user(2).png" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;