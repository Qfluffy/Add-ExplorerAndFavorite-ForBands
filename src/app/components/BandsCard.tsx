"use client";

import { useState, useEffect } from "react";
import { Band } from "../types/band";

interface BandsCardProps {
  band: Band;
  isFollowing?: boolean;
  onToggleFollow?: (id: number) => void;
}

export default function BandsCard({
  band,
  isFollowing = false,
  onToggleFollow,
}: BandsCardProps) {
  const [likes, setLikes] = useState(0);

  // ดึงค่ายอด Like จาก localStorage เมื่อโหลดหน้า
  useEffect(() => {
    const savedLikes = localStorage.getItem(`band_like_${band.id}`);
    if (savedLikes !== null) {
      setLikes(parseInt(savedLikes, 10));
    }
  }, [band.id]);

  // ฟังก์ชันกด Like และบันทึกลง localStorage ทันที
  const handleLike = () => {
    setLikes((prev) => {
      const nextLikes = prev + 1;
      localStorage.setItem(`band_like_${band.id}`, nextLikes.toString());
      return nextLikes;
    });
  };

  return (
    <article className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm space-y-4">
      {/* ส่วนหัว โลโก้ + ชื่อวง/แนวเพลง + ปุ่ม Like/ติดตาม */}
      <div className="flex items-center justify-between gap-4">
        {/* ฝั่งซ้าย: โลโก้ + ชื่อวง และแนวเพลงด้านล่าง */}
        <div className="flex items-center gap-3">
          <img
            src={band.logo}
            alt={band.name}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800 leading-tight">
              {band.name}
            </h2>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full inline-block mt-1">
              {band.genre}
            </span>
          </div>
        </div>

        {/* ฝั่งขวา: ปุ่ม Like และปุ่มติดตาม */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleLike}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-200 text-rose-600 bg-rose-50 hover:bg-rose-100 text-xs font-semibold transition-colors cursor-pointer"
          >
            ❤️ <span>{likes}</span>
          </button>

          <button
            type="button"
            onClick={() => onToggleFollow && onToggleFollow(band.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              isFollowing
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
            }`}
          >
            {isFollowing ? "กำลังติดตาม" : "+ ติดตาม"}
          </button>
        </div>
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
              <span className="text-sm font-medium text-gray-700">
                {member.name}
              </span>
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