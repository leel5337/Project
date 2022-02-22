import React, {useState} from 'react';
import styled from 'styled-components';
import PwModal from "../modals/PwModal";

const TodoMainBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 550px;
  overflow-y: auto;
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
  }
`;



const TodoMain= () => {
    const [ModalOn, setModalOn] = useState(false);
    return (
        <><PwModal show={ModalOn} onHide={() =>setModalOn(false)}/>
        <TodoMainBlock>
            <h1 className="title">To do List</h1>
            <div className="container">
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