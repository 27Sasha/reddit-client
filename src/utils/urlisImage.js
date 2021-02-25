/**
 * Determines if the url has an extension
 * Used to check images and gifs
 * @param {string} url 
 */
export default function urlisImage(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}