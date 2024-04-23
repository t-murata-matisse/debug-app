import BackButton from "@/components/helper/BackButton";
import { Typography, Grid, Paper } from "@mui/material";

/**
 * デザイン修正確認画面 （実践2）
 */
const Page15 = () => {
  const getShapeStyle = (index: number) => {
    switch (index) {
      case 0:
        return {
          width: "150px",
          height: "150px",
          backgroundColor: "#2196f3",
          borderRadius: "50%",
        };
      case 1:
        return {
          width: "120px",
          height: "120px",
          backgroundColor: "#e91e63",
          transform: "rotate(45deg)",
        };
      case 2:
        return {
          width: "180px",
          height: "90px",
          backgroundColor: "#ffc107",
          borderRadius: "90px 90px 0 0",
          transform: "translateY(30px)",
        };
      case 3:
        return {
          width: "150px",
          height: "150px",
          backgroundColor: "#4caf50",
        };
      default:
        return {};
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 15
      </Typography>
      <Typography
        variant="body1"
        fontWeight="bold"
        fontSize="0.875rem"
        className="mb-4 ml-14"
        color={"black"}
      >
        開発者ツールのElementsタブを使用してデザインの修正をしてください
        <br />
        すべて修正できたらスクリーンショットを撮って保存しておいてください
        <br />
        ・図形1は四角形にしてください
        <br />
        ・図形2は回転を元に戻してください
        <br />
        ・図形3は上下反転させてください
        <br />
        ・図形4は影を付けてください
        <br />
        <br />
        ※Elementsタブの変更内容はリロードなどを実施すると元に戻ります、あくまでも画面上での確認を行う際に使用する事が多いです
      </Typography>
      <div className="px-14 mt-16">
        <Grid container spacing={4} justifyContent="space-between">
          {Array.from({ length: 4 }, (_, index) => (
            <Grid item key={index}>
              <Paper
                elevation={3}
                className="p-4 text-center"
                style={getShapeStyle(index)}
              >
                <Typography variant="h6" style={{ color: "white" }}>
                  図形 {index + 1}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page15;
