import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Home = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useHistory();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  return (
    <div className=" md:w-[50%] mx-auto px-4">
      <form onSubmit={handleSubmit} className=''>
        <div className='bg-amber-500' >
          <SelectField options={response.trivia_categories} label="Category" />
        </div>
        <div className='bg-amber-500' >
          <SelectField options={difficultyOptions} label="Difficulty" />
        </div>
        <div className='bg-amber-500' >
          <SelectField options={typeOptions} label="Type" />
        </div>
        <TextFieldComp />
        <div className="mt-6 bg-orange-900 rounded-full  hover:bg-teal-500 shadow-stone-500 shadow-2xl">
          <Button className="w-full" type="submit">
            <h1 className="text-white hover:text-black font-bold ">Get Started</h1>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
