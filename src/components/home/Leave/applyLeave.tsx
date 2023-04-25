import { updateLeaveEnable } from "@/state-mangement/store/slices/leaveEnable";
import { store } from "@/state-mangement/store/store/store";
import { XCircle } from "@phosphor-icons/react";
interface Props {
  visibility: boolean;
}

export default function ApplyLeave({ visibility }: Props) {
  return (
    <div
      className="top-0 absolute left-0 bottom-0 z-10 "
      style={{
        display: visibility ? "flex" : "none",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        position: "absolute",
        backgroundColor: "#2e106578",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        className="bg-white rounded-md shadow-md flex flex-col p-8 overflow-y-scroll "
        style={{ minWidth: "60vw", minHeight: "80vh" }}
      >
        <div className="text-4xl font-bold flex justify-between">
          <span>Apply Leave</span>
          <XCircle
            className="cursor-pointer"
            onClick={() => {
              store.dispatch(updateLeaveEnable());
            }}
          />
        </div>
        <form className="flex  flex-col p-4 gap-3" action="" method="post">
          <label htmlFor="Name">
            <div className="leaveSub">Enter your name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" border p-2 rounded-lg"
              style={{ width: "100%" }}
              required
            />
          </label>
          <label htmlFor="Email">
            <div className="leaveSub">Enter your email</div>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              className=" border p-2 rounded-lg"
              style={{ width: "100%" }}
              required
            />
          </label>
          <label htmlFor="StartDate">
            <div className="leaveSub">Leave Start Date</div>
            <input
              type="date"
              name="leaveStart"
              placeholder="Enter Leave start date"
              className=" border p-2 rounded-lg"
              style={{ width: "100%" }}
              required
            />
          </label>
          <label htmlFor="LeaveEnd">
            <div className="leaveSub">Leave end date</div>
            <input
              type="date"
              name="leaveEnd"
              placeholder="Enter leave end date"
              className=" border p-2 rounded-lg"
              style={{ width: "100%" }}
              required
            />
          </label>
          <label htmlFor="LeaveReason">
            <div className="leaveSub">Reason for leave</div>
            <textarea
              name="leaveReason"
              placeholder="Enter reason for leave"
              className=" border p-2 rounded-lg"
              style={{ width: "100%" }}
              required
            />
          </label>
          <input
            type="hidden"
            name="_next"
            value="https://wgpwaremake.vercel.app/dashboard"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
          <input
            type="hidden"
            name="_subject"
            value="Leave request at Warriors Gruop LLC"
          ></input>
          <button
            type="submit"
            className="p-2  text-white rounded-lg shadow-md bg-primary"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
