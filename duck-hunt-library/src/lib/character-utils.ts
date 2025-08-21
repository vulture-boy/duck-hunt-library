import { gql } from '@apollo/client';

export interface CharacterData {
  name: string;
  groundCC: string;
  shortHopCC: string;
  clayCC: string;
  clayStanding: string;
  ledgeSideTiltKO: string;
  ledgeAirKO: string;
  upSmashKO: string;
  ledgeSideSmashKO: string;
  upAirStrongKO: string;
  clayToSideSmash: string;
  ccToSideSmash: string;
  ledgesideAerialMeteor: string;
  sombrero: string;
  airNDown: string;
  airNWeakDown: string;
  upThrowThunder: string;
  downAirUpStrong: string;
  ledgeSteal: string;
  fastestLedgeStealInside: string;
  slowestLedgeStealInside: string;
  upAirNeutralAir: string;
}

export const GET_CHARACTER_DATA = gql`
  query GetCharacterData($name: String!) {
    character(name: $name) {
      name
      groundCC
      shortHopCC
      clayCC
      clayStanding
      ledgeSideTiltKO
      ledgeAirKO
      upSmashKO
      ledgeSideSmashKO
      upAirStrongKO
      clayToSideSmash
      ccToSideSmash
      ledgesideAerialMeteor
      sombrero
      airNDown
      airNWeakDown
      upThrowThunder
      downAirUpStrong
      ledgeSteal
      fastestLedgeStealInside
      slowestLedgeStealInside
      upAirNeutralAir
    }
  }
`;
