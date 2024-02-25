export function renderImages(images, galleryElement) {
  const galleryHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${likes}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${views}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${comments}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${downloads}</p></li>
          </ul>
        </li>`
    )
    .join('');
  galleryElement.innerHTML = galleryHTML;
}
