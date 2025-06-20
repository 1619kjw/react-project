//css 연결
import './Header.css';
//컴포넌트 생성
function Header(){
    const num1 = 5;
    const num2 = 3;
    const greeting = '안녕하세요';
    const program = '리액트';
    const isLogin = false;
    return (
        <header>
            <h1 style={{backgroundColor:'yellow', color:'red', padding:'20px 0'}}>logo</h1>
            <p style={{backgroundColor:'skyblue', fontWeight:'600', textAlign:'center', padding:'10px', borderRadius:'30px'}}>숫자 {num1}에서 {num2}을 뺀 결과 {num1-num2}</p>
            <p style={{}}>{greeting}, {program} 출력결과 {greeting+program}</p>
            {/* const isLogin = false; 일때 p태그에 '로그인 필요' 출력하기, 반대로 true면 p태그에 '로그인 성공' 출력하기 */}
            {/* 힌트: 삼항조건연산자, 변수 */}
            <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
        </header>
    )
}
//내보내기
export default Header;