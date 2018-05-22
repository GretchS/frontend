const form = document.querySelector('form')
const bookList = document.querySelector('ul')

// event listeners
form.addEventListener('submit', submitBook)
// bookList.addEventListener('click', handleDelete)

function createBookItem({id, title, description, isbn}) {
    // create an li
    const li = document.createElement('li')
    const titleElement = document.createElement('p')
    const descriptionElement = document.createElement('p')
    const isbnElement = document.createElement('p')
    // const buttonElement = document.createElement('button')
    
    // add a `collection-item` class to the li
    li.classList.add('collection-item')
    li.dataset.id = id
    // create a p tag, with title and append to li
    titleElement.textContent = title
    // create a p tag, with description and append it to li
    descriptionElement.textContent = description
    // create a p tag, with isbn and append it to li

    isbnElement.textContent = isbn

    // buttonElement.textContent = 'remove book'
    // // buttonElement.classList.add('btn')
    // buttonElement.classList.add(
    //     'waves-effect', 'waves-light', 'btn'
    // )

    li.appendChild(titleElement)
    li.appendChild(descriptionElement)
    li.appendChild(isbnElement)
    // li.appendChild(buttonElement)
    // return li
    return li
}

function addBookToList(bookElement) {
    bookList.prepend(bookElement)
}

async function fetchBooks() {
    const response = await fetch('http://localhost:3000/books')
    const books = await response.json()
    return books.concat().reverse()
}

function addBooksToList(books) {
    books.forEach( book => {
        bookList.appendChild(createBookItem(book))
    })
}


fetchBooks()
    .then(addBooksToList)
    .catch(err => console.log(err.message))


function submitBook(e) {

    e.preventDefault()
    const form = e.target.elements 
    const title = form.title.value
    const description = form.description.value
    const isbn = form.isbn.value

    const book = {
        title, 
        description, 
        isbn
    }

    // post book

}

async function postBook(book) {
    const url = 'http://localhost:3000/books'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }
    

}









// function handleDelete(e) {
//     const li = e.target.parentElement
//     const id = li.dataset.id
//     if(e.target.tagName === 'BUTTON') {
//         deleteBook(id)
//             .then(() => {
//                 li.parentNode.removeChild(li)
//             })
//             .catch(err => console.error(err))
//     }
// }

// async function deleteBook(id) {
//     const url = `http://localhost:3000/books/${id}`
//     const options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({id: id})
//     }
//     const response = await fetch(url, options)
//     return response
// }








// function submitBook(e) {
//     e.preventDefault()

//     const form = e.target.elements
//     const title = form.title.value 
//     const description = form.description.value 
//     const isbn = form.isbn.value 
    
//     if(!title || !description || !isbn) {
//         alert('please complete the form')
//         return; 
//     }

//     const book =  {
//         title, 
//         description, 
//         isbn
//     }

//     postBook(book)
//     .then(newBook => {
//         const bookElement = createBookItem(newBook)
//         addBookToList(bookElement)
//         e.target.reset()
//     })
//     .catch(e => console.error(e))

// }

// async function postBook(book) {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(book),
//         mode: 'cors'
//     }

//     const url = 'http://localhost:3000/books'
//     const response = await fetch(url, options)
//     const newBook = await response.json()
    
//     return newBook
// }

