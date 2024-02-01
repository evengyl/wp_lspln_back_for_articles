
// import dotenv from 'dotenv'
// dotenv.config()

// import { Wordpress } from './wordpress.js' 
// import { YouTubeParser } from './youtube.js'


// import express from "express"
// var app = express()


// const ytp = new YouTubeParser()
// let tutu = await ytp.getAllHtmlVideo()
// app.get("/", async (req, res, next) => {


//   //test youtube

//   let tutu = await ytp.getAllHtmlVideo()

//   //await ytp.parser_get_url_image_video() -> OK
//   //await ytp.parser_get_title() -> OK

//   res.json(tutu)
// })






// // Define configuration for connecting to the WordPress API
// const wpCofig = {
//     url: 'https://www.lasciencepourlesnuls.fr',
//     username: 'baudouxloic@gmail.com',
//     password: process.env.WP_KEY
// }

// // Create an instance of the WordPress class
// const wp = new Wordpress(wpCofig)



// //#############################################################
// //#############################################################
// //#############################################################


// //Get composition V3 article
// //let blockArticleV3Compo = await wp.getBlockArticleV3Compo(1453)
// //console.log(blockArticleV3Compo)

// //ok création article sur base du block
// //#############################################################
// // Define a new post object
// // const post = {
// //   title: 'test article v3 par API JS',
// //   content : blockArticleV3Compo.content.raw,
// //   status: 'draft',

// // }

// // Call the createPost method from the WordPress instance and log the result
// //let newArticleWithCompoV3 = await wp.createPost(post) 
// //console.log(newArticleWithCompoV3)
// //-> OK !!!!
// //#############################################################
// //#############################################################
// //#############################################################






// app.listen(3000)







const puppeteer = require("puppeteer")
const axios = require("axios")
const fs = require("fs")

async function fillPlaylistsDataFromPage(page) {

  /*
  const dataFromPage = await page.evaluate((requestParams) => {
    const mixes = Array.from(document.querySelectorAll("#contents > ytd-radio-renderer")).map((el) => ({
      title: el.querySelector("a > h3 > #video-title")?.textContent.trim(),
      link: `${requestParams.baseURL}${el.querySelector("a#thumbnail")?.getAttribute("href")}`,
      videos: Array.from(el.querySelectorAll("ytd-child-video-renderer a")).map((el) => ({
        title: el.querySelector("#video-title")?.textContent.trim(),
        link: `${requestParams.baseURL}${el.getAttribute("href")}`,
        length: el.querySelector("#length")?.textContent.trim(),
      })),
      thumbnail: el.querySelector("a#thumbnail #img")?.getAttribute("src"),
    }))
    const playlists = Array.from(document.querySelectorAll("#contents > ytd-playlist-renderer")).map((el) => ({
      title: el.querySelector("a > h3 > #video-title")?.textContent.trim(),
      link: `${requestParams.baseURL}${el.querySelector("a#thumbnail")?.getAttribute("href")}`,
      channel: {
        name: el.querySelector("#channel-name a")?.textContent.trim(),
        link: `${requestParams.baseURL}${el.querySelector("#channel-name a")?.getAttribute("href")}`,
      },
      videoCount: el.querySelector("yt-formatted-string.ytd-thumbnail-overlay-side-panel-renderer")?.textContent.trim(),
      videos: Array.from(el.querySelectorAll("ytd-child-video-renderer a")).map((el) => ({
        title: el.querySelector("#video-title")?.textContent.trim(),
        link: `${requestParams.baseURL}${el.getAttribute("href")}`,
        length: el.querySelector("#length")?.textContent.trim(),
      })),
      thumbnail: el.querySelector("a#thumbnail #img")?.getAttribute("src"),
    }))
    return [...mixes, ...playlists]
  }, requestParams)
  return dataFromPage*/
}


(async () =>  {
  
  // const browser = await puppeteer.launch({
  //   headless: false,
  //   args: ["--no-sandbox", "--disable-setuid-sandbox", '--mute-audio']
  // })
  //const page = await browser.newPage()
  const URL = `https://www.youtube.com/watch?v=DpPg31FJCwg`

  

  const response = await axios.get(URL)
  //console.log(response.data)
  
  let parsing = response.data



  //#########################################################################
  let channelName = ""
  let regex = /<link[^>]*\bitemprop="name"[^>]*\bcontent="([^"]*)"[^>]*>/i
  let match = parsing.match(regex)

  if (match)
    channelName = match[1]
  //#########################################################################


  //#########################################################################
  let nameVideo = ""
  regex = /<title>(.*?)<\/title>/i
  match = parsing.match(regex)

  if (match)
    nameVideo = new String(match[1]).replace(" - YouTube", "")
  //#########################################################################


  //#########################################################################
  let listKeyWords = ""
  regex = /<meta\s+name="keywords"\s+content="([^"]*)"/i;
  match = parsing.match(regex);

  if(match)
    listKeyWords = match[1].split(',').map(keyword => keyword.trim());
  //#########################################################################


  //#########################################################################
  let description = ""
  regex = /<meta\s+name="description"\s+content="([^"]*)"/i;
  match = parsing.match(regex);

  if(match)
    description = match[1]
  //#########################################################################



  //#########################################################################
  let idVideo = ""
  regex = /(?:\?|&)v=([^&]+)/i;
  match = URL.match(regex);

  if(match)
    idVideo = match[1]
  //#########################################################################



  console.log(channelName)
  console.log(nameVideo)
  console.log(listKeyWords)
  console.log(description)
  console.log(idVideo)


  let stateWriteFile = fs.writeFileSync("./dataTestForYoutube", parsing)
  //console.log(stateWriteFile)

  // await page.goto(URL)
  // await page.waitForTimeout(10000)
  // await page.waitForSelector('div#video-preview')

  // const datas = await page.evaluate(() => {
  //   let allsource = document.toString().indexOf("DpPg31FJCwg")

  //   let datas = {
  //     title : document.querySelector('title').innerText.replace(" - YouTube", ""),
  //     thumbnails_url : `https://img.youtube.com/vi/DpPg31FJCwg/maxresdefault.jpg`,
  //     channel_name : allsource,
  //   }

  //   return datas
  // })

  // console.log(datas)

  // await browser.close()

  return true
})()