"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql) `
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
