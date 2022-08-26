import React, {useState} from 'react';
import { WebtoonAPIList } from '../services/webtoon';
import { useLocation } from 'react-router-dom';

// 여기는 웹툰 디테일
const Search = () => {
  const [keywordArr, setKeywordArr] = useState();

  const searchKey = useLocation();
  const keyword = decodeURI(searchKey.search.substring(9));

  const searchWebtoon = async(keyword) => {
    try {
      const search = await WebtoonAPIList.getSearchWebtoon(keyword);
      setKeywordArr(search.data);
    } catch (e) {
      console.log(e);
    }
  }

  searchWebtoon(keyword);


  const searchData = keywordArr;
  const searchToon = searchData && searchData.map(function(webtoon, index){
    return (
      <div className='webtoon searchToon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  })



  /*
  let search = props.keyword;
  console.log(search);

  
  const searchToon = search && search.map(function(webtoon, index){
    return (
      <div className='webtoon' title={webtoon.title} key={index}>
        <img alt={webtoon.title} src={webtoon.img}/>
        <h6>{webtoon.title}</h6>
      </div>
    )
  });
  */

  return (
    <div id='main'> 
      {searchToon}
    </div>
  )
}

export default Search;