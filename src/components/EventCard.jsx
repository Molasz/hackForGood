import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import { ShareOutlined } from "@mui/icons-material";

function EventCard({ data }) {
  let navigate = useNavigate();

  const redirectEvent = (id) => navigate(`/event/${id}`);

  return (
    <div
      className="flex flex-col justify-around items-center p-12 md:flex-row"
      style={{
        background: "#1E3D6D",
        borderRadius: "32px",
        maxWidth: "750px",
      }}
    >
      <img
        src={data.image}
        alt="Event cover"
        className="object-contain aspect-video rounded-lg"
        style={{ width: "400px", borderRadius: "20%" }}
      />
      <div className="ml-8 h-full text-white flex flex-col">
        <div className="mb-8">
          <Typography component="div" variant="h5" className="font-bold">
            {data.title}
          </Typography>
          <div className="mb-4 flex">
            <LocationOnOutlined className="cursor-pointer" />
            <ShareOutlined className="cursor-pointer" />
            {/*
            <Typography component="div" variant="h7" className="font-bold">
              {data.ubication}
            </Typography>
            */}
          </div>
          <Typography
            component="div"
            variant="h7"
            className="hidden overflow-hidden hover:overflow-scroll  md:block"
          >
            {data.description}
          </Typography>
        </div>
        <Button
          variant="contained"
          size="large"
          className="flex-end font-bold"
          onClick={() => redirectEvent(data.id)}
        >
          Join the event
        </Button>
      </div>
    </div>
  );
}

export default EventCard;
