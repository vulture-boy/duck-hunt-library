import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Roy" },
    { name: "Chrom" }
  ],
  matchupNumber: "025",
  contentId: "025-roy-chrom"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
