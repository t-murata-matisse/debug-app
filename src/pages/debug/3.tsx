import BackButton from "@/components/helper/BackButton";
import { useEffect } from "react";

const Page3 = () => {
  /**
   * データを取得する関数
   */
  const onFetchData = async (): Promise<void> => {
    try {
      const response = await fetch("/api/debug/3/fetch");
      const data = await response.json();
      console.log(data);
      console.log("3");
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
      <h1>3</h1>
    </>
  );
};

export default Page3;
