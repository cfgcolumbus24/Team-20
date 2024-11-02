import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  Autocomplete,
} from "@mui/material";
import "./user-profile.css";
import { TokenContext, apiURL } from "../App";
import { Navigate } from "react-router-dom";



export const Profile = () => {

  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@test.com");
  const [aboutMe, setAboutMe] = useState("Aspiring artist in music, underground rapper on the come up tryna make it out the mud.");
  const [lookingFor, setLookingFor] = useState("Established artists in the NYC area I can work with.");
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    // Fetch tags from your API and set them in the tags state
    // const fetchTags = async () => {
    //   const response = await fetch(`${apiURL}/api/info/artStyles`); // Adjust the URL as needed
    //   const data = await response.json();
    //   setTags(data);
    // };

    // fetchTags();

    setTags([
      "Painting",
      "Theater",
      "Performing Arts",
      "Photography",
      "Music",
      "Abstract Art",
      "Impressionism",
      "Literature",
      "Sculpture",
      "Cinematography",
      "Pottery",
      "Drawing",
      "Architecture",
      "Design"
    ]);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      aboutMe,
      lookingFor,
      profilePicture,
      selectedTags,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return token ? (
    <Container maxWidth="sm" sx={{ paddingBottom: 5, paddingTop: 5 }}>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 1,
          p: 3,
          mt: 4,
        }}
      >
        <Typography variant="h4" className="profile-title" gutterBottom>
          Alumni Profile
        </Typography>

        <input
          accept="image/*"
          style={{ display: "none" }}
          id="profile-picture-upload"
          type="file"
          onChange={handleImageChange}

        />

        <label htmlFor="profile-picture-upload">
          <Avatar
            src={"https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/3690ca61-6a9d-4c93-a2a5-83a5f2aa1648/2022-08-16-Trinet-0540-Martinez-Juan.jpg"}
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
              cursor: "pointer",
            }}
          />
        </label>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="About Me"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
          <TextField
            label="What You're Looking For"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
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
              />
            )}
            sx={{ marginTop: "20px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Save Profile
          </Button>
        </form>
      </Box>
    </Container>
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
};
