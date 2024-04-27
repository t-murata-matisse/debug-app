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
 * 504 Gateway Timeoutエラー確認画面
 *
 * データを登録する際にサーバー-ゲートウェイ（プロキシサーバーなど）間の通信でタイムアウトが発生
 * - 手順　: 送信ボタン押下時
 * - 対象API: /api/v1/debug/post/fffff
 * - ステータス: 504 Gateway Timeout
 * - 原因①: サーバーの処理で時間がかかりすぎている
 * - 対応: サーバーの処理時間やタイムアウトまでの時間を見直して調整する
 */
const Page12 = () => {
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  /** * データを登録する関数 */
  const onPostData = async (): Promise<void> => {
    console.log("入力した問い合わせ情報（contact）", contact);
    setLoading(true);

    try {
      // 5秒間処理を止める
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await fetch("/api/v1/debug/post/fffff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact }),
      });
      if (!response.ok) {
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }
    } catch (error) {
      console.error(error);
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
        Page 12
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
              問い合わせ
            </Typography>
            <TextField
              label="問い合わせを入力してください"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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
                disabled={contact.length < 20 || loading}
                className="bg-custom1 text-white hover:bg-custom2 px-16"
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

export default Page12;
