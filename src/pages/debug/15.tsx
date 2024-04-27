import BackButton from "@/components/helper/BackButton";
import { useState, useEffect } from "react";
import {
  Typography,
  Pagination,
  Avatar,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";

interface User {
  id: number;
  name: string;
}

/**
 * 404 Not Foundエラー確認画面
 *
 * データを取得しようとした際にリクエストに対応するリソースが存在しない
 * - 手順　: 6以降のページネーションボタン押下時
 * - 対象API: /api/v1/debug/fetch/users?page=${page}
 * - ステータス: 404 Not Found
 * - 原因①: クライアントで設定するページネーションの上限が間違っている
 * - 原因②: サーバー側から返すユーザーのデータが不足している
 * - 対応: ページネーションの上限はサーバー側から渡すように修正し、その値をクライアント側で上限として設定する
 */
const Page15 = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const router = useRouter();

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page: number): Promise<void> => {
    try {
      const response = await fetch(`/api/v1/debug/fetch/users?page=${page}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      } else {
        console.error("エラーが発生しました、Networkタブを確認してください");
        router.push("/error/system-error");
      }
    } catch (error) {
      console.error(error);
      router.push("/error/system-error");
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 15
      </Typography>
      <Typography
        variant="body1"
        fontWeight="bold"
        fontSize="0.875rem"
        className="mb-4 ml-14"
        color={"black"}
      >
        開発者ツールのConsoleタブ、Networkタブを使用して発生するエラーの確認をしてください
        <br />
        ・発生手順、エラーの情報をメモしておいてください
        <br />
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {users.map((user: User) => (
          <Grid item key={user.id} xs={12} sm={4}>
            <Card
              className="shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg hover:transform hover:scale-105"
              style={{
                height: "100px",
                width: "80%",
                maxWidth: "300px",
                margin: "0 auto",
                borderRadius: "16px",
              }}
            >
              <CardContent className="flex flex-col items-center justify-center pt-4">
                <Avatar className="mb-2" />
                <Typography variant="h6">{user.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="mt-8 flex justify-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page15;
