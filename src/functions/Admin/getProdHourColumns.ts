const ele = [
  {
    name: "date",

    selector: "date",
    style: {
      backgroundColor: "rgba(63, 195, 128, 0.9)",
      color: "white",
    },
    sortable: true,
  },
  {
    name: "Hours",
    selector: "value",
  },
];

export default function getHourColumns() {
  return ele;
}
