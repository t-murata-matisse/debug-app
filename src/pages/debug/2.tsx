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
 * 400 Bad Requestエラー確認画面 （リクエストに不正があったパターン）
 */
const Page2 = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  /**
   * データを登録する関数
   */
  const onPostData = async (): Promise<void> => {
    console.log("入力したキーワード（keyword）", keyword);

    try {
      const response = await fetch("/api/v1/debug/post/aaaaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword }),
      });
      if (!response.ok) {
        throw new Error("エラーが発生しました");
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
        Page 2
      </Typography>
      <div className="flex justify-center">
        <Card className="w-96 shadow-lg">
          <CardContent>
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

export default Page2;