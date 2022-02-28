import React, {useState} from 'react';
import styled from 'styled-components';
import PwModal from "../modals/PwModal"; // main부분에서 PwModal를 사용할수 있게끔 불러와준다

const TodoMainBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 550px;
  overflow-y: auto; /* 항목이 길어지면 스크롤바 설  */
  border-bottom: 1px solid #e9ecef;
  
  .title {
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item1, .item2 {
    height: 70px;
    margin: 40px 50px;
    padding: 15px 32px;
    background-color: rgb(145, 143, 143);
    color: white;
    font-size: 16px;
    border-radius: 20px;
    &:hover {
        background: #343a40;
    }
  }
`;



const TodoMain= () => {
    const [ModalOn, setModalOn] = useState(false); // 임의의값인 ModalOn,setModalOn을 지정히여 이것들이 동적 상태로 관리할 수 있게끔 useState함수를 사용한다
            // 기본적으로 PwModal창은 꺼져있기 때문에 기본값을 false로 한다


    return (
        <><PwModal show={ModalOn} onHide={() =>setModalOn(false)}/>
            {/* 굳이 PwModal을 TodoMainBlock안에 넣어 작성을 하지 않아도 된다  */}
            {/* PwModal이 보여지고 사라지게끔 할 수 있는 show,onHide를 넣어준다 */}
            {/* show에는 ModalOn을, onHide에는 setModalOn을 기본값으로 false를 작성한다 */}

        <TodoMainBlock>
            <h1 className="title">To do List</h1>

            {/* container 영역으로 나누어 버튼의 위치를 설정해준다 */}
            <div className="container">
                {/* onClick을 했을 때 onHide의 setModalOn값을 false가 아닌 true값으로 설정한다 */}
                <button className="item1" onClick={() => setModalOn(true)}>김민성</button>
                <button className="item1" onClick={() => setModalOn(true)}>김형민</button>
            </div>
            <div className="container">
                <button className="item2" onClick={() => setModalOn(true)}>박광현</button>
                <button className="item2" onClick={() => setModalOn(true)}>이정현</button>
            </div>
        </TodoMainBlock>
            </>
    );
}

export default TodoMain;