import { NextApiRequest, NextApiResponse } from "next";

/**
 * 502 Bad Gatewayエラー返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(502).json({
    message: "502 Bad Gateway - EC2インスタンスが停止しています",
  });
};

export default handler;
