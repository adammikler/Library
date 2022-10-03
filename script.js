//Selects the location to pull info from the form
const form = document.getElementById('add-book');

const titleInput = form.elements['title'];
const authorInput = form.elements['author'];
const numberPagesInput = form.elements['pagenum'];
const readInput = form.elements['read'];

//Selectors for showcasing books
const bookContainer = document.getElementById('book-container');

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

    clearInputs();  //Clears text inputs
    displayBook(); 
};

//clears the input in form
function clearInputs() {
    titleInput.value = '';
    numberPagesInput.value = '';
    authorInput.value = '';
    readInput.value = '';
};

function displayBook() {
    //adds a new div to contain book values
    const bookDiv = document.createElement('div');  //creates the div
    bookDiv.classList.add('book');  //div class book
    bookDiv.setAttribute('id', 'bookDiv');  //div ID bookDiv

    bookContainer.appendChild(bookDiv);  //adds the bookDiv to the book-container

    const bookBox = document.getElementById('bookDiv'); //Selects the book div to add generate P elements within
    //bookBox.classList.add("displayBook");   //adds displayBook class

    const titleDisplay = document.createElement('p');
    titleDisplay.classList.add('displaytitle')

    const authorDisplay = document.createElement('p');
    authorDisplay.classList.add('displayauthor');

    const pageNumDisplay = document.createElement('p');
    pageNumDisplay.classList.add('display-pagecount');

    const readStatus = document.createElement('p');
    readStatus.classList.add('display-read');

    //adds the new P elements to the parent div
    bookBox.appendChild(titleDisplay);
    bookBox.appendChild(authorDisplay);
    bookBox.appendChild(pageNumDisplay);
    bookBox.appendChild(readStatus);

    titleDisplay.innerHTML = "title";
    authorDisplay.innerHTML = "author";
    pageNumDisplay.innerHTML = "200";
    readStatus.innerHTML = "Read"

}

//adds event listener for submit button
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();    //prevents form from clearing before info is used

    let currentbook = 0;    //used to create ID for each book

    addBookToLibrary();  //creates new book on submit event
    currentbook += 1;   //incriments the current book to use for the ID of each book

    console.log(library);
});

function Main() {

};