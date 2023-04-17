import { updateFormEnable } from "@/state-mangement/store/slices/formEnabe";
import { store } from "@/state-mangement/store/store/store";
import { Table, CaretLeft } from "@phosphor-icons/react";

export default function MainForm() {
  return (
    <div
      className="bg-white rounded-md shadow-lg p-4"
      style={{ width: "50vw", height: "80vh" }}
    >
      <div className="flex justify-between items-center text-2xl ">
        <span
          className="flex items-center font-bold cursor-pointer"
          onClick={() => {
            store.dispatch(updateFormEnable());
          }}
        >
          <CaretLeft />
          Forms Selection
        </span>{" "}
        <Table size={25} />
      </div>
    </div>
  );
}
