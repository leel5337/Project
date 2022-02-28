import React, { useState } from 'react';
import styled from 'styled-components';


const InsertForm = styled.form`
  background: #f8f9fa;
  margin-top: 200px;
  padding-left: 32px;
  padding-top: 20px;
  padding-right: 32px;
  padding-bottom: 30px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {

    return (
        <InsertForm>
            <Input autoFocus placeholder="할 일을 입력하세요!" />
            {/* autoFocus : 창을 열었을 때 초점이 바로 이 input창에 맞춰진다 */}
        </InsertForm>
    );
}

export default TodoCreate;