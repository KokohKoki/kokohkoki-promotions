import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import ProductSkeleton from "../../home/Products/Product-Skeleton";
import { useSelector } from "react-redux";

function Items({ currentItems }) {
  const selectedCurrency = useSelector(
    (state) => state.orebiReducer.selectedCurrency
  );
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full h-full bg-black border">
            <Product
              _id={item._id}
              img={item.images.image1}
              img2={item.images.image2}
              img3={item.images.image3}
              name={item.name}
              desc={item.desc}
              size={item.size}
              price={`${
                selectedCurrency === "USD"
                  ? `${item.price_usd}`
                  : `${item.price}`
              }`}
              discountPrice={
                item.discount
                  ? selectedCurrency === "USD"
                    ? item.discount.discountPriceUsd
                    : item.discount.discountPriceIdr
                  : ""
              }
              discountPercentage={item.discount?.discountPercentage}
              discount={item.discount?.isDiscount}
              gender={item.gender}
              type={item.type}
              isAvailable={item.isAvailable}
              isNewArrival={item.isNewArrival}
              isEvent={item.isEvent}
              event={item.event}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({
  status,
  error,
  items,
  itemsPerPage,
  itemOffset,
  setItemOffset,
  setCurrentPage,
  currentPage,
  sorts,
}) => {
  if (status === "pending")
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mdl:gap-4 lg:gap-10 ">
        <ProductSkeleton counts={10} />
      </div>
    );

  if (error && error.response && error.response.status === 404) {
    return (
      <div className="flex flex-wrap gap-2 justify-start h-52 ">
        <div className="bg-white flex flex-col justify-center w-full items-center gap-2 py-2 rounded-lg shadow">
          <h4 className="text-xl flex font-extrabold tracking-wide cursor-default">
            Fish Not Found
          </h4>
          <p className="text-base font-normal cursor-default text-center">
            We couldn't find any fish matching your sorting:{" "}
            <span className="capitalize font-semibold italic">
              {sorts.type ? sorts.type : ""}{" "}
              {sorts.gender ? ` & ${sorts.gender}` : ""}
            </span>
          </p>
          <p className="text-sm md:text-base font-normal px-4 text-center opacity-90 italic">
            Please try adjusting your sorting or explore other typers or gender.
          </p>
        </div>
      </div>
    );
  }

  const itemStart = itemOffset + 1;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${newOffset}`
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center ">
        <ReactPaginate
          nextLabel=""
          forcePage={currentPage}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="bg-rose-500 w-9 h-9 flex justify-center items-center border"
          pageClassName="mr-6 border-none transition duration-300 ease-in-out  hover:opacity-80 text-white"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName=""
          activeLinkClassName="bg-rose-500 opacity-50 border"
        />

        <p className="text-base font-normal text-white">
          Products from {itemStart} to {endOffset} of {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
