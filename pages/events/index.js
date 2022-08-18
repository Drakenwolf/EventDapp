import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/Events/EventList";
function AllEvents() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default AllEvents;
