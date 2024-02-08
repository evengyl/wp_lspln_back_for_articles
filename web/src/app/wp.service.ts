import { Injectable } from "@angular/core";
import axios, { all } from "axios";
import { response } from "express";



@Injectable({
    providedIn: 'root',
})
export class WpService {
    
    url : string = ""
    headers :any = {}

    //urlProxy : string = "https://cors-anywhere.herokuapp.com/"
    urlProxy : string = "https://corsproxy.io/?"

    imageTest : any

    constructor() {

        // Define configuration for connecting to the WordPress API
        const wpConfig = {
            url: 'https://www.lasciencepourlesnuls.fr',
            username: 'baudouxloic@gmail.com',
            password: "Darkevengyl71414242_"
        }

        this.init(wpConfig)
        
    }

    async init(wpConfig : any){
        // Store the URL from the wpConfig object
        this.url = wpConfig.url;
                
        // Create the headers object with the authorization and content-type headers
        this.headers = {
        Authorization: "Basic " + btoa(`${wpConfig.username}:${wpConfig.password}`),
        "Content-Type": "application/json",
        };
    }


    // createPost method for creating a new post
    async createPost(post : any)
    {
        try {
            const response = await axios.post(`${this.urlProxy}${this.url}/wp-json/wp/v2/posts`, 
                post, 
                { headers: this.headers }
            );
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(`Error while creating post: ${error}`);
        }
    }

    async createTagsKeyWord(stringTagBrut : any)
    {
        let newArrayTagForWP = stringTagBrut.split(',').map((tag : any) => ({ name: tag.trim() }));

        const arrayIdKeyTags = await Promise.all(newArrayTagForWP.map(async (tag: any) => {
            try {
                
                const response = await axios.post(`${this.urlProxy}${this.url}/wp-json/wp/v2/tags`, 
                    tag, 
                    { headers: this.headers }
                )
                
                return { id: response.data.id, name: response.data.name };
            } 
            catch (error) 
            {
                console.error('Erreur lors de la création du tag :', error);
                return null;
            }
        }));


        return arrayIdKeyTags.filter(tag => tag !== null); // Retirer les éléments null du tableau

    }


    async getAllTagsForThisVideos(stringTagBrut : string)
    {

        let newArrayTagForWP = stringTagBrut.split(',').map((tag : any) => ({ name: tag.trim() }));

        const arrayIdKeyTags = await Promise.all(newArrayTagForWP.map(async (tag: any) => {
            try {
                const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/tags?search=${tag.name}`, 
                    { headers: this.headers }
                )
                return { id: response.data[0].id, name: response.data[0].name };
            } 
            catch (error) 
            {
                console.error('Erreur lors de la récupération du tag :', error);
                return null;
            }
        }));


        return arrayIdKeyTags.filter(tag => tag !== null); // Retirer les éléments null du tableau
    }


    async updatePost(idPost : any, post : any)
    {
        try {
            const response = await axios.post(`${this.urlProxy}${this.url}/wp-json/wp/v2/posts/${idPost}`, 
                post, 
                { headers: this.headers }
            );
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(`Error while updating post: ${error}`);
        }
    }

    async getAllCateg()
    {
        try {
            const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/categories?hide_empty=false&per_page=100`);
            
            return response.data.map((category: any) => {
                return { id: category.id, name: category.name }
            })
            
        } catch (error) {
            console.log(error)
            throw new Error(`Error while get taxonomies: ${error}`);
        }
    }


    async getOnePost(id : any){
        try {
            const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/posts/${id}`,
            { headers: this.headers });

            return response.data

        } catch (error) {
            console.log(error)
            throw new Error(`Error while get one post: ${error}`);
        }
    }

    async updateFeaturedImage(idPost : number, idImage : number)
    {
        try{
            const response = await axios.post(`${this.urlProxy}${this.url}/wp-json/wp/v2/posts/${idPost}`,
            {
                featured_media : idImage
            },
            { headers: this.headers }
            );

            return response.data

        } catch (error) {
            console.log(error)
            throw new Error(`Error while update featured image: ${error}`);
        }
        
    }


    async getAllBlockCompo()
    {
        try {
            const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/blocks`,
            { headers: this.headers });

            return response.data

        } catch (error) {
            console.log(error)
            throw new Error(`Error while get al block composition: ${error}`);
        }
    }


    async getBlockArticleV3Compo(id : any)
    {
        try {
            const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/blocks/${id}`,
            { headers: this.headers });

            return response.data

        } catch (error) {
            console.log(error)
            throw new Error(`Error while get  block composition v3: ${error}`);
        }
    }

    async getAllPost(){
        try {
            const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/posts?per_page=1`);
            
            return response.data
        } catch (error) {
            console.log(error)
            throw new Error(`Error while get all post: ${error}`);
        }
    }


