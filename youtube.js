import axios from "axios";
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer'
import { data } from "./dataTestForYoutube.js"
import e from "express";

export class YouTubeParser
{
    contentHtml
    
    constructor(){
        this.contentHtml = null
    }

    

    async getAllHtmlVideo()
    {

        try {

            const browser = await puppeteer.launch({
                headless: false,
                args: ["--no-sandbox", "--disable-setuid-sandbox"],
            });

            const page = await browser.newPage();
            await page.goto(`https://www.youtube.com/watch?v=DpPg31FJCwg`);

            await page.waitForSelector("div#content");
            await page.waitForTimeout(5000);

            const titles = await page.evaluate(function () {
                console.log(document.querySelectorAll("title"))
                return Array.from(
                  document.querySelectorAll("ytd-video-renderer a#video-title")
                ).map((el) => ({
                    title: el.getAttribute("title"),
                    link: "https://www.youtube.com" + el.getAttribute("href"),
                }));
            });
            
            await browser.close();
            console.log(titles);


        } catch (error) {
            console.log(error)
            throw new Error(`Error while get video on youtube: ${error}`)
        }

        
    }



    async parser_get_url_image_video(){
        let image = this.contentHtml('link').next()['20'].attribs.href
        console.log(image)
        //https://i.ytimg.com/vi/DpPg31FJCwg/maxresdefault.jpg
    }

    async parser_get_title(){
        let tutu = new String(this.contentHtml('title').text()).replace(" - YouTube", "")
        console.log(tutu)
    }
}