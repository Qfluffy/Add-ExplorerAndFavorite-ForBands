type AboutCardProps = {
  title: string;
  description: string;
};

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <article className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
      <h1 className="text-xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </article>
  );
}