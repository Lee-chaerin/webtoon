import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userDB } from '../models/user';
const Login = () => {
  const [values, setValues] = useState({
    id: '',
    pw: '',
  });
  const navigate = useNavigate();

  const change = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = () => {
    const oneUserDb = userDB.filter(e => e.id === values.id); //필터 함수를 이용해서 id가 똑같은 유저 array를가져왔다.
    console.log(oneUserDb);
    if (oneUserDb === null || oneUserDb === undefined || oneUserDb === []) {
      alert('아이디 혹은 비밀번호가 잘못되었습니다.');
      return;
    }
      if (oneUserDb[0].pw !== values.pw) {
        alert('아이디 혹은 비밀번호가 잘못되었습니다.');
        return;
      } else {
        sessionStorage.setItem('userInfo', values);
        navigate('/');
      }
  }
  return (
    <>
      <div>
        <input
          value={values.id}
          onChange={change}
          name="id"
          placeholder="아이디"
        />
        <input
          value={values.pw}
          onChange={change}
          name="pw"
          placeholder="패스워드"
        />
      </div>
      <button onClick={onSubmit}>로그인하기!</button>
    </>
  );
}

export default Login;