import { Option, OptionList } from "./SortProductsOptions";

export default function FilterOrdersStateOptions({
  setStatePreference,
  setPage,
  defaultValue,
}) {
  const handleChange = (e) => {
    e.preventDefault();
    setPage(1);
    setStatePreference(e.target.value);
  };

  return (
    <OptionList
      defaultValue={defaultValue}
      name="filterOrdersByState"
      onChange={(e) => handleChange(e)}
    >
      <Option value="all">All</Option>
      <Option value="finish">Completed</Option>
      <Option value="unfinished">Pending</Option>
    </OptionList>
  );
}
