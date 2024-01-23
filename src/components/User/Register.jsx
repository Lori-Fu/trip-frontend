import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {
  checkUsername,
  checkPassword,
  checkPasswordConfirm,
} from "../../helper.js";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const navigate = useNavigate();

  const validateUsername = () => {
    try {
      setUsernameError("");
      checkUsername(username);
    } catch (error) {
      setUsernameError(error.message);
    }
  };

  const validatePassword = () => {
    try {
      setPasswordError("");
      checkPassword(password);
    } catch (error) {
      setPasswordError(error.message);
    }
    if (passwordConfirm != "") {
      try {
        setPasswordConfirmError("");
        checkPasswordConfirm(passwordConfirm, password);
      } catch (error) {
        setPasswordConfirmError(error.message);
      }
    }
  };

  const validateConfirmPassword = () => {
    try {
      setPasswordConfirmError("");
      checkPasswordConfirm(passwordConfirm, password);
    } catch (error) {
      setPasswordConfirmError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!usernameError) {
      validateUsername();
    }
    if (!passwordError) {
      validatePassword();
    }
    if (!passwordConfirmError) {
      validateConfirmPassword();
    }
    if (usernameError || passwordError || passwordConfirmError) {
      return;
    }
    const user = { username, password };
    const { data } = await axios
      .post("/api/user/register", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong. Please try agian later");
      });
    if (data.code != 0 || data.error) {
      if (data.error.username) {
        setUsernameError(data.error.username);
      }
      if (data.error.password) {
        setPasswordError(data.error.password);
      }
      return;
    } else {
      alert("Success");
      navigate("/login");
    }
  };

  const styles = {
    helper: {
      color: "red",
      fontSize: ".8em",
    },
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              helperText={usernameError}
              FormHelperTextProps={{ style: styles.helper }}
              onChange={(e) => {
                setUsername(e.target.value.trim());
              }}
              onBlur={(e) => {
                validateUsername();
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              helperText={passwordError}
              FormHelperTextProps={{ style: styles.helper }}
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
              onBlur={(e) => {
                validatePassword();
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="re-password"
              label="Confirm Password"
              type="password"
              id="re-password"
              autoComplete="re-password"
              helperText={passwordConfirmError}
              FormHelperTextProps={{ style: styles.helper }}
              onChange={(e) => {
                setPasswordConfirm(e.target.value.trim());
              }}
              onBlur={(e) => {
                validateConfirmPassword();
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
