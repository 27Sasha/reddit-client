/**
 * Generates a number between the min and the max
 * @param {number} min
 * @param {number} max
 */
export default function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
};