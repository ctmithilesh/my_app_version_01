let newsData = null
window.onload = function () {

    const headlines = 'top-headlines'
    const country = 'in'
    const api_key = '65d65b2716db429895cbc3254a475c0e'
    const newsElement = document.getElementById("news")
    const catElement = document.getElementById("cats")

    async function getNews() {
        const response = await fetch(`https://newsapi.org/v2/${headlines}?country=${country}&apiKey=${api_key}`)
        const result = await response.json()
        console.log(result)
        const articles = result.articles
        console.log(articles)
        newsData = articles
        newsElement.innerHTML = `
            <div>
                <h1> ${articles[0].title} </h1> 
                <img
                    src=${articles[0].urlToImage}
                    width="250"
                    height="250"
                /> 
                <p> ${articles[0].description} </p>
            </div>
        `

    }
    getNews()

    async function getCats() {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
        const result = await response.json()
        console.log(result)
        const catData = result
        catElement.innerHTML = `
            <div>
                <img
                    src=${catData[0].url}
                    width="250"
                    height="250"
                    alt="img"
                />
            </div>
        `


    }
    getCats()



}
