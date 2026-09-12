import texts from "@/constants/texts";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";
import News from "./News";

export default function Footer(){
    return(
        <div className="flex justify-between mx-4 mt-15 mb-2">
            <SocialLinks />
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
            <News />
        </div>
    )
}