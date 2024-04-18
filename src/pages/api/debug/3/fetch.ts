import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json([]);
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
