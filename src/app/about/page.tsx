import AboutCard from "../components/AboutCard";

export default function AboutPage() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <AboutCard
        title="เกี่ยวกับเรา"
        description="เว็บไซต์นี้เป็นเว็บไซต์สำหรับนักศึกษาในการลงทะเบียนเรียนและดูข้อมูลรายวิชา"
      />
    </div>
  );
}