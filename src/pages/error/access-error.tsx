import { Typography } from "@mui/material";
import BackButton from "@/components/helper/BackButton";

const AccessError = () => {
  return (
    <div className="bg-white min-h-screen pt-16 flex flex-col">
      <Typography
        variant="h5"
        align="left"
        className="py-4 font-bold text-custom1 pl-14"
      >
        Access Error
      </Typography>
      <div className="flex-grow flex flex-col items-center justify-start mt-16 bg-white text-black">
        <Typography variant="h4" className="mb-4" fontWeight="bold">
          アクセス権限がありません
        </Typography>
        <BackButton />
      </div>
    </div>
  );
};

export default AccessError;
