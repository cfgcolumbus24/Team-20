import {
  Box,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/LMCC-50Logo-Blue-Smaller.png";
import { useState } from "react";

const LoginPage = () => {
  const [signUp, setSignUp] = useState(false);
  const handleSubmit = () => console.log("login");
  return (
    <Container maxWidth="xs" sx={{ padding: 5 }}>
      <Paper elevation={10} sx={{ marginTop: 8, marginBottom: 8, padding: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} style={{ alignSelf: "center" }} />
        </div>

        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: "center", marginTop: 2 }}
        >
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter email"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
          />

          {signUp && (
            <>
              <TextField
                placeholder="First Name"
                fullWidth
                required
                sx={{ mb: 2 }}
              />

              <TextField placeholder="Last Name" fullWidth required />
            </>
          )}

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            {signUp ? "Sign up" : "Log in"}
          </Button>
        </Box>
        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid item>
            {!signUp && (
              <>
                <Link component={RouterLink}>Forgot password?</Link>
              </>
            )}
          </Grid>
          <Grid item>
            <Link component={RouterLink} onClick={() => setSignUp(!signUp)}>
              {signUp ? "Log in" : "Sign up"}
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
