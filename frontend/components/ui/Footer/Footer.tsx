import texts from "@/constants/texts";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";
import News from "./News";

export default function Footer() {
    return (
        <div className="flex flex-col items-center
            lg:flex lg:flex-row lg:justify-between lg:mx-4 lg:mt-15 lg:mb-2
        ">
            <SocialLinks />
            <div className="flex gap-20 my-10
                lg:gap-30
            ">
                <FooterSection title={texts.footer.productTitle}
                    links={[
                        { label: `${texts.footer.createWithAi}`, href: "/" },
                        { label: `${texts.footer.explore}`, href: "/" },
                        { label: `${texts.footer.itinerary}`, href: "/itinerary" },
                        { label: `${texts.footer.price}`, href: "/pro" },
                    ]}
                />
                <FooterSection title={texts.footer.businessTitle}
                    links={[
                        { label: `${texts.footer.aboutUs}`, href: "/" },
                        { label: `${texts.footer.blog}`, href: "/" },
                        { label: `${texts.footer.career}`, href: "/" },
                        { label: `${texts.footer.contact}`, href: "/" },
                    ]}
                />
            </div>
            <News />
        </div>
    )
}