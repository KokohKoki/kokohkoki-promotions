export default function AboutItem({ title, content }) {
  return (
    <div className="text-white text-start mb-4 max-w-[50rem]">
      <h3 className="text-rose-500 font-bold tracking-wide italic mb-1 text-lg">{title}</h3>
      <div className="flex flex-col gap-1 ">{content}</div>
    </div>
  );
}
