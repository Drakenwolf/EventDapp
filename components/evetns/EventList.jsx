import EventItem from "./EventItem";
import styled from "styled-components";

const List = styled.ul`
  width: 90%;
  max-width: 50rem;
  margin: 5rem auto;
`;
function EventList(props) {
  const { items } = props;

  return (
    <List>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </List>
  );
}

export default EventList;
