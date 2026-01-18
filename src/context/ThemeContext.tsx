import { createContext } from 'react';

// Define the type for the theme mode
export type ThemeMode = 'light' | 'dark';

// Define the shape of the context value
interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
