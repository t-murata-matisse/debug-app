import { NextApiRequest, NextApiResponse } from "next";

const USERS_PER_PAGE = 6;

const users = [
  { id: 1, name: "ユーザー1" },
  { id: 2, name: "ユーザー2" },
  { id: 3, name: "ユーザー3" },
  { id: 4, name: "ユーザー4" },
  { id: 5, name: "ユーザー5" },
  { id: 6, name: "ユーザー6" },
  { id: 7, name: "ユーザー7" },
  { id: 8, name: "ユーザー8" },
  { id: 9, name: "ユーザー9" },
  {
    id: 10,
    name: "ユーザー10",
  },
  {
    id: 11,
    name: "ユーザー11",
  },
  {
    id: 12,
    name: "ユーザー12",
  },
  {
    id: 13,
    name: "ユーザー13",
  },
  {
    id: 14,
    name: "ユーザー14",
  },
  {
    id: 15,
    name: "ユーザー15",
  },
  {
    id: 16,
    name: "ユーザー16",
  },
  {
    id: 17,
    name: "ユーザー17",
  },
  {
    id: 18,
    name: "ユーザー18",
  },
  {
    id: 19,
    name: "ユーザー19",
  },
  {
    id: 20,
    name: "ユーザー20",
  },
  {
    id: 21,
    name: "ユーザー21",
  },
  {
    id: 22,
    name: "ユーザー22",
  },
  {
    id: 23,
    name: "ユーザー23",
  },
  {
    id: 24,
    name: "ユーザー24",
  },
  {
    id: 25,
    name: "ユーザー25",
  },
  {
    id: 26,
    name: "ユーザー26",
  },
  {
    id: 27,
    name: "ユーザー27",
  },
  {
    id: 28,
    name: "ユーザー28",
  },
  {
    id: 29,
    name: "ユーザー29",
  },
  {
    id: 30,
    name: "ユーザー30",
  },
];

/**
 *　ページネーションデータ返却API
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query;
  const currentPage = parseInt(page as string, 10) || 1;

  if (currentPage > 5) {
    res.status(404).json({
      message: "404 Not Found - リクエストに対応するリソースが存在しません",
    });
    return;
  }

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const usersOnPage = users.slice(startIndex, endIndex);

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.status(200).json({
    users: usersOnPage,
  });
}
