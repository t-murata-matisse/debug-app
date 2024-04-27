import { NextApiRequest, NextApiResponse } from "next";

/**
 * 401 Unauthorizedエラー返却API （認証エラーが発生したパターン）
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(401).json({
    message: "401 Unauthorized - 認証エラーが発生しました",
  });
};

export default handler;
