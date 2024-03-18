// require("dotenv").config();

const api_key = "zTUpGZeUd4XjS14Dfp5lQcUTl2MrCMgN";

async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURIComponent(
    query
  )}&limit=1&offset=0&rating=g&lang=en`;
  const response = await fetch(endpoint);
  const data = await response.json();
  //   console.log({ response, data });
  const imageUrl = data.data[0].images.original.url;
  console.log({ imageUrl });
  return imageUrl;
}

const getImages = async (query) => {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURIComponent(
    query
  )}&limit=25&offset=0&rating=g&lang=en`;
  const response = await fetch(endpoint);
  console.log({ response });
  const data = await response.json();
  console.log({ data });
  const mainImage = data.data[0].images.original.url;
  const allImages = data.data.map((image) => {
    return { url: image.images.original.url, title: image.title };
  });
  return { mainImage, allImages };
};

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);

const button = document.querySelector("button");
const input = document.querySelector("input");
const imgContainer = document.querySelector("#images");

button.addEventListener("click", async () => {
  const query = input.value;
  const { mainImage, allImages } = await getImages(query);
  console.log({ mainImage, allImages });
  allImages.map(({ title, url }) => {
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const img = document.createElement("img");
    img.src = url;
    container.appendChild(h2);
    container.appendChild(img);
    imgContainer.appendChild(container);
  });
});
