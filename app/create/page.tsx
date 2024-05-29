import SelectPage, { SelectProps } from "../components/Select/Select";
import NetWorlkSelect, {
  NetworkProps,
} from "../components/Select/NetWorlkSelect";
import TokenSelect from "../components/Select/TokenSelect";

export default function CreatePage() {
  const options: SelectProps[] = [
    {
      id: 1,
      name: "拼手气红包",
    },
    {
      id: 2,
      name: "普通红包",
    },
  ];
  const network: NetworkProps[] = [
    {
      id: 1,
      name: "BNB Chain",
      icon: "",
    },
    {
      id: 2,
      name: "Ethereum",
      icon: "",
    },
    {
      id: 3,
      name: "Polygon",
      icon: "",
    },
    {
      id: 4,
      name: "opBNB",
      icon: "",
    },
  ];
  const token = [
    { id: 1, name: "BNB", icon: "" },
    { id: 2, name: "WBNB", icon: "" },
    { id: 3, name: "USTDD", icon: "" },
  ];
  return (
    <div className="p-5">
      <SelectPage options={options} />
      <div className="space-y-2 mt-5">
        <div className="bg-slate-600 rounded-lg p-5 text-white overflow-hidden">
          <NetWorlkSelect options={network} />
        </div>
        <div className=" bg-slate-600 rounded-lg p-5 text-white overflow-hidden">
          <div className="flex justify-between items-center">
            <div>
              <div>红包数量</div>
            </div>
            <input
              type="text"
              value={"100"}
              className="text-right bg-slate-600 outline-none"
            />
          </div>
        </div>
        <div className="bg-slate-600 rounded-lg p-5 text-white overflow-hidden">
          <TokenSelect options={token} />
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
