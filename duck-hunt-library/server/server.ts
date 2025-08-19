import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { charactersData, CharacterData } from './characters';

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

interface ResolverContext {
  token?: string;
}

const resolvers = {
  Query: {
    character: (_: unknown, { name }: { name: string }): CharacterData | undefined => 
      charactersData.find(char => char.name.toLowerCase() === name.toLowerCase()),
    allCharacters: (): CharacterData[] => charactersData,
    searchCharacters: (_: unknown, { searchTerm }: { searchTerm: string }): CharacterData[] => 
      charactersData.filter(char => 
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  }
};

async function startServer() {
  const server = new ApolloServer<ResolverContext>({
    typeDefs,
    resolvers,
    introspection: true,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => ({ token: req.headers.token as string | undefined })
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch(err => {
  console.error('Error starting the server:', err);
  process.exit(1);
});
