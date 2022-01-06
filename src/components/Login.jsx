import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import SendToMobileRoundedIcon from "@mui/icons-material/SendToMobileRounded";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import MainLayout from "../layouts/MainLayout";
import OTPInput from "./OTPInput";

const StyledTextField = styled(TextField)`
  && {
    min-height: 75px;

    .MuiInputBase-input {
      padding: 16px;
      font-size: 22px;
    }
    .MuiOutlinedInput-root fieldset {
      border-radius: 8px;
      border: 2px solid #6610f2aa;
    }
    .MuiInputLabel-asterisk {
      display: none;
    }
    .Mui-focused fieldset {
      border: 2px solid #6610f2;
      opacity: 1;
    }
    label {
      background: #ffffff;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #6f42c1aa;
    }
    label.Mui-focused {
      color: #6f42c1;
    }
  }
`;

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [verificationState, setVerificationState] = useState(false);

  const history = useHistory();

  const handleNumberSubmit = (e) => {
    e.preventDefault();
    setVerificationState(true);
  };

  const handleOTPSubmit = () => {
    localStorage.setItem("token", "AUTHENTICATED");
    history.push("/");
  };

  return (
    <MainLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 64px)"
      >
        <Card sx={{ maxWidth: 500, width: "100%", borderRadius: 6 }} raised>
          {verificationState ? (
            <CardContent sx={{ p: 6 }}>
              <Typography
                variant="h2"
                color="primary"
                sx={{ fontWeight: 400 }}
                align="center"
              >
                VERIFICATION
              </Typography>
              <Box display="flex" justifyContent="center" my={4}>
                <AppRegistrationIcon sx={{ fontSize: 100 }} color="primary" />
              </Box>
              <Box display="flex" justifyContent="center">
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Verify OTP
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" mt={1} mb={3}>
                <Typography
                  variant="body1"
                  sx={{ color: "#8f9fa6" }}
                  align="center"
                >
                  Enter OTP code send to your number <br /> +91-{mobile}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-around" mt={4}>
                <OTPInput inputNumber={4} />
              </Box>
              <Box display="flex" justifyContent="center" my={4}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: 10, fontSize: 18 }}
                  onClick={handleOTPSubmit}
                >
                  Continue
                </Button>
              </Box>
            </CardContent>
          ) : (
            <CardContent sx={{ p: 6 }}>
              <Typography
                variant="h2"
                color="primary"
                sx={{ fontWeight: 400 }}
                align="center"
              >
                LOGIN
              </Typography>
              <Box display="flex" justifyContent="center" my={4}>
                <SendToMobileRoundedIcon
                  sx={{ fontSize: 100 }}
                  color="primary"
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Login with mobile number
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" mt={1} mb={3}>
                <Typography
                  variant="body1"
                  sx={{ color: "#8f9fa6" }}
                  align="center"
                >
                  Enter your number to send the OTP to verify
                </Typography>
              </Box>
              <form onSubmit={handleNumberSubmit}>
                <Box display="flex" justifyContent="center" mt={4}>
                  <StyledTextField
                    variant="outlined"
                    color="primary"
                    label="Mobile Number"
                    placeholder="+91 7000012345"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Box>
                <Box display="flex" justifyContent="center" my={4}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: 10, fontSize: 18 }}
                    disabled={mobile.length !== 10}
                  >
                    Continue
                  </Button>
                </Box>
              </form>
            </CardContent>
          )}
        </Card>
      </Box>
    </MainLayout>
  );
};

export default Login;
