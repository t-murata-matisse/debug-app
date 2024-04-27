import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * 401 Unauthorizedエラー確認画面
 *
 * データを取得しようとした際に認証エラーが発生する
 * - 手順　: リスト取得APIをコールボタン押下時
 * - 対象API: /api/v1/debug/fetch/ddddd
 * - ステータス: 401 Unauthorized
 * - 原因①: 対象のAPIにアクセスする際の認証情報が不足している
 * - 対応: 対象のAPIの認証処理を修正する
 */
const Page8 = () => {
  const router = useRouter();

  /**
   * APIをコールする関数
   */
  const onCallApi = async (): Promise<void> => {
    console.log("クライアントからサーバーへAPIコールを実施");
    try {
      const response = await fetch("/api/v1/debug/fetch/ddddd", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }
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
        Page 8
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
      <div className="flex flex-col items-center">
        <Button
          variant="contained"
          onClick={onCallApi}
          className="bg-custom1 text-white hover:bg-custom2 rounded-lg px-10 py-5 mt-10"
        >
          リスト取得APIをコール
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page8;
