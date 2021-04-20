// books class: Represent class

class Book {
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI class : Hanle UI Tasks

class UI{
    static displayBooks(){
        const storeBooks = [
            {
                title : "Book doe",
                author : "Jone doe",
                isbn : "343434"
            },

            {
                title : "Book Two",
                author : "Jane doe",
                isbn : "54545"
            }
        ]

        const books = storeBooks
        books.forEach((book) => UI.addBookToList(book)) 
    }

    static addBookToList(book){
        const list = document.querySelector("#book-list")

        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete"></a></td>
        `

        list.appendChild(row)
            
    } 

    static showAlert(message, classname){
        const div = document.createElement("div")
        div.className = `alert alert-${classname}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector(".container")
        const form = document.querySelector("#book-form")
        container.insertBefore(div, form)

        //vanish 3 second

        setTimeout(()=> document.querySelector(".alert").remove(), 3000)

        

    }

//deletebook
    static deleteBook(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove()
        }

    }

    static clearBook(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}

document.addEventListener("DOMContentLoaded", UI.displayBooks)


// Event : Add books

document.getElementById("button").addEventListener('click', (e) => {

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;


    if(title === "" || author=== "" || isbn === ""){
        
        UI.showAlert("Please check field", "danger")

        
    }
    else{
       //instatiate book
        const book = new Book(title, author, isbn);
    //addBook
        console.log(book)
    
        UI.clearBook()
 
    }

    


});
//clear book
document.querySelector("#book-list").addEventListener("click", (e) => {
    UI.deleteBook(e.target)
})