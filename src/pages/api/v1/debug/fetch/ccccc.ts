import { NextApiRequest, NextApiResponse } from "next";

/**
 * 503 Service Unavailableエラー返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(503).json({
    message: "503 Service Unavailable - アプリケーションはメンテナンス中です",
  });
};

export default handler;
