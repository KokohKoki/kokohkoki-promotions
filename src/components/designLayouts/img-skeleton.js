import classes from "./img-skeleton.module.css";

export function ImgSkeleton({ skeletonClass = "h-[250px] sml:h-[315px]" }) {
  return (
    <div className="relative flex w-auto animate-pulse gap-2">
      <div className={`${skeletonClass} w-full  bg-lightText text-sm flex justify-center`}>
        <svg viewBox="25 25 50 50" className={classes.svgTag}>
          <circle r="20" cy="50" cx="50" className={classes.circleLoader}></circle>
        </svg>
      </div>
    </div>
  );
}

export function BannerSkeleton() {
  return (
    <div className="flex mx-10 my-4 lgl:mx-12 md:my-8 justify-center">
      <div className="relative flex w-full animate-pulse gap-2">
        <div className="h-[90px] sml:h-[120px] md:h-[300px] lgl:h-[300] xl:h-[500px] w-full bg-lightText text-sm flex justify-center rounded-3xl lg:rounded-[100px]">
          <svg viewBox="25 25 50 50" className={classes.svgTag}>
            <circle r="20" cy="50" cx="50" className={classes.circleLoader}></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
