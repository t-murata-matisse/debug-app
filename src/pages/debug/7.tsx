import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * 502 Bad Gatewayエラー確認画面
 *
 * データを取得しようとした際にインフラ側で問題が発生している
 * - 手順　: 画像データ取得ボタン押下時
 * - 対象API: /api/v1/debug/fetch/bbbbb
 * - ステータス: 502 Bad Gateway
 * - 原因①: AWSのEC2インスタンスが停止している
 * - 対応: インフラ側の対応者へ問い合わせて状況を確認する
 */
const Page7 = () => {
  const router = useRouter();

  /** * データを取得する関数 */
  const onFetchData = async (): Promise<void> => {
    console.log("クライアントからサーバーへ画像データ取得を実施");

    try {
      const response = await fetch("/api/v1/debug/fetch/bbbbb", {
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
        Page 7
      </Typography>
      <div className="flex flex-col items-center">
        <Button
          variant="contained"
          onClick={onFetchData}
          className="bg-custom1 text-white hover:bg-custom2 rounded-lg px-10 py-5 mt-10"
        >
          画像データ取得
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page7;
