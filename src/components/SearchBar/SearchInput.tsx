type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onClose: () => void;
};

function SearchInput({ onClose, ...props }: SearchInputProps) {
  return (
    <div className="flex items-center bg-white border px-2 mb-3 rounded-md focus-within:border-blue-600/20 focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-blue-600/60">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-gray-500 select-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        {...props}
        type="text"
        id="search"
        className="w-full px-2 py-2 rounded-md border-none outline-none flex-1 text-sm text-gray-950"
      />

      <button onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchInput;
