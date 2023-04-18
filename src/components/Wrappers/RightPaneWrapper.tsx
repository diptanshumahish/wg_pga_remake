import ClockFunctionality from "../home/Clock/clockFunctionality";
import NotesAndLogo from "../home/notesAndLogo/notesAndLogo";

export default function RightPane() {
  return (
    <div
      className="flex flex-col gap-4 justify-between"
      style={{ width: "100%" }}
    >
      <ClockFunctionality />
      <NotesAndLogo />
    </div>
  );
}