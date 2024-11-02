import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import "./user-profile.css";

export const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | ArrayBuffer | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to an API
    console.log({ name, email, aboutMe, lookingFor, profilePicture });
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

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 1,
          p: 3, // Padding for the entire box
          mt: 4 // Margin top for spacing
        }}
      >
        <Typography variant="h4" className="profile-title" gutterBottom>
          Alumni Profile
        </Typography>
        
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="profile-picture-upload"
          type="file"
          onChange={handleImageChange}
        />
        
        <label htmlFor="profile-picture-upload">
          <Avatar
            src={profilePicture as string}
            sx={{ width: 100, height: 100, margin: '0 auto', cursor: 'pointer' }}
          />
        </label>

        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
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
  );
};