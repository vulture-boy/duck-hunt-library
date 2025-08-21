import LinkList from "./linklist";
import SocialsBar from "./socials";
import Link from "next/link";
import { LinkTitlePairClass } from "./linklist";
import { matchups } from "../lib/matchup-data";

export default function Menubar() {
    return (
    <>
    <div id="menuBar" className="flex-shrink-0 p-3">
        <Link href="/" className="d-flex align-items-left pb-3 mb-3 link-dark text-decoration-none border-bottom"></Link>
        <Link href="/" id="titleName">duck hunt library</Link>

        <ul className="list-unstyled ps-0">
            
        <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#general-collapse" aria-expanded="false">
            character
            </button>
            <div className="collapse hide" id="general-collapse">
                <LinkList pairs={[
                    new LinkTitlePairClass("_primer", "/general/primer"),
                    new LinkTitlePairClass("_about", "/general/about"),
                    new LinkTitlePairClass("_glossary", "/general/glossary"),
                    new LinkTitlePairClass("_update_history", "/general/update-history"),
                    new LinkTitlePairClass("_records", "/general/records"),
                ]} />
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#technique-collapse" aria-expanded="false">
            technique
            </button>
            <div className="collapse hide" id="technique-collapse">
                <LinkList pairs={[
                    new LinkTitlePairClass("_ssbu_fundamentals", "/technique/ssbu-fundamentals"),
                    new LinkTitlePairClass("_moveset", "/technique/moveset"),
                    new LinkTitlePairClass("_movement", "/technique/movement"),
                    new LinkTitlePairClass("_normals", "/technique/normals"),
                    new LinkTitlePairClass("_trick_shot", "/technique/trick-shot"),
                    new LinkTitlePairClass("_clay_shooting", "/technique/clay-shooting"),
                    new LinkTitlePairClass("_wild_gunman", "/technique/wild-gunman"),
                    new LinkTitlePairClass("_ledge_guarding", "/technique/ledge-guarding"),
                    new LinkTitlePairClass("_recovery", "/technique/recovery"),
                    new LinkTitlePairClass("_knockback_storage", "/technique/knockback-storage"),
                    new LinkTitlePairClass("_canicide", "/technique/canicide"),
                    new LinkTitlePairClass("_glitch_tech", "/technique/glitches"),
                ]} />
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#articles-collapse" aria-expanded="false">
            articles
            </button>
            <div className="collapse hide" id="articles-collapse">
                <LinkList pairs={[
                    new LinkTitlePairClass("_stage_selection", "/articles/stage-selection"),
                ]} />
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#matchups-collapse" aria-expanded="false">
            matchups
            </button>
            <div className="collapse hide" id="matchups-collapse">
                <LinkList pairs={matchups.map(matchup => 
                    new LinkTitlePairClass(
                        `_${matchup.number}_${matchup.character}`,
                        `/matchups/${matchup.path}`
                    )
                )} />
            </div>

        </li>

        <li className="border-top my-3"></li>
        <li className="mb-1">
            <SocialsBar />
        </li>
        </ul>
    </div>
    </>
);}