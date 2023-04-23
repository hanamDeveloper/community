import styled from "styled-components";

type ContentsPropsType = {
  contents: string;
};

const Contents = ({ contents }: ContentsPropsType) => {
  return <ContentsContainer>{contents}dsds</ContentsContainer>;
};

export default Contents;

const ContentsContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 500px;
  overflow: scroll;
  background: white;
  border-radius: 15px;
  padding: 20px;
`;
