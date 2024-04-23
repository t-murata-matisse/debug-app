import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * 502 Bad Gatewayエラー確認画面
 */
const Page7 = () => {
  const router = useRouter();

  /** * データを取得する関数 */
  const onFetchData = async (): Promise<void> => {
    console.log("クライアントからサーバーへデータ取得を実施");

    try {
      const response = await fetch("/api/v1/debug/fetch/bbbbb", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
        Page 7
      </Typography>
      <div className="flex flex-col items-center">
        <Button
          variant="contained"
          onClick={onFetchData}
          className="bg-custom1 text-white hover:bg-custom2 rounded-lg px-10 py-5 mt-10"
        >
          データ取得
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page7;
