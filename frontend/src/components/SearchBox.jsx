import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="flex border-2 rounded-md">
      <input
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search"
        className="outline-none border-none px-1 w-32 ml-2"
      ></input>
      <button type="submit" className="px-2 text-blue-600 cursor-pointer" onClick={submitHandler}>
        <IoSearch />
      </button>
    </div>
  );
};
export default SearchBox;
