type HomeCardProps = {
  siteName: string;
  courseCount: number;
  isOpen: boolean;
  topics: string[];
};

export default function HomeCard({
  siteName,
  courseCount,
  isOpen,
  topics,
}: HomeCardProps) {
  return (
    <div className="space-y-6">
      {/* ส่วน Header Card */}
      <header className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">{siteName}</h1>
        <p className="text-gray-500 text-sm mt-1">ยินดีต้อนรับสู่ระบบจัดการรายวิชา</p>
      </header>

      {/* ข้อมูลสถานะและจำนวนรายวิชา */}
      <section className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2">
          ข้อมูลภาพรวมระบบ
        </h2>
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-medium">จำนวนรายวิชา:</span> {courseCount} วิชา
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">สถานะระบบ:</span>
            <span
              className={`font-semibold px-2 py-0.5 rounded text-sm ${
                isOpen
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}
            </span>
          </p>
        </div>
      </section>

      {/* หัวข้อการเรียนรู้ */}
      <section className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2">
          หัวข้อการเรียนรู้
        </h2>
        <ul className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <li
              key={topic}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
            >
              {topic}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}