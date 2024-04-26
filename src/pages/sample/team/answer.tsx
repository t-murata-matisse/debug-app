import BackButton from "@/components/helper/BackButton";
import { Typography, Card, CardContent, Box, Divider } from "@mui/material";
import { answerData } from "../../../../answerData";

const AnswerPage = () => {
  return (
    <div className="bg-white min-h-screen pt-16">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        解答ページ
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-16">
        {answerData.map((answer, index) => (
          <Card key={index} className="shadow-lg border border-gray-200">
            <CardContent>
              <Typography
                variant="h6"
                className="font-bold mb-4 bg-custom1 text-white py-2 px-4 rounded"
              >
                Page - {answer.page}
              </Typography>
              <Box className="space-y-4">
                <Box>
                  <Typography
                    variant="subtitle1"
                    className="font-bold mb-1 text-gray-700"
                  >
                    エラー発生手順:
                  </Typography>
                  <Typography
                    variant="body1"
                    className="bg-gray-100 py-2 px-3 rounded"
                  >
                    {answer.procedure}
                  </Typography>
                </Box>
                <Divider />

                <Box>
                  <Typography
                    variant="subtitle1"
                    className="font-bold mb-1 text-gray-700"
                  >
                    対象APIのエンドポイント:
                  </Typography>
                  <Typography
                    variant="body1"
                    className="bg-gray-100 py-2 px-3 rounded"
                  >
                    {answer.endpoint}
                  </Typography>
                </Box>
                <Divider />

                <Box>
                  <Typography
                    variant="subtitle1"
                    className="font-bold mb-1 text-gray-700"
                  >
                    ステータスコード:
                  </Typography>
                  <Typography
                    variant="body1"
                    className="bg-gray-100 py-2 px-3 rounded"
                  >
                    {answer.statusCode}
                  </Typography>
                </Box>
                <Divider />

                <Box>
                  <Typography
                    variant="subtitle1"
                    className="font-bold mb-1 text-gray-700"
                  >
                    原因:
                  </Typography>
                  {answer.cause.map((cause, causeIndex) => (
                    <Typography
                      key={causeIndex}
                      variant="body1"
                      className="bg-gray-100 py-2 px-3 rounded mb-2"
                    >
                      {cause}
                    </Typography>
                  ))}
                </Box>
                <Divider />

                <Box>
                  <Typography
                    variant="subtitle1"
                    className="font-bold mb-1 text-gray-700"
                  >
                    対応:
                  </Typography>
                  {answer.solution.map((solution, solutionIndex) => (
                    <Typography
                      key={solutionIndex}
                      variant="body1"
                      className="bg-gray-100 py-2 px-3 rounded mb-2"
                    >
                      {solution}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center pb-8">
        <BackButton />
      </div>
    </div>
  );
};

export default AnswerPage;
