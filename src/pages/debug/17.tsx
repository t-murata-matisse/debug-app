import BackButton from "@/components/helper/BackButton";
import { useRouter } from "next/router";
import {
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";

/**
 * 500 Internal Server Errorエラー確認画面
 *
 * 情報取得APIをコールした際にサーバー側でエラーが発生する
 * - 手順　: ユーザーDのinputに入力時
 * - 対象API: /api/v1/debug/post/age/${userId}
 * - ステータス: 500 Internal Server Error
 * - 原因①: クライアントからユーザーDのageが文字でpostされる
 * - 原因②: サーバー側でageの型チェックが抜けており、500エラーが発生する
 * - 対応: ①クライアント側でageを数値型で送信するように修正する、②サーバー側でageの型チェックを実装して、型が違った場合は400エラーを返す
 */
const Page17 = () => {
  const router = useRouter();
  const [inputValues, setInputValues] = useState<{ [key: string]: number }>({});
  const [inputErrors, setInputErrors] = useState<{ [key: string]: string }>({});

  /**
   * データを登録する関数
   */
  const onPostData = async (id: string, age: number): Promise<void> => {
    try {
      const requestAge = id === "D" ? String(age) : age;
      if (id === "D") {
        console.log("入力した年齢（age）", "'" + requestAge + "'");
      } else {
        console.log("入力した年齢（age）", requestAge);
      }

      const response = await fetch(`/api/v1/debug/post/information/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ age: requestAge }),
      });

      if (!response.ok) {
        throw new Error("エラーが発生しました、Networkタブを確認してください");
      }

      const data = await response.json();
      console.log(`ユーザー${id}の年齢を登録しました:`, data);
    } catch (error) {
      console.error(error);
      router.push("/error/system-error");
    }
  };

  const validateInput = (value: string): boolean => {
    return /^(?:[1-9]?\d|100)$/.test(value);
  };

  const handleInputChange = (userId: string, value: string) => {
    const age = Number(value);
    setInputValues((prevValues) => ({
      ...prevValues,
      [userId]: age,
    }));

    if (value === "" || value === "0") {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [userId]: "",
      }));
    } else if (validateInput(value)) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [userId]: "",
      }));
      onPostData(userId, age);
    } else {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [userId]: "1から100までの整数を入力してください",
      }));
    }
  };

  const users = ["A", "B", "C", "D"];

  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Page 17
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
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {Array.from({ length: Math.ceil(users.length / 2) }, (_, i) => (
          <Grid item key={i} xs={12}>
            <Grid container spacing={2} justifyContent="center">
              {users.slice(i * 2, i * 2 + 2).map((user) => (
                <Grid item key={user} xs={12} sm={5}>
                  <Card
                    className="shadow-md"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      margin: "0 auto",
                      minHeight: "200px",
                    }}
                  >
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <Avatar className="mr-4" />
                        <Typography variant="h6">ユーザー{user}</Typography>
                      </div>
                      <TextField
                        label="年齢"
                        type="number"
                        value={inputValues[user] || ""}
                        onChange={(e) =>
                          handleInputChange(user, e.target.value)
                        }
                        fullWidth
                        margin="normal"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&:hover fieldset": {
                              borderColor: "#5e8e87",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#5e8e87",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                              color: "#5e8e87",
                            },
                          },
                          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                            {
                              "-webkit-appearance": "none",
                              margin: 0,
                            },
                          "& input[type=number]": {
                            "-moz-appearance": "textfield",
                          },
                        }}
                      />
                      {inputErrors[user] && inputValues[user] !== 0 && (
                        <Typography variant="caption" color="error">
                          {inputErrors[user]}
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <div className="mt-8 flex justify-center">
        <BackButton />
      </div>
    </div>
  );
};

export default Page17;
