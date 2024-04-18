import BackButton from "@/components/helper/BackButton";
import { useEffect } from "react";
import { Typography, Card, CardContent } from "@mui/material";

const Page2 = () => {
  /**
   * データを取得する関数
   */
  const onFetchData = async (): Promise<void> => {
    try {
      const response = await fetch("/api/debug/2/fetch");
      const data = await response.json();
      console.log(data);
      console.log("2");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    onFetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 2
      </Typography>
      <div className="flex justify-center">
        <Card className="w-96 shadow-lg">
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              test
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page2;
