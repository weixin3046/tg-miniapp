import SelectPage, { SelectProps } from "../components/Select/Select";

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
  return (
    <div className="p-8">
      <SelectPage options={options} />
    </div>
  );
}
