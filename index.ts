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