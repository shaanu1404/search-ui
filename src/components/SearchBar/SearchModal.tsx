type SearchModalProps = {
  children: React.ReactNode | React.ReactNode[];
};

function SearchModal({ children }: SearchModalProps) {
  return (
    <div className="min-h-screen bg-white py-4 px-3 absolute inset-0 border rounded-md flex flex-col">
      {children}
    </div>
  );
}

export default SearchModal;
