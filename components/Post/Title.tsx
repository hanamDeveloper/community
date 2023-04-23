import styled from "styled-components";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <TitleContainer>
      <input value={title} />
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  input {
    width: 100%;
    height: 75px;
    padding-left: 15px;
    border-radius: 15px;
    outline: none;
    font-size: 2rem;
  }
  width: 100%;
`;

export default Title;
