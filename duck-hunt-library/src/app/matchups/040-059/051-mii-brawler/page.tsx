import MatchupPage from '../../components/matchup-page'

const matchupInfo = {
  characterVariants: [
    { name: "Mii Brawler" }
  ],
  matchupNumber: "051",
  contentId: "051-mii-brawler"
}

export default function Page() {
  return <MatchupPage matchupInfo={matchupInfo} />
}
