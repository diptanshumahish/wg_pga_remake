import Image from "next/image";

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
      <div>

        
      </div>
      <div>
        <Image src="/assets/load.png" height={200} width={300} alt="MainLogo" />
      </div>
    </div>
  );
}
