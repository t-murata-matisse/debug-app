import { NextApiRequest, NextApiResponse } from "next";

/**
 * 400 Bad Requestエラー返却API （リクエストに不足があったパターン）
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(400).json({
    message: "400 Bad Request - リクエストにusernameが存在しません",
  });
};

export default handler;
