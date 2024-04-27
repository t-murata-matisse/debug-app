import { NextApiRequest, NextApiResponse } from "next";

/**
 * 400 Bad Requestエラー返却API （リクエストに不正があったパターン）
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(400).json({
    message: "400 Bad Request - 不正なリクエストです",
  });
};

export default handler;
