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
    let read = readInput.checked;

    //creates new object named book
    currentbook = new Book(read, numberPages, title, author);

    //pushes new object to library array
    library.push(currentbook);

    clearInputs();  //Clears text inputs
    displayBook(); 
};

//remove book from library
function remove(bookBox, titleDisplay, authorDisplay, pageNumDisplay, readStatus, removeButton) {
    bookBox.removeChild(titleDisplay);
    bookBox.removeChild(authorDisplay);
    bookBox.removeChild(pageNumDisplay);
    bookBox.removeChild(readStatus);
    bookBox.removeChild(removeButton);
    bookContainer.removeChild(bookBox);
}

//changes button value from read to not read
function chanegReadStatus(readStatus) {
    if (readStatus.innerHTML == 'Not Read') {
        readStatus.innerHTML = 'Read';
        book.read = true;
    } else {
        readStatus.innerHTML = 'Not Read';
        book.read = false;
    }
}

//clears the input in form
function clearInputs() {
    titleInput.value = '';
    numberPagesInput.value = '';
    authorInput.value = '';
    readInput.checked = false;
};

function displayBook() {
    //adds a new div to contain book values
    const bookDiv = document.createElement('div');  //creates the div
    bookDiv.classList.add('book', currentbook);  //div class book
    bookDiv.setAttribute('id', 'bookDiv' + currentbook);  //div ID bookDiv

    bookContainer.appendChild(bookDiv);  //adds the bookDiv to the book-container

    const bookBox = document.getElementById('bookDiv' + currentbook); //Selects the book div to add generate P elements within
    //bookBox.classList.add("displayBook");   //adds displayBook class

    const titleDisplay = document.createElement('p');
    titleDisplay.classList.add('displaytitle',)

    const authorDisplay = document.createElement('p');
    authorDisplay.classList.add('displayauthor');

    const pageNumDisplay = document.createElement('p');
    pageNumDisplay.classList.add('display-pagecount');

    //adds button and event listener to change the value from read to not read
    const readStatus = document.createElement('button');
    readStatus.setAttribute('type', 'checkbox');
    readStatus.classList.add('read');

    const readLabel = document.createElement('label');
    readLabel.setAttribute('for', 'read');

    readStatus.classList.add('display-read');
    readStatus.addEventListener('click', () => {
        chanegReadStatus(readStatus);
    });

    //adds button and listener to remove book
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
        remove(bookContainer, bookBox, titleDisplay, authorDisplay, pageNumDisplay, readStatus, removeButton);
    });

    //adds the new P elements to the parent div
    bookBox.appendChild(titleDisplay);
    bookBox.appendChild(authorDisplay);
    bookBox.appendChild(pageNumDisplay);
    bookBox.appendChild(readStatus);
    readStatus.appendChild(readLabel);
    bookBox.appendChild(removeButton);

    book = library[currentbook];

    titleDisplay.innerHTML = book.title;
    authorDisplay.innerHTML = book.author;

    pageNumDisplay.innerHTML = book.numberPages;
    if (book.read == true) {
        readStatus.innerHTML= 'Read';
    } else {
        readStatus.innerHTML= 'Not Read';
    };

    removeButton.innerHTML = "Remove Book";
}

let currentbook = 0;    //used to create ID for each book

//adds event listener for submit button
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();    //prevents form from clearing before info is used

    addBookToLibrary();  //creates new book on submit event
    currentbook += 1;   //incriments the current book to use for the ID of each book
});
