import BackButton from "@/components/helper/BackButton";
import { Typography, Avatar, Card, CardContent, Grid } from "@mui/material";

/**
 * フロントエンドエラー確認画面 (Consoleタブで不明エラー、エラー画面に遷移しない)
 *
 * データを表示しようとした際に不明なエラーが発生する
 * - 手順　: ユーザーLのカード押下時
 * - 対象API: なし
 * - ステータス: なし
 * - 原因①: 特定のユーザーの情報表示時にエラーが発生する
 * - 対応: 対象のコード周りを確認し、エラーの原因を特定して修正する
 */
const Page13 = () => {
  /**
   * カードクリック時の処理
   */
  const onClickCard = (userId: string): void => {
    if (userId === "L") {
      throw new Error("undefined: undefined");
    } else {
      console.log(`ユーザー${userId}のカードです`);
    }
  };

  const users = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
  ];

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 13
      </Typography>
      <Typography
        variant="body1"
        fontWeight="bold"
        fontSize="0.875rem"
        className="mb-4 ml-14"
        color={"black"}
      >
        開発者ツールのConsoleタブ、Networkタブを使用して発生するエラーの確認をしてください
        <br />
        ・発生手順、エラーの情報をメモしておいてください
        <br />
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {Array.from({ length: Math.ceil(users.length / 4) }, (_, i) => (
          <Grid item key={i} xs={12}>
            <Grid container spacing={2} justifyContent="center">
              {users.slice(i * 4, i * 4 + 4).map((user) => (
                <Grid item key={user} xs={12} sm={3}>
                  <Card
                    className="shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg hover:transform hover:scale-105"
                    style={{
                      height: "100px",
                      width: "80%",
                      maxWidth: "300px",
                      margin: "0 auto",
                      borderRadius: "16px",
                    }}
                    onClick={() => onClickCard(user)}
                  >
                    <CardContent className="flex flex-col items-center justify-center pt-4">
                      <Avatar className="mb-2" />
                      <Typography variant="h6">ユーザー{user}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page13;
