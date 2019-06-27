/**
 * Test if value is a valid YouTube video id
 * 
 * @param {string} id
 * @returns {boolean} validation result
 * 
 * @example
 * isYoutubeVideoId('C3N61UZ6Z84') => true
 * isYoutubeVideoId('m/watch?v=') => false
 * 
 */
export default function isYoutubeVideoId(id: string): boolean {
  const regex = /^[A-Za-z0-9_-]{11}$/;
  return id && typeof id === 'string' && regex.test(id);
}
