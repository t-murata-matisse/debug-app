import { useRouter } from "next/router";
import { Button, Grid } from "@mui/material";

const Home = () => {
  const screenList: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const router = useRouter();

  /**
   * 選択した画面を表示する
   * @param {number} value - 画面No
   */
  const onChangeScreen = (value: number) => {
    router.push(`/debug/${value}`);
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      <Grid container spacing={2} justifyContent="center">
        {screenList.map((value: number) => (
          <Grid
            item
            key={value}
            xs={12}
            sm={2.4}
            container
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={() => onChangeScreen(value)}
              className="px-12 py-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-40 h-20 text-2xl bg-custom1 hover:bg-custom2"
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
