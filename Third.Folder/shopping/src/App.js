import React, {useState} from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'; // 내가 사용하는 컴포넌트를 import해온다
import './App.css';
import Data from './data.js'; // data.js에 있는 정보를 Data라는 변수에 저장하여 아래 useState에 연결해준다
import Detail from "./Detail";
import axios from "axios";

import { Link, Route, Switch } from 'react-router-dom';

function App() {

    let [shoes, shoes변경] = useState(Data);
    let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">이현이민</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* Nav.Link 안에 limk태그를 작성하게 되면 콘소창에 warning이 뜨게됨으로 Link태그를 삭제해주고 as={Link}를 작성해주어 link태그를 집어넣은 것처처럼 해준다 */}
                        <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="#detail" as={Link} to="/detail">Detail</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Switch> {/* 중복을 허용하지 않고 첫번째 것을 보여준다 */}
            <Route exact path="/">
                <div className="jumbotron">
                    <h1>제목</h1>
                    <p>내용</p>
                    <p>
                        <Button variant="primary">Primary</Button>{' '}
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        {/*<div className="col-md-4"> /!* 영역안에서 3등분을 하게끔 *!/*/}
                        {/*    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>*/}
                        {/*    <h4>{ shoes[0].title }</h4>*/}
                        {/*    <p>{ shoes[0].content }</p>*/}
                        {/*    <p>{ shoes[0].price }</p>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-4">*/}
                        {/*    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>*/}
                        {/*    <h4>{ shoes[1].title }</h4>*/}
                        {/*    <p>{ shoes[1].content }</p>*/}
                        {/*    <p>{ shoes[1].price }</p>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-4">*/}
                        {/*    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>*/}
                        {/*    <h4>{ shoes[2].title }</h4>*/}
                        {/*    <p>{ shoes[2].content }</p>*/}
                        {/*    <p>{ shoes[2].price }</p>*/}
                        {/*</div>*/}
                        {/*<Card shoes={shoes} /> /!* <자식컴포넌트 보낼이름 ={전송할state} > ( // App함수안에 있는 shoes를 Card라는 밖에 있는 함수에서 사용할 때 ) *!/*/}
                        {
                            shoes.map((a,i)=>{ // a는 map이라는 반복문이 돌때마다 들어가는 shoes 데이터, i는 반복문이 돌때마다 들어가는 번호
                                return <Card shoes={shoes[i]} i={i} />
                            })
                        }
                    </div>
                    <button className="btn btn-primary" onClick={()=>{
                        axios.get('https://codingapple1.github.io/shop/data2.json') // axios.get(데이터 요청할 URL)
                            .then((result)=>{
                                console.log(result.data)
                                shoes변경( [...shoes, ...result.data] );
                            })
                            .catch()
                    }}>더보기</button>
                </div>
            </Route>

            <Route path="/detail/:id">
                <Detail shoes={shoes} 재고={재고}/> {/* props문법으로 보낼이름={state이름} */}

            </Route>

            <Route path="/:id"> {/* ( /:id 는 모든경로를 의미) */}
                <div>아무거나 보여준다</div>
            </Route>
        </Switch>
    </div>

  );
}

function Card(props) { // props안에 shoes가 들어가게된다
    return(
        <div className="col-md-4"> {/* 영역안에서 3등분을 하게끔 */}
            <img src= {'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'}
                 width="100%"/> {/* 부모가 가지고 있는 i라는 props를 사용하기 위해 전송해야한다 */}
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.content } & { props.shoes.price } </p>
        </div>
    )
}


export default App;
