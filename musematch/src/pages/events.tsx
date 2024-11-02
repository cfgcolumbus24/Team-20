import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Modal,
  Grid,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const EventCard = ({ event, onShowDetails, onRSVP }) => (
  <Card sx={{ width: 250, margin: "0 10px" }}>
    <CardContent>
      <Typography variant="h6" noWrap={true}>
        {event.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" noWrap={true}>
        {event.date}
      </Typography>
      <Typography variant="body2" color="textSecondary" noWrap={true}>
        {event.location}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={onShowDetails}>
        More Details
      </Button>
      <Button size="small" variant="contained" onClick={onRSVP}>
        RSVP
      </Button>
    </CardActions>
  </Card>
);

const EventDetailsModal = ({ event, open, onClose }) => {
  // Ensure that we return null if the event is not defined
  if (!event) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 500,
          width: "90%",
          p: 4,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom noWrap={true}>
          {event.name}
        </Typography>
        <Typography noWrap={true}>Date: {event.date}</Typography>
        <Typography noWrap={true}>Location: {event.location}</Typography>
        <Typography noWrap={true}>Description: {event.description}</Typography>
      </Box>
    </Modal>
  );
};

const NewEventModal = ({ open, onClose, onCreate }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(dayjs());
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Fetch tags from the backend when the component mounts
  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/api/tags");
      const data = await response.json();
      setTags(data);
    };

    fetchTags();
  }, []);

  const handleSubmit = () => {
    const newEvent = {
      name: eventName,
      date: eventDate.format("MM-DD-YYYY"),
      location: eventLocation,
      description: eventDescription,
      tags: selectedTags,
    };
    onCreate(newEvent); // Notify parent without adding to lists
    alert("Request submitted"); // Alert message for submission
    onClose();
    // Reset fields after closing
    setEventName("");
    setEventLocation("");
    setEventDescription("");
  };

  const isSubmitDisabled = !eventName || !eventLocation || !eventDescription;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 500,
          minWidth: 250,
          width: "90%",
          p: 4,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom>
          Create New Event
        </Typography>
        <TextField
          label="Event Name"
          fullWidth
          margin="normal"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <TextField
          label="Event Date"
          type="date"
          fullWidth
          margin="normal"
          value={eventDate.format("YYYY-MM-DD")}
          onChange={(e) => setEventDate(dayjs(e.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Location"
          fullWidth
          margin="normal"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <Autocomplete
          multiple
          options={tags}
          onChange={(_event, newValue) => {
            setSelectedTags(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select Tags"
              placeholder="Tags"
              margin="normal"
            />
          )}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitDisabled} // Disable button if fields are empty
          sx={{ marginTop: "20px" }}
        >
          Request Event
        </Button>
      </Box>
    </Modal>
  );
};

const MiniCalendar = ({ selectedDate, onDateChange }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      value={selectedDate}
      onChange={onDateChange}
      defaultValue={dayjs("2022-04-17")}
    />
  </LocalizationProvider>
);

export const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [events, setEvents] = useState([
    {
      name: "TWEED TheaterWorks",
      date: "09-01-2024",
      location:
        "6&B Garden, East Village, New York, 10009 (East 6th Street at Avenue B)",
      description:
        "TWEED TheaterWorks presents Garden Variety, a free performance series at historic community space 6&B Garden in the East Village. This summer’s series will include music and performance by artists including Ms. Zilbert & Co., Julian Fleisher, Rebecca Havemayer, Angela DeCarlo, Lacy Rose and her Starling Quartet, and Dane Terry. Join us on July 23, August 27, and September 3, 10, & 17 (rain date each following Thursday).",
    },
    {
      name: "Party as Participation Hosted by Elisabeth Smolarz",
      date: "06-22-2024",
      location: "The Arts Center at Governors Island, Cafe",
      description:
        "Accessibility: The Arts Center Cafe and all ferries to Governors Island are wheelchair accessible. Further accessibility and health & safety information can be found here. Celebrate LMCC’s 50th anniversary as Manhattan’s Arts Council and our legacy of fostering vibrant creative communities! Party as Participation is the final installment of Party as Performance, a series of festivities hosted by an LMCC alumni artist who specializes in the art of bringing people together. Elisabeth Smolarz (Arts Center Residency ’12) will present ice cream flavors inspired by her experiences during her 2012 artist residency on Governors Island. These flavors will celebrate the friendships and artist communities she formed during that time, as well as the distinctive features of the island itself, such as the weeping willow tree, the lavender fields, and the beloved Governors Island sheep: Flour, Sam, Evening, Chad, and Philip Aries. The tasting event will offer a culinary journey blending elements of childhood nostalgia, art, and nature. Allergy Note: Ice cream will contain dairy products.",
    },
    {
      name: "Tremor – Samita Sinha",
      date: selectedDate.format("MM-DD-YYYY"),
      location: "Federal Hall",
      description:
        "This special iteration of Samita Sinha’s Tremor is performed in duet with Cecilia Vicuña. Presented in the resonant space of Federal Hall, Sinha and Vicuña infuse their vibrations and lineages into the dense history and monumentality of the site, opening other ways of sensing, knowing, being, and being together. Their vocalizations are spatialized live by sound designer Daniel Neumann, within a visual design by architect Sunil Bald. Tremor is an emergent and iterative performance and practice. Tremor was co-commissioned by Western Front and Danspace Project, and has been presented at MCA Chicago. Collaborators in previous iterations include Ash Fure, Okwui Okpokwasili, Sunder Ganglani, Darrell Jones, James Proudfoot, and Sarai Frazier. Their contributions have shaped what Tremor is and how it now grows. Performers: Samita Sinha and Cecilia Vicuña Visual Design: Sunil Bald Sound Design: Daniel Neumann Samita Sinha is part of LMCC’s Extended Life Dance Development Program supported, in part, by The Andrew W. Mellon Foundation.",
    },
  ]);

  const [rsvpEvents, setRsvpEvents] = useState([]);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowDetails = (event) => {
    if (event) {
      setSelectedEvent(event);
      setShowDetails(true);
    }
  };

  const handleCreateEvent = (newEvent) => {
    // You can handle the submission logic here
    // For example, send it to a server, etc.
    console.log("New event requested:", newEvent);
  };

  const handleRSVP = (event) => {
    if (!rsvpEvents.some((rsvpEvent) => rsvpEvent.name === event.name)) {
      setRsvpEvents((prev) => [
        ...prev,
        { name: event.name, date: event.date },
      ]);
    }
  };

  return (
    <Container maxWidth={false} sx={{ px: 4, py: 2 }}>
      <Grid container spacing={2}>
        {/* Left Section with Search and Event List */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Search..."
              variant="outlined"
              size="small"
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowNewEvent(true)}
            >
              Add New Event
            </Button>

            <Typography variant="h6" sx={{ mt: 4 }}>
              Recommended Events
            </Typography>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                gap: 2,
                pb: 2,
                maxWidth: "100%",
                whiteSpace: "nowrap",
              }}
            >
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={index}
                  event={event}
                  onShowDetails={() => handleShowDetails(event)}
                  onRSVP={() => handleRSVP(event)}
                />
              ))}
            </Box>

            <Typography variant="h6" sx={{ mt: 4 }}>
              Events on {selectedDate.format("MM-DD-YYYY")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                overflowY: "auto",
                maxHeight: 400, // adjust as needed
                gap: 2,
              }}
            >
              {events
                .filter(
                  (event) => event.date === selectedDate.format("MM-DD-YYYY")
                )
                .map((event, index) => (
                  <EventCard
                    key={index}
                    event={event}
                    onShowDetails={() => handleShowDetails(event)}
                    onRSVP={() => handleRSVP(event)}
                  />
                ))}
            </Box>
          </Box>
        </Grid>

        {/* Right Section with Mini Calendar */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Calendar
          </Typography>
          <MiniCalendar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />

          <Typography variant="h6" sx={{ mt: 4 }}>
            RSVP'd Events
          </Typography>
          <Box>
            {rsvpEvents.length > 0 ? (
              rsvpEvents.map((event, index) => (
                <Typography key={index}>
                  {event.name} - {event.date}
                </Typography>
              ))
            ) : (
              <Typography>No RSVP'd events</Typography>
            )}
          </Box>
        </Grid>
      </Grid>

      {/* Event Details Modal */}
      <EventDetailsModal
        event={selectedEvent}
        open={showDetails}
        onClose={() => setShowDetails(false)}
      />

      {/* New Event Modal */}
      <NewEventModal
        open={showNewEvent}
        onClose={() => setShowNewEvent(false)}
        onCreate={handleCreateEvent}
      />
    </Container>
  );
};
