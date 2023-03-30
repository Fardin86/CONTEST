import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
  const disptach = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const handleBackToQuiz = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    history.push("/");
  };

  return (
    <div className="text-center py-40 px-4">
      <h1 className="text-5xl text-white ofont-bold mb-8">
        Final Score {score}
      </h1>
      <div className="py-2 bg-orange-500 rounded-full w-[50%] md:w-[40%] mx-auto hover:bg-cyan-500">
        <Button className="" onClick={handleBackToQuiz}>
          <h1 className="text-lg text-black hover:text-red">back to quiz!</h1>
        </Button>
      </div>
    </div>
  );
};

export default FinalScreen;
