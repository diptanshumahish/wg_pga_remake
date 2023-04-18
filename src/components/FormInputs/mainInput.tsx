interface Props {
  type?: string;
  setVarName: (e: any) => any;
  placeHolder: string;
  value?: string;
  data?: {
    dataList: string;
    options: any[];
  };
}
export default function MainInput({
  type = "text",
  setVarName,
  placeHolder,
  value,
  data,
}: Props) {
  return (
    <>
      <input
        list={data?.dataList}
        placeholder={placeHolder}
        className="rounded-md p-2 text-slate-950 bg-white opacity-90 focus:opacity-100 focus:outline-none "
        type={type}
        value={value}
        onChange={(e) => {
          setVarName(e.target.value);
        }}
      />
      <datalist id={data?.dataList}>
        {data?.options.map((ele,idx) => {
          return <option key={idx*26} value={ele}>{ele}</option>;
        })}
      </datalist>
    </>
  );
}
