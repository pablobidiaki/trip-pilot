import Input from "@/components/ui/Input/Input";
import GradientButton from "@/components/ui/Buttons/GradientButton";
import { MapPin, CalendarDays, DollarSign, Users } from "lucide-react";

import texts from "@/constants/texts";
import Dropdown from "@/components/ui/Dropdown/Dropdown";

export default function HeroForm(){
    return(
        <form className="bg-white p-4 max-w-3/7 mx-4 rounded-2xl">
            <div className="grid grid-cols-2 gap-3">
                <Input icon={<MapPin />} title={texts.form.exit_point} placeholder={texts.form.exit_point_placeholder} type='text' required={true}/>
                <Input icon={<MapPin />} title={texts.form.destination} placeholder={texts.form.destination_placeholder} type='text' required={true}/>
            </div>
            <div className="my-4 grid grid-cols-3 gap-3">
                <Input icon={<CalendarDays />} title={texts.form.how_days} placeholder={texts.form.how_days_placeholder} type='text' required={true}/>
                <Input icon={<CalendarDays />} title={texts.form.when} placeholder={texts.form.when_placeholder} type='text' required={true}/>
                <Input icon={<DollarSign />} title={texts.form.budget} placeholder={texts.form.budget_placeholder} type='text' required={false}/>
            </div>
            <div className="my-4 grid grid-cols-2 gap-3">
                <Input icon={<Users />} title={texts.form.people_quantity} placeholder={texts.form.people_quantity_placeholder} type='number' required={true}/>
                <Dropdown />
            </div>

            <GradientButton text={texts.form.button_text}/>
      </form>
    )
}