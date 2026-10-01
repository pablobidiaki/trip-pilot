import Link from "next/link"

interface FooterLink{
    label: string,
    href: string
}

interface FooterSectionProps{
    title: string
    links: FooterLink[]
}

export default function FooterSection({title, links}: FooterSectionProps){
    return(
        <div className="mx-2 flex flex-col">
            <h1 className="text-primary-color text-xl font-medium text-center
                lg:text-start
            ">{title}</h1>

            <div className="mt-2 flex flex-col gap-2">
                {links.map((link) => (
                    <Link className="text-second-color text-sm text-center
                        lg:text-start
                    " key={link.label} href={link.href}> {link.label} </Link>
                ))}
            </div>
        </div>
    )
}