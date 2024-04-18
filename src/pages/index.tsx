import { useRouter } from "next/router";

const Home = () => {
  const screenList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const router = useRouter();

  /**
   * 選択した画面を表示する
   * @param {number} value - 画面No
   */
  const onChangeScreen = (value: number) => {
    router.push(`/debug/${value}`);
  };

  return (
    <>
      <h1>DEBUG</h1>
      {screenList.map((value: number) => (
        <button key={value} onClick={() => onChangeScreen(value)}>
          {value}
        </button>
      ))}
    </>
  );
};

export default Home;
