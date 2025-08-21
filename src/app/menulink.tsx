export interface MenuLinkProps {
    link: string,
    text: string
}

export default function MenuLink({link, text}: MenuLinkProps) {
    return (
        <li><a href={link} className="link-light rounded">{text}</a></li>
    );
}