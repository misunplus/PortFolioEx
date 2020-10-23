
import React from 'react' //jsx


const name = "React"
const tit = "리엑트를 이용한 페이지"
//1. 선언식 함수 정의 component 정의
// import App from './App'; 이코드가 있는 곳으로 리턴 
function App(){
  // 2.모든것은 리던 안에 작성 jsx 문법 사용
  // jsx 문법을 사용하기위해서 import
  return(
  <h1  style={{color : 'green'}} tit={tit}>안녕, {name}~</h1>
  )
}
// 인라인 방식으로 값을 줄때는 {}괄호가 2개 들어간다 

/*
Attempted import error: './App' does not contain a default export (imported as 'App').
내보낼곳을 지정해야한다 수출export
*/
export default App