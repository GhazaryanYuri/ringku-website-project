export const financeChartDiagram_data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Income",
      data: [
        1000, 1500, 800, 2500, 1200, 2000, 700, 3000, 1500, 1800, 1200, 2600,
      ],
      borderColor: "#4F46E5", // Purple-blue line
      borderWidth: 2,
      tension: 0.3, // Smooth curve effect
      fill: false, // No background color
    },
  ],
};

export const financeChartBottom_data = [
  {
    img: "Icons/lifetime-income.svg",
    title: "Lifetime Income",
    price: "40,728",
  },
  {
    img: "Icons/lifetime-outcome.svg",
    title: "Lifetimie Outcome",
    price: "30,239",
  },
  {
    img: "Icons/bonus-income.svg",
    title: "Bonus Income",
    price: "2,490",
  },
];
