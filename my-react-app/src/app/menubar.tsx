import LinkList from "./linklist";
import SocialsBar from "./socials";
import Link from "next/link";
import { LinkTitlePairClass } from "./linklist";

export default function Menubar() {
    return (
    <>
    <div id="menuBar" className="flex-shrink-0 p-3">
        <a href="/" className="d-flex align-items-left pb-3 mb-3 link-dark text-decoration-none border-bottom">

        </a>

        <Link href="/" id="titleName">duck hunt library</Link>

        <ul className="list-unstyled ps-0">

        <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#general-collapse" aria-expanded="false">
            character
            </button>
            <div className="collapse hide" id="general-collapse">
                <LinkList pairs={[
                    new LinkTitlePairClass("_primer", "/general/primer.html"),
                    new LinkTitlePairClass("_about", "/general/about.html"),
                    new LinkTitlePairClass("_glossary", "/general/glossary.html"),
                    new LinkTitlePairClass("_update_history", "/general/update-history.html"),
                    new LinkTitlePairClass("_records", "/general/records.html"),
                ]} />
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#technique-collapse" aria-expanded="false">
            technique
            </button>
            <div className="collapse hide" id="technique-collapse">
                <LinkList pairs={[
                    new LinkTitlePairClass("_ssbu_fundamentals", "/technique/ssbu-fundamentals.html"),
                    new LinkTitlePairClass("_moveset", "/technique/moveset.html"),
                    new LinkTitlePairClass("_movement", "/technique/movement.html"),
                    new LinkTitlePairClass("_normals", "/technique/normals.html"),
                    new LinkTitlePairClass("_trick_shot", "/technique/trick-shot.html"),
                    new LinkTitlePairClass("_clay_shooting", "/technique/clay-shooting.html"),
                    new LinkTitlePairClass("_wild_gunman", "/technique/wild-gunman.html"),
                    new LinkTitlePairClass("_ledge_guarding", "/technique/ledge-guarding.html"),
                    new LinkTitlePairClass("_recovery", "/technique/recovery.html"),
                    new LinkTitlePairClass("_knockback_storage", "/technique/knockback-storage.html"),
                    new LinkTitlePairClass("_canicide", "/technique/canicide.html"),
                    new LinkTitlePairClass("_glitch_tech", "/technique/glitches.html"),
                ]} />
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#articles-collapse" aria-expanded="false">
            articles
            </button>
            <div className="collapse hide" id="articles-collapse">
                <LinkList pairs={[
                    new LinkTitlePairClass("_stage_selection", "/articles/stage-selection.html"),
                ]} />
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#matchups-collapse" aria-expanded="false">
            matchups
            </button>
            <div className="collapse hide" id="matchups-collapse">
                <LinkList pairs={[
                    new LinkTitlePairClass("_summary", "/matchups/000-019/000-summary.html"),
                    new LinkTitlePairClass("_01_mario", "/matchups/000-019/001-mario"),
                    new LinkTitlePairClass("_02_donkey_kong", "/matchups/000-019/002-donkeykong"),
                    new LinkTitlePairClass("_03_link", "/matchups/000-019/003-link.html"),
                    new LinkTitlePairClass("_04_samus", "/matchups/000-019/004-samus.html"),
                    new LinkTitlePairClass("_04e_dark_samus", "/matchups/000-019/004e-dsamus.html"),
                    new LinkTitlePairClass("_05_yoshi", "/matchups/000-019/005-yoshi.html"),
                    new LinkTitlePairClass("_06_kirby", "/matchups/000-019/006-kirby.html"),
                    new LinkTitlePairClass("_07_fox", "/matchups/000-019/007-fox.html"),
                    new LinkTitlePairClass("_08_pikachu", "/matchups/000-019/008-pikachu.html"),
                    new LinkTitlePairClass("_09_luigi", "/matchups/000-019/009-luigi.html"),
                    new LinkTitlePairClass("_10_ness", "/matchups/000-019/010-ness.html"),
                    new LinkTitlePairClass("_11_captain_falcon", "/matchups/000-019/011-captain-falcon.html"),
                    new LinkTitlePairClass("_12_jigglypuff", "/matchups/000-019/012-jigglypuff.html"),
                ]} />
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