import React from 'react';
import logo from './logo.svg';
import './App.css';
import NoProps from './components/NoProps';
import TypeClassComp from './components/TypeClassComp';
import TypeFuncComp from './components/TypeFuncComp';
import TypeArrowFuncComp from './components/TypeArrowFuncComp';
import FetchComp from './components/FetchComp';

function App() {
  return (
    <div className="App">
      {/**<NoProps />*/}
      {/** 클래스형에서 props을 interface로 지정하면 호출할때도
       * 자동완성으로 쓸 수 있다 */}
      <TypeClassComp startNumber={20} name='홍길동' check/>
      <hr />
      <TypeFuncComp startNumber={20} />
      <TypeArrowFuncComp startNumber={5}/>
      
    </div>
  );
}

export default App;
