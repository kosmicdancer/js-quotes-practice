// step 1 - get the data
const baseURL = 'http://localhost:3000/'

const getQuote = () => {
    return fetch('http://localhost:3000/likes')
        .then(res => res.json())
}

// example quote object
    // should display author and content of quote
const makeQuoteDiv = (quote) => {    
    // create the elements
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // modify the elements
    h3.innerText = quote.author
    p.innerText = quote.content

    // put the elements together
    div.appendChild(h3)
    div.appendChild(p)

    return div
}

const appendQuote = (quoteDiv) => {
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.appendChild(quoteDiv)
}

// last step - show quote
    // append a div to the dom
    // need to append to something in the DOM - what?


getQuote().then(quote => {
    const quoteDiv = makeQuoteDiv(quote) 
    appendQuote(quoteDiv)
})

// GET url = http://localhost:3000/quotes?_embed=likes
// POST url = http://localhost:3000/likes