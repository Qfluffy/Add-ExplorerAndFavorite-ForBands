import { Band } from "../types/band";

export default function BandsCard({ band }: { band: Band }) {
  return (
    <article className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm space-y-4">
      {/* ส่วนหัว โลโก้ + ชื่อวง + แนวเพลง */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={band.logo}
            alt={band.name}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{band.name}</h2>
          </div>
        </div>
        <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">
          {band.genre}
        </span>
      </div>

      {/* สมาชิกในวง */}
      <div className="border-t pt-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">รายชื่อสมาชิก</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {band.members.map((member) => (
            <div
              key={member.name}
              className="flex items-center justify-between p-2 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
            >
              {/* ชื่อสมาชิก */}
              <span className="text-sm font-medium text-gray-700">
                {member.name}
              </span>

              {/* รูปสมาชิก */}
              <img
                src={member.image}
                alt={member.name}
                className="w-10 h-10 object-cover rounded-md border border-gray-300 shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ตัวอย่างเพลง */}
      <div className="border-t pt-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">ตัวอย่างผลงานเพลง</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
          {band.songs.map((song) => (
            <li key={song}>{song}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}