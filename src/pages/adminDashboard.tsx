import { AddUser, Forms } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductionHours } from "@/components";
import EmployeeProductionHours from "@/components/Admin/productionHours";
import WholeEmployeeProductionHours from "@/components/Admin/wholeProdHours";

export default function AdminDashboard() {
  return (
    <>
      <head>
        <title>Admin dashboard</title>
      </head>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main
        className="min-h-screen min-w-full p-8"
        style={{
          backgroundImage: "url(/images/admin.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-[100%] text-white  ">
          <div className="text-3xl font-bold mb-4">Admin Dashboard</div>
          <span>Version 4.0.0 beta</span>
          <div className="w-[100%] flex flex-col gap-4">
            <AddUser />
            <Forms />
            <EmployeeProductionHours />
            <WholeEmployeeProductionHours />
          </div>
        </div>
      </main>
    </>
  );
}
