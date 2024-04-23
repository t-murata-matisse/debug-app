import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * フロントエンドエラー確認画面 (存在しないURLへ遷移)
 *
 * 画面遷移しようとした際に存在しないURLへ遷移する
 * - 手順　: 詳細情報画面へ遷移ボタン押下時
 * - 対象API: なし
 * - ステータス: なし
 * - 原因①: 画面遷移処理で設定しているURLが間違っている
 * - 対応: 画面遷移処理で設定しているURLを確認して、正しいURLを設定する
 */
const Page10 = () => {
  const router = useRouter();

  /**
   * 画面遷移する関数
   */
  const onNavigatePage = async (): Promise<void> => {
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
          onClick={onNavigatePage}
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
