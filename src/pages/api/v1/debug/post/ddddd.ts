import { NextApiRequest, NextApiResponse } from "next";

/**
 * 404 Not Foundエラー返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(404).json({
    message: "404 Not Found - リクエストに対応するリソースが存在しません",
  });
};

export default handler;
