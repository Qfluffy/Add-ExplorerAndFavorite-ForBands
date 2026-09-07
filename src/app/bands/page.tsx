import { bands } from "../data/bandsdata";
import BandsCard from "../components/BandsCard";

export default function BandsPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <header className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">วงดนตรีที่ชอบ</h1>
        <p className="text-gray-500 text-sm mt-1">ข้อมูลสมาชิกและผลงานเพลงของวงดนตรี</p>
      </header>

      {/* แสดงการ์ดวงเรียงต่อลงมา */}
      <div className="space-y-4">
        {bands.map((band) => (
          <BandsCard key={band.id} band={band} />
        ))}
      </div>
    </main>
  );
}