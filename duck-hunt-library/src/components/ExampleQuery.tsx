import { gql, useQuery } from '@apollo/client';

// Define your GraphQL query
const GET_CHARACTER_DATA = gql`
  query GetCharacter($name: String!) {
    character(name: $name) {
      id
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
      remarks
    }
  }
`;

interface CharacterData {
  character: {
    id: string;
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
    remarks: string;
  };
}

interface CharacterQueryVars {
  name: string;
}

export default function CharacterQuery({ characterName }: { characterName: string }) {
  const { loading, error, data } = useQuery<CharacterData, CharacterQueryVars>(
    GET_CHARACTER_DATA,
    {
      variables: { name: characterName },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.character) return <p>No character found</p>;

  const character = data.character;

  return (
    <div className="character-data">
      <h2>{character.name}</h2>
      <div className="data-grid">
        <div>
          <h3>Ground Data</h3>
          <p>Ground CC: {character.groundCC || 'N/A'}</p>
          <p>Short Hop CC: {character.shortHopCC || 'N/A'}</p>
          <p>Clay CC: {character.clayCC || 'N/A'}</p>
          <p>Clay Standing: {character.clayStanding || 'N/A'}</p>
        </div>
        <div>
          <h3>KO Data</h3>
          <p>Ledge Side Tilt KO: {character.ledgeSideTiltKO || 'N/A'}</p>
          <p>Ledge Air KO: {character.ledgeAirKO || 'N/A'}</p>
          <p>Up Smash KO: {character.upSmashKO || 'N/A'}</p>
          <p>Ledge Side Smash KO: {character.ledgeSideSmashKO || 'N/A'}</p>
          <p>Up Air Strong KO: {character.upAirStrongKO || 'N/A'}</p>
        </div>
        <div>
          <h3>Additional Info</h3>
          <p>Ledge Steal: {character.ledgeSteal || 'N/A'}</p>
          <p>Fastest Inside: {character.fastestLedgeStealInside || 'N/A'}</p>
          <p>Slowest Inside: {character.slowestLedgeStealInside || 'N/A'}</p>
        </div>
      </div>
      {character.remarks && (
        <div className="remarks">
          <h3>Remarks</h3>
          <p>{character.remarks}</p>
        </div>
      )}
    </div>
  );
}
