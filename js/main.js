// Vogliamo gestire la nostra libreria di casa.
// Abbiamo un array di libri.Ogni libro è rappresentato da 3 proprietà: autore, titolo e anno di pubblicazione.
// Ad es.
//  {
//     title: 'Il vecchio e il mare',
//         author: 'Ernest Hemingway',
//             year: 1951
// }
// MILESTONE 1
// La prima cosa fondamentale è sapere quali libri abbiamo in libreria.Quindi mostriamoli sulla pagina.
// [IMPORTANTE] In questa fase, non focalizziamoci sul layout(quello possiamo farlo in un secondo momento).Limitiamoci a stamparli in una ul o in dei paragrafi con degli hr come separatori.

    // Mi creo una funzione per Ciclare sull'arrray con un foreach e stampare nell'html con il template literal (es Todo list)






//     MILESTONE 2
// Abbiamo la lista di libri, perfetto!
// Proviamo ad aggiungere manualmente un nuovo libro nella libreria.

    // Tex input con eventlister sull'invio, deve usare la funzione della milestone 1





//     MILESTONE 3
// I libri cominciano ad essere un bel po'. Abbiamo bisogno di poter effettuare una ricerca!
// Creiamo un input in cui poter inserire il nome di un autore.Al click su un pulsante "Cerca", andiamo a filtrare i libri da visualizzare.

    // Usare la logica della milestone 2, ma creando una funzione (tipo esercizio icons) che una volta cliccato invio mi vada a Ciclare sull'arrray e confrontare i titoli, mi deve restituire un Array in questo caso devo destrutturizzare i miei oggetti salvando in una variabile la Key 'title' e usando il filter gli vado a mettere come condizione un if che se il titolo che mi inserisce l'utente è uguale alla variabile title devo visualizzarlo.


//     BONUS
// Un'altra cosa importante è poter aggiungere nuovi libri quando li compriamo!
// Creiamo un form in cui si possa inserire titolo, autore e anno di pubblicazione.Al click su un pulsante "Aggiungi", aggiungeremo il libro alla lista.Sono tutti e tre dati importanti per un libro, quindi assicuriamoci di NON aggiungere libri se l'utente non ha inserito tutte le tre proprietà.

// Siamo generosi, vi diamo anche un array di partenza con cui iniziare a lavorare!





$(document).ready(
    function () {
        const books = [
            {
                title: "Il vecchio e il mare",
                author: "Ernest Hemingway",
                year: 1951
            },
            {
                title: "La forma dell'acqua",
                author: "Andrea Camilleri",
                year: 1994
            },
            {
                title: "Elogio della follia",
                author: "Henri Laborit",
                year: 1976
            },
            {
                title: "La camera azzurra",
                author: "George Simenon",
                year: 1964
            },
            {
                title: "La lama sottile",
                author: "Philip Pullman",
                year: 1997
            },
            {
                title: "Il simbolo perduto",
                author: "Dan Brown",
                year: 2009
            },
            {
                title: "La bussola d'oro",
                author: "Philip Pullman",
                year: 1995
            },
            {
                title: "Addio alle armi",
                author: "Ernest Hemingway",
                year: 1929
            },
            {
                title: "Il codice da Vinci",
                author: "Dan Brown",
                year: 2003
            },
            {
                title: "La nouvelle grille",
                author: "Henri Laborit",
                year: 1974
            },
            {
                title: "Maigret",
                author: "Georges Simenon",
                year: 1934
            },
            {
                title: "Il cane di terracotta",
                author: "Andrea Camilleri",
                year: 1996
            },
            
        ]

        const container = $('.container_card');

        stampLi(books, container);

        $(document).on("click", ".searchButton",
            function () {
                var userText = $(".searchInput").val();

                if (userText == "") {
                    stampLi(books, container);
                } else {
                    const filteredBooks = books.filter(
                        (element) => {
                            return element.author == userText;
                        }
                    );
                    stampLi(filteredBooks, container);
                }
            }
        );

        $(document).on("click", ".btn_add",
            function () {
                var newBook = {};
                var newTitle = $("[name='add_title']").val();
                var newAuthor = $("[name='add_author']").val();
                var newYear = $("[name='add_year']").val();

                newBook.title = newTitle;
                newBook.author = newAuthor;
                newBook.year = newYear;

                if (newTitle == "" || newTitle == null || newAuthor == "" || newAuthor == null || newYear == "" || newYear == null) {
                    alert("Il campo di testo non può essere vuoto!");
                } else {
                    books.push(newBook);
                    stampLi(books, container);
                }

            }
            
        );
    });




//Functions -----------
function stampLi(array, container) {
    
    container.html('');
    
    array.forEach(
        (element) => {

        
            const { title, author, year } = element;

            container.append(`
            <div class="card">
                <img src="https://is.gd/5KxlL9" style="width:100%">
                <div class="container">
                    <h4><b>${title}</b></h4>
                    <h4><b>${author}</b></h4>
                    <h4><b>${year}</b></h4>
                </div>
            </div>
        `);
        });
}
