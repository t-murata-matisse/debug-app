import { NextApiRequest, NextApiResponse } from "next";

/**
 * 500 Internal Server Errorエラー返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(500).json({
    message:
      "500 Internal Server Error - サーバー内で予期しないエラーが発生しました",
  });
};

export default handler;
