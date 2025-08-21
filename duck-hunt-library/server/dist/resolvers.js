"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const characters_1 = require("./characters");
exports.resolvers = {
    Query: {
        character: (_, { name }) => {
            return characters_1.charactersData.find(char => char.name.toLowerCase() === name.toLowerCase());
        },
        allCharacters: () => characters_1.charactersData,
        searchCharacters: (_, { searchTerm }) => {
            return characters_1.charactersData.filter(char => char.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
    }
};
