function Upper(str: string) {
    return str.toUpperCase();
}

// 1. string
// 2. boolean
// 3. number
// 4. any
// 5. null
// 6. undefined 

// number / string
// Uniion

// const arr: string[] = ['10', '20']


// type alias
type ObjTy1 = {
    name: string;
    working: boolean;
}

// type interface
interface ObjType2 {
    name: string;
    working: boolean;
    id: number;
}

const obj: ObjType2 = {
    name: 'anand',
    working: true,
    id: 1
}



// Problem 1
const func = (a:number,b:number) => {
    return a*b ;
};


// Problem 2
const func1 = (a:number, b:number) => {
    return a/b;
};


// Problem 3
let tuple: [string, boolean] = ["hello", true];


// Problem 4
interface myobj {
    title : string,
    status: boolean,
    id: number
  }
  let Obj : myobj = {
    title: 'anand',
    status: true,
    id: 1
  };



// Problem 5
  const getName = (firstname:string, lastname?:string): string =>{
    if(lastname){
        const fullname = `${firstname} ${lastname}`;
        return fullname;
    }else{
        return firstname;
    }
}




// Problem 6 

// `Fiction`, `Documentary` and `Educational`

type Fiction = 'Fiction';
type Documentary = 'Documentary';
type Educational = 'Educational';
export class Book {
    constructor(public section :Fiction | Documentary | Educational,public name :string){}
}

export class Section{
    public books : Book[] = [];
    constructor(public name :Fiction | Documentary | Educational){}

    addBook(book:Book){
        this.books.push(book);
    }
}

export class Library{
    public sections : Section[] = [];
    constructor(public name :string){}

    addSection(section:Section){
        this.sections.push(section);
    }
}