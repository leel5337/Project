import React from 'react';
import styled from 'styled-components';

const TodoFooterBlock = styled.div`
  flex: 2;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  .company {
    font-size: 18px;
    margin: 0;
  }
  .address {
    margin-top: 10px
    font-size: 12px;
  }
`;

function TodoFooter() {
    return(
        <TodoFooterBlock>
            <h1 className="company">
                @2022 Nobrain company
            </h1>
            <div className="address">
                <a href="https://github.com/gudals-kim/Nobrain-study">https://github.com/</a>
            </div>
        </TodoFooterBlock>
    );
}

export default TodoFooter;