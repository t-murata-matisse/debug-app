import { NextApiRequest, NextApiResponse } from "next";

/**
 * 408 Request Timeoutエラー返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(408).json({
    message:
      "408 Request Timeout - サーバーがリクエストの待機時間を超過しました",
  });
};

export default handler;
