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
                    new LinkTitlePairClass("_summary", "/matchups/000-019/000-summary.html"),
                    new LinkTitlePairClass("_01_mario", "/matchups/000-019/001-mario"),
                    new LinkTitlePairClass("_02_donkey_kong", "/matchups/000-019/002-donkeykong"),
                    new LinkTitlePairClass("_03_link", "/matchups/000-019/003-link.html"),
                    new LinkTitlePairClass("_04_samus_and_dark_samus", "/matchups/000-019/004-samus.html"),
                    new LinkTitlePairClass("_05_yoshi", "/matchups/000-019/005-yoshi.html"),
                    new LinkTitlePairClass("_06_kirby", "/matchups/000-019/006-kirby.html"),
                    new LinkTitlePairClass("_07_fox", "/matchups/000-019/007-fox.html"),
                    new LinkTitlePairClass("_08_pikachu", "/matchups/000-019/008-pikachu.html"),
                    new LinkTitlePairClass("_09_luigi", "/matchups/000-019/009-luigi.html"),
                    new LinkTitlePairClass("_10_ness", "/matchups/000-019/010-ness.html"),
                    new LinkTitlePairClass("_11_captain_falcon", "/matchups/000-019/011-captain-falcon.html"),
                    new LinkTitlePairClass("_12_jigglypuff", "/matchups/000-019/012-jigglypuff.html"),
                    new LinkTitlePairClass("_13_peach_and_daisy", "/matchups/000-019/013-peach_daisy.html"),
                    new LinkTitlePairClass("_14_bowser", "/matchups/000-019/014-bowser.html"),
                    new LinkTitlePairClass("_15_ice_climbers", "/matchups/000-019/015-ice-climbers.html"),
                    new LinkTitlePairClass("_16_sheik", "/matchups/000-019/016-sheik.html"),
                    new LinkTitlePairClass("_17_zelda", "/matchups/000-019/017-zelda.html"),
                    new LinkTitlePairClass("_18_dr_mario", "/matchups/000-019/018-dr-mario.html"),
                    new LinkTitlePairClass("_19_pichu", "/matchups/000-019/019-pichu.html"),
                    new LinkTitlePairClass("_20_falco", "/matchups/020-039/020-falco.html"),
                    new LinkTitlePairClass("_21_marth", "/matchups/020-039/021-marth.html"),
                    new LinkTitlePairClass("_21e_lucina", "/matchups/020-039/021e-lucina.html"),
                    new LinkTitlePairClass("_22_young_link", "/matchups/020-039/022-young-link.html"),
                    new LinkTitlePairClass("_23_ganondorf", "/matchups/020-039/023-ganondorf.html"),
                    new LinkTitlePairClass("_24_mewtwo", "/matchups/020-039/024-mewtwo.html"),
                    new LinkTitlePairClass("_25_roy", "/matchups/020-039/025-roy.html"),
                    new LinkTitlePairClass("_25e_chrom", "/matchups/020-039/025e-chrom.html"),
                    new LinkTitlePairClass("_26_mr_game_and_watch", "/matchups/020-039/026-mr-game-and-watch.html"),
                    new LinkTitlePairClass("_27_meta_knight", "/matchups/020-039/027-meta-knight.html"),
                    new LinkTitlePairClass("_28_pit_and_dark_pit", "/matchups/020-039/028-pit.html"),
                    new LinkTitlePairClass("_29_zero_suit_samus", "/matchups/020-039/029-zero-suit-samus.html"),
                    new LinkTitlePairClass("_30_wario", "/matchups/020-039/030-wario.html"),
                    new LinkTitlePairClass("_31_snake", "/matchups/020-039/031-snake.html"),
                    new LinkTitlePairClass("_32_ike", "/matchups/020-039/032-ike.html"),
                    new LinkTitlePairClass("_33-35_pokemon_trainer", "/matchups/020-039/033-035-pokemon-trainer.html"),
                    new LinkTitlePairClass("_36_diddy_kong", "/matchups/020-039/036-diddy-kong.html"),
                    new LinkTitlePairClass("_37_lucas", "/matchups/020-039/037-lucas.html"),
                    new LinkTitlePairClass("_38_sonic", "/matchups/020-039/038-sonic.html"),
                    new LinkTitlePairClass("_39_king_dedede", "/matchups/020-039/039-king-dedede.html"),
                    new LinkTitlePairClass("_40_olimar", "/matchups/020-039/040-olimar.html"),
                    new LinkTitlePairClass("_41_lucario", "/matchups/020-039/041-lucario.html"),
                    new LinkTitlePairClass("_42_rob", "/matchups/040-059/042-rob.html"),
                    new LinkTitlePairClass("_43_toon_link", "/matchups/040-059/043-toonlink.html"),
                    new LinkTitlePairClass("_44_wolf", "/matchups/040-059/044-wolf.html"),
                    new LinkTitlePairClass("_45_villager", "/matchups/040-059/045-villager.html"),
                    new LinkTitlePairClass("_46_megaman", "/matchups/040-059/046-megaman.html"),
                    new LinkTitlePairClass("_47_wii_fit_trainer", "/matchups/040-059/047-wiifittrainer.html"),
                    new LinkTitlePairClass("_48_rosalina_and_luma", "/matchups/040-059/048-rosalina.html"),
                    new LinkTitlePairClass("_49_little_mac", "/matchups/040-059/049-littlemac.html"),
                    new LinkTitlePairClass("_50_greninja", "/matchups/040-059/050-greninja.html"),
                    new LinkTitlePairClass("_51_mii_brawler", "/matchups/040-059/051-miibrawler.html"),
                    new LinkTitlePairClass("_52_mii_swordfighter", "/matchups/040-059/052-miiswordfighter.html"),
                    new LinkTitlePairClass("_53_mii_gunner", "/matchups/040-059/053-miigunner.html"),
                    new LinkTitlePairClass("_54_palutena", "/matchups/040-059/054-palutena.html"),
                    new LinkTitlePairClass("_55_pac_man", "/matchups/040-059/055-pacman.html"),
                    new LinkTitlePairClass("_56_robin", "/matchups/040-059/056-robin.html"),
                    new LinkTitlePairClass("_57_shulk", "/matchups/040-059/057-shulk.html"),
                    new LinkTitlePairClass("_58_bowser_jr", "/matchups/040-059/058-bowserjr.html"),
                    new LinkTitlePairClass("_59_duck_hunt", "/matchups/040-059/059-duckhunt.html"),
                    new LinkTitlePairClass("_60_ryu", "/matchups/060-082/060-ryu.html"),
                    new LinkTitlePairClass("_60e_ken", "/matchups/060-082/060e-ken.html"),
                    new LinkTitlePairClass("_61_cloud", "/matchups/060-082/061-cloud.html"),
                    new LinkTitlePairClass("_62_corrin", "/matchups/060-082/062-corrin.html"),
                    new LinkTitlePairClass("_63_bayonetta", "/matchups/060-082/063-bayonetta.html"),
                    new LinkTitlePairClass("_64_inkling", "/matchups/060-082/064-inkling.html"),
                    new LinkTitlePairClass("_65_ridley", "/matchups/060-082/065-ridley.html"),
                    new LinkTitlePairClass("_66_simon_and_richter", "/matchups/060-082/066-belmonts.html"), 
                    new LinkTitlePairClass("_67_king_k_rool", "/matchups/060-082/067-kingkrool.html"),
                    new LinkTitlePairClass("_68_isabelle", "/matchups/060-082/068-isabelle.html"),
                    new LinkTitlePairClass("_69_incineroar", "/matchups/060-082/069-incineroar.html"),
                    new LinkTitlePairClass("_70_piranha_plant", "/matchups/060-082/070-piranha.html"),
                    new LinkTitlePairClass("_71_joker", "/matchups/060-082/071-joker.html"),
                    new LinkTitlePairClass("_72_hero", "/matchups/060-082/072-hero.html"),
                    new LinkTitlePairClass("_73_banjo_kazooie", "/matchups/060-082/073-banjokazooie.html"),
                    new LinkTitlePairClass("_74_terry", "/matchups/060-082/074-terry.html"),
                    new LinkTitlePairClass("_75_byleth", "/matchups/060-082/075-byleth.html"),
                    new LinkTitlePairClass("_76_minmin", "/matchups/060-082/076-minmin.html"),
                    new LinkTitlePairClass("_77_steve", "/matchups/060-082/077-steve.html"),
                    new LinkTitlePairClass("_78_sephiroth", "/matchups/060-082/078-sephiroth.html"),
                    new LinkTitlePairClass("_79-80_pyra_and_mythra", "/matchups/060-082/079-080-aegis.html"),
                    new LinkTitlePairClass("_81_kazuya", "/matchups/060-082/081-kazuya.html"),
                    new LinkTitlePairClass("_82_sora", "/matchups/060-082/082-sora.html"),
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