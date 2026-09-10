"use client";

import { useState, useEffect } from "react";
import { bands } from "../data/bandsdata";
import BandsExplorer from "../components/BandsExplorer";

export default function BandsPage() {
  const [followedIds, setFollowedIds] = useState<number[]>([]);
  // สถานะเปิด/ปิด เมนูแสดงวงที่ติดตาม
  const [isOpenFollowMenu, setIsOpenFollowMenu] = useState(false);

  // ดึงรายการวงที่ติดตามจาก localStorage
  useEffect(() => {
    const saved = localStorage.getItem("followed_bands");
    if (saved) {
      try {
        setFollowedIds(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // สลับสถานะติดตามและบันทึกลง localStorage
  const handleToggleFollow = (id: number) => {
    setFollowedIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      localStorage.setItem("followed_bands", JSON.stringify(updated));
      return updated;
    });
  };

  // กรองเฉพาะข้อมูลวงที่กำลังติดตามอยู่
  const followedBands = bands.filter((band) => followedIds.includes(band.id));

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      {/* ส่วน Header แยกเป็นการ์ดซ้าย-ขวา */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {/* การ์ดฝั่งซ้าย: ข้อมูลหัวข้อ วงดนตรี */}
        <section className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">วงดนตรี</h1>
          <p className="text-gray-500 text-sm mt-1">
            ข้อมูลสมาชิกและผลงานเพลงของวงดนตรี
          </p>
        </section>

        {/* การ์ดฝั่งขวา: เมนู "วงที่ติดตาม" */}
        <section className="relative bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
          <button
            type="button"
            onClick={() => setIsOpenFollowMenu((prev) => !prev)}
            className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              ⭐ วงที่ติดตาม
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                {followedBands.length}
              </span>
              <span className="text-gray-400 text-xs">
                {isOpenFollowMenu ? "▲" : "▼"}
              </span>
            </div>
          </button>

          {/* รายละเอียดที่จะแสดงเมื่อคลิกกดเปิดเมนู */}
          {isOpenFollowMenu && (
            <div className="mt-4 pt-3 border-t border-gray-100 space-y-3">
              <p className="text-xs font-semibold text-gray-600">
                ติดตามอยู่ <span className="text-blue-600 font-bold">{followedBands.length}</span> วง
              </p>

              {followedBands.length > 0 ? (
                <ul className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {followedBands.map((band) => (
                    <li
                      key={band.id}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded-md border border-gray-100"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={band.logo}
                          alt={band.name}
                          className="w-7 h-7 rounded-full object-cover border border-gray-200 shrink-0"
                        />
                        <span className="text-xs font-medium text-gray-800 truncate">
                          {band.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleToggleFollow(band.id)}
                        className="text-[11px] text-rose-500 hover:text-rose-700 hover:underline shrink-0 ml-2 cursor-pointer"
                      >
                        เลิกติดตาม
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-gray-400 py-1">
                  ยังไม่ได้กดติดตามวงใดเลย
                </p>
              )}
            </div>
          )}
        </section>
      </div>

      {/* Explorer Component แสดงรายการการ์ดของแต่ละวง */}
      <BandsExplorer
        bands={bands}
        followedIds={followedIds}
        onToggleFollow={handleToggleFollow}
      />
    </main>
  );
}