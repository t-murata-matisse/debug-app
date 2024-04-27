import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import { Typography, Button } from "@mui/material";

/**
 * 403 Forbiddenエラー確認画面
 *
 * 管理者専用画面へ遷移へ遷移しようとした際にアクセス権限がない
 * - 手順　: 管理者専用画面へ遷移ボタン押下時
 * - 対象API: /api/v1/debug/post/ccccc
 * - ステータス: 403 Forbidden
 * - 原因①: 本来管理者権限を持つユーザーなのであれば権限付与処理が間違っている可能性がある
 * - 原因②: 元々管理者権限を持たないユーザーである
 * - 対応: ①なら権限付与処理を調査して修正する、②なら想定通りのため対応は不要
 */
const Page3 = () => {
  const auth = false;
  const router = useRouter();

  /**
   * 画面遷移する関数
   */
  const onNavigatePage = async (): Promise<void> => {
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
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }
    } catch (error) {
      console.error(error);
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
        Page 3
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
          管理者専用画面へ遷移
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page3;
