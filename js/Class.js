class Gallery {
  constructor(selector, arr) {
    this.parent = document.querySelector(selector);
    this.objList = arr;
  }
  createRow(smallImage, largeImage, description) {
    return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImage}">
      <img
        class="gallery-image"
        src="${smallImage}"
        data-source="${largeImage}"
        alt="Image ${description}"
      />
      </a>
      </li>`;
  }
  createMarkup(arr) {
    let markup = arr
      .map(({ preview, original, description }) => {
        return this.createRow(preview, original, description);
      })
      .join('');
    this.parent.innerHTML = markup;
  }
  init() {
    this.createMarkup(this.objList);
    this.parent.addEventListener('click', e => {
      if (e.currentTarget === e.target) {
        return;
      }
      e.preventDefault();
      const instance = basicLightbox.create(`
            <img src="${e.target.dataset.source}">
        `);
      instance.show();
    });
  }
}
export default Gallery;
