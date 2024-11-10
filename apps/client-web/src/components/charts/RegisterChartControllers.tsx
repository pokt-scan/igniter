import { useEffect, type FunctionComponent } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  BarController,
  Filler,
  Legend,
  PointElement,
  Tooltip,
  ArcElement,
  LineController,
  Title,
  LogarithmicScale,
  registerables,
} from "chart.js";

const RegisterChartControllers: FunctionComponent = () => {
  useEffect(() => {
    Chart.register(
      BarController,
      LineController,
      LineElement,
      ArcElement,
      PointElement,
      BarElement,
      CategoryScale,
      LinearScale,
      Title,
      Filler,
      Legend,
      Tooltip,
      LogarithmicScale,
      ...registerables
    );
  }, []);

  return null;
};

export default RegisterChartControllers;
