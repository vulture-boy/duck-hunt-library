'use client';

import { getCharacterData, type CharacterStats } from '@/lib/character-utils';
import './character-matchup.css';

interface CharacterVariant {
  name: string;
  displayName: string;  // For showing a different name in the UI
  variant?: string;    // Specific variant identifier
}

type MatchedCharacterInfo = { 
  data: CharacterStats, 
  variant: CharacterVariant,
  key: string         // Unique key for this character variant
};

interface MatchupInfo {
  characterVariants: { name: string; variant?: string; displayName?: string }[];
  matchupNumber: string;
  contentId: string;
  pageDisplayName?: string;
}

interface ClientContentProps extends MatchupInfo {
  contentHtml: string;
}

function CharacterMatchupDescription({ contentHtml }: { contentHtml: string }) {
  if (!contentHtml) {
    console.error('Client: No content provided to CharacterMatchupDescription');
    return <div className="matchup-description">No content available</div>;
  }
  return (
    <div className="matchup-description" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}

interface TableSection {
  title: string;
  rows: { label: string; field: string; suffix?: string }[];
}

const tableSections: TableSection[] = [
  {
    title: "Clay Pigeon Data",
    rows: [
      { label: "Grounded CC", field: "groundCC" },
      { label: "Short Hop CC", field: "shortHopCC" },
      // { label: "CCC", field: "clayCC" },  // esoteric
      { label: "C Tumble Limit", field: "clayStanding" },
      { label: "Clay to Side Smash", field: "clayToSideSmash" },
      { label: "CC to Side Smash", field: "ccToSideSmash" }
    ]
  },
  {
    title: "KO Percents",
    rows: [
      { label: "Ledge FTilt KO", field: "ledgeSideTiltKO", suffix: "%" },
      { label: "Ledge BAir KO", field: "ledgeAirKO", suffix: "%" },
      { label: "USmash KO", field: "upSmashKO", suffix: "%" },
      { label: "Ledge SSmash KO", field: "ledgeSideSmashKO", suffix: "%" },
      { label: "Up Air Strong KO", field: "upAirStrongKO", suffix: "%" },
      { label: "Ledgeside Aerial Meteor", field: "ledgesideAerialMeteor", suffix: "%" },
      { label: "Sombrero KO", field: "sombrero", suffix: "%" }
    ]
  },
  {
    title: "Additional Data",
    rows: [
      { label: "NAir Tumble %", field: "airNDown", suffix: "%" },
      { label: "NAir Tumble % (Weak)", field: "airNWeakDown", suffix: "%" },
      { label: "Up Throw KO", field: "upThrowThunder" },
      { label: "DAir UpSmash", field: "downAirUpStrong" },
      { label: "Ledge Steal Pop Height", field: "ledgeSteal" },
      // The following are esoteric and need translation confirmation...
      // { label: "Fastest Ledge Steal Inside", field: "fastestLedgeStealInside" },
      // { label: "Slowest Ledge Steal Inside", field: "slowestLedgeStealInside" },
      // { label: "Up Air Neutral Air", field: "upAirNeutralAir" }
    ]
  }
];

function CharacterMatchupData({ characterVariants }: { characterVariants: { name: string; variant?: string; displayName?: string }[] }) {
  // Get data directly from the static JSON
  const characters = characterVariants.map(char => {
    // Try to get the variant-specific data
    const data = getCharacterData(char.name, char.variant);
    
    if (!data) {
      console.warn(`No data found for character: ${char.name}${char.variant ? ` (variant: ${char.variant})` : ''}`);
      return null;
    }
    const uniqueKey = char.variant ? `${char.name}-${char.variant}` : char.name;
    return {
      data: data,
      variant: {
        name: char.name,
        displayName: char.displayName || data.name,
        variant: char.variant
      },
      key: uniqueKey
    } as MatchedCharacterInfo;
  }).filter((c): c is NonNullable<typeof c> => c !== null);

  if (characters.length === 0) {
    console.error('No character data found for variants:', characterVariants);
    return <p>No data found for characters</p>;
  }

  // At this point we know characters array is non-empty and has no null values
  const safeCharacters = characters;

  return (
    <div className="matchup-data">
      <h2>Frame Data & Matchup Information</h2>
      <div className="data-section">
        {tableSections.map(section => {
          return (
            <div key={section.title}>
              <h3>{section.title}</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Move</th>
                    {safeCharacters.map(char => (
                      <th key={char.key}>{char.variant.displayName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map(row => {
                    const baseValue = safeCharacters[0].data[row.field as keyof CharacterStats];
                    const allIdentical = safeCharacters.slice(1).every(char => 
                      char.data[row.field as keyof CharacterStats] === baseValue
                    );
                    return (
                      <tr key={row.field}>
                        <td>{row.label}:</td>
                        {safeCharacters.map((char, index) => {
                          const value = char.data[row.field as keyof CharacterStats];
                          const isIdentical = index > 0 && value === baseValue;
                          const displayValue = value === undefined || value === '' ? '-' : value;
                          const showArrow = allIdentical && index > 0;
                          return (
                            <td 
                              key={char.key} 
                              className={isIdentical ? "text-muted" : ""}
                              title={showArrow ? "Same as base value" : undefined}
                            >
                              <span className={showArrow ? "same-value-arrow" : ""}>
                                {showArrow ? '←' : displayValue}
                              </span>
                              {!showArrow && displayValue !== '-' && row.suffix ? row.suffix : ''}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ClientContent({ contentHtml, characterVariants }: ClientContentProps) {
  return (
    <>
      <CharacterMatchupData characterVariants={characterVariants} />
      <CharacterMatchupDescription contentHtml={contentHtml} />
    </>
  );
}
