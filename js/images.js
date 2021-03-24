import images from "./images-source.js";

const createImgItem = (image) => {
  const liRef = document.createElement("li");
  liRef.classList.add("gallery__item");

  const imgLinkRef = document.createElement("a");
  imgLinkRef.setAttribute("href", image.original);
  imgLinkRef.classList.add("gallery__link");

  const imgRef = document.createElement("img");
  imgRef.setAttribute("src", image.preview);
  imgRef.setAttribute("alt", image.description);
  imgRef.setAttribute("data-source", image.original);
  imgRef.classList.add("gallery__image");

  imgLinkRef.appendChild(imgRef);
  liRef.appendChild(imgLinkRef);

  return liRef;
};

const imgItems = images.map((image) => createImgItem(image));

const imgListRef = document.querySelector(".js-gallery");

imgListRef.append(...imgItems);
imgListRef.classList.add("gallery");

// const liRef = document.querySelector("li");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImg = document.querySelector(".lightbox__image");

const handleOriginalImageOpen = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "BTN") {
    return;
  } else {
    event.target.setAttribute("src", event.target.dataset.source);
  }
};

const handleModalOpen = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    lightbox.classList.add("is-open");
  }

  const dataSource = event.target.dataset.source;
  const dataAlt = event.target.alt;
  lightboxImg.setAttribute("src", dataSource);
  lightboxImg.setAttribute("alt", dataAlt);
};

const handleModalClose = (event) => {
  lightboxImg.setAttribute("src", "");
  console.log(event.target);
  if (event.target.nodeName !== "BUTTON") {
    return;
  } else {
    lightbox.classList.remove("is-open");
  }
};

imgListRef.addEventListener("click", handleModalOpen);
imgListRef.addEventListener("click", handleOriginalImageOpen);
lightbox.addEventListener("click", handleModalClose);
