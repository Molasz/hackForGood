import React from "react";
import { LocationOnOutlined, PersonAdd } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
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
        <div className="flex flex-col justify-start items-center p-12  md:flex-row">
          <img
            src={data.image}
            alt="Event cover"
            className="object-contain aspect-video rounded-lg"
            style={{ width: "400px", borderRadius: "32px" }}
          />
          <div className="ml-8 h-full text-white flex flex-col">
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
        <div className="px-12 text-white">
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#1976D2", borderRadius: '16px' }}>
            <ListItem>
              <Typography component="div" variant="h5">
                Users in the event
              </Typography>
            </ListItem>
            <ListItem
              className="flex align-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText primary="Alexia Gudrun" />
              </div>
              <PersonAdd />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              className="flex align-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="" />
                </ListItemAvatar>
                <ListItemText primary="Travis Howard" />
              </div>
              <PersonAdd />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              className="flex align-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex">
                <ListItemAvatar>
                  <Avatar alt="Gertrud Javiera" src="" />
                </ListItemAvatar>
                <ListItemText primary="Gertrud Javiera" />
              </div>
              <PersonAdd />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              className="flex align-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex">
                <ListItemAvatar>
                  <Avatar alt="Petronila Amelia" src="" />
                </ListItemAvatar>
                <ListItemText primary="Petronila Amelia" />
              </div>
              <PersonAdd />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              className="flex align-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex">
                <ListItemAvatar>
                  <Avatar alt="Sybille Fritzi" src="" />
                </ListItemAvatar>
                <ListItemText primary="Sybille Fritzi" />
              </div>
              <PersonAdd />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
}

export default EventDetail;
