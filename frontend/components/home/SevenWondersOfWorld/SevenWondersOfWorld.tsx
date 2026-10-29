import texts from '@/constants/texts';
import { getReadyGuides } from '@/services/readyGuides.service';
import Link from 'next/link';

interface SevenWondersOfWorldProps {
    title: string
    filter: string
}

export default async function SevenWondersOfWorld({ title, filter }: SevenWondersOfWorldProps) {
    const readyGuides = await getReadyGuides();
    const filteredGuides = readyGuides.filter((guide) => guide.travelType === filter);

    return (
        <div className="mx-auto mt-10 w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 2xl:px-12">
            <h1 className="text-center text-xl text-primary-color sm:text-2xl md:text-3xl xl:text-5xl"> {title} </h1>

            <p className="mb-6 mt-2 text-center text-sm font-light text-secondary-color sm:text-base xl:text-lg"> {texts.sevenWondersOfWorld.subtitle} </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
                {filteredGuides.map((guide, index) => (
                    <Link href={`/ready_guides/${guide.id}`} key={guide.id}
                        className={`group relative block h-72 w-full overflow-hidden rounded-xl transition-transform duration-200 hover:scale-101 ${index == 6 ? 'lg:col-start-2' : ''}
                            sm:h-80 
                            lg:h-80 
                            xl:h-96     
                    `}>
                        <img src={guide.imageURL} alt={guide.title} className="absolute inset-0 h-full w-full object-cover brightness-30 transition duration-300 hover:brightness-60" />

                        <div className="absolute right-3 top-3 z-10">
                            <p className="rounded-xl bg-green-200/30 px-3 py-1 text-xs font-bold text-green-400 sm:text-sm">
                                {texts.real}
                                {guide.price.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-0 z-10 w-full p-3 text-white sm:p-4">
                            <p className="line-clamp-1 text-lg font-semibold sm:text-xl lg:text-2xl"> {guide.title} </p>
                            <p className="mt-1 line-clamp-2 text-xs text-gray-200 sm:text-sm"> {guide.description} </p>

                            <div className="mt-3 flex flex-wrap justify-between gap-x-3 gap-y-2 border-t border-white/20 pt-3 text-[10px] text-gray-300 sm:text-xs">
                                <p>{guide.currenty}</p>
                                <p>{guide.continent}</p>
                                <p>{guide.language}</p>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
}