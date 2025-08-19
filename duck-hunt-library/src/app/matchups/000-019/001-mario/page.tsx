'use client';

import '../../../global.css'
import './styles.css'
import Header from "@/app/header";
import Footer from "@/app/footer";
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import { ApolloWrapper } from '@/lib/apollo-wrapper';

const GET_MARIO_DATA = gql`
  query GetMarioData {
    character(name: "Mario") {
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

function MarioMatchupDescription()
{
  return (
    <div className="matchup-description">
  <h2>Summary</h2>
          <p>
            [no description available]
          </p>
          <hr/>
          <h2>Counterplay</h2>

            <h3>Any State</h3>
            <ul>
              <li>{"Mario Up Special has i-frames on startup"}</li>
              <li>{"Our airspeeds are approximately equivalent"}</li>
              <li>{"F.L.U.U.D. is at full charge when Mario is flashing"}</li>
              <li>{"Mario's cape is an effective reflector, particularly by ledge in response to can."}</li>
              <li>{"Mario is effective at mixing up his landing timing with Nair and Jumps"}</li>
              <li>{"Mario FSmash has considerable hitbox displacement"}</li>
              <li>{"Fireball is weaker halfway through the full attack's duration (including Mario's windup)"}</li>
            </ul>

            <h3>Neutral</h3>

            <ul>
              <li>{"Mario has more effective neutral options in close range than Duck Hunt"}</li>
              <li>{"Duck Hunt is usually strongest at a midrange spacing; using occasional aerials within a safe range helps threaten space."}</li>
              <li>{"Mario's effective air speed is an asset for him to get in on Duck Hunt"}</li>
              <li>{"Mario gets a lot of reward off successful grabs"}</li>
              <li>{"Mario may use fireball to initiate neutral engagements to force the opponent to defend or avoid the option, creating resulting openings. Duck Hunt's projectiles can also be used to block fireball"}</li>
              <li>{"Mario's Cape is an effective response to overuse of projectiles, especially Clay Pigeon."}</li>
              <li>{"Mario can ladder combo DHD relatively safely if their combo game is tight"}</li>
            </ul>

            <h3>Advantage</h3>

            Anti-Air
            <ul>
              <li>{"Duck Hunt Up Air is very safe against Mario's kit from below."}</li>
              <li>{"Aerial fireball spawns can be punished with Up Air. Demonstration: "}<Link href="https://x.com/SirpoSpin/status/1873412831657525579" target="_blank">[link]</Link></li>
              <li>{"Be mindful of where you will land if you whiff, e.g. due to an airdodge, as Mario can effectively punish your landing as a reversal"}</li>
              <li>{"Gunman Hitlag is effective against landing attacks; may work in conjunction with Up Smash"}</li>
            </ul>

            Ledge Trapping
            <ul>
              <li>{"Standard can setup on ledge and positioning at roll distance remains effective"}</li>
              <li>{"Mario's hurtbox is above ledge by approximately the size of the 'M' logo on his hat."}</li>
              <li>{"[what are our effective 2-frame and ledge hang punish options?]"}</li>
            </ul>

            Edge Guarding
            <ul>
              <li>{"Using Shield Can on ledge (aka 'Marth Killer') can be effective versus a [misspaced?] Mario Up Special"}</li>
              <li>{"Mario is very vulnerable to Can Spawn below stage when recovering"}</li>
              <li>{`"If Mario ever uses his double jump off stage, just kill him" - Spin `}
                <a href="/duck-hunt-ssbu/doc/matchups/media/mario_edgeguard.mp4" target="_blank">[video]</a></li>
            </ul>

            <h3>Disadvantage</h3>

            Offstage
            <ul>
              <li>{"Mario's NAir and BAir are his offstage poke tools"}</li>
              <li>{"Mario's DAir is his lingering attack tool"}</li>
              <li>{"Mario's FAir has a strong meteor effect"}</li>
              <li>{"Like all windboxes, F.L.U.U.D. spray refreshes Duck Jump"}</li>
              <li>{"Cape can be disruptive to Duck Jump and projectile recovery techniques"}</li>
            </ul>

            Overstage
            <ul>
              <li>{"Mario has an infamous Up Air ladder combo that finishes with Up Special"}</li>
            </ul>

            On Ledge
            <ul>
              <li>{"Mario's combination of ground speed and UpSmash are very effective for catching ledge getup and ledge roll"}</li>
              <li>{"Two-frame attacks: Down-Tilt [more?]"}</li>
            </ul>

            <h3>Stage Selection</h3>
            <ul>
              <li>{"Tri-plat stages are ideal for Mario's vertical combo game"}</li>
            </ul>

            <h3>Combo Windows</h3>

            Duck Hunt Combo Windows
            <ul>
              <li>Pre-Tumble CP Loops: Later % Shorthop 52% -{">"} 75% Max <a href="https://docs.google.com/spreadsheets/d/1DVdmKkSD33fJ-Iz9DO0Pyiv4Q6gVXA9DcUoD1uZTKX8/edit?gid=0#gid=0">[link]</a></li>
              <li>Medium to Dragdown UpAir -{">"} UpTilt / UpSmash. Inconsistent. <a href="https://docs.google.com/spreadsheets/d/1TaQLYoPKJ6rVN3Uk-VucRwV9jwKXFCB2VywxqzCNU1Y/edit?gid=0#gid=0">[link]</a></li>
            </ul>

            Opponent Combo Windows
            <ul>
              <li>UpTilt -{">"} UpTilt [%?]</li>
              <li>UpAir -{">"} UpAir [%?]</li>
              <li>UpAir -{">"} UpSpecial [%?]</li>
              <li>[incomplete]</li>
            </ul>

            <h3>Other</h3>

            Game Start and Angel Platform
            <ul>
              <li>[no notes available]</li>
            </ul>

            Timeout Considerations
            <ul>
              <li>[no notes available]</li>
            </ul>

            Sudden Death
            <ul>
              <li>[no notes available]</li>
            </ul>

          <h3>Projectile Effectiveness</h3>
          
            Trick Shot
            <ul>
              <li>{"Can is an effective roadblock and actively hinders Mario's approach options."}</li>
              <li>{"Anchor Can effectively blocks fireball, but fireball will be lightly disruptive on its first hit."}</li>
              <li>{"Fireball will affect the ping direction; you may consider pinging over fireball range."}</li>
              <li>{"Mario is particularly vulnerable to Shield Can due to a lack of disjoints"}</li>
              <li>{"Like most characters, Mario can use Shield Can to bait or punish bad spawns / pings"}</li>
              <li>{"Vertical can movement trajectories are usually effective when Mario is offstage"}</li>
              <li>{"Control of the Can is disabled by Mario's Cape, either due to the reflection hitbox or the cape hitbox."}</li>
              <li>{"Aerial reflection can send the can downwards and explode"}</li>
              <li>{"In rare instances, the cape hitbox can hit before the reflector hitbox, causing a high damage explosion on himself. Unfortunately there is no reliable way to set this up on our part as it depends on the opponent's precise positioning, but it does seem to be more common when Mario is grounded."}</li>
            </ul>

            Clay Pigeon
            <ul>
              <li>{"CP is reflectable by Mario's Cape"}</li>
              <li>{"Avoid providing hop-in opportunities for Mario"}</li>
            </ul>

            Wild Gunman
            <ul>
              <li>{"Gunshot is reflectable by Mario's Cape"}</li>
              <li>{"Has the health to outlast [how many?] fireball hits"}</li>
              <li>{"Shoots through fireball w/o clanking (since it's a hitscan)"}</li>
              <li>{"Avoid using at grounded burst range"}</li>
            </ul>
          <hr/>
          <h2>Opponent Counterplay</h2>
            <ul>
              <li>{"DHD generally does not have strong approach options against Mario but can cover Mario's approach options relatively effectively with projectiles."}</li>
              <li>{"Can is very disruptive to Mario's access to DHD. Consider using Fireball to change its ping move direction once, deactivate its control with Cape, or otherwise knock it away if provided space to do so."}</li>
              <li>{"Prevent DHD from accessing center stage; cornering DHD and eliminating breathing room hinders his ability to spawn setups without being punished and makes him more vulnerable to bait and punish."}</li>
              <li>{"If Can is sent above your fireball range, you can use the opportunity to run under."}</li>
              <li>{"You can cape Clay Pigeon but simply jumping over it and punishing DHD can be just as or more effective."}</li>
              <li>{"F.L.U.U.D. gives DHD back use of Up B; it can be used to extend the duration of advantage state but it generally won't take stocks on its own."}</li>
              <li>{"Aside from using projectiles to cover his recovery, DHD's disadvantage is very exploitable by Mario offstage."}</li>
            </ul>
          <hr/>
          <h2>Recommended VODs</h2>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=Q6UF3oXwDLY" target="_blank">fawn (DHD) vs NoTag (Mario) - Xanadu Games At Laurel Park, April 24th 2023</a></li>
              <ul><li>[no commentary]</li></ul>
              <li><a href="https://youtu.be/H7pgPf0z8hw?si=4SwqcwI_AfuklYZk&t=460" target="_blank">Wisdom (DHD) vs Gomakenpit (Olimar/Mario) - Paradigm Shift, July 21st 2019</a></li>
              <ul><li>{"Wisdom has praised GomaKenpi's effective evasion of Can in this set, Game 2 & 3 (starts at 7:40)"}</li></ul>
            </ul>
          <hr/>
          <h2>Move Frame Advantage Comparisons</h2>
            <ul>
              <li>OOS: Up B (f3), NAir (f6), UAir (f7)</li>
              <li>[incomplete]</li>
            </ul>
          <hr/>
          <h2>Effective Tech and Percentage Windows</h2>
            <ul>
              <li>no media yet</li>
            </ul>
          <hr/>
          <h2>Outstanding Questions</h2>
            <ul>
                <li>{"How does F.L.U.U.D. affect Duck Hunt's projectiles?"}</li>
            </ul>
          <hr/>
          <h3>Contributions</h3>
          <p>
            Written and compiled by Vultures<br/>
            Not peer reviewed<br/>
            Includes observations by Pyro-Is-Magic, Spin, Storkins, tater, and Wisdom<br/>
            Some notes from Mr.F in the Mario Character Discord.
            </p>
            </div>
  );
}

function MarioMatchupData() {
  const { loading, error, data } = useQuery(GET_MARIO_DATA);

  if (loading) return <p>Loading matchup data...</p>;
  if (error) return <p>Error loading matchup data: {error.message}</p>;
  if (!data?.character) return <p>No data found for Mario</p>;

  const mario = data.character;

  return (
    <div className="matchup-data">
      <h2>Frame Data & Matchup Information</h2>
      <div className="data-section">
        <h3>Clay Pigeon Data</h3>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Ground Clay Cancel:</td>
              <td>{mario.groundCC || 'N/A'}</td>
            </tr>
            <tr>
              <td>Short Hop Clay Cancel:</td>
              <td>{mario.shortHopCC || 'N/A'}</td>
            </tr>
            <tr>
              <td>Clay Standing:</td>
              <td>{mario.clayStanding || 'N/A'}</td>
            </tr>
            <tr>
              <td>Clay to Side Smash:</td>
              <td>{mario.clayToSideSmash || 'N/A'}</td>
            </tr>
          </tbody>
        </table>

        <h3>KO Percents</h3>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Ledge Side Tilt KO:</td>
              <td>{mario.ledgeSideTiltKO}%</td>
            </tr>
            <tr>
              <td>Ledge Air KO:</td>
              <td>{mario.ledgeAirKO}%</td>
            </tr>
            <tr>
              <td>Up Smash KO:</td>
              <td>{mario.upSmashKO}%</td>
            </tr>
            <tr>
              <td>Ledge Side Smash KO:</td>
              <td>{mario.ledgeSideSmashKO}%</td>
            </tr>
            <tr>
              <td>Up Air Strong KO:</td>
              <td>{mario.upAirStrongKO}%</td>
            </tr>
          </tbody>
        </table>

        <h3>Additional Data</h3>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Sombrero:</td>
              <td>{mario.sombrero}%</td>
            </tr>
            <tr>
              <td>Air N Down:</td>
              <td>{mario.airNDown}%</td>
            </tr>
            <tr>
              <td>Air N Weak Down:</td>
              <td>{mario.airNWeakDown}%</td>
            </tr>
            <tr>
              <td>Ledge Steal:</td>
              <td>{mario.ledgeSteal}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>External Resources</h2>
      <p>
        <a href="https://www.ssbwiki.com/Mario_(SSBU)">{"Mario's SSBWiki Entry"}</a><br/>
        <a href="https://ultimateframedata.com/mario.php">{"Mario's UltimateFrameData Page"}</a><br/>
        <a href="https://smash-tube.com/en/result.php?player1=&character1=%E3%83%80%E3%83%83%E3%82%AF%E3%83%8F%E3%83%B3%E3%83%88&player2=&character2=%E3%83%9E%E3%83%AA%E3%82%AA&free_word=&region=&submit=#result">SmashTube Query for Duck Hunt vs. Mario</a><br/>
        <a href="https://discord.com/invite/xARdRQ3eGz">Mario Character Discord</a>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <ApolloWrapper>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-sm-12">
            <h1>Matchups #01: Mario</h1>
            <hr/>
            <MarioMatchupData />
            <MarioMatchupDescription />
          </div>
        </div>
        <Footer />
      </div>
    </ApolloWrapper>
  );
}
