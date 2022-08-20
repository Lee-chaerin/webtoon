import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

// 페이지는 components 폴더에 있는 파일을 불러와서 단순히 보여준다.
const MainPage = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default MainPage;