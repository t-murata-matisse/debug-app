import BackButton from "@/components/helper/BackButton";
import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

/**
 * フロントエンドエラー確認画面 (Consoleタブで引数不足エラー、エラー画面に遷移しない)
 *
 * データを登録しようとした際に引数が不足している
 * - 手順　: 送信ボタン押下時
 * - 対象API: なし
 * - ステータス: なし
 * - 原因①: データの登録処理で引数の設定が間違っている
 * - 対応: 登録処理で正しい引数を設定する
 */
const Page11 = () => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [keyword, setKeyword] = useState("");

  /**
   * データを登録する関数
   */
  const onPostData = async (): Promise<void> => {
    console.log("入力したユーザー名（userName）", userName);
    console.log("入力したキーワード（keyword）", keyword);

    try {
      throw new Error(
        "引数からユーザー説明（userDescription）が不足している為、処理を中止しました"
      );
    } catch (error) {
      console.error(error);
    }
  };

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
              value={userName}
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
              ユーザー説明
            </Typography>
            <TextField
              label="ユーザー説明を入力してください"
              variant="outlined"
              fullWidth
              value={userDescription}
              onChange={(e) => setUserDescription(e.target.value)}
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
              disabled={!userName || !userDescription || !keyword}
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

export default Page11;
