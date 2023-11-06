type SearchListProps<T> = {
  data: T[];
  titleKey: keyof T;
  subtitleKey?: keyof T;
  onSelect: (item: T) => void;
};

const SearchList = <T extends Record<string, any>>({
  data,
  titleKey,
  subtitleKey,
  onSelect,
}: SearchListProps<T>) => {
  function renderItem(title: string, subtitle?: string) {
    return (
      <div className="py-2 px-1 cursor-pointer">
        <h5 className="text-sm text-black font-semibold">{title}</h5>
        {subtitle && <p className="text-xs text-gray-800">{subtitle}</p>}
      </div>
    );
  }

  return (
    <ul className="flex-1 overflow-y-scroll">
      {data?.map((item, idx) => (
        <li key={idx} onClick={() => onSelect(item)}>
          {renderItem(
            item[titleKey],
            subtitleKey ? `Code: ${item[subtitleKey]}` : undefined
          )}
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
