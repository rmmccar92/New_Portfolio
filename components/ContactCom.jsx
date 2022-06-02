import React from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Container,
  Link,
  List,
  ListItem,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import style from "../styles/Popout.module.css";
import Material from "./Material";
import { Canvas } from "@react-three/fiber";
import Popout from "./Popout";

export default function ContactCom() {
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = async ({ name, email, message }) => {
    if (name !== "" && email !== "" && message !== "") {
      const serviceId = "service_3oukn1q";
      const templateId = "template_5jwiz6m";
      const userId = "user_7wTqyhOq9QPQ2coZfDyp9";
      const templateParams = {
        name,
        email,
        message,
      };
      // console.log(templateParams);

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      // reset();
    } else {
      return;
    }
  };
  return (
    // <Box
    //   className={style.popOut}
    //   sx={{
    //     position: "absolute",
    //     width: { xs: "95vw", md: "60vw" },
    //     left: { sm: "3%", md: "28%" },
    //   }}
    // >
    <Popout>
      <Canvas className={style.popOutCanvas}>
        <Material />
      </Canvas>
      <div className={style.gridText}>
        <Container
          sx={{
            backgroundColor: "rgb(35, 35, 35)",
            maxWidth: { xs: "75%", sm: "90%", md: "85%" },
            height: { sm: "60vh", md: "65vh", lg: "80vh" },
            minHeight: { xs: "30em", md: "36em" },
            borderRadius: "10px",
            boxShadow: "2px -1px 10px #00cd94",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            mt: { xs: "0.2em", sm: "0.5em", md: "1.25em" },
          }}
        >
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className={style.contactForm}
          >
            <Typography component="h2" variant="h2" textAlign={"center"}>
              Contact
            </Typography>
            <List>
              <ListItem>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      {...register("name")}
                      id="name"
                      label="Name"
                      inputProps={{ type: "text" }}
                      InputLabelProps={{ style: { fontSize: 22 } }}
                      {...field}
                      sx={{
                        backgroundColor: "#00cd94",
                      }}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: false,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  }}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      {...register("email")}
                      error={Boolean(errors.email)}
                      helperText={
                        errors.email
                          ? errors.email.type === "pattern"
                            ? "Invalid email"
                            : "This field is required"
                          : ""
                      }
                      id="email"
                      label="Email"
                      inputProps={{ type: "email" }}
                      InputLabelProps={{ style: { fontSize: 22 } }}
                      {...field}
                      sx={{
                        backgroundColor: "#00cd94",
                      }}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 6,
                  }}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      {...register("message")}
                      multiline
                      maxRows={6}
                      minRows={6}
                      id="message"
                      label="Message"
                      inputProps={{ type: "text" }}
                      InputLabelProps={{ style: { fontSize: 22 } }}
                      {...field}
                      sx={{
                        backgroundColor: "#00cd94",
                      }}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    style={{
                      backgroundColor: "black",
                      fontSize: "1.25em",
                      margin: "auto",
                      width: "10em",
                      color: "white",
                      letterSpacing: "2px",
                      zIndex: "999",
                      fontSize: "2em",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </ListItem>
            </List>
          </form>
        </Container>
      </div>
      {/* </Box> */}
    </Popout>
  );
}
