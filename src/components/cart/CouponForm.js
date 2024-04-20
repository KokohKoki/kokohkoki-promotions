import { Spinner } from "../UI/animations";

export default function CouponForm({ onSubmit, couponRef, loading }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-wrap items-center gap-1 md:gap-2 justify-center">
      <input id="coupon-input" className="w-44 md:w-52 h-8 p-4 border-2 border-[#e2cf64] text-primeColor text-sm outline-none rounded-md" type="text" placeholder="Coupon Code" ref={couponRef} />
      <button type="submit" className="text-sm font-semibold bg-[#e2cf64] py-1.5 px-3 rounded-md shadow flex gap-2 items-cente transition duratin-150 ease-in-out hover:opacity-80">
        {loading ? (
          <>
            <Spinner />
            Applying. . .
          </>
        ) : (
          <span>Apply Coupon</span>
        )}
      </button>
    </form>
  );
}
