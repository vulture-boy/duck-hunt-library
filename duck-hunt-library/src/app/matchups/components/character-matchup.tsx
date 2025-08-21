'use client';

import { useQuery } from '@apollo/client';
import { GET_CHARACTER_DATA, type CharacterData } from '@/lib/character-utils';
import { ApolloWrapper } from '@/lib/apollo-wrapper';

interface CharacterVariant {
  name: string;
  displayName?: string;  // For showing a different name in the UI
}

interface MatchupInfo {
  characterVariants: CharacterVariant[];
  matchupNumber: string;
  contentId: string;
}

interface ClientContentProps extends MatchupInfo {
  contentHtml: string;
}

function CharacterMatchupDescription({ contentHtml }: { contentHtml: string }) {
  console.log('Client: Rendering description with content length:', contentHtml?.length);
  if (!contentHtml) {
    console.error('Client: No content provided to CharacterMatchupDescription');
    return <div className="matchup-description">No content available</div>;
  }
  return (
    <div className="matchup-description" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}

function useCharacterQueries(characterVariants: CharacterVariant[]) {
  return characterVariants.map(variant => {
    return useQuery<{ character: CharacterData }>(GET_CHARACTER_DATA, {
      variables: { name: variant.name }
    });
  });
}

function CharacterMatchupData({ characterVariants }: { characterVariants: CharacterVariant[] }) {
  const queries = useCharacterQueries(characterVariants);

  if (queries.some(q => q.loading)) return <p>Loading matchup data...</p>;
  if (queries.some(q => q.error)) {
    const errors = queries.map(q => q.error?.message).filter(Boolean);
    return <p>Error loading matchup data: {errors.join(', ')}</p>;
  }

  // Only include characters with data and explicitly type check
  const characters = queries.map((q, i) => {
    const data = q.data?.character;
    return {
      data: data,
      variant: characterVariants[i]
    };
  }).filter((c): c is { data: CharacterData, variant: CharacterVariant } => c.data !== undefined);

  if (characters.length === 0) return <p>No data found for characters</p>;

  return (
    <div className="matchup-data">
      <h2>Frame Data & Matchup Information</h2>
      <div className="data-section">
        <h3>Clay Pigeon Data</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              {characters.length > 1 && <th>Variant</th>}
              {characters.map(char => (
                <th key={char.variant.name}>{char.variant.displayName || char.variant.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ground Clay Chain:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.groundCC || 'N/A'}</td>
              ))}
            </tr>
            <tr>
              <td>Short Hop Clay Chain:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.shortHopCC || 'N/A'}</td>
              ))}
            </tr>
            <tr>
              <td>Clay Standing:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.clayStanding || 'N/A'}</td>
              ))}
            </tr>
            <tr>
              <td>Clay to Side Smash:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.clayToSideSmash || 'N/A'}</td>
              ))}
            </tr>
          </tbody>
        </table>

        <h3>KO Percents</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              {characters.length > 1 && <th>Variant</th>}
              {characters.map(char => (
                <th key={char.variant.name}>{char.variant.displayName || char.variant.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ledge Side Tilt KO:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.ledgeSideTiltKO}%</td>
              ))}
            </tr>
            <tr>
              <td>Ledge Aerial KO:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.ledgeAirKO}%</td>
              ))}
            </tr>
            <tr>
              <td>Up Smash KO:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.upSmashKO}%</td>
              ))}
            </tr>
            <tr>
              <td>Ledge Side Smash KO:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.ledgeSideSmashKO}%</td>
              ))}
            </tr>
            <tr>
              <td>Up Air Strong KO:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.upAirStrongKO}%</td>
              ))}
            </tr>
          </tbody>
        </table>

        <h3>Additional Data</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              {characters.length > 1 && <th>Variant</th>}
              {characters.map(char => (
                <th key={char.variant.name}>{char.variant.displayName || char.variant.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sombrero:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.sombrero}%</td>
              ))}
            </tr>
            <tr>
              <td>DAir Spike:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.airNDown}%</td>
              ))}
            </tr>
            <tr>
              <td>DAir Spike (Sour):</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.airNWeakDown}%</td>
              ))}
            </tr>
            <tr>
              <td>Ledge Steal Pop Height:</td>
              {characters.map(char => (
                <td key={char.variant.name}>{char.data.ledgeSteal}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ClientContent({ contentHtml, characterVariants }: ClientContentProps) {
  return (
    <ApolloWrapper>
      <CharacterMatchupData characterVariants={characterVariants} />
      <CharacterMatchupDescription contentHtml={contentHtml} />
    </ApolloWrapper>
  );
}
