const form = document.querySelector("#searchForm");
const clearButton = document.querySelector("#clearAllButton")
const myContainer = document.querySelector("#myContainer")

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    const searchedTitle = document.createElement("H3");
    searchedTitle.innerText = searchTerm.toUpperCase();
    myContainer.append(searchedTitle)
    makeImages(res.data);
    form.elements.query.value = "";
})

const clearAllButton = document.querySelector("#clearAllButton");

const makeImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            myContainer.append(img)
        }
    }
}

clearAllButton.addEventListener("click", function () {
    myContainer.img.remove();
})
