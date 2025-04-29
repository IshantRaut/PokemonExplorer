# Pokémon Explorer

A React application that allows users to explore and filter through Pokémon data from the PokeAPI.

## Features

- Display of 150 Pokémon with their details
- Real-time search functionality
- Filter by Pokémon type
- Responsive design for all devices
- Loading and error states
- Beautiful card layout for each Pokémon

## Technologies Used

- React
- Vite
- Mantaine UI
- Axios
- React Hooks

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

- `src/components/` - Contains reusable components
  - `PokemonCard.jsx` - Component for displaying individual Pokémon
  - `SearchBar.jsx` - Component for search and filter functionality
- `src/App.jsx` - Main application component
- `src/main.jsx` - Application entry point

## API Used

This project uses the [PokeAPI](https://pokeapi.co/) to fetch Pokémon data.

## License

MIT 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
