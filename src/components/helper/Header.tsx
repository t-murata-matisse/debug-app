import { Typography, AppBar } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  /**
   * ホーム画面に戻る
   */
  const onBackScreen = (): void => {
    router.push("/");
  };

  return (
    <AppBar position="fixed" className="bg-custom1">
      <Typography
        variant="h4"
        className="py-4 font-bold bg-custom1 pl-14 cursor-pointer"
        onClick={onBackScreen}
      >
        DEBUG APP
      </Typography>
    </AppBar>
  );
};

export default Header;
