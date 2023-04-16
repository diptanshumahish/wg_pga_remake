import Router from "next/router";
interface Props {
  mainContent: string;
  onActionChange: () => void;
}
export default function MainButton({ mainContent, onActionChange }: Props) {
  const router = Router;
  return (
    <button
      className=" w-full bg-white rounded-md font-bold shadow-md text-slate-950"
      style={{ padding: "0.5rem 4rem " }}
      onClick={onActionChange}
    >
      {mainContent}
    </button>
  );
}
