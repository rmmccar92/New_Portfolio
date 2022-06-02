import { Box } from "@mui/material";
import style from "../styles/Popout.module.css";

const Popout = ({ children }) => {
  return (
    <Box
      className={style.popOut}
      sx={{
        position: "absolute",
        width: { xs: "85vw", md: "60vw" },
        height: { xs: "80vh", md: "90vh" },
        left: { xs: "10%", md: "28%" },
        top: { xs: "2%", md: "5%" },
      }}
    >
      {children}
    </Box>
  );
};

export default Popout;
