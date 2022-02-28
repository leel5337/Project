import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'; // 시용할 아이콘 MdDone, MdDelete를 랜더링 한다


// TodoItemBlock 안에 들어갈 제거할 수 있는 버튼 스타일 임시 지정


// TodoItemBlock의 스타일 임시 지정
const TodoItemBlock = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  
`;

// 체크박스 스타일 임시 지정
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
// props(속성) 값에 done있다면 스타일을 css를 사용하여 변경해준다

// 체크박스 옆 텍스트 스타일 임시 지장
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text}) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            {/* checkCircle에 done값을 props로 설정해준다, done값이 있다면 MdDone을 랜더링 */}
            <Text done={done}>{text}</Text>

        </TodoItemBlock>
    );
}

export default TodoItem;