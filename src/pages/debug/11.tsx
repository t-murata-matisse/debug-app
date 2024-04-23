import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import {
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

/**
 * フロントエンドエラー確認画面 (Consoleタブで引数解析エラー、エラー画面に遷移しない)
 *
 * データを取得しようとした際に引数の解析に失敗する
 * - 手順　: 詳細情報を取得ボタン押下時
 * - 対象API: /api/v1/debug/fetch/${userId}`
 * - ステータス: 成功するものは200 OK
 * - 原因①: 特定のユーザーの詳細取得で引数の解析に失敗する
 * - 対応: 詳細情報取得処理を修正する
 */
const Page11 = () => {
  /**
   * データを取得する関数
   */
  const onFetchData = async (userId: string): Promise<void> => {
    if (userId === "E") {
      console.error(`userIdが識別できない為、処理を中止しました`);
      return;
    }

    try {
      const response = await fetch(`/api/v1/debug/fetch/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`ユーザー${userId}の詳細情報を取得しました:`, data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const users = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 11
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
        {Array.from({ length: Math.ceil(users.length / 2) }, (_, i) => (
          <Grid item key={i} xs={12}>
            <Grid container spacing={2} justifyContent="center">
              {users.slice(i * 2, i * 2 + 2).map((user) => (
                <Grid item key={user} xs={12} sm={5}>
                  <Card
                    className="shadow-md"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      margin: "0 auto",
                    }}
                  >
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <Avatar className="mr-4" />
                        <Typography variant="h6">ユーザー{user}</Typography>
                      </div>
                      <Button
                        variant="contained"
                        onClick={() => onFetchData(user)}
                        className="bg-custom1 text-white hover:bg-custom2 rounded-lg px-4 py-2"
                      >
                        詳細情報を取得
                      </Button>
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

export default Page11;
