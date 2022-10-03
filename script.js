//Selects the location to pull info from the form
const form = document.getElementById('add-book');

const titleInput = form.elements['title'];
const authorInput = form.elements['author'];
const numberPagesInput = form.elements['pagenum'];
const readInput = form.elements['read'];

//Array to store book objects
let library = [];

//creates new objects with values from addBookToLibrary function
function Book (read, numberPages, title, author) {
    this.read = read;
    this.numberPages = numberPages;
    this.title = title;
    this.author = author;
}

function addBookToLibrary(currentbook) {
    
    
    
    //Sets the variables = to the values found within the form
    let title = titleInput.value;
    let numberPages = numberPagesInput.value;
    let author = authorInput.value;
    let read = readInput.value;

    //creates new object named book
    currentbook = new Book(read, numberPages, title, author);

    //pushes new object to library array
    library.push(currentbook);
};

function clearInputs() {
    titleInput.value = "";
    numberPagesInput.value = "";
    authorInput.value = "";
    readInput.value = "";
}

//adds event listener for submit button
const submit = document.getElementById("submit");
submit.addEventListener('click', (event) => {
    event.preventDefault();    //prevents form from clearing before info is used

    let currentbook = 0;    //used to create ID for each book

    addBookToLibrary();  //creates new book on submit event
    currentbook += 1;   //incriments the current book to use for the ID of each book

    clearInputs();
    console.log(library);
});