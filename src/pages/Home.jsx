import { Box, Button, Fab, Modal, TextField, Typography } from "@mui/material";
import EventCard from "../components/EventCard";
import Header from "../components/Header";
import { eventsData } from "../static/data";
import { AddOutlined } from "@mui/icons-material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  backgroundColor: "white",
  borderRadius: "16px",
  boxShadow: 24,
};

function Home() {
  const [newEvent, setNewEvent] = React.useState({});
  const [events, setEvents] = React.useState(eventsData);
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onCreate = () => {
    console.log(newEvent);
    setEvents([...events, newEvent]);
    setOpen(0);
  };

  const onInput = (target, type) => {
    setNewEvent({ ...newEvent, [type]: target.value});
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center mx-8 gap-y-8 my-8 md:mx-32">
        {events.map((data, i) => (
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
        <Box className="flex flex-col gap-y-8  p-8" style={style}>
          <Typography component="div" variant="h5" className="font-bold">
            Create new event
          </Typography>
          <TextField
            onChange={({ target }) => onInput(target, 'title')}
            required
            label="Event title"
            variant="outlined"
          />
          <TextField
            onChange={({ target }) => onInput(target, 'ubication')}
            required
            label="Ubication"
            variant="outlined"
          />
          <TextField
            onChange={({ target }) => onInput(target, 'image')}
            required
            label="Image URL"
            variant="outlined"
          />
          <TextField
            onChange={({ target }) => onInput(target, 'description')}
            multiline
            required
            rows="4"
            label="Description"
            variant="outlined"
          />
          <Button
            variant="contained"
            size="large"
            className="flex-end font-bold"
            onClick={onCreate}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Home;
