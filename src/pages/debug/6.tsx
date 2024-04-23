import BackButton from "@/components/helper/BackButton";
import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";

/**
 * 408 Request Timeoutエラー確認画面
 *
 * データを登録する際にクライアント-サーバー間の通信でタイムアウトが発生
 * - 手順　: 送信ボタン押下時
 * - 対象API: /api/v1/debug/post/eeeee
 * - ステータス: 408 Request Timeout
 * - 原因①: クライアントからのデータ登録に時間がかかりすぎている
 * - 原因②: サーバー側で設定しているタイムアウトまでの時間が処理にかかりそうな時間に対して短すぎる
 * - 対応: ①ならクライアントの処理やネットワーク環境を確認して状態に応じた対応をする、②ならサーバー側のタイムアウト時間を調整する
 */
const Page6 = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  /** * データを登録する関数 */
  const onPostData = async (): Promise<void> => {
    console.log("入力したテキスト（text）", text);
    setLoading(true);

    try {
      // 5秒間処理を止める
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch("/api/v1/debug/post/eeeee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }
    } catch (error) {
      console.error("Error:", error);
      router.push("/error/system-error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 6
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
              テキスト
            </Typography>
            <TextField
              label="テキストを入力してください"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
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
            <Typography
              variant="body1"
              fontWeight="bold"
              fontSize="0.875rem"
              className="mb-4"
            >
              ※20文字以上文字を入力してください
            </Typography>
            <div className="flex justify-center">
              <Button
                variant="contained"
                onClick={onPostData}
                disabled={text.length < 20 || loading}
                className="bg-custom1 text-white hover:bg-custom2"
              >
                {loading ? (
                  <CircularProgress size={24} className="text-white" />
                ) : (
                  "送信"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page6;
