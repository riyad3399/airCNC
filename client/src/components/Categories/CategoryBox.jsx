import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ labal, icon: Icon }) => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      category: labal,
    };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 cursor-pointer hover:text-neutral-800 border-transparent text-neutral-500"
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{labal}</div>
    </div>
  );
};

export default CategoryBox;
