import { bands } from "../data/bandsdata";
import BandsExplorer from "../components/BandsExplorer";
import type { Metadata } from "next"; 
 
export const metadata: Metadata = { 
  title: "วงดนตรีทั้งหมด", 
};

export default function BandsPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <header className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">วงดนตรี</h1>
        <p className="text-gray-500 text-sm mt-1">ข้อมูลสมาชิกและผลงานเพลงของวงดนตรี</p>
      </header>
      
      <BandsExplorer bands={bands} />  

      
    </main>
  );
}