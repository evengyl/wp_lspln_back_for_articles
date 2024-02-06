import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { WpService } from './wp.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {

	urlYoutube: string = "https://www.youtube.com/watch?v=iQLfyx0-v84"


	channelName: string = ""
	nameVideo: string = ""
	listKeyWords: string = ""
	idVideo: string = ""
	description: string = ""
	imageThumbnail : string = ""


	//wp
	listCateg: any[] = []
	listTagAdded: any[] = []
	listTagAddedIDS : any[] = []
	selectedCategories: any[] = []
	blockCompletArticle : any
	blockCompletArticleFinal : any
	resumeVideo : string = ""
	slug : string = ""
	imageUploaded : any

	newLineArticleDesc1 : string = "ligne 1"
	newLineArticleDesc2 : string = "ligne 2"
	newLineArticleDesc3 : string = "ligne 3"
	newLineArticleDesc4 : string = "ligne 4"


	linkDataVideos1 : string = "link test 1"
	linkDataVideos2 : string = "link test 1"
	linkDataVideos3 : string = "link test 1"
	linkDataVideos4 : string = "link test 1"
	linkDataVideos5 : string = "link test 1"

	textDataVideos1 : string = "text test 1"
	textDataVideos2 : string = "text test 1"
	textDataVideos3 : string = "text test 1"
	textDataVideos4 : string = "text test 1"
	textDataVideos5 : string = "text test 1"

	allDatasWithLink : string = ""
 

	constructor(private ytServe: YoutubeService, private wpServe: WpService) {
		this.init()
	}

	async init(){
		let bloc = await this.wpServe.getBlockArticleV3Compo(1453)
		console.log(bloc.content.raw)
	}


	async initAllDatas_YT_AND_WP() {

		//#############################################################
		/* Youtube video part */
		//#############################################################


		await this.ytServe.getAllHtmlVideo(this.urlYoutube)

		this.channelName = this.ytServe.channelName
		this.nameVideo = this.ytServe.nameVideo
		this.listKeyWords = this.ytServe.listKeyWords
		this.idVideo = this.ytServe.idVideo
		this.description = this.ytServe.description
		this.imageThumbnail = this.ytServe.imageThumbnail





		//#############################################################
		/* Wp composition et article part */
		//#############################################################


		//Get composition V3 article
		this.blockCompletArticle = await this.wpServe.getBlockArticleV3Compo(1453)

		//partie pour upload l'image de la vidéo 
		this.imageUploaded = await this.wpServe.uploadMediaImageThumbnails(this.imageThumbnail, this.nameVideo, this.slug)

		//il faut créer les nouveaux tag pour pouvoir les ajouter à la listes de l'article car il travaille avec les ID des tags
		await this.wpServe.createTagsKeyWord(this.listKeyWords)


		//le soucis c'est que je dois récupérer les tags avec les ids maintenant pour les envoyer dans l'article...
		//donc il faut aller tous les récupérer , comparer les deux listes et ne laisser que ceux qui sont dans la liste initiale
		this.listTagAdded = await this.wpServe.getAllTagsForThisVideos(this.listKeyWords)
		this.listTagAddedIDS = this.listTagAdded.map(tag => tag.id)


		//récupéreration des categ pour les sélectionner pour l'article
		this.listCateg = await this.wpServe.getAllCateg()


		//partie pour le slug url de la vidéo
		this.slug = (this.channelName + " " + this.nameVideo).replace(/[^a-zA-Z0-9]+/g, '-').replace(/-+$/, '').toLowerCase();
	}




	toggleSelection(categoryId: number) {
		const index = this.selectedCategories.indexOf(categoryId);
		if (index === -1) {
			// Si la catégorie n'est pas déjà sélectionnée, l'ajouter à la liste
			this.selectedCategories.push(categoryId);
		} else {
			// Sinon, la retirer de la liste
			this.selectedCategories.splice(index, 1);
		}
	}

	async createArticleFinal() {

		//manipulation des lien sous la video pour les source de contenu
		let allLinks = [
			{ link :this.linkDataVideos1 , text : this.textDataVideos1 },
			{ link :this.linkDataVideos2 , text : this.textDataVideos2 },
			{ link :this.linkDataVideos3 , text : this.textDataVideos3 },
			{ link :this.linkDataVideos4 , text : this.textDataVideos4 },
			{ link :this.linkDataVideos5 , text : this.textDataVideos5 },
		]
		this.allDatasWithLink =  await this.wpServe.manipulationLinkVideos(allLinks)


		//partie principale : manipulation du bloc beta article v3 pour le remplir
		this.blockCompletArticleFinal = await this.wpServe.manipulateContentBrut(this.blockCompletArticle.content.raw, {
			title : this.nameVideo,
			channel : this.channelName,
			description : [
				this.newLineArticleDesc1,
				this.newLineArticleDesc2,
				this.newLineArticleDesc3,
				this.newLineArticleDesc4
			],
			allDatasWithLink : this.allDatasWithLink,
			url : this.urlYoutube,
		})




		//Define a new post object
		const post = {
			title: this.nameVideo,
			categories: this.selectedCategories,
			tags: this.listTagAddedIDS,
			excerpt: this.resumeVideo,
			slug: this.slug,
			content : this.blockCompletArticleFinal
		}
		
		// //Call the createPost method from the WordPress instance and log the result
		let newArticleCreated = await this.wpServe.createPost(post) 

		
		setTimeout(() => {}, 250);

		// //mise a jour de l'image de feature
		await this.wpServe.updateFeaturedImage(newArticleCreated.id, this.imageUploaded.id)

		setTimeout(() => {
		 	//location.reload()
		}, 500);

	}
}
