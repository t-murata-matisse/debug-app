import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * 503 Service Unavailableエラー確認画面
 *
 * データを取得しようとした際にサーバーがメンテナンス状態
 * - 手順　: エクセルファイル取得ボタン押下時
 * - 対象API: /api/v1/debug/fetch/ccccc
 * - ステータス: 503 Service Unavailable
 * - 原因①: サーバーがメンテナンス中
 * - 対応: 想定外のエラーであればサーバーの状態を確認する、想定通りのメンテナンスであれば対応は不要
 */
const Page9 = () => {
  const router = useRouter();

  /** * データを取得する関数 */
  const onFetchData = async (): Promise<void> => {
    console.log("クライアントからサーバーへExcelファイル取得を実施");

    try {
      const response = await fetch("/api/v1/debug/fetch/ccccc", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }
    } catch (error) {
      console.error("Error:", error);
      router.push("/error/maintenance");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 9
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
          onClick={onFetchData}
          className="bg-custom1 text-white hover:bg-custom2 rounded-lg px-10 py-5 mt-10"
        >
          Excelファイル取得
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page9;
