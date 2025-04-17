import { useNavigate } from "react-router-dom";

function SearchFeature() {
  const navigate = useNavigate();
  const handleNavigate = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/CreateProduct");
  };
  const handleNavigateToDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate("/DeleteProduct");
  };

  return (
    <div>
      {" "}
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="button"
          onClick={handleNavigate}
        >
          Create Product
        </button>
        <button
          className="btn btn-outline-danger my-2 my-sm-0 ml-2"
          type="button"
          onClick={handleNavigateToDelete}
        >
          Delete Product
        </button>
      </form>
    </div>
  );
}
export default SearchFeature;
