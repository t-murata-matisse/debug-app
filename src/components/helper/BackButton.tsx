import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  /**
   * ホーム画面に戻る
   */
  const onBackScreen = (): void => {
    router.push("/");
  };

  return (
    <>
      <button onClick={onBackScreen}>戻る</button>
    </>
  );
};

export default BackButton;
