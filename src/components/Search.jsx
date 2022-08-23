import React from 'react';

// 여기는 웹툰 디테일
const Search = (props) => {

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


  return (
    <div id='main'>{searchToon}</div>
  )
}

export default Search;