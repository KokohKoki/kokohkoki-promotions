export default function ResetCoupon({ discountCode, onClick }) {
  return (
    <div className="flex flex-wrap items-center gap-1 md:gap-2 justify-center">
      <span className="bg-green-500 px-2 py-1 rounded-md text-white font-bold cursor-default">Applied Code: {discountCode}</span>
      <button onClick={onClick} className="bg-[#e2cf64] px-2 py-1 rounded-md font-semibold shadow transition duratin-150 ease-in-out hover:opacity-80">
        Reset Coupon
      </button>
    </div>
  );
}
