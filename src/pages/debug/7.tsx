import BackButton from "@/components/helper/BackButton";
import { useEffect } from "react";

const Page7 = () => {
  /**
   * データを取得する関数
   */
  const onFetchData = async (): Promise<void> => {
    try {
      const response = await fetch("/api/debug/7/fetch");
      const data = await response.json();
      console.log(data);
      console.log("7");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    onFetchData();
  }, []);

  return (
    <>
      <BackButton />
      <h1>7</h1>
    </>
  );
};

export default Page7;
