const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// const getOriginalImg = (image) => {
//   const originalImageRef = image.orginal;
//   return originalImageRef;
// };

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
console.log(imgItems);

// const originalImgRefs = images.map((image) => getOriginalImg(image));

const imgListRef = document.querySelector(".js-gallery");

imgListRef.append(...imgItems);
imgListRef.classList.add("gallery");

const liRef = document.querySelector("li");
const lightBox = document.querySelector(".js-lightbox");
const lightBoxImg = document.querySelector(".lightbox__image");

const handleOriginalImageOpen = (event) => {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.nodeName !== "IMG") {
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
    lightBox.classList.add("is-open");
  }

  const dataSource = event.target.dataset.source;
  const dataAlt = event.target.dataset.alt;
  lightBoxImg.setAttribute("src", dataSource);
  lightBoxImg.setAttribute("alt", dataAlt);
};

const handleModalClose = (event) => {
  lightBoxImg.setAttribute("src", "");
  if (!event.target.nodeName === "BUTTON") {
    return;
  } else {
    lightBox.classList.remove("is-open");
  }
};

liRef.addEventListener("click", handleModalOpen);
imgListRef.addEventListener("click", handleOriginalImageOpen);

lightBox.addEventListener("click", handleModalClose);
