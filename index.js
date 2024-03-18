require('.env').config();

async function getImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${.env}&q=${encodeURIComponent(query)}&limit=1&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    const data = await response.json();
    const imageUrl = data.data[0].images.original.url;
    console.log(imageUrl);
    return imageUrl;
}

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)