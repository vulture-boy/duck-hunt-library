import LinkList from "./linklist";
import SocialsBar from "./socials";
import Link from "next/link";
import { LinkTitlePairClass } from "./linklist";

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
                    new LinkTitlePairClass("_summary", "/matchups/000-019/000-summary"),
                    new LinkTitlePairClass("_01_mario", "/matchups/000-019/001-mario"),
                    new LinkTitlePairClass("_02_donkey_kong", "/matchups/000-019/002-donkey-kong"),
                    new LinkTitlePairClass("_03_link", "/matchups/000-019/003-link"),
                    new LinkTitlePairClass("_04_samus_and_dark_samus", "/matchups/000-019/004-samus"),
                    new LinkTitlePairClass("_05_yoshi", "/matchups/000-019/005-yoshi"),
                    new LinkTitlePairClass("_06_kirby", "/matchups/000-019/006-kirby"),
                    new LinkTitlePairClass("_07_fox", "/matchups/000-019/007-fox"),
                    new LinkTitlePairClass("_08_pikachu", "/matchups/000-019/008-pikachu"),
                    new LinkTitlePairClass("_09_luigi", "/matchups/000-019/009-luigi"),
                    new LinkTitlePairClass("_10_ness", "/matchups/000-019/010-ness"),
                    new LinkTitlePairClass("_11_captain_falcon", "/matchups/000-019/011-captain-falcon"),
                    new LinkTitlePairClass("_12_jigglypuff", "/matchups/000-019/012-jigglypuff"),
                    new LinkTitlePairClass("_13_peach_and_daisy", "/matchups/000-019/013-peach-daisy"),
                    new LinkTitlePairClass("_14_bowser", "/matchups/000-019/014-bowser"),
                    new LinkTitlePairClass("_15_ice_climbers", "/matchups/000-019/015-ice-climbers"),
                    new LinkTitlePairClass("_16_sheik", "/matchups/000-019/016-sheik"),
                    new LinkTitlePairClass("_17_zelda", "/matchups/000-019/017-zelda"),
                    new LinkTitlePairClass("_18_dr_mario", "/matchups/000-019/018-dr-mario"),
                    new LinkTitlePairClass("_19_pichu", "/matchups/000-019/019-pichu"),
                    new LinkTitlePairClass("_20_falco", "/matchups/020-039/020-falco"),
                    new LinkTitlePairClass("_21_marth_and_lucina", "/matchups/020-039/021-marth-lucina"),
                    new LinkTitlePairClass("_22_young_link", "/matchups/020-039/022-young-link"),
                    new LinkTitlePairClass("_23_ganondorf", "/matchups/020-039/023-ganondorf"),
                    new LinkTitlePairClass("_24_mewtwo", "/matchups/020-039/024-mewtwo"),
                    new LinkTitlePairClass("_25_roy_and_chrom", "/matchups/020-039/025-roy-chrom"),
                    new LinkTitlePairClass("_26_mr_game_and_watch", "/matchups/020-039/026-game-and-watch"),
                    new LinkTitlePairClass("_27_meta_knight", "/matchups/020-039/027-meta-knight"),
                    new LinkTitlePairClass("_28_pit_and_dark_pit", "/matchups/020-039/028-pit"),
                    new LinkTitlePairClass("_29_zero_suit_samus", "/matchups/020-039/029-zero-suit-samus"),
                    new LinkTitlePairClass("_30_wario", "/matchups/020-039/030-wario"),
                    new LinkTitlePairClass("_31_snake", "/matchups/020-039/031-snake"),
                    new LinkTitlePairClass("_32_ike", "/matchups/020-039/032-ike"),
                    new LinkTitlePairClass("_33_pokemon_trainer", "/matchups/020-039/033-pokemon-trainer"),
                    new LinkTitlePairClass("_36_diddy_kong", "/matchups/020-039/036-diddy-kong"),
                    new LinkTitlePairClass("_37_lucas", "/matchups/020-039/037-lucas"),
                    new LinkTitlePairClass("_38_sonic", "/matchups/020-039/038-sonic"),
                    new LinkTitlePairClass("_39_king_dedede", "/matchups/020-039/039-king-dedede"),
                    new LinkTitlePairClass("_40_olimar", "/matchups/040-059/040-olimar"),
                    new LinkTitlePairClass("_41_lucario", "/matchups/040-059/041-lucario"),
                    new LinkTitlePairClass("_42_rob", "/matchups/040-059/042-rob"),
                    new LinkTitlePairClass("_43_toon_link", "/matchups/040-059/043-toon-link"),
                    new LinkTitlePairClass("_44_wolf", "/matchups/040-059/044-wolf"),
                    new LinkTitlePairClass("_45_villager", "/matchups/040-059/045-villager"),
                    new LinkTitlePairClass("_46_megaman", "/matchups/040-059/046-mega-man"),
                    new LinkTitlePairClass("_47_wii_fit_trainer", "/matchups/040-059/047-wii-fit-trainer"),
                    new LinkTitlePairClass("_48_rosalina_and_luma", "/matchups/040-059/048-rosalina"),
                    new LinkTitlePairClass("_49_little_mac", "/matchups/040-059/049-little-mac"),
                    new LinkTitlePairClass("_50_greninja", "/matchups/040-059/050-greninja"),
                    new LinkTitlePairClass("_51_mii_brawler", "/matchups/040-059/051-mii-brawler"),
                    new LinkTitlePairClass("_52_mii_swordfighter", "/matchups/040-059/052-mii-swordfighter"),
                    new LinkTitlePairClass("_53_mii_gunner", "/matchups/040-059/053-mii-gunner"),
                    new LinkTitlePairClass("_54_palutena", "/matchups/040-059/054-palutena"),
                    new LinkTitlePairClass("_55_pac_man", "/matchups/040-059/055-pac-man"),
                    new LinkTitlePairClass("_56_robin", "/matchups/040-059/056-robin"),
                    new LinkTitlePairClass("_57_shulk", "/matchups/040-059/057-shulk"),
                    new LinkTitlePairClass("_58_bowser_jr", "/matchups/040-059/058-bowser-jr"),
                    new LinkTitlePairClass("_59_duck_hunt", "/matchups/040-059/059-duck-hunt"),
                    new LinkTitlePairClass("_60_ryu_and_ken", "/matchups/060-079/060-ryu-ken"),
                    new LinkTitlePairClass("_61_cloud", "/matchups/060-079/061-cloud"),
                    new LinkTitlePairClass("_62_corrin", "/matchups/060-079/062-corrin"),
                    new LinkTitlePairClass("_63_bayonetta", "/matchups/060-079/063-bayonetta"),
                    new LinkTitlePairClass("_64_inkling", "/matchups/060-079/064-inkling"),
                    new LinkTitlePairClass("_65_ridley", "/matchups/060-079/065-ridley"),
                    new LinkTitlePairClass("_66_simon_and_richter", "/matchups/060-079/066-simon-richter"), 
                    new LinkTitlePairClass("_67_king_k_rool", "/matchups/060-079/067-king-k-rool"),
                    new LinkTitlePairClass("_68_isabelle", "/matchups/060-079/068-isabelle"),
                    new LinkTitlePairClass("_69_incineroar", "/matchups/060-079/069-incineroar"),
                    new LinkTitlePairClass("_70_piranha_plant", "/matchups/060-079/070-piranha-plant"),
                    new LinkTitlePairClass("_71_joker", "/matchups/060-079/071-joker"),
                    new LinkTitlePairClass("_72_hero", "/matchups/060-079/072-hero"),
                    new LinkTitlePairClass("_73_banjo_kazooie", "/matchups/060-079/073-banjo-kazooie"),
                    new LinkTitlePairClass("_74_terry", "/matchups/060-079/074-terry"),
                    new LinkTitlePairClass("_75_byleth", "/matchups/060-079/075-byleth"),
                    new LinkTitlePairClass("_76_min_min", "/matchups/060-079/076-min-min"),
                    new LinkTitlePairClass("_77_steve", "/matchups/060-079/077-steve"),
                    new LinkTitlePairClass("_78_sephiroth", "/matchups/060-079/078-sephiroth"),
                    new LinkTitlePairClass("_79_pyra_and_mythra", "/matchups/060-079/079-pyra-mythra"),
                    new LinkTitlePairClass("_81_kazuya", "/matchups/080-099/081-kazuya"),
                    new LinkTitlePairClass("_82_sora", "/matchups/080-099/082-sora"),
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