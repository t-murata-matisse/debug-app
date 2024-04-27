import { NextApiRequest, NextApiResponse } from "next";

const processingRequests: { [key: string]: boolean } = {};

/**
 * グラフデータ返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { graphType } = req.query;

  if (processingRequests[graphType as string]) {
    res.status(500).json({
      message:
        "500 Internal Server Error - サーバー内で予期しないエラーが発生しました",
    });
    return;
  }

  processingRequests[graphType as string] = true;

  setTimeout(() => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.status(200).json([
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    ]);

    processingRequests[graphType as string] = false;
  }, 5000);
};

export default handler;
