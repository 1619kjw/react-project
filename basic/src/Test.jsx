import Header from "./Header.jsx";
import './Test.css';
//컴포넌트 생성 Test(부모컴포넌트)
function Test(){
    return (
        <>
            <Header />
            <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}

//다른컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정
export default Test;

//자식 컴포넌트 Aside
function Aside(){
    return(
        <aside>
            <h1 style={{borderBottom:'2px solid #444'}}>오늘의 소식</h1>
            <a href="#">뉴스</a>
            <a href="#">연예</a>
            <a href="#">경제</a>
            <a href="#">시사</a>
            <a href="#">유머</a>
        </aside>
    )
}