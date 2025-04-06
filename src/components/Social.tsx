import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa"

const socials = [
    { icon: <FaLinkedinIn />, path: "youtube.com" }
];


export default function Social({
    containerStyles,
    iconStyles,
}: {
    containerStyles: string;
    iconStyles: string;
}) {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
                )
            })}
        </div>
    )
}
