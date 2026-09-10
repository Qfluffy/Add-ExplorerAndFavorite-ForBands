"use client";

import { useState, type ChangeEvent } from "react";
import { Band } from "../types/band";
import BandsCard from "./BandsCard";

type BandsExplorerProps = {
    bands: Band[];
    followedIds: number[];
    onToggleFollow: (id: number) => void;
};

export default function BandsExplorer({
    bands,
    followedIds,
    onToggleFollow,
}: BandsExplorerProps) {
    const [keyword, setKeyword] = useState("");

    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    const searchText = keyword.trim().toLowerCase();
    //เก็บการค้นหาไว้ในตัวแปรใหม่
    const visibleBands = bands.filter(
        (band) =>
            //ค้นหาชื่อวง "หรือ" รหัสวง
            band.name.toLowerCase().includes(searchText) ||
            band.id.toString().includes(searchText)
    );

    return (
        <div className="mx-auto max-w-2xl p-4">
            <input className="border border-gray-300 rounded-md p-2 w-full mb-4"

                type="search"
                aria-label="ค้นหาวง"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="ค้นหาชื่อวงหรือชื่อตัวอย่างเพลง"
            />

            {visibleBands.length === 0 ? (
                <p>ไม่พบวงที่ตรงกับเงื่อนไข</p>
            ) : (
                <section className="">
                    {visibleBands.map((band) => (
                        <BandsCard
                            key={band.id}
                            band={band}
                            isFollowing={followedIds.includes(band.id)}
                            onToggleFollow={onToggleFollow}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}
