import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import toast from 'react-hot-toast';

const Register = () => {
  //navigate
  const navigate = useNavigate();

  //state
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handle form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const {data} = await axios.post("/api/users/register", {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
      });
      if(data.success){
        toast.success('User Registered Successfully');
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
          >
            Register
          </Typography>
          <TextField
            placeholder="Enter Username"
            value={inputs.username}
            name="username"
            margin="normal"
            type={"text"}
            required
            onChange={handleChange}
          />
          <TextField
            placeholder="Enter Email"
            value={inputs.email}
            name="email"
            margin="normal"
            type={"email"}
            required
            onChange={handleChange}
          />
          <TextField
            placeholder="Enter Password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            required
            onChange={handleChange}
          />
          <Button
            type="submit"
            sx={{
              borderRadius: 3,
              marginTop: 3,
              bgcolor: "#f91141",
              color: "black",
            }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            sx={{ borderRadius: 3, marginTop: 3, color: "black" }}
            onClick={() => navigate("/login")}
          >
            Returning User? Login here
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
