import { NextApiRequest, NextApiResponse } from "next";

/**
 * 504 Gateway Timeoutエラー返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(504).json({
    message:
      "504 Gateway Timeout - ゲートウェイがリクエストの待機時間を超過しました",
  });
};

export default handler;
