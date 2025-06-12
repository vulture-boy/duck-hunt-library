import Link from "next/link";

export interface LinkTitlePair {
    title: string,
    link: string
}

export class LinkTitlePairClass implements LinkTitlePair {
    title: string;
    link: string;
    constructor(title: string, link: string) {
        this.title = title;
        this.link = link;
    }
}

export interface LinkListProps {
    pairs: LinkTitlePairClass[],
}

export default function LinkList(props : LinkListProps) {
    return (
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            {props.pairs.map((pair) => (
                <li key={pair.link}>
                    <Link href={pair.link} className="link-light rounded">{pair.title}</Link>
                </li>
            ))}
        </ul>
);}