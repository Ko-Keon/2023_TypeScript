import React from 'react';
import './App.css';
import NoProps from './components/NoProps';
import TypeClassComp from './components/TypeClassComp';
import TypeFuncComp from './components/TypeFuncComp';
import TypeArrowFuncComp from './components/TypeArrowFuncComp';

function App() {
  return (
    <div className="App">
      <NoProps />
      {/* 클래스형에서 props를 interface로 지정하면 호출할때도 자동완성으로 쓸 수 있다. */}
      <TypeClassComp startNumber={3} name='홍길동' />
      <TypeFuncComp startNumber={0}/>
      <TypeArrowFuncComp startNumber={5}/>
    </div>
  );
}

export default App;
