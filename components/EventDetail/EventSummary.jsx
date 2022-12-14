import styled from "styled-components";

const Summary = styled.section`
  width: 100%;
  height: 30vh;
  background-image: linear-gradient(to bottom left, #008b79, #1180a1);
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 3rem;
  font-size: 2rem;
  text-align: center;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  color: white;
`;

function EventSummary(props) {
  const { title } = props;

  return (
    <Summary>
      <Title>{title}</Title>
    </Summary>
  );
}

export default EventSummary;
