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
import { Navigate, Link as RouterLink } from "react-router-dom";
import logo from "../assets/LMCC-50Logo-Blue-Smaller.png";
import { useContext, useState } from "react";
import { TokenContext, apiURL } from "../App";

const LoginPage = () => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { token, setToken } = useContext(TokenContext);

  const handleSubmit = async () => {
    // let response = await fetch(
    //   signUp ? `${apiURL}/auth/signup` : `${apiURL}/auth/login`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(
    //       signUp
    //         ? {
    //             email: email,
    //             password: password,
    //             name: name,
    //           }
    //         : { email: email, password: password }
    //     ),
    //   }
    // );

    // const data = await response.json();
    // console.log(data);
    setToken("hi");
  };

  return token == null ? (
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
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
          />

          {signUp && (
            <>
              <TextField
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            </>
          )}

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
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
  ) : (
    <Navigate to={"/user-profile"} replace={true} />
  );
};

export default LoginPage;
