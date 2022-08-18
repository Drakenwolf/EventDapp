import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventContent from "../../components/EventDetail/EventContent";
import EventLogistics from "../../components/EventDetail/EventLogistics";
import EventSummary from "../../components/EventDetail/EventSummary";
import LogisticsItem from "../../components/EventDetail/LogisticsItem";
import { Fragment } from "react";

function Event() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event founded</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default Event;
