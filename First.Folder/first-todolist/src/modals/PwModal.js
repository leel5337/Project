import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from "styled-components";
import ItemModal from "./ItemModal";
import CreateModal from "./CreateModal";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const PwModal = ({ show, onHide }) => {
    return (
        <Modal
            show={show} // 보여지게끔 하는 것 show를 "show"로 설정
            onHide={onHide} // 클릭했을때 보이지 않게 숨기게 설정 onhide를 "onhide"로
            size="lg" // 사이즈
            aria-labelledby="contained-modal-title-vcenter" // modal의 형태를 contained-modal-title-vcenter로 지정
            centered // 위치를 중앙으로
        >
            <TodoListBlock>
                {/* 여기서 done은 해야할일로 지정 true는 완료했다 false는 완료하지 않앗다는 의미 */}
                <ItemModal text="첫번째 오늘의 할일" done={true} />
                <ItemModal text="두번째 오늘의 할일" done={true} />
                <ItemModal text="세번째 오늘의 할일" done={false} />
                <ItemModal text="네번째 오늘의 할일" done={false} />
                <CreateModal />
            </TodoListBlock>

        </Modal>
    );
}
export default PwModal;