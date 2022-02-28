import React from 'react';
import { createGlobalStyle } from 'styled-components'; // styled-components에서 createGlobalStyle를 불러와서 style을 설정해준다
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

// GlobalStyle 이라는 컴포넌트를 생성해준다
const GlobalStyle = createGlobalStyle` 
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate> {/* TodoTemplate안에 TodoHead, TodoMain, TodoFooter를 랜더링해준정 */}
                <TodoHead />
                <TodoMain />
                <TodoFooter />
            </TodoTemplate>
        </>
    );
}

export default App;