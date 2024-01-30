import axios from "axios";
import * as fs from 'fs';


export class Wordpress{
    
    url
    headers

    constructor(wpConfig) {
        // Store the URL from the wpConfig object
        this.url = wpConfig.url;
        
        // Create the headers object with the authorization and content-type headers
        this.headers = {
          Authorization: "Basic " + Buffer.from(`${wpConfig.username}:${wpConfig.password}`).toString('base64'),
          "Content-Type": "application/json",
        };
    }


    // createPost method for creating a new post
    async createPost(post)
    {
        try {
            const response = await axios.post(`${this.url}/wp-json/wp/v2/posts`, 
                post, 
                { headers: this.headers }
            );
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(`Error while creating post: ${error}`);
        }
    }

    async getAllCateg()
    {
        try {
            const response = await axios.get(`${this.url}/wp-json/wp/v2/categories?hide_empty=false&per_page=100`);
            for(const category of response.data)
            {
                console.log(category.name)
            }
            return response.data
        } catch (error) {
            console.log(error)
            throw new Error(`Error while get taxonomies: ${error}`);
        }
    }


    async getOnePost(id){
        try {
            const response = await axios.get(`${this.url}/wp-json/wp/v2/posts/${id}`);
            console.log(response.data._links.self)
            return response.data
        } catch (error) {
            console.log(error)
            throw new Error(`Error while get one post: ${error}`);
        }
    }


    async getBloks()
    {
        try {
            const response = await axios.get(`${this.url}/wp-json/wp/v2/block-renderer?name=Articles Vidéos Beta 2.0`,
                { headers: this.headers }
            );

            console.log(response)
            for(const category of response.data)
            {
                console.log(category)
            }


            return response.data
        } catch (error) {
            console.log(error)
            throw new Error(`Error while get one post: ${error}`);
        }
    }


    
}

