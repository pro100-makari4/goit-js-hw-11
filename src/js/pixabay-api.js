const KEY = '42558168-62173c93aab0d4cbf34bb4fab';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}