
'use client';

import GradientButton from '@/components/ui/Buttons/GradientButton';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SevenWondersOfWorld() {
    const data = [
        {
            name: 'Grande Muralha da China',
            country: 'China',
            continent:'Ásia',
            subtitle: 'Monumento à Grandeza Humana',
            description: 'Uma obra monumental que atravessa montanhas e revela séculos de história chinesa.',
            imageURL: 'https://i.imgur.com/7Q2bt4v.jpeg',
        },
        {
            name: 'Petra',
            country: 'Jordânia',
            continent:'Ásia',
            subtitle: 'Maravilha Arqueológica',
            description: 'Uma cidade histórica esculpida nas rochas rosadas da Jordânia, repleta de mistério e beleza.',
            imageURL: 'https://i.imgur.com/YLnb9Xf.jpeg',
        },
        {
            name: 'Chichén Itzá',
            country: 'México',
            continent:'América do Norte',
            subtitle: 'Legado da Civilização Maia',
            description: 'Explore a grandiosidade da civilização maia em meio a templos e conhecimentos ancestrais.',
            imageURL: 'https://i.imgur.com/AJbVBOX.jpeg',
        },
        {
            name: 'Cristo Redentor',
            country: 'Brasil',
            continent:'América do Sul',
            subtitle: 'Símbolo de Fé e União',
            description: 'Um dos cartões-postais mais famosos do Brasil, com vistas incríveis do Rio de Janeiro.',
            imageURL: 'https://i.imgur.com/4rVKqsB.jpeg',
        },
        {
            name: 'Coliseu de Roma',
            country: 'Itália',
            continent:'Europa',
            subtitle: 'Ícone do Império Romano',
            description: 'Reviva a história do Império Romano em um dos monumentos mais emblemáticos da Antiguidade.',
            imageURL: 'https://i.imgur.com/LlP6myQ.jpeg',
        },
        {
            name: 'Machu Picchu',
            country: 'Peru',
            continent:'América do Sul',
            subtitle: 'Tesouro Perdido dos Incas',
            description: 'Uma antiga cidade inca cercada pelas montanhas dos Andes e por paisagens impressionantes.',
            imageURL: 'https://i.imgur.com/lKYj5Bl.jpeg',
        },
        {
            name: 'Taj Mahal',
            country: 'Índia',
            continent:'Ásia',
            subtitle: 'Monumento Eterno ao Amor',
            description: 'Um magnífico monumento de mármore branco que simboliza amor e arquitetura atemporal.',
            imageURL: 'https://i.imgur.com/PWUPpUn.jpeg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className=" mx-auto rounded-xl bg-white/80 p-3 h-fit ">

            <div className="relative min-w-125 h-130 overflow-hidden">
                {data.map((item, index) => (
                    <div key={item.name} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div className='flex justify-between font-serif'>
                            <h1 className="text-2xl font-medium mb-2">As 7 maravilhas</h1>
                            <p className='text-sm'>{index + 1}/7</p>
                        </div>

                        <img src={item.imageURL}
                            alt={item.name}
                            className="w-full max-h-80 object-center rounded-xl "
                        />
                        <p className='text-md italic text-orange-950 truncate font-serif'>{item.subtitle}</p>
                        <p className='text-3xl truncate font-serif'>{item.name} - {item.country}</p>
                        <p className='text-sm text-second-color mb-3 line-clamp-2 font-serif'>{item.description}</p>
                        <div className='flex'>
                            <GradientButton text={'Visualizar guia'} type='button' />
                            <button className='font-sans bg-white px-2 ml-2 rounded-xl border border-gray-100'><Heart /></button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
                {data.map((item, index) => (
                    <button key={item.name}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 w-2.5 cursor-pointer ${index === currentIndex ? 'bg-primary-color' : 'bg-gray-400 hover:bg-gray-500'}`}
                    />
                ))}
            </div>
        </div>
    );
}
