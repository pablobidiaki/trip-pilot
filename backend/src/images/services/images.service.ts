import { Injectable } from "@nestjs/common";

@Injectable()
export class ImagesService {
    constructor() { }

    async getImages(image: string, orientation?: string): Promise<string> {
        const url = orientation ? `https://api.pexels.com/v1/search?query=${image}&per_page=1&orientation=${orientation}` : 
        `https://api.pexels.com/v1/search?query=${image}&per_page=1`
        
        const response = await fetch(url,
            {
                headers: { "Authorization": `${process.env.PEXELS_API_KEY}` }
            })

        const data = await response.json()

        return data.photos[0].src.original
    }
}