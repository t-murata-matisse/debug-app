import { NextApiRequest, NextApiResponse } from "next";

/**
 * 403 Forbiddenエラー返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(403).json({
    message: "403 Forbidden - アクセス権限がありません",
  });
};

export default handler;
