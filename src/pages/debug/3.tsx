import BackButton from "@/components/helper/BackButton";
import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";

/**
 * 400 Bad Requestエラー確認画面 （リクエストに不足があったパターン）
 *
 * データを登録しようとした際にリクエストのプロパティに不足がある
 * - 手順　: 送信ボタン押下時
 * - 対象API: /api/v1/debug/post/bbbbb
 * - ステータス: 400 Bad Request
 * - 原因①: クライアントからのデータ登録時のリクエストが間違っている
 * - 原因②: サーバー側で想定しているリクエストが間違っている
 * - 対応: ①②のいずれかに応じてリクエストの内容を確認し、間違っている側を修正する
 */
const Page3 = () => {
  const [username, setUserName] = useState("");
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  /**
   * データを登録する関数
   */
  const onPostData = async (): Promise<void> => {
    console.log("入力したユーザー名（username）", username);
    console.log("入力したキーワード（keyword）", keyword);

    try {
      const response = await fetch("/api/v1/debug/post/bbbbb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword }),
      });
      if (!response.ok) {
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }
    } catch (error) {
      console.error("Error:", error);
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
        Page 3
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
        <Card className="w-96 shadow-lg">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              ユーザー名
            </Typography>
            <TextField
              label="ユーザー名を入力してください"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="mb-4"
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
            <Typography variant="h5" component="div" gutterBottom>
              キーワード
            </Typography>
            <TextField
              label="キーワードを入力してください"
              variant="outlined"
              fullWidth
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="mb-4"
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
              onClick={onPostData}
              disabled={!keyword}
              className="bg-custom1 text-white hover:bg-custom2"
            >
              送信
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page3;
