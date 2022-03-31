import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";
import './Detail.scss';

let 박스 = styled.div`
    padding-top: 30px;
`;

let 제목 = styled.div`
    font-size: 25px;
    color: red;
`;

function Detail(props){

    let [alert, alert변경] = useState(true);

    // 반응하게끔 하는 useEffect를 사용하며,setTimeout을 이용하여 2초 후에 alert를 false로 변경해라
    useEffect(()=>{
        let 타이머 = setTimeout(() => {alert변경(false) }, 2000 );
        return ()=>{ clearTimeout(타이머) } // setTimeout의 주의점으로 타이머 시간 종료 후 아예 해제를 시켜주기위해 clearTimeout함수를 적성하여 아예 삭제시켜준다
    }, [alert]) // 대괄호안에는 useEffect가 실행될 조건을 입력한다 alert 상태가 변경될때만 실행이 된다


   let { id } = useParams();
    let history = useHistory(); // useHistory라는 훅으로 방문기록을 저장해주는 history를 생성

    return (
        <div className="container">
            <박스>
                <제목>Detail</제목>
            </박스>

            {
                alert === true
                ? (<div className="alert">
                        <p>재고가 얼마 남지 않았습니다</p>
                    </div>)
                : null
            }


            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>

                    <Info 재고={props.재고} />

                    <button className="btn btn-danger" onClick={()=>{props.재고변경([9,11,12])}}>주문하기</button>
                    <button className="btn btn-danger" onClick={()=>{ history.goBack() }}>뒤로가기</button> {/* goBack함수를 사용하여 뒤로가게끔 한다 */}
                    {/*<button className="btn btn-danger" onClick={()=>{ history.push('/') }}>가고싶은데로</button> /!*  *!/*/}
                </div>
            </div>
        </div>
    )
};

function Info(props) {
    return(
        <p>
            재고 : {props.재고[0]}
        </p>
    )
}


export default Detail