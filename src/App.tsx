import SearchBar from "./components/SearchBar";
import STATES2 from "./components/SearchBar/fake_data/states2.json";

const states = Object.keys(STATES2).map((key) => {
  return {
    key: key,
    value: STATES2[key as keyof typeof STATES2],
  };
});

function App() {
  return (
    <main className="min-h-screen w-full bg-slate-50 p-4">
      <h1 className="text-gray-900 text-lg font-semibold pb-4">Search app</h1>
      <SearchBar
        data={states}
        titleKey="value"
        subtitleKey="key"
        placeholder="Search country"
        onSearchComplete={console.log}
      />
    </main>
  );
}

export default App;
