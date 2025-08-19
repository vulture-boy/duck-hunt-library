import { gql } from 'graphql-tag';

export const typeDefs = gql`
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
  }

  type Query {
    character(name: String!): CharacterData
    allCharacters: [CharacterData!]!
    searchCharacters(searchTerm: String!): [CharacterData!]!
  }
`;
