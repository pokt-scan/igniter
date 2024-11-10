import { uPoktConvertionRate } from "@/lib/constants";
import type { ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";

interface Reward {
  value: number;
  label: string;
}

interface RewardsChartProps {
  values?: { total_net_rewards: number; point: string }[];
}

const COLORS = {
  JANUARY_GRADIENT_START: "#e3bdff",
  JANUARY_GRADIENT_END: "#b596ff",
  JANUARY_BORDER: "#866fb7",

  CURRENT_MONTH_GRADIENT_START: "#face77",
  CURRENT_MONTH_GRADIENT_END: "#ff9e60",
  CURRENT_MONTH_BORDER: "#ea9852",

  DEFAULT_GRADIENT_START: "#a4abf1",
  DEFAULT_GRADIENT_END: "#708ad7",
  DEFAULT_BORDER: "#5f7cd4",
};

function getBarProperties(dateString: string) {
  const dateLabel = dayjs(dateString, "MMM YYYY");
  const stringLabel =
    dateLabel.month() === 0
      ? dateLabel.format("YY")
      : dateLabel.format("MMM").charAt(0);
  let gradientColors;
  let topBorderColor = "";

  if (dateLabel.month() === 0) {
    gradientColors = [
      COLORS.JANUARY_GRADIENT_START,
      COLORS.JANUARY_GRADIENT_END,
    ];
    topBorderColor = COLORS.JANUARY_BORDER;
  } else if (
    dateLabel.month() === dayjs().month() &&
    dateLabel.year() === dayjs().year()
  ) {
    gradientColors = [
      COLORS.CURRENT_MONTH_GRADIENT_START,
      COLORS.CURRENT_MONTH_GRADIENT_END,
    ];
    topBorderColor = COLORS.CURRENT_MONTH_BORDER;
  } else {
    gradientColors = [
      COLORS.DEFAULT_GRADIENT_START,
      COLORS.DEFAULT_GRADIENT_END,
    ];
    topBorderColor = COLORS.DEFAULT_BORDER;
  }

  return { label: stringLabel, gradientColors, topBorderColor };
}

const getGradient = (
  ctx: CanvasRenderingContext2D,
  colorStart: string,
  colorEnd: string
) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);
  return gradient;
};

const topBorderPlugin = {
  id: "bar_chart_top_border",
  afterDatasetsDraw: (chart) => {
    const ctx = chart.ctx;
    chart.getDatasetMeta(0).data.forEach((metaData, index) => {
      ctx.save();
      ctx.fillStyle = getBarProperties(chart.data.labels[index]).topBorderColor;
      ctx.fillRect(
        metaData.x - metaData.width / 2,
        metaData.y,
        metaData.width,
        2
      );
    });
  },
};

const options = (theme: ThemeOptions): ChartOptions => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          return tooltipItem.formattedValue + "  POKT";
        },
      },
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        color(ctx) {
          const isNumber = !isNaN(parseInt(ctx.tick.label as string));

          return isNumber
            ? theme.palette.text.primary
            : theme.isLight
            ? theme.customColors.gray1
            : theme.customColors.white0;
        },
        font: {
          family: "Overpass Mono",
          size: 11,
          weight: "600",
        },
        callback: function (value) {
          const realValue = this.getLabelForValue(value as number);

          return getBarProperties(realValue).label;
        },
      },
    },
  },
});

const RewardsChart: React.FC<RewardsChartProps> = ({ values = [] }) => {
  const theme = useTheme();
  const [data, setData] = useState<Reward[]>([{ value: 0, label: "" }]);

  useEffect(() => {
    if (!values.length) return;
    const formattedValues = values.map((p) => ({
      value: p.total_net_rewards / uPoktConvertionRate,
      label: dayjs(p.point, "YYYY-MM").format("MMM YYYY"),
    }));
    setData(formattedValues);
  }, [values]);

  if (!data.length) return <div>No rewards</div>;

  return (
    <Bar
      //@ts-ignore
      options={options(theme)}
      data={{
        labels: data.map((p) => p.label),
        datasets: [
          {
            data: data.map((p) => p.value),
            borderSkipped: "top",
            backgroundColor: (context) => {
              const [start, end] = getBarProperties(
                data[context.dataIndex].label
              ).gradientColors;
              return getGradient(context.chart.ctx, start, end);
            },
            barThickness: data.length > 12 ? 6 : 10,
            borderRadius: 10,
          },
        ],
      }}
      plugins={[topBorderPlugin]}
    />
  );
};

export default RewardsChart;
