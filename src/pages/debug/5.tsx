import BackButton from "@/components/helper/BackButton";
import { useEffect } from "react";

const Page5 = () => {
  /**
   * データを取得する関数
   */
  const onFetchData = async (): Promise<void> => {
    try {
      const response = await fetch("/api/debug/5/fetch");
      const data = await response.json();
      console.log(data);
      console.log("5");
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
      <h1>5</h1>
    </>
  );
};

export default Page5;
