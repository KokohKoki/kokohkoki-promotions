export default function ProductSkeleton({ counts }) {
  return Array(counts)
    .fill(0)
    .map((_, index) => (
      <div className="w-full relative bg-black group" key={index}>
        <div className="relative flex w-auto animate-pulse gap-2 ">
          <div className="flex-1">
            <div className="h-[250px] sml:h-[315px]  bg-lightText text-sm mb-2" />
            <div className="h-4 sml:h-8  bg-lightText text-sm mb-2" />
            <div className="h-4  bg-lightText text-sm mb-2 " />
            <div className="h-4  bg-lightText text-sm " />
          </div>
        </div>
      </div>
    ));
}
