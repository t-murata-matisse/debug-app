import BackButton from "@/components/helper/BackButton";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * 400 Bad Requestエラー確認画面 （リクエストメソッドが不正なパターン）
 *
 * データを登録する際に、不正なリクエストメソッドで送信される
 * - 手順　: 登録ボタン押下時
 * - 対象API: /api/v1/debug/delete/aaaaa
 * - ステータス: 400 Bad Request
 * - 原因①: クライアントからのリクエストメソッドがDELETEになっている
 * - 対応: クライアントのリクエストメソッドをPOSTへ修正する
 */
const Page16 = () => {
  const [name, setName] = useState("ユーザーA");
  const [email, setEmail] = useState("user-a@gmail.com");
  const [age, setAge] = useState(25);
  const [job, setJob] = useState("会社員");
  const router = useRouter();

  /**
   * 登録ボタンクリック時の処理
   */
  const onClickRegister = async () => {
    try {
      const response = await fetch("/api/v1/debug/delete/aaaaa", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, age, job }),
      });

      if (!response.ok) {
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }

      const data = await response.json();
      console.log("登録が完了しました:", data);
    } catch (error) {
      console.error(error);
      router.push("/error/system-error");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 16
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
      <div className="flex justify-center">
        <Card
          className="shadow-lg border border-gray-200"
          style={{ width: "80%", maxWidth: "400px" }}
        >
          <CardContent>
            <Box className="space-y-2">
              <Box>
                <Typography
                  variant="subtitle1"
                  className="font-bold mb-1 text-gray-700"
                >
                  名前:
                </Typography>
                <Typography
                  variant="body1"
                  className="bg-gray-100 py-2 px-3 rounded"
                >
                  {name}
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography
                  variant="subtitle1"
                  className="font-bold mb-1 text-gray-700"
                >
                  メールアドレス:
                </Typography>
                <Typography
                  variant="body1"
                  className="bg-gray-100 py-2 px-3 rounded"
                >
                  {email}
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography
                  variant="subtitle1"
                  className="font-bold mb-1 text-gray-700"
                >
                  年齢:
                </Typography>
                <Typography
                  variant="body1"
                  className="bg-gray-100 py-2 px-3 rounded"
                >
                  {age}
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography
                  variant="subtitle1"
                  className="font-bold mb-1 text-gray-700"
                >
                  職業:
                </Typography>
                <Typography
                  variant="body1"
                  className="bg-gray-100 py-2 px-3 rounded"
                >
                  {job}
                </Typography>
              </Box>
              <Divider />
              <Typography
                variant="body1"
                fontWeight="bold"
                fontSize="0.875rem"
                className="mb-4"
              >
                ※上記の内容を登録します
              </Typography>
              <Box className="text-center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickRegister}
                  className="bg-custom1 hover:bg-custom2"
                >
                  登録する
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page16;
