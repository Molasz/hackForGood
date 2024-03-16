import EventCard from "../components/EventCard";
import { eventsData } from "../static/data";

function Home() {
  return (
    <div className="flex flex-col items-center mx-8 gap-y-8 my-8 md:mx-32">
      {eventsData.map((data, i) => (
        <EventCard data={data} key={i} />
      ))}
    </div>
  );
}

export default Home;
