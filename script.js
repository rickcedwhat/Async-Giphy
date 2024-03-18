document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value;
    const images = await getAllImages(query); // Use getAllImages for multiple images
    const imagesHtml = images.map(url => `<img src="${url}" alt="Gif">`).join('');
    document.getElementById('images').innerHTML = imagesHtml;
});
