import React from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import style from "../styles/Popout.module.css";
import Material from "./Material";
import { Canvas } from "@react-three/fiber";

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
    <div className={style.popOut}>
      <Canvas className={style.popOutCanvas}>
        <Material />
      </Canvas>
      <div className={style.gridText}>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={style.contactForm}
        >
          <Grid
            container
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              item
              xs={6}
              sm={8}
              sx={{
                backgroundColor: "rgb(35, 35, 35)",
                borderRadius: "10px",
                boxShadow: "2px -1px 10px #00cd94",
                padding: "1em",
              }}
            >
              <Typography
                component="h1"
                textAlign={"center"}
                sx={{
                  fontSize: "75px",
                  padding: "0 5px 0 5px",
                }}
              >
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
                        error={Boolean(errors.name)}
                        helperText={
                          errors.name
                            ? errors.firstName.type === "minLength"
                              ? "First name must be at least 2 characters"
                              : "This field is required"
                            : ""
                        }
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
                    }}
                  >
                    Submit
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
