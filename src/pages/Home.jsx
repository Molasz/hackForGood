import { Box, Fab, Modal } from "@mui/material";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import { eventsData } from "../static/data";
import { AddOutlined } from "@mui/icons-material";
import React from "react";

function Home() {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center mx-8 gap-y-8 my-8 md:mx-32">
        {eventsData.map((data, i) => (
          <EventCard data={data} key={i} />
        ))}
      </div>
      <Fab
        color="primary"
        size="lg"
        aria-label="add"
        onClick={onOpen}
        style={{ position: "fixed", right: "32px", bottom: "32px" }}
      >
        <AddOutlined />
      </Fab>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          NEW EVENT FORM
        </Box>
      </Modal>
    </>
  );
}

export default Home;
