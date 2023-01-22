import { IconButton } from "@mui/material";
import { GiKnightBanner } from "react-icons/gi";

const ArmiesButton = ({ onClick }) => {
  return (
    <IconButton sx={{ color: "white" }} size="small" onClick={onClick}>
      <GiKnightBanner size={40} />
    </IconButton>
  );
};

export default ArmiesButton;
