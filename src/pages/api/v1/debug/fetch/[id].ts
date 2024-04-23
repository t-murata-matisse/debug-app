import { NextApiRequest, NextApiResponse } from "next";

/**
 * 200 OK返却API
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const data = {
    id,
    information: `詳細情報${id}`,
  };

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.status(200).json(data);
};

export default handler;
