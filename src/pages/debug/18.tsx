import BackButton from "@/components/helper/BackButton";
import { Typography, Button, Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useRouter } from "next/router";

const AreaGraph = ({ data }: any) => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);

/**
 * フロントエンドエラー確認画面 (データ取得中にもう一度ボタンを押下)
 *
 * グラフデータ取得APIの待ち時間中に再度グラフデータを取得しようとした際にエラーが発生する
 * - 手順　: AREAグラフボタン押下時
 * - 対象API: /api/v1/debug/fetch/fffff
 * - ステータス: 成功するものは200 OK
 * - 原因①: グラフデータを取得している最中に取得のボタンをクリックできてしまう
 * - 対応: グラフデータを取得している最中は取得のボタンを非活性にしてクリックできないようにする
 */
const Page18 = () => {
  const router = useRouter();
  const [activeGraph, setActiveGraph] = useState("");
  const [areaData, setAreaData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [callingApi, setCallingApi] = useState("");

  const onFetchData = async (graphType: string) => {
    setAreaData(null);
    if (callingApi !== "") {
      if (isLoading) {
        console.error("Error: areaData already exists.");
        router.push("/error/system-error");
        return;
      } else {
        setIsLoading(true);
        setCallingApi(graphType);
      }
    }

    setAreaData(null);
    setActiveGraph(graphType);
    setIsLoading(true);
    setCallingApi(graphType);

    try {
      const response = await fetch("/api/v1/debug/fetch/fffff", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setAreaData(data);
    } catch (error) {
      console.error("Error: areaData fetch failed.");
    }

    setIsLoading(false);

    setTimeout(() => {
      setCallingApi("");
    }, 1000);
  };

  const renderGraph = () => {
    switch (activeGraph) {
      case "area":
        return <AreaGraph data={areaData} />;
      default:
        return null;
    }
  };

  return (
    <Box className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 18
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
      <Box className="mb-4 ml-14">
        <Button
          variant="contained"
          onClick={() => onFetchData("area")}
          className="ml-2 bg-custom1 hover:bg-custom2"
        >
          Areaグラフ
        </Button>
      </Box>
      {isLoading && (
        <Box className="flex items-center justify-center mt-8">
          <CircularProgress />
          <Typography variant="body1" className="ml-2 text-custom2">
            データの準備中です
          </Typography>
        </Box>
      )}
      <Box>{renderGraph()}</Box>
      <Box className="mt-8 flex justify-center">
        <BackButton />
      </Box>
    </Box>
  );
};

export default Page18;
