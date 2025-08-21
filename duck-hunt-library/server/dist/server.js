"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const characters_1 = require("./characters");
const typeDefs = `#graphql
  type CharacterData {
    id: String!
    name: String!
    groundCC: String
    shortHopCC: String
    clayCC: String
    clayStanding: String
    ledgeSideTiltKO: String
    ledgeAirKO: String
    upSmashKO: String
    ledgeSideSmashKO: String
    upAirStrongKO: String
    clayToSideSmash: String
    ccToSideSmash: String
    ledgesideAerialMeteor: String
    sombrero: String
    airNDown: String
    airNWeakDown: String
    upThrowThunder: String
    downAirUpStrong: String
    ledgeSteal: String
    fastestLedgeStealInside: String
    slowestLedgeStealInside: String
    upAirNeutralAir: String
    remarks: String
  }

  type Query {
    character(name: String!): CharacterData
    allCharacters: [CharacterData!]!
    searchCharacters(searchTerm: String!): [CharacterData!]!
  }
`;
const resolvers = {
    Query: {
        character: (_, { name }) => characters_1.charactersData.find(char => char.name.toLowerCase() === name.toLowerCase()),
        allCharacters: () => characters_1.charactersData,
        searchCharacters: (_, { searchTerm }) => characters_1.charactersData.filter(char => char.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
};
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.ApolloServer({
            typeDefs,
            resolvers,
            introspection: true,
        });
        const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
            listen: { port: 4000 },
            context: (_a) => __awaiter(this, [_a], void 0, function* ({ req }) { return ({ token: req.headers.token }); })
        });
        console.log(`🚀 Server ready at ${url}`);
    });
}
startServer().catch(err => {
    console.error('Error starting the server:', err);
    process.exit(1);
});
