import React, { useState } from "react";
import './App.css';

function App() {

    // state는 [1. 변수 대신 쓰는 데이터 저장공간] [2. useState()를 이용해 만들어야한다] [3. 문자, 숫자, array, object 다 저장가능하다]

    // let [a,b] = useState('남자코트 추천'); a에는 useState괄오안에 있는 값이 들어가며 b에는 데이터를 변경하는 함수가 들어가 있다
    let [글제목,글제목변경] = useState(['이정현 프로젝트', '김형민 프로젝트', '김민성 프로젝트'] );
    let [좋아요, 좋아요변경 ] = useState(0);

    /*
    function 글자변경() { // 글제목에 있는 0번째 데이터를 변경 => state의 복사본을 만들어 수정
        var newArray = [...글제목]; // 복사를 할 때 그냥 하면 안되고 deep coopy를 해야된다 (var newArray = 글제목; 은 복사가 아닌 값 공유이다)
        newArray[0] = '동휘 프로젝트';
        글제목변경( newArray);
    }
     */

    let [modal, modal변경] = useState(true); // useState의 기본값을 false로 지정
    let [누른제목, 누른제목변경] = useState(0);
    let [입력값, 입력값변경] = useState(''); // 기본값으로 우선 빈텍스트로 준다

    /* 반복문 예시
    var 어레이 = [2, 3, 4];
    var 뉴어레이 = 어레이.map(function (a) {
        return a * 2
    });
    */

  return (
    <div className="App">
      <div className="black-nav">
        <div>이정현의 Blog</div>
      </div>
        {/* <button onClick={ 글자변경 }>변경버튼</button> */}


        {/*<div className="list">*/}
        {/*    <h3>*/}
        {/*        { 글제목[0] }*/}
        {/*        <button onClick={ ()=> { 좋아요변경(좋아요 + 1) } }>👍</button> /!* 버튼을 클릭시 좋아요변경 함수에서 좋아요에 +1을 한다 *!/*/}
        {/*        {좋아요}*/}
        {/*    </h3>*/}
        {/*    <p> 2022년 3월 17일 발행</p>*/}
        {/*    <hr/>*/}
        {/*</div>*/}
        {/*<div className="list">*/}
        {/*    <h3 onClick={ ()=> { modal변경(true) } }> { 글제목[1] }</h3>*/}
        {/*    <p> 2022년 3월 18일 발행</p>*/}
        {/*    <hr/>*/}
        {/*</div>*/}
        {/*<div className="list">*/}
        {/*    <h3> { 글제목[2] }</h3>*/}
        {/*    <p> 2022년 3월 19일 발행</p>*/}
        {/*    <hr/>*/}
        {/*</div>*/}



        {/*
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
        */}


        {
            글제목.map(function(글, i){   // array(글제목) 안에 있던 하나하목의 데이터
                return (
                    <div className="list">
                        <h3 onClick={ ()=> { 누른제목변경(i) } }>
                            { 글 }
                            <button onClick={ ()=> { 좋아요변경(좋아요 + 1) } }>👍</button> {/* 버튼을 클릭시 좋아요변경 함수에서 좋아요에 +1을 한다 */}
                            {좋아요}
                        </h3>
                        <p> 2022년 3월 18일 발행</p>
                        <hr/>
                    </div>
                )
            })
        }


        <div className="publish">
            <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
            <button onClick={ ()=>{
                var arrayCopy = [...글제목]; // 등호로 직접 수정하지 않고 사본을 만들어서 수정
                arrayCopy.unshift(입력값); // unshift는 array 맨앞에 자료를 추가하는 문법이다 (입력값을 맨앞에 자료에 추가)
                // 글제목.unshift(입력값); 이 아닌 arrayCopy.unshift(입력값);
                글제목변경(arrayCopy);
            } }>저장</button>
        </div>

        <hr/>
        <hr/>


        <button onClick={ ()=>{누른제목변경(0)} }>버튼1</button>
        <button onClick={ ()=>{누른제목변경(1)} }>버튼2</button>
        <button onClick={ ()=>{누른제목변경(2)} }>버튼3</button>

        {
            modal === true
            ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> // props로 자식에게 state 전달하는 방법 [1. <자식컴포넌트 작명={state명}> ], [2. 자식컴포넌트에서 props 파라미터 입력 후 사용]
            : null
        } {/* modal이 true이면 Modal창을 보여주고 그렇지 않으면 null */}

    </div>
  );
}

function Modal(props){ // 부모 컴포넌트에서 전달받은 propps는 여기에 다 들어가있다
    return (
        <div className="modal">
            <h2>{ props.글제목[props.누른제목] }</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
