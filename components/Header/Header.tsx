import styled from "styled-components";
import Login from "../Login/Login";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      헤더 입니다.
      <Link href="community">커뮤니티 게시판</Link>
      <Link href="report">불편사항 신고 게시판</Link>
      <div className="right-box">
        <Login />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  max-width: 1880px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  height: 75px;
  background: red;

  .right-box {
    display: flex;
    align-items: center;
    min-width: 150px;
    height: 100%;
  }
`;
