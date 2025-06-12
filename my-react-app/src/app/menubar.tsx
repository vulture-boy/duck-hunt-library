import MenuLink from "@/app/menulink"
import SocialsBar from "./socials";
import Link from "next/link";

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
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                    <Link href="/general/primer.html" className="link-light rounded">_about</Link>
                </li>
                <li>
                    <Link href="/general/about.html" className="link-light rounded">_about</Link>
                </li>
                <li>
                    <Link href="/general/glossary.html" className="link-light rounded">_glossary</Link>
                </li>
                <li>
                    <Link href="/general/update-history.html" className="link-light rounded">_update_history</Link>
                </li>
                <li>
                    <Link href="/general/records.html" className="link-light rounded">_records
                    </Link>
                </li>
            </ul>
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#technique-collapse" aria-expanded="false">
            technique
            </button>
            <div className="collapse hide" id="technique-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                    <Link href="/technique/ssbu-fundamentals.html" className="link-light rounded">_ssbu_fundamentals</Link>
                </li>
                <li>
                    <Link href="/technique/moveset.html" className="link-light rounded">_moveset</Link>
                </li>
                <li>
                    <Link href="/technique/movement.html" className="link-light rounded">_movement</Link>
                </li>
                <li>
                    <Link href="/technique/normals.html" className="link-light rounded">_normals</Link>
                </li>
                <li>
                    <Link href="/technique/trick-shot.html" className="link-light rounded">_trick_shot</Link>
                </li>
                <li>
                    <Link href="/technique/clay-shooting.html" className="link-light rounded">_clay_shooting</Link>
                </li>
                <li>
                    <Link href="/technique/wild-gunman.html" className="link-light rounded">_wild_gunman</Link>
                </li>
                <li>
                    <Link href="/technique/ledge-guarding.html" className="link-light rounded">_ledge_guarding</Link>
                </li>
                <li>
                    <Link href="/technique/recovery.html" className="link-light rounded">_recovery</Link>
                </li>
                <li>
                    <Link href="/technique/knockback-storage.html" className="link-light rounded">_knockback_storage</Link>
                </li>
                <li>
                    <Link href="/technique/canicide.html" className="link-light rounded">_canicide</Link>
                </li>
                <li>
                    <Link href="/technique/glitches.html" className="link-light rounded">_glitch_tech</Link>
                </li>
            </ul>
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#articles-collapse" aria-expanded="false">
            articles
            </button>
            <div className="collapse hide" id="articles-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                    <Link href="/articles/stage-selection.html" className="link-light rounded">_stage_selection</Link>
                </li>
            </ul>
            </div>
            <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#matchups-collapse" aria-expanded="false">
            matchups
            </button>
            <div className="collapse hide" id="matchups-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                    <Link href="/matchups/000-019/000-summary.html" className="link-light rounded">_summary</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/001-mario" className="link-light rounded">_01_mario</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/002-donkeykong" className="link-light rounded">_02_donkey_kong</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/003-link.html" className="link-light rounded">_03_link</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/004-samus.html" className="link-light rounded">_04_samus</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/004e-dsamus.html" className="link-light rounded">_04e_dark_samus</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/005-yoshi.html" className="link-light rounded">_05_yoshi</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/006-kirby.html" className="link-light rounded">_06_kirby</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/007-fox.html" className="link-light rounded">_07_fox</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/008-pikachu.html" className="link-light rounded">_08_pikachu</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/009-luigi.html" className="link-light rounded">_09_luigi</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/010-ness.html" className="link-light rounded">_10_ness</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/011-captain-falcon.html" className="link-light rounded">_11_captain_falcon</Link>
                </li>
                <li>
                    <Link href="/matchups/000-019/012-jigglypuff.html" className="link-light rounded">_12_jigglypuff</Link>
                </li>
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