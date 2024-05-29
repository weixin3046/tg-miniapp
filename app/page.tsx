import Link from "next/link";
import DialogPage from "./components/Dialog/Dialog";

export default function Home() {
  const onClose = () => {};
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>home page</h1>
      <Link href={"/create"}>🧧 创建红包</Link>
      <Link href={"/view"}>🧧 查看红包</Link>
      <Link href={"/rule"}>📄 查看规则</Link>
      <Link href={"/asset"}>💰 我的资金</Link>
    </div>
  );
}
