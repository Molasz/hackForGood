import { LocationOnOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { eventsData } from "../static/data";
import Header from "../components/Header";

function EventDetail() {
  let { id } = useParams();
  const data = eventsData[id];

  return (
    <>
      <Header />
      <div
        style={{
          background: "#1E3D6D",
          height: "100vh",
        }}
      >
        <div className="flex justify-around items-center p-12">
          <img
            src={data.image}
            alt="Event cover"
            className="hidden object-contain aspect-video rounded-lg md:block"
            style={{ width: "50%", borderRadius: "20%" }}
          />
          <div className="ml-8 h-full text-white flex flex-col justify-between">
            <Typography component="div" variant="h5" className="font-bold">
              {data.title}
            </Typography>
            <div className="mb-4 flex">
              <LocationOnOutlined />
              <Typography component="div" variant="h7" className="font-bold">
                {data.ubication}
              </Typography>
            </div>
            <Typography component="div" variant="h7">
              {data.description}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
