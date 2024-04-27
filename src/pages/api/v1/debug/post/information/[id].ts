import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { age } = req.body;

  if (typeof age !== "number") {
    res.status(500).json({
      error:
        "500 Internal Server Error - サーバー内で予期しないエラーが発生しました",
    });
    return;
  }

  res.status(201).json({ id, age });
};

export default handler;
