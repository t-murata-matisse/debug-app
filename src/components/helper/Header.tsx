import { Typography, AppBar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" className="bg-custom1">
      <Typography variant="h4" className="py-4 font-bold bg-custom1 pl-14">
        DEBUG APP
      </Typography>
    </AppBar>
  );
};

export default Header;
