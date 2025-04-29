import { TextInput, Select, Group, Box } from '@mantine/core';

const SearchBar = ({ searchTerm, setSearchTerm, selectedType, setSelectedType, types }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-4 justify-center">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border-2 border-purple-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
