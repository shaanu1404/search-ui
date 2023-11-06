import { useState, useMemo } from "react";
import SearchInput from "./SearchInput";
import SearchModal from "./SearchModal";
import SearchList from "./SearchList";

type SearchBarProps<T> = {
  data: T[];
  titleKey: keyof T;
  subtitleKey?: keyof T;
  onSearchComplete: (value: T) => void;
  placeholder?: string;
};

function SearchBar<T extends Record<string, any>>(props: SearchBarProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleClose = () => {
    if (searchText.trim()) {
      setSearchText("");
    } else {
      setIsOpen(false);
    }
  };

  const handleItemSelected = (item: T) => {
    props.onSearchComplete(item);
    setSearchText(item[props.titleKey]);
    setIsOpen(false);
  };

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value);
  };

  const items: T[] = useMemo(() => {
    if (searchText.trim()) {
      return props.data.filter((item) =>
        item[props.titleKey].toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return props.data;
  }, [searchText]);

  const Input = (
    <SearchInput
      value={searchText}
      onChange={handleSearch}
      onClose={handleClose}
      onFocus={() => setIsOpen(true)}
      autoFocus={isOpen}
      placeholder={props.placeholder}
    />
  );

  if (!isOpen) {
    return (
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {Input}
      </div>
    );
  }

  return (
    <SearchModal>
      {Input}
      <SearchList
        data={items}
        onSelect={handleItemSelected}
        titleKey={props.titleKey}
        subtitleKey={props.subtitleKey}
      />
    </SearchModal>
  );
}

export default SearchBar;
