import { useRouter } from "next/router";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const screenList: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  /**
   * 選択した画面を表示する
   * @param {number} value - 画面No
   */
  const onChangeScreen = (value: number) => {
    router.push(`/debug/${value}`);
  };

  /**
   * 入力値を検証し、特定の値であれば解答ページへ遷移する
   */
  const onSubmitInputValue = () => {
    if (inputValue === "sekine team murata") {
      router.push("/sample/team/answer");
    }
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
      <div className="mt-96 pb-8 flex justify-center">
        <TextField
          label="特別なキーワードを入力してください"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          variant="outlined"
          className="mr-4 w-80"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#5e8e87",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#5e8e87",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#5e8e87",
              },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={onSubmitInputValue}
          className="bg-custom1 text-white rounded-lg hover:bg-custom2"
          disabled={inputValue !== "sekine team murata"}
        >
          送信
        </Button>
      </div>
    </div>
  );
};

export default Home;
