import { Card, Image, Text, Badge, Stack, Group } from '@mantine/core';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform hover:shadow-2xl cursor-pointer flex flex-col items-center">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-28 h-28 object-contain mb-4"
      />
      <h2 className="text-xl font-bold capitalize text-purple-700">{pokemon.name}</h2>
      <p className="text-gray-500 mb-2">#{pokemon.id}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
export default PokemonCard;

