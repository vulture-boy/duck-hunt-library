export interface MatchupReference {
  id: string;          // e.g., "001-mario"
  number: string;      // e.g., "001"
  character: string;   // e.g., "mario"
  displayName: string; // e.g., "Mario"
  folderRange: string; // e.g., "000-019"
  path: string;        // Full path: "000-019/001-mario"
}

export const matchups: MatchupReference[] = [
  // 000-019
  { id: "000-summary", number: "000", character: "summary", displayName: "Summary", folderRange: "000-019", path: "000-019/000-summary" },
  { id: "001-mario", number: "001", character: "mario", displayName: "Mario", folderRange: "000-019", path: "000-019/001-mario" },
  { id: "002-donkey-kong", number: "002", character: "donkey-kong", displayName: "Donkey Kong", folderRange: "000-019", path: "000-019/002-donkey-kong" },
  { id: "003-link", number: "003", character: "link", displayName: "Link", folderRange: "000-019", path: "000-019/003-link" },
  { id: "004-samus", number: "004", character: "samus", displayName: "Samus & Dark Samus", folderRange: "000-019", path: "000-019/004-samus" },
  { id: "005-yoshi", number: "005", character: "yoshi", displayName: "Yoshi", folderRange: "000-019", path: "000-019/005-yoshi" },
  { id: "006-kirby", number: "006", character: "kirby", displayName: "Kirby", folderRange: "000-019", path: "000-019/006-kirby" },
  { id: "007-fox", number: "007", character: "fox", displayName: "Fox", folderRange: "000-019", path: "000-019/007-fox" },
  { id: "008-pikachu", number: "008", character: "pikachu", displayName: "Pikachu", folderRange: "000-019", path: "000-019/008-pikachu" },
  { id: "009-luigi", number: "009", character: "luigi", displayName: "Luigi", folderRange: "000-019", path: "000-019/009-luigi" },
  { id: "010-ness", number: "010", character: "ness", displayName: "Ness", folderRange: "000-019", path: "000-019/010-ness" },
  { id: "011-captain-falcon", number: "011", character: "captain-falcon", displayName: "Captain Falcon", folderRange: "000-019", path: "000-019/011-captain-falcon" },
  { id: "012-jigglypuff", number: "012", character: "jigglypuff", displayName: "Jigglypuff", folderRange: "000-019", path: "000-019/012-jigglypuff" },
  { id: "013-peach-daisy", number: "013", character: "peach-daisy", displayName: "Peach & Daisy", folderRange: "000-019", path: "000-019/013-peach-daisy" },
  { id: "014-bowser", number: "014", character: "bowser", displayName: "Bowser", folderRange: "000-019", path: "000-019/014-bowser" },
  { id: "015-ice-climbers", number: "015", character: "ice-climbers", displayName: "Ice Climbers", folderRange: "000-019", path: "000-019/015-ice-climbers" },
  { id: "016-sheik", number: "016", character: "sheik", displayName: "Sheik", folderRange: "000-019", path: "000-019/016-sheik" },
  { id: "017-zelda", number: "017", character: "zelda", displayName: "Zelda", folderRange: "000-019", path: "000-019/017-zelda" },
  { id: "018-dr-mario", number: "018", character: "dr-mario", displayName: "Dr. Mario", folderRange: "000-019", path: "000-019/018-dr-mario" },
  { id: "019-pichu", number: "019", character: "pichu", displayName: "Pichu", folderRange: "000-019", path: "000-019/019-pichu" },

  // 020-039
  { id: "020-falco", number: "020", character: "falco", displayName: "Falco", folderRange: "020-039", path: "020-039/020-falco" },
  { id: "021-marth-lucina", number: "021", character: "marth-lucina", displayName: "Marth & Lucina", folderRange: "020-039", path: "020-039/021-marth-lucina" },
  { id: "022-young-link", number: "022", character: "young-link", displayName: "Young Link", folderRange: "020-039", path: "020-039/022-young-link" },
  { id: "023-ganondorf", number: "023", character: "ganondorf", displayName: "Ganondorf", folderRange: "020-039", path: "020-039/023-ganondorf" },
  { id: "024-mewtwo", number: "024", character: "mewtwo", displayName: "Mewtwo", folderRange: "020-039", path: "020-039/024-mewtwo" },
  { id: "025-roy-chrom", number: "025", character: "roy-chrom", displayName: "Roy & Chrom", folderRange: "020-039", path: "020-039/025-roy-chrom" },
  { id: "026-game-and-watch", number: "026", character: "game-and-watch", displayName: "Mr. Game & Watch", folderRange: "020-039", path: "020-039/026-game-and-watch" },
  { id: "027-meta-knight", number: "027", character: "meta-knight", displayName: "Meta Knight", folderRange: "020-039", path: "020-039/027-meta-knight" },
  { id: "028-pit", number: "028", character: "pit", displayName: "Pit & Dark Pit", folderRange: "020-039", path: "020-039/028-pit" },
  { id: "029-zero-suit-samus", number: "029", character: "zero-suit-samus", displayName: "Zero Suit Samus", folderRange: "020-039", path: "020-039/029-zero-suit-samus" },
  { id: "030-wario", number: "030", character: "wario", displayName: "Wario", folderRange: "020-039", path: "020-039/030-wario" },
  { id: "031-snake", number: "031", character: "snake", displayName: "Snake", folderRange: "020-039", path: "020-039/031-snake" },
  { id: "032-ike", number: "032", character: "ike", displayName: "Ike", folderRange: "020-039", path: "020-039/032-ike" },
  { id: "033-pokemon-trainer", number: "033", character: "pokemon-trainer", displayName: "Pokemon Trainer", folderRange: "020-039", path: "020-039/033-pokemon-trainer" },
  { id: "036-diddy-kong", number: "036", character: "diddy-kong", displayName: "Diddy Kong", folderRange: "020-039", path: "020-039/036-diddy-kong" },
  { id: "037-lucas", number: "037", character: "lucas", displayName: "Lucas", folderRange: "020-039", path: "020-039/037-lucas" },
  { id: "038-sonic", number: "038", character: "sonic", displayName: "Sonic", folderRange: "020-039", path: "020-039/038-sonic" },
  { id: "039-king-dedede", number: "039", character: "king-dedede", displayName: "King Dedede", folderRange: "020-039", path: "020-039/039-king-dedede" },

  // 040-059
  { id: "040-olimar", number: "040", character: "olimar", displayName: "Olimar", folderRange: "040-059", path: "040-059/040-olimar" },
  { id: "041-lucario", number: "041", character: "lucario", displayName: "Lucario", folderRange: "040-059", path: "040-059/041-lucario" },
  { id: "042-rob", number: "042", character: "rob", displayName: "R.O.B.", folderRange: "040-059", path: "040-059/042-rob" },
  { id: "043-toon-link", number: "043", character: "toon-link", displayName: "Toon Link", folderRange: "040-059", path: "040-059/043-toon-link" },
  { id: "044-wolf", number: "044", character: "wolf", displayName: "Wolf", folderRange: "040-059", path: "040-059/044-wolf" },
  { id: "045-villager", number: "045", character: "villager", displayName: "Villager", folderRange: "040-059", path: "040-059/045-villager" },
  { id: "046-mega-man", number: "046", character: "mega-man", displayName: "Mega Man", folderRange: "040-059", path: "040-059/046-mega-man" },
  { id: "047-wii-fit-trainer", number: "047", character: "wii-fit-trainer", displayName: "Wii Fit Trainer", folderRange: "040-059", path: "040-059/047-wii-fit-trainer" },
  { id: "048-rosalina", number: "048", character: "rosalina", displayName: "Rosalina & Luma", folderRange: "040-059", path: "040-059/048-rosalina" },
  { id: "049-little-mac", number: "049", character: "little-mac", displayName: "Little Mac", folderRange: "040-059", path: "040-059/049-little-mac" },
  { id: "050-greninja", number: "050", character: "greninja", displayName: "Greninja", folderRange: "040-059", path: "040-059/050-greninja" },
  { id: "051-mii-brawler", number: "051", character: "mii-brawler", displayName: "Mii Brawler", folderRange: "040-059", path: "040-059/051-mii-brawler" },
  { id: "052-mii-swordfighter", number: "052", character: "mii-swordfighter", displayName: "Mii Swordfighter", folderRange: "040-059", path: "040-059/052-mii-swordfighter" },
  { id: "053-mii-gunner", number: "053", character: "mii-gunner", displayName: "Mii Gunner", folderRange: "040-059", path: "040-059/053-mii-gunner" },
  { id: "054-palutena", number: "054", character: "palutena", displayName: "Palutena", folderRange: "040-059", path: "040-059/054-palutena" },
  { id: "055-pac-man", number: "055", character: "pac-man", displayName: "Pac-Man", folderRange: "040-059", path: "040-059/055-pac-man" },
  { id: "056-robin", number: "056", character: "robin", displayName: "Robin", folderRange: "040-059", path: "040-059/056-robin" },
  { id: "057-shulk", number: "057", character: "shulk", displayName: "Shulk", folderRange: "040-059", path: "040-059/057-shulk" },
  { id: "058-bowser-jr", number: "058", character: "bowser-jr", displayName: "Bowser Jr.", folderRange: "040-059", path: "040-059/058-bowser-jr" },
  { id: "059-duck-hunt", number: "059", character: "duck-hunt", displayName: "Duck Hunt", folderRange: "040-059", path: "040-059/059-duck-hunt" },

  // 060-079
  { id: "060-ryu-ken", number: "060", character: "ryu-ken", displayName: "Ryu & Ken", folderRange: "060-079", path: "060-079/060-ryu-ken" },
  { id: "061-cloud", number: "061", character: "cloud", displayName: "Cloud", folderRange: "060-079", path: "060-079/061-cloud" },
  { id: "062-corrin", number: "062", character: "corrin", displayName: "Corrin", folderRange: "060-079", path: "060-079/062-corrin" },
  { id: "063-bayonetta", number: "063", character: "bayonetta", displayName: "Bayonetta", folderRange: "060-079", path: "060-079/063-bayonetta" },
  { id: "064-inkling", number: "064", character: "inkling", displayName: "Inkling", folderRange: "060-079", path: "060-079/064-inkling" },
  { id: "065-ridley", number: "065", character: "ridley", displayName: "Ridley", folderRange: "060-079", path: "060-079/065-ridley" },
  { id: "066-simon-richter", number: "066", character: "simon-richter", displayName: "Simon & Richter", folderRange: "060-079", path: "060-079/066-simon-richter" },
  { id: "067-king-k-rool", number: "067", character: "king-k-rool", displayName: "King K. Rool", folderRange: "060-079", path: "060-079/067-king-k-rool" },
  { id: "068-isabelle", number: "068", character: "isabelle", displayName: "Isabelle", folderRange: "060-079", path: "060-079/068-isabelle" },
  { id: "069-incineroar", number: "069", character: "incineroar", displayName: "Incineroar", folderRange: "060-079", path: "060-079/069-incineroar" },
  { id: "070-piranha-plant", number: "070", character: "piranha-plant", displayName: "Piranha Plant", folderRange: "060-079", path: "060-079/070-piranha-plant" },
  { id: "071-joker", number: "071", character: "joker", displayName: "Joker", folderRange: "060-079", path: "060-079/071-joker" },
  { id: "072-hero", number: "072", character: "hero", displayName: "Hero", folderRange: "060-079", path: "060-079/072-hero" },
  { id: "073-banjo-kazooie", number: "073", character: "banjo-kazooie", displayName: "Banjo & Kazooie", folderRange: "060-079", path: "060-079/073-banjo-kazooie" },
  { id: "074-terry", number: "074", character: "terry", displayName: "Terry", folderRange: "060-079", path: "060-079/074-terry" },
  { id: "075-byleth", number: "075", character: "byleth", displayName: "Byleth", folderRange: "060-079", path: "060-079/075-byleth" },
  { id: "076-min-min", number: "076", character: "min-min", displayName: "Min Min", folderRange: "060-079", path: "060-079/076-min-min" },
  { id: "077-steve", number: "077", character: "steve", displayName: "Steve", folderRange: "060-079", path: "060-079/077-steve" },
  { id: "078-sephiroth", number: "078", character: "sephiroth", displayName: "Sephiroth", folderRange: "060-079", path: "060-079/078-sephiroth" },
  { id: "079-pyra-mythra", number: "079", character: "pyra-mythra", displayName: "Pyra & Mythra", folderRange: "060-079", path: "060-079/079-pyra-mythra" },

  // 080-099
  { id: "081-kazuya", number: "081", character: "kazuya", displayName: "Kazuya", folderRange: "080-099", path: "080-099/081-kazuya" },
  { id: "082-sora", number: "082", character: "sora", displayName: "Sora", folderRange: "080-099", path: "080-099/082-sora" }
];

export function getMatchupByNumber(number: string): MatchupReference | null {
  return matchups.find(m => m.number === number) || null;
}

export function getNextMatchup(number: string): MatchupReference | null {
  const currentIndex = matchups.findIndex(m => m.number === number);
  if (currentIndex === -1 || currentIndex === matchups.length - 1) return null;
  return matchups[currentIndex + 1];
}

export function getPreviousMatchup(number: string): MatchupReference | null {
  const currentIndex = matchups.findIndex(m => m.number === number);
  if (currentIndex <= 0) return null;
  return matchups[currentIndex - 1];
}

export function getAllMatchups(): MatchupReference[] {
  return [...matchups];
}

export function getMatchupsByFolderRange(range: string): MatchupReference[] {
  return matchups.filter(m => m.folderRange === range);
}
