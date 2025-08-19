import { charactersData } from './characters';

export const resolvers = {
  Query: {
    character: (_: any, { name }: { name: string }) => {
      return charactersData.find(
        char => char.name.toLowerCase() === name.toLowerCase()
      );
    },
    allCharacters: () => charactersData,
    searchCharacters: (_: any, { searchTerm }: { searchTerm: string }) => {
      return charactersData.filter(char =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
};
