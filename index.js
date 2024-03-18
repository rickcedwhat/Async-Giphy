require("dotenv").config();

async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.API_KEY
  }&q=${encodeURIComponent(query)}&limit=1&offset=0&rating=g&lang=en`;
  const response = await fetch(endpoint);
  const data = await response.json();
  //   console.log({ response, data });
  const imageUrl = data.data[0].images.original.url;
  console.log({ imageUrl });
  return imageUrl;
}

const getImages = async (query) => {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.API_KEY
  }&q=${encodeURIComponent(query)}&limit=1&offset=0&rating=g&lang=en`;
  const response = await fetch(endpoint);
  const data = await response.json();
  const mainImage = data.data[0].images.original.url;
  const allImages = data.data.map((image) => image.images.original.url);
  return { mainImage, allImages };
};

getImage("harry potter");

// Print out value of API key stored in .env file
console.log(process.env.API_KEY);

const button = document.querySelector("button");
const input = document.querySelector("input");
const imgContainer = document.querySelector("#images");

button.addEventListener("click", async () => {
  const query = input.value;
  const { mainImage, allImages } = await getImages(query);
  allImages.map((image) => {
    const img = document.createElement("img");
    img.src = image;
    imgContainer.appendChild(img);
  });
});
