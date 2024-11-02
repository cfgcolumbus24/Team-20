import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { ExpandMore } from "@mui/icons-material";
import {
  Title,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Typography,
  InputAdornment,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const userCard = () => {
  <div></div>;
};
const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search"
      variant="outlined"
      placeholder="Search..."
      size="small"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "#007bff" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </form>
);

const Filters = () => {
  const [mentorship, setMentorship] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [artTypes, setArtTypes] = useState({
    painting: false,
    sculpture: false,
    digitalArt: false,
    photography: false,
  });

  const handleArtTypeChange = (event) => {
    setArtTypes({
      ...artTypes,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        minHeight: "500px",
        maxHeight: "500px",
        gap: "16px",
        width: "250px",
      }}
    >
      <Typography variant="h6">Filters</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Mentorship</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={mentorship}
              onChange={(e) => setMentorship(e.target.value)}
            >
              <FormControlLabel
                value="Mentor"
                control={<Radio />}
                label="Mentor"
              />
              <FormControlLabel
                value="Mentee"
                control={<Radio />}
                label="Mentee"
              />
              <FormControlLabel value="Both" control={<Radio />} label="Both" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Years of Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
            >
              <FormControlLabel
                value="0-2 Years"
                control={<Radio />}
                label="0-2 Years"
              />
              <FormControlLabel
                value="3-5 Years"
                control={<Radio />}
                label="3-5 Years"
              />
              <FormControlLabel
                value="6-10 Years"
                control={<Radio />}
                label="6-10 Years"
              />
              <FormControlLabel
                value="10-20 Years"
                control={<Radio />}
                label="10-20 Years"
              />
              <FormControlLabel
                value="20+ Years"
                control={<Radio />}
                label="20+ Years"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Art Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormControlLabel
              control={
                <Checkbox
                  checked={artTypes.painting}
                  onChange={handleArtTypeChange}
                  name="painting"
                />
              }
              label="Painting"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={artTypes.sculpture}
                  onChange={handleArtTypeChange}
                  name="sculpture"
                />
              }
              label="Sculpture"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={artTypes.digitalArt}
                  onChange={handleArtTypeChange}
                  name="digitalArt"
                />
              }
              label="Digital Art"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={artTypes.photography}
                  onChange={handleArtTypeChange}
                  name="photography"
                />
              }
              label="Photography"
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export const CardContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="overflow-auto" style={{ maxHeight: 600 }}>
        <Container maxWidth="lg" style={{marginBottom: 20}}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="/example alumni.jpeg"
                title="Manuel Acevedo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Manuel Acevedo
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Manuel Acevedo is a musician and artist from New York City. He
                  is a graduate of the New School for Jazz and Contemporary
                  Music.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Connect</Button>
                <Button size="small">Message</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="/example alumni.jpeg"
                title="Manuel Acevedo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Manuel Acevedo
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Manuel Acevedo is a musician and artist from New York City. He
                  is a graduate of the New School for Jazz and Contemporary
                  Music.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Connect</Button>
                <Button size="small">Message</Button>
              </CardActions>
            </Card>
          </div>
        </Container>
        <Container maxWidth="lg">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="/example alumni.jpeg"
                title="Manuel Acevedo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Manuel Acevedo
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Manuel Acevedo is a musician and artist from New York City. He
                  is a graduate of the New School for Jazz and Contemporary
                  Music.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Connect</Button>
                <Button size="small">Message</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="/example alumni.jpeg"
                title="Manuel Acevedo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Manuel Acevedo
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Manuel Acevedo is a musician and artist from New York City. He
                  is a graduate of the New School for Jazz and Contemporary
                  Music.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Connect</Button>
                <Button size="small">Message</Button>
              </CardActions>
            </Card>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export const Connections = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {/* Left side with SearchBar and Cards */}
        <div style={{ flex: 1 }}>
          {/* Align SearchBar with Cards */}
          <div style={{ marginBottom: "30px" }}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <CardContainer />
        </div>

        {/* Right side with Filters */}
        <div style={{ width: "250px" }}>
          <Filters />
        </div>
      </div>
    </div>
  );
};
