import { getWorkHours } from "@/functions/Admin/getWorkHours";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export default function WholeEmployeeProductionHours() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const [showData, setShowData] = useState(false);
  var initEmails: string[] = [];
  var inithours: number[] = [];
  const [numberData, setNumberData] = useState(inithours);
  const [emailsData, setEmailData] = useState(initEmails);

  const data = {
    labels: emailsData,

    datasets: [
      {
        label: "Employee production hours",
        data: numberData,
        backgroundColor: "#7d4aaa74",
        borderColor: "#7d4aaa",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className="p-8 bg-formBack rounded-md shadow-sm flex flex-col gap-4 w-[100%]"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="text-2xl font-bold">Whole Employee Production Hours </div>
      {showData ? (
        <div className="bg-white">
          <Bar
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  position: "bottom",
                  text: "Comparitive report of employees total production",
                },
                colors: {
                  enabled: true,
                },
              },
            }}
          />
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              getWorkHours().then((value) => {
                setEmailData(value.emails);
                setNumberData(value.hours);
                console.log(emailsData);
                setShowData(true);
              });
            }}
          >
            Show Data
          </button>
        </div>
      )}
    </div>
  );
}
