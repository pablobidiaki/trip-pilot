'use client';

import GradientButton from '@/components/ui/Buttons/GradientButton';
import { getReadyGuides } from '@/services/readyGuides.service';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default async function SevenWondersOfWorld() {
    const readyGuides = await getReadyGuides()

    return (
        <div className="bg-background-color mx-4 mt-15">
            <div>
                {readyGuides.map((guide, index) => (
                    guide.travelType == "Maravilhas do mundo" &&
                    <div key={index}>
                        <img src={guide.imageURL} className='max-w-120' />
                        <h1>{guide.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
