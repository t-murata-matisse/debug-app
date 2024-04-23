import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * フロントエンドエラー確認画面 (存在しないURLへ遷移)
 */
const Page10 = () => {
  const router = useRouter();

  /**
   * データを登録する関数
   */
  const onPostData = async (): Promise<void> => {
    console.log(
      "詳細情報画面への遷移を実施、遷移先URL: /d#$%%et''')!%il(%%$#/page"
    );
    router.push("/d#$%%et''')!%il(%%$#/page");
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 10
      </Typography>
      <div className="flex flex-col items-center">
        <Button
          variant="contained"
          onClick={onPostData}
          className="bg-custom1 text-white hover:bg-custom2 rounded-lg px-10 py-5 mt-10"
        >
          詳細情報画面へ遷移
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page10;
