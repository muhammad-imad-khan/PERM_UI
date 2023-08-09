import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/Charts/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Employee Count" subtitle="  Employee count by department" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;