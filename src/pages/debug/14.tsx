import BackButton from "@/components/helper/BackButton";
import { Typography, Grid, Paper } from "@mui/material";

/**
 * デザイン修正確認画面
 */
const Page14 = () => {
  const getBlockColor = (index: number) => {
    if (index === 4 || index === 14) {
      return "#000000";
    }
    return index < 8 ? "#75b1a9" : "#d9b44a";
  };

  const getBlockStyle = (index: number) => {
    if (index === 7) {
      return {
        backgroundColor: getBlockColor(index),
        transform: "translate(16px, -16px)",
      };
    }
    if (index === 9) {
      return {
        backgroundColor: getBlockColor(index),
        transform: "translate(-8px, -8px)",
      };
    }
    return {
      backgroundColor: getBlockColor(index),
    };
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 14
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
        ・1〜8のブロックは同じ背景色になります
        <br />
        ・9〜16のブロックは同じ背景色になります
        <br />
        ・8と10のブロックの余計なcssを削除して適切な位置に配置してください{" "}
        <br />
        <br />
        ※Elementsタブの変更内容はリロードなどを実施すると元に戻ります、あくまでも画面上での確認を行う際に使用する事が多いです
      </Typography>
      <div className="px-14 mt-8">
        <Grid container spacing={2}>
          {Array.from({ length: 16 }, (_, index) => (
            <Grid item xs={3} key={index}>
              <Paper
                elevation={3}
                className="p-4 text-center"
                style={getBlockStyle(index)}
              >
                <Typography variant="h6" style={{ color: "white" }}>
                  {index + 1}
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

export default Page14;
