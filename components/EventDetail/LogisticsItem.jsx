import styled from "styled-components";

const Item = styled.li`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #aefff8;
`;
const Span = styled.span`
  display: block;
`;

const IconContainer = styled(Span)`
  margin-right: 1rem;
  color: #18e0d0;
`;

function LogisticsItem(props) {
  const { icon: Icon } = props;

  const StyledIcon = styled(Icon)`
    width: 2rem;
    height: 2rem;
  `;

  return (
    <Item>
      <IconContainer>
        <StyledIcon />
      </IconContainer>
      <Span>{props.children}</Span>
    </Item>
  );
}

export default LogisticsItem;
