import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root',
})
export class YoutubeService {


    channelName : string = ""
    nameVideo : string = ""
    listKeyWords : string = ""
    idVideo : string = ""
    description : string = ""
    imageThumbnail : string = ""


    // async getDataFromBackendExpress(url : any)
    // {
    //     const response = await axios.post("http://localhost:3333/", { url : url})

    //     let parsing = response.data
    //     console.log(parsing)
    // }   

    async getAllHtmlVideo(url : any)
    {

        try {

            const response = await axios.post("http://localhost:3333/", { url : url})
            console.log(response)
            let parsing = response.data



            //#########################################################################
            let channelName = ""
            let regex = /<link[^>]*\bitemprop="name"[^>]*\bcontent="([^"]*)"[^>]*>/i
            let match = parsing.match(regex)

            if (match)
                channelName = match[1]

            this.channelName = channelName
            //#########################################################################


            //#########################################################################
            let nameVideo = ""
            regex = /<title>(.*?)<\/title>/i
            match = parsing.match(regex)

            if (match)
                nameVideo = new String(match[1]).replace(" - YouTube", "")

            this.nameVideo = nameVideo
            //#########################################################################


            //#########################################################################
            let listKeyWords = []
            regex = /<meta\s+name="keywords"\s+content="([^"]*)"/i;
            match = parsing.match(regex);

            if(match)
                listKeyWords = match[1].split(',').map((keyword : any) => keyword.trim());

            this.listKeyWords = listKeyWords.join(", ")
            //#########################################################################


            //#########################################################################
            let description = ""
            regex = /"shortDescription":"(.*?)","isCrawlable":true,"thumbnail":{"thumbnails"/s;
            match = parsing.match(regex);

            if(match)
                description = match[1]

            description = description.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, ''); // Supprimer tous les caractères de contrôle
            description = description.replace(/\\n/g, '<br>'); // Remplacer les sauts de ligne par <br>

            this.description = description
            //#########################################################################



            //#########################################################################
            let idVideo = ""
            regex = /(?:\?|&)v=([^&]+)/i;
            match = url.match(regex);

            if(match)
                idVideo = match[1]

            this.idVideo = idVideo
            //#########################################################################


            //#########################################################################
            let thumbnailImage = ""
            //regex = /<link\s+as="image"\s+rel="preload"\s+href="([^"]+)"\s*\/?>/i;
            regex = /<link\s+as="image"\s+rel="preload"\s+href="([^"]+)"/g;
            match = parsing.match(regex)
            regex = /href="([^"]+)"/;
            thumbnailImage = match[0].match(regex)[1];
            this.imageThumbnail = thumbnailImage
            //#########################################################################



        } catch (error) {
            console.log(error)
            throw new Error(`Error while get video on youtube: ${error}`)
        }

        
    }


      
}