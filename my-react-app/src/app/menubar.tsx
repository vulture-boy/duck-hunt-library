import MenuLink from "@/app/menulink"
import SocialsBar from "./socials";
import Link from "next/link";

export default function Menubar() {
    return (
    <>
    <div id="menuBar" className="flex-shrink-0 p-3">
        <a href="/" className="d-flex align-items-left pb-3 mb-3 link-dark text-decoration-none border-bottom">

        </a>

        <a href="/" id="titleName">duck hunt library</a>

        <ul className="list-unstyled ps-0">

        <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#general-collapse" aria-expanded="false">
            character
            </button>
            <div className="collapse hide" id="general-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <MenuLink link="/general/primer.html" text="_primer" />
                <li><a href="/general/about.html" className="link-light rounded">_about</a></li>
                <li><a href="/general/glossary.html" className="link-light rounded">_glossary</a></li>
                <li><a href="/general/update-history.html" className="link-light rounded">_update_history</a></li>
                <li><a href="/general/records.html" className="link-light rounded">_records</a></li>
            </ul>
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#technique-collapse" aria-expanded="false">
            technique
            </button>
            <div className="collapse hide" id="technique-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="/technique/ssbu-fundamentals.html" className="link-light rounded">_ssbu_fundamentals</a></li>
                <li><a href="/technique/moveset.html" className="link-light rounded">_moveset</a></li>
                <li><a href="/technique/movement.html" className="link-light rounded">_movement</a></li>
                <li><a href="/technique/normals.html" className="link-light rounded">_normals</a></li>
                <li><a href="/technique/trick-shot.html" className="link-light rounded">_trick_shot</a></li>
                <li><a href="/technique/clay-shooting.html" className="link-light rounded">_clay_shooting</a></li>
                <li><a href="/technique/wild-gunman.html" className="link-light rounded">_wild_gunman</a></li>
                <li><a href="/technique/ledge-guarding.html" className="link-light rounded">_ledge_guarding</a></li>
                <li><a href="/technique/recovery.html" className="link-light rounded">_recovery</a></li>
                <li><a href="/technique/knockback-storage.html" className="link-light rounded">_knockback_storage</a></li>
                <li><a href="/technique/canicide.html" className="link-light rounded">_canicide</a></li>
                <li><a href="/technique/glitches.html" className="link-light rounded">_glitch_tech</a></li>
            </ul>
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#articles-collapse" aria-expanded="false">
            articles
            </button>
            <div className="collapse hide" id="articles-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="articles/stage-selection.html" className="link-light rounded">_stage_selection</a></li>
            </ul>
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#matchups-collapse" aria-expanded="false">
            matchups
            </button>
            <div className="collapse hide" id="matchups-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="/matchups/000-019/000-summary.html" className="link-light rounded">_summary</a></li>
                <li className="link-light rounded"><Link href={"/matchups/000-019/001-mario"}>_01_mario</Link></li>
                <li className="link-light rounded"><Link href={"/matchups/000-019/002-donkeykong"}>_02_donkey_kong</Link></li>
                <li><a href="/matchups/000-019/003-link.html" className="link-light rounded">_03_link</a></li>
                <li><a href="/matchups/000-019/004-samus.html" className="link-light rounded">_04_samus</a></li>
                <li><a href="/matchups/000-019/004e-dsamus.html" className="link-light rounded">_04e_dark_samus</a></li>
                <li><a href="/matchups/000-019/005-yoshi.html" className="link-light rounded">_05_yoshi</a></li>
                <li><a href="/matchups/000-019/006-kirby.html" className="link-light rounded">_06_kirby</a></li>
                <li><a href="/matchups/000-019/007-fox.html" className="link-light rounded">_07_fox</a></li>
                <li><a href="/matchups/000-019/008-pikachu.html" className="link-light rounded">_08_pikachu</a></li>
                <li><a href="/matchups/000-019/009-luigi.html" className="link-light rounded">_09_luigi</a></li>
                <li><a href="/matchups/000-019/010-ness.html" className="link-light rounded">_10_ness</a></li>
                <li><a href="/matchups/000-019/011-captain-falcon.html" className="link-light rounded">_11_captain_falcon</a></li>
                <li><a href="/matchups/000-019/012-jigglypuff.html" className="link-light rounded">_12_jigglypuff</a></li>

            </ul>
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