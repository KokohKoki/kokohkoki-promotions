export default function BasicSkeleton({ counts }) {
  return Array(counts)
    .fill(0)
    .map((_, index) => (
      <div className="w-full relative bg-transparent  group" key={index}>
        <div className="relative flex w-auto animate-pulse gap-2 ">
          <div className="flex-1">
            <div className="h-10  bg-lightText text-sm mb-2 rounded-md" />
          </div>
        </div>
      </div>
    ));
}
