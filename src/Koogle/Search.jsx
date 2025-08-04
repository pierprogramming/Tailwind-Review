import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-violet-100">
      <div className="text-6xl text-violet-700 m-6">Koogle</div>
      <div className="flex bg-violet-300 p-4 border border-violet-400 rounded-full w-80">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-violet-700 text-xl"
        />
        <input type="text" className="flex-1 bg-violet-300 mx-4" />
      </div>
      <div className="mt-4">
        <button className="hover:text-violet-700 rounded-md bg-green-300 text-white px-4 py-2 mx-2">
          Koogle Search
        </button>
        <button className="hover:text-violet-700 rounded-md bg-green-300 text-white px-4 py-2 mx-2">
          Image Search
        </button>
      </div>
    </div>
  );
};

export default Search;
