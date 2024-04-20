export default function ErrorItem({ title, desc, desc2, titleClass = "text-white" }) {
  return (
    <>
      <h4 className={`${titleClass} text-4xl`}>{title}</h4>
      <p className="text-lg text-center">{desc}</p>
      <span className="text-lg text-center">{desc2}</span>
    </>
  );
}
