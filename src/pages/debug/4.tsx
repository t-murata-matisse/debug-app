import BackButton from "@/components/helper/BackButton";
import { useEffect } from "react";

const Page4 = () => {
  /**
   * データを取得する関数
   */
  const onFetchData = async (): Promise<void> => {
    try {
      const response = await fetch("/api/debug/4/fetch");
      const data = await response.json();
      console.log(data);
      console.log("4");
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
      <h1>4</h1>
    </>
  );
};

export default Page4;