    async getBloks()
    {
        try {
            const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/block-renderer?name=Articles Vidéos Beta 2.0`,
                { headers: this.headers }
            );

            return response.data
        } catch (error) {
            console.log(error)
            throw new Error(`Error while get one post: ${error}`);
        }
    }


    async uploadMediaImageThumbnails(url : string, nameVideo : string, slug : string)
    {
        // Récupérer l'image depuis l'URL
        const reponse = await axios.get(this.urlProxy + url, { responseType: 'arraybuffer' });
        

        // Ajouter l'image dans les médias de WordPress
        let reponseMediaCreate = await axios.post(
            `${this.urlProxy}${this.url}/wp-json/wp/v2/media`,
            reponse.data,
            {
                headers: {
                    ...this.headers,
                    'Content-Disposition': `attachment; filename=${slug}.jpg`,
                    'Content-Type': 'image/jpeg'
                }
            }
        );

        //modifier l'image dans les médias de WordPress avec les text alt et tout ça
        let reponseMediaUpdate = await axios.post(
            `${this.urlProxy}${this.url}/wp-json/wp/v2/media/${reponseMediaCreate.data.id}`,
            {
                alt_text : nameVideo,
                description : nameVideo,
                slug : slug,
                title : nameVideo,
                caption : nameVideo

            },
            {
                headers: {
                    ...this.headers,
                }
            }
        );


        return reponseMediaUpdate.data
    }


    async getBannerForPost(nameChannel : string)
    {
        
        try {
            // Supprimer les espaces et les caractères spéciaux, puis convertir en majuscules
            let channelNameFormatted = nameChannel.trim().replace(/[^\w\sÀ-ÖØ-öø-ÿ]/g, '');

            // Remplacer les espaces par des majuscules
            channelNameFormatted = channelNameFormatted.split(/\s+/).map((word : any, index : any) => {
                if (index === 0) {
                    // Pour le premier mot, convertir la première lettre en majuscule
                    return "Banniere" + word.charAt(0).toUpperCase() + word.slice(1);
                } else {
                    // Pour les autres mots, garder la casse d'origine
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }
            }).join('');

            const response = await axios.get(`${this.urlProxy}${this.url}/wp-json/wp/v2/media?search=${channelNameFormatted}`, 
                { headers: this.headers }
            )
            return response.data[0].source_url
        } 
        catch (error) 
        {
            console.error("Erreur lors de la récupération d'un media banner :", error);
            return null;
        }
    }


    async manipulateContentBrut(contentEmpty : any, allDatas : any)
    {
        let contentFilled : any

        let imageUrl = `url(${allDatas.bannerUrl})`
        // Construire une expression régulière pour rechercher la classe spécifique
        const regexBanner = /class="([^"]*?\bhereForBannerBackground\b[^"]*?)"/;

        // Vérifier si la classe spécifique existe dans la chaîne HTML
        const match = contentEmpty.match(regexBanner);

        if (match) {
            // Extraire les classes existantes et ajouter le style d'arrière-plan
            const classes = match[1];
            const styleWithBackgroundImage = `${classes}" style="background-image: ${imageUrl} !important;`;

            // Remplacer la classe existante par la nouvelle avec le style
            contentEmpty = contentEmpty.replace(regexBanner, `class="${styleWithBackgroundImage}"`);
        }


        //Changement du titre de la page html de l'article
        // Expression régulière pour rechercher le h2 avec la classe "uagb-heading-text"
        let regexTitle = /<h2 class="uagb-heading-text">(.*?)<\/h2>/;
        let regexChannel = /<p class="has-text-align-center channelYoutube has-ast-global-color-5-color has-text-color has-link-color">(.*?)<\/p>/;
        let regexDescription = /<p class="has-text-align-center descriptionMultiLine has-ast-global-color-5-color has-text-color has-link-color">(.*?)<\/p>/

        let regexUrlVideo = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g

        //pour la prod test 
        contentFilled = contentEmpty
        //#############################

        // Remplacement du texte dans la grosse variable
        contentFilled = contentFilled.replace(regexTitle, `<h2 class="uagb-heading-text">${allDatas.title}</h2>`);
        contentFilled = contentFilled.replace(regexChannel, `<p class="has-text-align-center channelYoutube has-ast-global-color-5-color has-text-color has-link-color">Chaîne Youtube : ${allDatas.channel}</p>`)
        //#############################


        //partie pour remplacer les ligne de description de la videos
        let fullText = ""
        allDatas.description.forEach((eachLine : string) => {
            if(eachLine.length > 1)
                fullText += `<p class="has-text-align-center descriptionMultiLine has-ast-global-color-5-color has-text-color has-link-color">${eachLine}</p>`
        })
        contentFilled = contentFilled.replace(regexDescription, fullText)
        //#############################



        //remplacement de l'url de la video
        contentFilled = contentFilled.replace(regexUrlVideo, allDatas.url)
        //#############################



        //préparation du html pour manipulation des links source etc

        //manipulation des lien sous la video pour les source de contenu
        const regex = /<div class=\"wp-block-uagb-icon-list-child uagb-block(.*?)\">(.*?)<\/div>/g;
		// Expression régulière pour capturer les blocs spécifiés avec les IDs dynamiques
		//const regex2 = /<!--\s*wp:uagb\/icon-list\s*{.*?}\s*-->\s*<div class="wp-block-uagb-icon-list uagb-block-[(.*?)]+ listLinkSourceVideos">.*?<!--\s*\/wp:uagb\/icon-list\s*-->/gs;


        // Supprimer le bloc <div> et son contenu de la chaîne HTML
        contentFilled = contentFilled.replace(regex, '');    
        //#############################

        const debutBalise = contentFilled.indexOf('uagb-icon-list__wrap">');
        if (debutBalise === -1) {
            console.error("Balise spécifiée non trouvée !");
            return;
        }
    
        // Chercher l'indice de fin de la balise spécifique
        const finBalise = contentFilled.indexOf('</div>', debutBalise);
        if (finBalise === -1) {
            console.error("Balise spécifiée non fermée !");
            return;
        }

        
        
        // Diviser la chaîne en deux parties avant et après l'indice de début de la balise
        const partieAvant = contentFilled.substring(0, debutBalise + 22);
        const partieApres = contentFilled.substring(debutBalise + 22);
        // Concaténer les parties avec le nouveau contenu ajouté entre elles
        
        const nouveauHTML = partieAvant + allDatas.allDatasWithLink + partieApres;

        return nouveauHTML
    }


    async manipulationLinkVideos(allLinks : any){
        let allData = ``
        allLinks.forEach((each : any) => {
            if(each.text.length > 1)
                allData += `<div class="wp-block-uagb-icon-list-child">
                <a target="_self" aria-label="${each.text}" rel="noopener noreferrer" href="${each.link}"> </a>
                <span class="uagb-icon-list__source-wrap"><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"></path></svg></span>
                <span class="uagb-icon-list__label">${each.text}</span>
                </div>`
        })

        return allData

    }
}
