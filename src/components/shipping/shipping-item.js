export default function ShippingItem({ title, content }) {
  return (
    <div className="text-white text-start mb-4 max-w-[50rem]">
      <h3 className="text-rose-500 font-bold tracking-wide mb-1 text-xl">{title}</h3>
      <div className="flex flex-col gap-1">
        {content.map((item, index) => (
          <div key={index}>
            <h4 className=" font-semibold mb-1 text-base italic underline underline-offset-2">{item.subtitle}</h4>
            <div className="mb-2 opacity-95 flex flex-col gap-2 ">{item.description}</div>
          </div>
        ))}
       
      </div>
    </div>
  );
}
