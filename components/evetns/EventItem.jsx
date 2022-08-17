import styled from "styled-components";
import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

const Item = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  & > * {
    flex: 1 4;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  width: 100%;
  margin: 1rem 1rem 2rem 1rem;
`;

const Summary = styled.div`
  margin-bottom: 3rem;
`;
const Title = styled.h2`
  margin: 0.5rem 0;
  color: black;
`;

const AlignedItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Address = styled(AlignedItem)`
  margin: 0.5rem 0;
  color: #666666;
  white-space: pre;
`;

const Time = styled(AlignedItem)`
  color: #666666;
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const StyledSpan = styled.span`
  vertical-align: middle;
  margin-right: 0.25rem;
`;

const Icon = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
`;

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <Item>
      <div>
        <Img src={"/" + image} alt="" />
      </div>
      <Content>
        <Summary>
          <Title>{title}</Title>
          <AlignedItem>
            <DateIcon />
            <Time as="time">{readableDate}</Time>
          </AlignedItem>
          <Address>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </Address>
        </Summary>
        <Actions>
          <Button link={exploreLink}>
            <Icon>
              <StyledSpan>Explore Event</StyledSpan>
              <ArrowRightIcon />
            </Icon>
          </Button>
        </Actions>
      </Content>
    </Item>
  );
}

export default EventItem;
