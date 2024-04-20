import ErrorItem from "../../components/maintenance-404/error-item";

export default function NotFoundPage() {
  return (
    <div className="text-white h-[50vh] flex justify-center items-center flex-col font-bold gap-2 mx-4">
      <ErrorItem title="404 Not Found" desc="Sorry, we can't find the page you're looking for. . ." />
      <a href="/" className="bg-rose-500 px-4 py-2 rounded shadow text-lg transition duration-150 ease-in-out hover:opacity-80">
        Go Back
      </a>
    </div>
  );
}
