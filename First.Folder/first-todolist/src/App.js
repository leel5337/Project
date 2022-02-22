import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoMain />
                <TodoFooter />
            </TodoTemplate>
        </>
    );
}

export default App;