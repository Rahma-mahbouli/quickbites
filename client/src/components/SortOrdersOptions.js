import { Option, OptionList } from './SortProductsOptions';

export default function SortOrdersOptions({ setSortPreference, defaultValue }) {
  return (
    <OptionList defaultValue={defaultValue} name="sortProductBy" onChange={(e) => setSortPreference(e.target.value)}>
      <Option value="-createdAt">Most Recent</Option>
      <Option value="createdAt">Oldest</Option>
      <Option value="total">Lowest Amount</Option>
      <Option value="-total">Highest Amount</Option>
    </OptionList>
  );
}
