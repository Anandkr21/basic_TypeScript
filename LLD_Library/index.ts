// `Fiction`, `Documentary` and `Educational`

type Fiction = 'Fiction';
type Documentary = 'Documentary';
type Educational = 'Educational';
export class Book {
    constructor(public section: Fiction | Documentary | Educational, public name: string) { }
}

export class Section {
    public books: Book[] = [];
    constructor(public name: Fiction | Documentary | Educational) { }

    addBook(book: Book) {
        this.books.push(book);
    }
}

export class Library {
    public sections: Section[] = [];
    constructor(public name: string) { }

    addSection(section: Section) {
        this.sections.push(section);
    }
}