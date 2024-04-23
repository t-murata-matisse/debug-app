import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * 403 Forbiddenエラー確認画面
 */
const Page4 = () => {
  const auth = false;
  const router = useRouter();

  /**
   * データを登録する関数
   */
  const onPostData = async (): Promise<void> => {
    console.log("管理者専用画面へアクセスする為に、認証情報をAPIへ送信");
    console.log("認証情報（auth）: ", auth);

    try {
      const response = await fetch("/api/v1/debug/post/ccccc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ auth }),
      });
      if (!response.ok) {
        throw new Error("エラーが発生しました");
      }
    } catch (error) {
      console.error("Error:", error);
      router.push("/error/access-error");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 4
      </Typography>
      <div className="flex flex-col items-center">
        <Button
          variant="contained"
          onClick={onPostData}
          className="bg-custom1 text-white hover:bg-custom2 rounded-lg px-10 py-5 mt-10"
        >
          管理者専用画面へ遷移
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page4;
