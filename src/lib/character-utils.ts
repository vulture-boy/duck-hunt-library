import characterData from '../data/characters.json';

// Types for the imported JSON data
type CharacterDataJson = Record<string, CharacterData>;
const typedCharacterData = characterData as CharacterDataJson;

export interface CharacterStats {
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

export interface CharacterDataWithVariants {
  variants: Record<string, CharacterStats>;
  name: string;
}

function isCharacterStats(obj: unknown): obj is CharacterStats {
  if (!obj || typeof obj !== 'object') return false;
  const stats = obj as Partial<CharacterStats>;
  
  // Only require name, all other fields can be undefined or string
  if (typeof stats.name !== 'string') {
    return false;
  }
  
  // Check that any defined fields are strings
  const keys = Object.keys(stats) as (keyof CharacterStats)[];
  const isValid = keys.every(key => {
    const value = stats[key];
    return value === undefined || typeof value === 'string';
  });
  return isValid;
}

function isCharacterDataWithVariants(obj: unknown): obj is CharacterDataWithVariants {
  if (!obj || typeof obj !== 'object') return false;
  const char = obj as Partial<CharacterDataWithVariants>;
  // Check for required properties
  return (
    typeof char.name === 'string' &&
    typeof char.variants === 'object' &&
    char.variants !== null
  );
}

export type CharacterData = CharacterStats | CharacterDataWithVariants;

export function getCharacterData(name: string, variant?: string): CharacterStats | null {
  try {
    // Convert the base character name to proper key format
    const baseKey = name.toLowerCase().replace(/\s+/g, '-');
    const char = typedCharacterData[baseKey];
    
    if (!char) {
      return null;
    }

    // If this is a character with variants and a specific variant is requested
    if (variant && isCharacterDataWithVariants(char)) {
      const variantData = char.variants[variant];
      if (isCharacterStats(variantData)) {
        return variantData;
      }
      return null;
    }
    
    // If this is a direct character request
    if (isCharacterStats(char)) {
      return char;
    }
    
    // If this is a character with variants but no specific variant requested
    if (isCharacterDataWithVariants(char)) {
      const firstVariant = Object.values(char.variants)[0];
      return isCharacterStats(firstVariant) ? firstVariant : null;
    }
    
    return null;
  } catch {
    // Return null on any error
    return null;
  }
}
