
import dotenv from 'dotenv';
dotenv.config();

import { Wordpress } from './wordpress.js'; 




// Define configuration for connecting to the WordPress API
const wpCofig = {
    url: 'https://www.lasciencepourlesnuls.fr',
    username: 'baudouxloic@gmail.com',
    password: process.env.WP_KEY
};

// Create an instance of the WordPress class
const wp = new Wordpress(wpCofig);



//#############################################################
// Define a new post object
const post = {
    title: 'Hello World',
    content: "<!-- wp:uagb/container {\"block_id\":\"mpxl9x2v\",\"innerContentCustomWidthDesktop\":100,\"innerContentCustomWidthTablet\":500,\"innerContentCustomWidthType\":\"%\",\"directionDesktop\":\"row\",\"directionMobile\":\"column-reverse\",\"alignItemsDesktop\":\"stretch\",\"justifyContentDesktop\":\"space-around\",\"backgroundType\":\"image\",\"backgroundImageDesktop\":{\"id\":231,\"title\":\"bg\",\"filename\":\"bg.png\",\"url\":\"http://lasciencepourlesnuls.fr/wp-content/uploads/2024/01/bg.png\",\"link\":\"https://lasciencepourlesnuls.fr/bg/\",\"alt\":\"\",\"author\":\"1\",\"description\":\"\",\"caption\":\"\",\"name\":\"bg\",\"status\":\"inherit\",\"uploadedTo\":0,\"date\":\"2024-01-16T09:59:50.000Z\",\"modified\":\"2024-01-16T09:59:50.000Z\",\"menuOrder\":0,\"mime\":\"image/png\",\"type\":\"image\",\"subtype\":\"png\",\"icon\":\"https://lasciencepourlesnuls.fr/wp-includes/images/media/default.png\",\"dateFormatted\":\"16 janvier 2024\",\"nonces\":{\"update\":\"068662d6ee\",\"delete\":\"844f75016f\",\"edit\":\"1cc400a653\"},\"editLink\":\"https://lasciencepourlesnuls.fr/wp-admin/post.php?post=231\\u0026action=edit\",\"meta\":false,\"authorName\":\"Evengyl\",\"authorLink\":\"https://lasciencepourlesnuls.fr/wp-admin/profile.php\",\"filesizeInBytes\":11945,\"filesizeHumanReadable\":\"12 Ko\",\"context\":\"\",\"height\":300,\"width\":300,\"orientation\":\"landscape\",\"sizes\":{\"thumbnail\":{\"height\":150,\"width\":150,\"url\":\"http://lasciencepourlesnuls.fr/wp-content/uploads/2024/01/bg-150x150.png\",\"orientation\":\"landscape\"},\"full\":{\"url\":\"http://lasciencepourlesnuls.fr/wp-content/uploads/2024/01/bg.png\",\"height\":300,\"width\":300,\"orientation\":\"landscape\"}},\"compat\":{\"item\":\"\",\"meta\":\"\"}},\"backgroundImageColor\":\"var(\\u002d\\u002dast-global-color-7)\",\"topPaddingDesktop\":225,\"bottomPaddingDesktop\":225,\"leftPaddingDesktop\":40,\"rightPaddingDesktop\":40,\"topPaddingTablet\":80,\"bottomPaddingTablet\":80,\"leftPaddingTablet\":32,\"rightPaddingTablet\":32,\"topPaddingMobile\":64,\"bottomPaddingMobile\":64,\"leftPaddingMobile\":24,\"rightPaddingMobile\":24,\"paddingLink\":false,\"topMarginTablet\":0,\"bottomMarginTablet\":0,\"leftMarginTablet\":0,\"rightMarginTablet\":0,\"variationSelected\":true,\"rowGapDesktop\":32,\"rowGapTablet\":24,\"rowGapMobile\":24,\"columnGapDesktop\":0,\"columnGapTablet\":0,\"isBlockRootParent\":true,\"overlayType\":\"color\",\"overlayOpacity\":0.9,\"equalHeight\":true} -->\n<div class=\"wp-block-uagb-container uagb-block-mpxl9x2v alignfull uagb-is-root-container\"><div class=\"uagb-container-inner-blocks-wrap\"><!-- wp:uagb/container {\"block_id\":\"e5829454\",\"minHeightDesktop\":0,\"alignItemsDesktop\":\"stretch\",\"justifyContentDesktop\":\"space-evenly\",\"rowGapDesktop\":0,\"columnGapDesktop\":0,\"widthSetByUser\":true,\"equalHeight\":true} -->\n<div class=\"wp-block-uagb-container uagb-block-e5829454\"><!-- wp:uagb/advanced-heading {\"block_id\":\"8f51ad19\",\"classMigrate\":true,\"headingAlign\":\"center\",\"headingColor\":\"#ffffff\"} -->\n<div class=\"wp-block-uagb-advanced-heading uagb-block-8f51ad19\"><h2 class=\"uagb-heading-text\">😂 Articles de test pour toute</h2></div>\n<!-- /wp:uagb/advanced-heading -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|ast-global-color-5\"}}}},\"textColor\":\"ast-global-color-5\"} -->\n<p class=\"has-text-align-center has-ast-global-color-5-color has-text-color has-link-color\">Chaine YouTube : </p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"center\",\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|ast-global-color-5\"}}}},\"textColor\":\"ast-global-color-5\"} -->\n<p class=\"has-text-align-center has-ast-global-color-5-color has-text-color has-link-color\">Le 6 août 1945, à 8h16, une bombe nucléaire s'abattait sur la petite ville portuaire japonaise d'Hiroshima, dévoilant à la face du monde la puissance de la bombe atomique…</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:uagb/buttons {\"block_id\":\"uh5gtl4g\",\"classMigrate\":true,\"childMigrate\":true,\"gap\":20,\"gapTablet\":16,\"gapMobile\":12} -->\n<div class=\"wp-block-uagb-buttons uagb-buttons__outer-wrap uagb-btn__default-btn uagb-btn-tablet__default-btn uagb-btn-mobile__default-btn uagb-block-uh5gtl4g\"><div class=\"uagb-buttons__wrap uagb-buttons-layout-wrap\"><!-- wp:uagb/buttons-child {\"block_id\":\"mygkn123\",\"label\":\"Voir sur YouTube\",\"link\":\"#\",\"color\":\"#ffffff\",\"background\":\"var(\\u002d\\u002dast-global-color-0)\",\"hColor\":\"#ffffff\",\"hBackground\":\"var(\\u002d\\u002dast-global-color-1)\",\"borderStyle\":\"\",\"borderColor\":\"\",\"borderHColor\":\"\",\"btnBorderTopWidth\":1,\"btnBorderLeftWidth\":1,\"btnBorderRightWidth\":1,\"btnBorderBottomWidth\":1,\"btnBorderTopLeftRadius\":4,\"btnBorderTopRightRadius\":4,\"btnBorderBottomLeftRadius\":4,\"btnBorderBottomRightRadius\":4,\"btnBorderStyle\":\"none\",\"btnBorderColor\":\"#333\",\"btnBorderHColor\":\"#333\"} -->\n<div class=\"wp-block-uagb-buttons-child uagb-buttons__outer-wrap uagb-block-mygkn123 wp-block-button\"><div class=\"uagb-button__wrapper\"><a class=\"uagb-buttons-repeater wp-block-button__link\" href=\"#\" onclick=\"return false;\" rel=\"follow noopener\" target=\"_self\"><div class=\"uagb-button__link\">Voir sur YouTube</div></a></div></div>\n<!-- /wp:uagb/buttons-child --></div></div>\n<!-- /wp:uagb/buttons --></div>\n<!-- /wp:uagb/container -->\n\n<!-- wp:uagb/container {\"block_id\":\"773113ff\",\"directionDesktop\":\"column-reverse\",\"alignItemsDesktop\":\"stretch\",\"justifyContentDesktop\":\"space-around\",\"wrapMobile\":\"nowrap\",\"rowGapDesktop\":0,\"columnGapDesktop\":0,\"widthSetByUser\":true,\"equalHeight\":true} -->\n<div class=\"wp-block-uagb-container uagb-block-773113ff\"><!-- wp:embed {\"url\":\"https://www.youtube.com/watch?v=0HKFJ10IGUQ\",\"type\":\"video\",\"providerNameSlug\":\"youtube\",\"responsive\":true,\"className\":\"wp-embed-aspect-16-9 wp-has-aspect-ratio\"} -->\n<figure class=\"wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\nhttps://www.youtube.com/watch?v=0HKFJ10IGUQ\n</div></figure>\n<!-- /wp:embed --></div>\n<!-- /wp:uagb/container --></div></div>\n<!-- /wp:uagb/container -->\n\n<!-- wp:uagb/container {\"block_id\":\"57d68923\",\"innerContentCustomWidthDesktop\":800,\"variationSelected\":true,\"rowGapDesktop\":0,\"rowGapMobile\":0,\"isBlockRootParent\":true} -->\n<div class=\"wp-block-uagb-container uagb-block-57d68923 alignfull uagb-is-root-container\"><div class=\"uagb-container-inner-blocks-wrap\"><!-- wp:group {\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"}} -->\n<div class=\"wp-block-group\"><!-- wp:heading {\"level\":6,\"fontSize\":\"small\"} -->\n<h6 class=\"wp-block-heading has-small-font-size\">Dernières modifications de l'article :</h6>\n<!-- /wp:heading -->\n\n<!-- wp:post-date {\"displayType\":\"modified\"} /--></div>\n<!-- /wp:group --></div></div>\n<!-- /wp:uagb/container -->\n\n<!-- wp:uagb/container {\"block_id\":\"4t0vxjot\",\"innerContentCustomWidthDesktop\":800,\"innerContentCustomWidthTablet\":600,\"justifyContentDesktop\":\"flex-start\",\"backgroundType\":\"color\",\"backgroundColor\":\"var(\\u002d\\u002dast-global-color-5)\",\"topPaddingDesktop\":15,\"bottomPaddingDesktop\":0,\"leftPaddingDesktop\":0,\"rightPaddingDesktop\":0,\"topPaddingTablet\":80,\"bottomPaddingTablet\":80,\"leftPaddingTablet\":32,\"rightPaddingTablet\":32,\"topPaddingMobile\":0,\"bottomPaddingMobile\":0,\"leftPaddingMobile\":24,\"rightPaddingMobile\":24,\"paddingLink\":false,\"topMarginDesktop\":0,\"bottomMarginDesktop\":0,\"leftMarginDesktop\":0,\"rightMarginDesktop\":0,\"topMarginTablet\":0,\"bottomMarginTablet\":0,\"leftMarginTablet\":0,\"rightMarginTablet\":0,\"topMarginMobile\":0,\"bottomMarginMobile\":0,\"leftMarginMobile\":0,\"rightMarginMobile\":0,\"variationSelected\":true,\"rowGapDesktop\":10,\"rowGapTablet\":40,\"rowGapMobile\":15,\"columnGapDesktop\":0,\"columnGapTablet\":0,\"columnGapMobile\":0,\"isBlockRootParent\":true} -->\n<div class=\"wp-block-uagb-container uagb-block-4t0vxjot alignfull uagb-is-root-container\"><div class=\"uagb-container-inner-blocks-wrap\"><!-- wp:uagb/separator {\"block_id\":\"4f66b138\",\"separatorBorderHeightMobile\":1,\"separatorHeightMobile\":5,\"elementType\":\"icon\",\"separatorIcon\":\"share\"} -->\n<div class=\"wp-block-uagb-separator uagb-block-4f66b138 wp-block-uagb-separator--icon\"><div class=\"wp-block-uagb-separator__inner\" style=\"--my-background-image:\"><div class=\"wp-block-uagb-separator-element\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M503.7 226.2l-176 151.1c-15.38 13.3-39.69 2.545-39.69-18.16V272.1C132.9 274.3 66.06 312.8 111.4 457.8c5.031 16.09-14.41 28.56-28.06 18.62C39.59 444.6 0 383.8 0 322.3c0-152.2 127.4-184.4 288-186.3V56.02c0-20.67 24.28-31.46 39.69-18.16l176 151.1C514.8 199.4 514.8 216.6 503.7 226.2z\"></path></svg></div></div></div>\n<!-- /wp:uagb/separator -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"style\":{\"spacing\":{\"padding\":{\"top\":\"0\",\"bottom\":\"0\"},\"margin\":{\"top\":\"0\",\"bottom\":\"0\"}},\"typography\":{\"fontSize\":\"25px\"}}} -->\n<h3 class=\"wp-block-heading has-text-align-center\" style=\"margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;font-size:25px\">Partager le contenu</h3>\n<!-- /wp:heading -->\n\n<!-- wp:uagb/social-share {\"classMigrate\":true,\"childMigrate\":true,\"block_id\":\"e79ce3c2\",\"alignMobile\":\"left\",\"size\":40,\"sizeMobile\":25} -->\n<div class=\"wp-block-uagb-social-share uagb-social-share__outer-wrap uagb-social-share__layout-horizontal uagb-block-e79ce3c2\"><!-- wp:uagb/social-share-child {\"block_id\":\"ea0b7c3c\",\"current_url\":null,\"icon\":\"fab fa-facebook\",\"icon_color\":\"#3b5998\",\"parentSize\":40,\"parentSizeMobile\":25} -->\n<div class=\"wp-block-uagb-social-share-child uagb-ss-repeater uagb-ss__wrapper uagb-block-ea0b7c3c\"><span class=\"uagb-ss__link\" data-href=\"https://www.facebook.com/sharer.php?u=\" tabindex=\"0\" role=\"button\" aria-label=\"facebook\"><span class=\"uagb-ss__source-wrap\"><span class=\"uagb-ss__source-icon\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z\"></path></svg></span></span></span></div>\n<!-- /wp:uagb/social-share-child -->\n\n<!-- wp:uagb/social-share-child {\"block_id\":\"e7a77169\",\"type\":\"twitter\",\"current_url\":null,\"icon\":\"fab fa-twitter-square\",\"icon_color\":\"#55acee\",\"parentSize\":40,\"parentSizeMobile\":25} -->\n<div class=\"wp-block-uagb-social-share-child uagb-ss-repeater uagb-ss__wrapper uagb-block-e7a77169\"><span class=\"uagb-ss__link\" data-href=\"https://twitter.com/share?url=\" tabindex=\"0\" role=\"button\" aria-label=\"twitter\"><span class=\"uagb-ss__source-wrap\"><span class=\"uagb-ss__source-icon\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8 .2 5.7 .2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3 .6 10.4 .8 15.8 .8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.45 65.45 0 0 1 -29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z\"></path></svg></span></span></span></div>\n<!-- /wp:uagb/social-share-child -->\n\n<!-- wp:uagb/social-share-child {\"block_id\":\"180dc8d3\",\"type\":\"reddit\",\"current_url\":null,\"icon\":\"fab fa-reddit-square\",\"icon_color\":\"#bd081c\",\"parentSize\":40,\"parentSizeMobile\":25} -->\n<div class=\"wp-block-uagb-social-share-child uagb-ss-repeater uagb-ss__wrapper uagb-block-180dc8d3\"><span class=\"uagb-ss__link\" data-href=\"https://reddit.com/submit?url=\" tabindex=\"0\" role=\"button\" aria-label=\"reddit\"><span class=\"uagb-ss__source-wrap\"><span class=\"uagb-ss__source-icon\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M283.2 345.5c2.7 2.7 2.7 6.8 0 9.2-24.5 24.5-93.8 24.6-118.4 0-2.7-2.4-2.7-6.5 0-9.2 2.4-2.4 6.5-2.4 8.9 0 18.7 19.2 81 19.6 100.5 0 2.4-2.3 6.6-2.3 9 0zm-91.3-53.8c0-14.9-11.9-26.8-26.5-26.8-14.9 0-26.8 11.9-26.8 26.8 0 14.6 11.9 26.5 26.8 26.5 14.6 0 26.5-11.9 26.5-26.5zm90.7-26.8c-14.6 0-26.5 11.9-26.5 26.8 0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-11.9 26.8-26.5 0-14.9-11.9-26.8-26.8-26.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8 0-14.6-11.9-26.8-26.8-26.8-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z\"></path></svg></span></span></span></div>\n<!-- /wp:uagb/social-share-child -->\n\n<!-- wp:uagb/social-share-child {\"block_id\":\"62f87060\",\"type\":\"email\",\"current_url\":null,\"icon\":\"fas fa-envelope\",\"icon_color\":\"#0077b5\",\"parentSize\":40,\"parentSizeMobile\":25} -->\n<div class=\"wp-block-uagb-social-share-child uagb-ss-repeater uagb-ss__wrapper uagb-block-62f87060\"><span class=\"uagb-ss__link\" data-href=\"mailto:?body=\" tabindex=\"0\" role=\"button\" aria-label=\"email\"><span class=\"uagb-ss__source-wrap\"><span class=\"uagb-ss__source-icon\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z\"></path></svg></span></span></span></div>\n<!-- /wp:uagb/social-share-child -->\n\n<!-- wp:uagb/social-share-child {\"block_id\":\"b3d5d14a\",\"type\":\"telegram\",\"current_url\":null,\"icon\":\"fab fa-telegram\",\"icon_color\":\"#0077b5\",\"parentSize\":40,\"parentSizeMobile\":25} -->\n<div class=\"wp-block-uagb-social-share-child uagb-ss-repeater uagb-ss__wrapper uagb-block-b3d5d14a\"><span class=\"uagb-ss__link\" data-href=\"https://telegram.me/share/url?url=\" tabindex=\"0\" role=\"button\" aria-label=\"telegram\"><span class=\"uagb-ss__source-wrap\"><span class=\"uagb-ss__source-icon\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\"><path d=\"M248 8C111 8 0 119 0 256S111 504 248 504 496 392.1 496 256 384.1 8 248 8zM362.1 176.7c-3.732 39.22-19.88 134.4-28.1 178.3-3.476 18.58-10.32 24.82-16.95 25.42-14.4 1.326-25.34-9.517-39.29-18.66-21.83-14.31-34.16-23.22-55.35-37.18-24.49-16.14-8.612-25 5.342-39.5 3.652-3.793 67.11-61.51 68.33-66.75 .153-.655 .3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283 .746-104.6 69.14-14.85 10.19-26.89 9.934c-8.855-.191-25.89-5.006-38.55-9.123-15.53-5.048-27.88-7.717-26.8-16.29q.84-6.7 18.45-13.7 108.4-47.25 144.6-62.3c68.87-28.65 83.18-33.62 92.51-33.79 2.052-.034 6.639 .474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716A43.76 43.76 0 0 1 362.1 176.7z\"></path></svg></span></span></span></div>\n<!-- /wp:uagb/social-share-child -->\n\n<!-- wp:uagb/social-share-child {\"block_id\":\"91358314\",\"type\":\"whatsapp\",\"current_url\":null,\"icon\":\"fab fa-whatsapp\",\"icon_color\":\"#0077b5\",\"parentSize\":40,\"parentSizeMobile\":25} -->\n<div class=\"wp-block-uagb-social-share-child uagb-ss-repeater uagb-ss__wrapper uagb-block-91358314\"><span class=\"uagb-ss__link\" data-href=\"https://api.whatsapp.com/send?text=\" tabindex=\"0\" role=\"button\" aria-label=\"whatsapp\"><span class=\"uagb-ss__source-wrap\"><span class=\"uagb-ss__source-icon\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z\"></path></svg></span></span></span></div>\n<!-- /wp:uagb/social-share-child --></div>\n<!-- /wp:uagb/social-share -->\n\n<!-- wp:uagb/separator {\"block_id\":\"78fe6d9d\",\"separatorBorderHeightMobile\":1,\"elementType\":\"icon\",\"separatorIcon\":\"circle-info\"} -->\n<div class=\"wp-block-uagb-separator uagb-block-78fe6d9d wp-block-uagb-separator--icon\"><div class=\"wp-block-uagb-separator__inner\" style=\"--my-background-image:\"><div class=\"wp-block-uagb-separator-element\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z\"></path></svg></div></div></div>\n<!-- /wp:uagb/separator -->\n\n<!-- wp:uagb/info-box {\"classMigrate\":true,\"headingColor\":\"var(\\u002d\\u002dast-global-color-2)\",\"subHeadingColor\":\"var(\\u002d\\u002dast-global-color-3)\",\"headingTag\":\"h2\",\"headSpace\":20,\"subHeadSpace\":0,\"block_id\":\"szszasnx\",\"ctaBorderColor\":\"\",\"ctaBorderStyle\":\"\",\"showIcon\":false,\"headTopMargin\":0,\"headRightMargin\":0,\"headLeftMargin\":0,\"headMarginTopTablet\":0,\"headMarginRightTablet\":0,\"headTabletSpace\":16,\"headMarginLeftTablet\":0,\"headMarginTopMobile\":0,\"headMarginRightMobile\":0,\"headMobileSpace\":12,\"headMarginLeftMobile\":0,\"blockTopPadding\":0,\"blockRightPadding\":0,\"blockLeftPadding\":0,\"blockBottomPadding\":0,\"blockTopPaddingTablet\":0,\"blockRightPaddingTablet\":0,\"blockLeftPaddingTablet\":0,\"blockBottomPaddingTablet\":0,\"blockTopPaddingMobile\":0,\"blockRightPaddingMobile\":0,\"blockLeftPaddingMobile\":0,\"blockBottomPaddingMobile\":0,\"blockPaddingUnitTablet\":\"%\",\"blockPaddingLink\":false,\"subHeadTopMargin\":0,\"subHeadRightMargin\":15,\"subHeadLeftMargin\":15,\"subHeadMarginTopTablet\":0,\"subHeadMarginRightTablet\":8,\"subHeadTabletSpace\":0,\"subHeadMarginLeftTablet\":8,\"subHeadMarginTopMobile\":0,\"subHeadMarginRightMobile\":0,\"subHeadMobileSpace\":0,\"subHeadMarginLeftMobile\":0,\"subHeadSpaceUnit\":\"%\",\"subHeadTabletMarginUnit\":\"%\",\"btnBorderTopWidth\":1,\"btnBorderLeftWidth\":1,\"btnBorderRightWidth\":1,\"btnBorderBottomWidth\":1,\"btnBorderTopLeftRadius\":0,\"btnBorderTopRightRadius\":0,\"btnBorderBottomLeftRadius\":0,\"btnBorderBottomRightRadius\":0,\"btnBorderStyle\":\"solid\",\"btnBorderColor\":\"#333\"} -->\n<div class=\"wp-block-uagb-info-box uagb-block-szszasnx uagb-infobox__content-wrap  uagb-infobox-icon-above-title uagb-infobox-image-valign-top\"><div class=\"uagb-ifb-content\"><div class=\"uagb-ifb-title-wrap\"><h2 class=\"uagb-ifb-title\">Liens, Sources, Références, Infos Diverses concernant la vidéo.</h2></div><p class=\"uagb-ifb-desc\">L'entièreté des liens sont proposés par le vidéaste original de la vidéos.</p></div></div>\n<!-- /wp:uagb/info-box -->\n\n<!-- wp:uagb/container {\"block_id\":\"zl66ayjy\",\"alignItemsDesktop\":\"stretch\",\"alignItemsTablet\":\"stretch\",\"alignItemsMobile\":\"stretch\",\"justifyContentDesktop\":\"flex-start\",\"backgroundType\":\"color\",\"backgroundColor\":\"var(\\u002d\\u002dast-global-color-5)\",\"topPaddingDesktop\":48,\"bottomPaddingDesktop\":48,\"leftPaddingDesktop\":48,\"rightPaddingDesktop\":48,\"topPaddingTablet\":40,\"bottomPaddingTablet\":40,\"leftPaddingTablet\":40,\"rightPaddingTablet\":40,\"topPaddingMobile\":0,\"bottomPaddingMobile\":0,\"leftPaddingMobile\":0,\"rightPaddingMobile\":0,\"topMarginDesktop\":0,\"bottomMarginDesktop\":0,\"leftMarginDesktop\":0,\"rightMarginDesktop\":0,\"topMarginTablet\":0,\"bottomMarginTablet\":0,\"leftMarginTablet\":0,\"rightMarginTablet\":0,\"topMarginMobile\":0,\"bottomMarginMobile\":0,\"leftMarginMobile\":0,\"rightMarginMobile\":0,\"variationSelected\":true,\"rowGapDesktop\":0,\"rowGapTablet\":24,\"rowGapMobile\":0,\"columnGapDesktop\":0,\"columnGapTablet\":0,\"columnGapMobile\":0,\"equalHeight\":true,\"containerBorderTopLeftRadius\":6,\"containerBorderTopRightRadius\":6,\"containerBorderBottomLeftRadius\":6,\"containerBorderBottomRightRadius\":6} -->\n<div class=\"wp-block-uagb-container uagb-block-zl66ayjy\"><!-- wp:uagb/separator {\"block_id\":\"852a47da\",\"separatorWidthMobile\":65,\"separatorBorderHeightMobile\":1} -->\n<div class=\"wp-block-uagb-separator uagb-block-852a47da\"><div class=\"wp-block-uagb-separator__inner\" style=\"--my-background-image:\"></div></div>\n<!-- /wp:uagb/separator -->\n\n<!-- wp:uagb/icon-list {\"block_id\":\"1f03885e\",\"classMigrate\":true,\"childMigrate\":true} -->\n<div class=\"wp-block-uagb-icon-list uagb-block-1f03885e\"><div class=\"uagb-icon-list__wrap\"><!-- wp:uagb/icon-list-child {\"block_id\":\"0e2002f9\",\"label\":\"Blabla avec url en clic\",\"icon\":\"link\",\"label_color\":\"\",\"disableLink\":true} -->\n<div class=\"wp-block-uagb-icon-list-child uagb-block-0e2002f9\"><a target=\"_self\" aria-label=\"Blabla avec url en clic\" rel=\"noopener noreferrer\" href=\"#\"> </a><span class=\"uagb-icon-list__source-wrap\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path d=\"M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z\"></path></svg></span><span class=\"uagb-icon-list__label\">Blabla avec url en clic</span></div>\n<!-- /wp:uagb/icon-list-child --></div></div>\n<!-- /wp:uagb/icon-list --></div>\n<!-- /wp:uagb/container --></div></div>\n<!-- /wp:uagb/container -->\n\n<!-- wp:uagb/container {\"block_id\":\"90bd4f54\",\"innerContentCustomWidthDesktop\":800,\"topPaddingDesktop\":10,\"leftPaddingDesktop\":20,\"topPaddingMobile\":0,\"bottomPaddingMobile\":0,\"leftPaddingMobile\":10,\"rightPaddingMobile\":10,\"paddingLink\":false,\"variationSelected\":true,\"isBlockRootParent\":true} -->\n<div class=\"wp-block-uagb-container uagb-block-90bd4f54 alignfull uagb-is-root-container\"><div class=\"uagb-container-inner-blocks-wrap\"><!-- wp:uagb/container {\"block_id\":\"277a8241\",\"rowGapMobile\":0,\"columnGapMobile\":0} -->\n<div class=\"wp-block-uagb-container uagb-block-277a8241\"><!-- wp:uagb/separator {\"block_id\":\"8602e306\",\"separatorWidth\":80,\"separatorBorderHeightMobile\":1,\"separatorHeightMobile\":5,\"elementType\":\"icon\",\"separatorIcon\":\"book-open\"} -->\n<div class=\"wp-block-uagb-separator uagb-block-8602e306 wp-block-uagb-separator--icon\"><div class=\"wp-block-uagb-separator__inner\" style=\"--my-background-image:\"><div class=\"wp-block-uagb-separator-element\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M144.3 32.04C106.9 31.29 63.7 41.44 18.6 61.29c-11.42 5.026-18.6 16.67-18.6 29.15l0 357.6c0 11.55 11.99 19.55 22.45 14.65c126.3-59.14 219.8 11 223.8 14.01C249.1 478.9 252.5 480 256 480c12.4 0 16-11.38 16-15.98V80.04c0-5.203-2.531-10.08-6.781-13.08C263.3 65.58 216.7 33.35 144.3 32.04zM557.4 61.29c-45.11-19.79-88.48-29.61-125.7-29.26c-72.44 1.312-118.1 33.55-120.9 34.92C306.5 69.96 304 74.83 304 80.04v383.1C304 468.4 307.5 480 320 480c3.484 0 6.938-1.125 9.781-3.328c3.925-3.018 97.44-73.16 223.8-14c10.46 4.896 22.45-3.105 22.45-14.65l.0001-357.6C575.1 77.97 568.8 66.31 557.4 61.29z\"></path></svg></div></div></div>\n<!-- /wp:uagb/separator -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"style\":{\"typography\":{\"fontSize\":\"25px\"}}} -->\n<h3 class=\"wp-block-heading has-text-align-center\" style=\"font-size:25px\">Cette vidéos fait partie des catégories suivantes :</h3>\n<!-- /wp:heading -->\n\n<!-- wp:post-terms {\"term\":\"category\",\"prefix\":\"Catégorie(s) : \"} /--></div>\n<!-- /wp:uagb/container -->\n\n<!-- wp:uagb/container {\"block_id\":\"907a3d85\",\"rowGapMobile\":0} -->\n<div class=\"wp-block-uagb-container uagb-block-907a3d85\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"style\":{\"typography\":{\"fontSize\":\"25px\"}}} -->\n<h3 class=\"wp-block-heading has-text-align-center\" style=\"font-size:25px\">Mots clés prononcés dans la vidéos, permet de retrouver des articles avec les mêmes idées</h3>\n<!-- /wp:heading -->\n\n<!-- wp:post-terms {\"term\":\"post_tag\",\"prefix\":\"Mots clés : \",\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"400\",\"textTransform\":\"capitalize\",\"letterSpacing\":\"0px\",\"lineHeight\":\"1.7\",\"fontSize\":\"18px\"}}} /--></div>\n<!-- /wp:uagb/container -->\n\n<!-- wp:uagb/container {\"block_id\":\"145e333b\",\"innerContentCustomWidthDesktop\":1600,\"variationSelected\":true,\"rowGapMobile\":0,\"isBlockRootParent\":true} -->\n<div class=\"wp-block-uagb-container uagb-block-145e333b alignfull uagb-is-root-container\"><div class=\"uagb-container-inner-blocks-wrap\"><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"style\":{\"typography\":{\"fontSize\":\"25px\"}}} -->\n<h3 class=\"wp-block-heading has-text-align-center\" style=\"font-size:25px\">Catégories avec du contenus dans d'autres catégories de la plateforme</h3>\n<!-- /wp:heading -->\n\n<!-- wp:tag-cloud {\"numberOfTags\":100,\"taxonomy\":\"category\",\"showTagCounts\":true,\"smallestFontSize\":\"0.9rem\",\"largestFontSize\":\"1.2rem\",\"style\":{\"typography\":{\"textTransform\":\"capitalize\"}}} /--></div></div>\n<!-- /wp:uagb/container -->\n\n<!-- wp:uagb/container {\"block_id\":\"76f8a519\",\"alignItemsTablet\":\"center\",\"alignItemsMobile\":\"center\",\"rowGapDesktop\":0,\"rowGapMobile\":0,\"columnGapDesktop\":0} -->\n<div class=\"wp-block-uagb-container uagb-block-76f8a519\"><!-- wp:uagb/separator {\"block_id\":\"b759dd1d\",\"separatorWidth\":80,\"separatorBorderHeightMobile\":1,\"elementType\":\"icon\",\"separatorIcon\":\"graduation-cap\"} -->\n<div class=\"wp-block-uagb-separator uagb-block-b759dd1d wp-block-uagb-separator--icon\"><div class=\"wp-block-uagb-separator__inner\" style=\"--my-background-image:\"><div class=\"wp-block-uagb-separator-element\"><svg xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\"><path d=\"M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z\"></path></svg></div></div></div>\n<!-- /wp:uagb/separator -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"style\":{\"typography\":{\"fontSize\":\"25px\"}}} -->\n<h3 class=\"wp-block-heading has-text-align-center\" style=\"font-size:25px\">Autres articles pour encore plus de connaissances</h3>\n<!-- /wp:heading -->\n\n<!-- wp:latest-posts {\"postsToShow\":10,\"style\":{\"spacing\":{\"padding\":{\"top\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"right\":\"0\"}},\"typography\":{\"fontSize\":\"16px\",\"textDecoration\":\"none\"}},\"backgroundColor\":\"ast-global-color-5\"} /--></div>\n<!-- /wp:uagb/container --></div></div>\n<!-- /wp:uagb/container -->",
    status: 'draft'
  };

// Call the createPost method from the WordPress instance and log the result
console.log(await wp.createPost(post)); 
//-> OK !!!!
//#############################################################



// Get all categ in wp (100max)
//#############################################################
//let allCateg = await wp.getAllCateg() //OK
//#############################################################



// Get one post in wp
//#############################################################
let id = 1697
//let onePost = await wp.getOnePost(id) //OK
//#############################################################




// Get all blocks in wp
//#############################################################
//let blocks = await wp.getBloks() //OK
//console.log(blocks)
//#############################################################