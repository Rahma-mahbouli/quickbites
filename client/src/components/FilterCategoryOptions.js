import { Option, OptionList } from './SortProductsOptions';

export default function FilterCategoryOptions({ categories, setCategoryPreference, defaultValue }) {

  const handleChange = (e) => {
    e.preventDefault();
    setCategoryPreference(e.target.value);
  }

  return (
    <OptionList value={defaultValue} name="filterProductsByCategory" onChange={(e) => handleChange(e)}>

      <Option value="all">All Categories</Option>

      {categories?.map(category =>
        <Option value={category.name} key={category._id}>{category.name}</Option>
      )}

    </OptionList>
  );
}
