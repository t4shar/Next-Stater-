'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
function Links() {
    const pathName = usePathname();
    const LinkArr = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ];

    return (
        <>
            <ul>
                {LinkArr.map((link, index) => (
                    <li key={index} className={pathName === link.path && active}>
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Links;
