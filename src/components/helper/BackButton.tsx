import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const BackButton = () => {
  const router = useRouter();

  /**
   * ホーム画面に戻る
   */
  const onBackScreen = (): void => {
    router.push("/");
  };

  return (
    <Button
      variant="contained"
      onClick={onBackScreen}
      startIcon={<ArrowBack />}
      className="px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-lg bg-custom1 hover:bg-custom2"
    >
      戻る
    </Button>
  );
};

export default BackButton;
