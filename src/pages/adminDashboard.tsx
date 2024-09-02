import Head from "next/head";
import { AddUser, Forms } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeProductionHours from "@/components/Admin/productionHours";
import WholeEmployeeProductionHours from "@/components/Admin/wholeProdHours";
import ProductivityScore from "@/components/Admin/producitvityscore";
import ProdScoreEmp from "@/components/Admin/prodScoreEmp";
import { getAuth } from "firebase/auth";
import { navigate } from "@/functions";
import { useEffect } from "react";

export default function AdminDashboard() {
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser?.uid !== "Nree5UInH9MQCrrspZFQOKxzdZy2") {
      navigate({ navigateTo: "/", replace: true });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin dashboard</title>
      </Head>
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
          <div className="flex justify-between">
            <div className="text-3xl font-bold mb-4 ">Admin Dashboard</div>
            <button
              onClick={() => {
                auth.signOut().then(() => {
                  navigate({ navigateTo: "/", replace: true });
                });
              }}
            >
              Sign out
            </button>
          </div>
          <span>Version 4.2.2 </span>
          <div className="w-[100%] flex flex-col gap-4">
            <AddUser />
            <Forms />
            <EmployeeProductionHours />
            <WholeEmployeeProductionHours />
            <ProductivityScore />
            <ProdScoreEmp />
          </div>
        </div>
      </main>
    </>
  );
}
