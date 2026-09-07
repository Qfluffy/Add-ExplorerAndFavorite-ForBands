import HomeCard from "./components/HomeCard";

export default function HomePage() {
  const siteName = "CSMJU Website";
  const courseCount = 3;
  const isOpen = true;
  const topics: string[] = ["HTML", "CSS", "TypeScript", "Next.js"];

  return (
    <main className="max-w-3xl mx-auto p-6">
      <HomeCard
        siteName={siteName}
        courseCount={courseCount}
        isOpen={isOpen}
        topics={topics}
      />
    </main>
  );
}