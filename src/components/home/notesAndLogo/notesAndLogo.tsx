import Image from "next/image";
import NotesCompoenents from "../notes/notesComponent";

export default function NotesAndLogo() {
  return (
    <div
      className="rounded-md shadow-md flex justify-between items-center"
      style={{
        minWidth: "100%",
        height: "66%",
        backgroundColor: "#2e106578",
        backdropFilter: "blur(5px)",
      }}
    >
      {/* notes */}
      <NotesCompoenents/>
      <div>
        <Image src="/assets/load.png" height={200} width={300} alt="MainLogo" />
      </div>
    </div>
  );
}
