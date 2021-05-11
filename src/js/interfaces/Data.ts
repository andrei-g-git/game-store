export interface GameCardData{
    id: number,
    title: string,
    img: string,
    //description 
    // developer 
    // publisher 
    // genre              
    //release 
    price: number,
    discount: number
    isFree: boolean,
    // rating
    // followers 
}

export interface GameData{
    id: number,
    title: string,
    header_image: string,
    description: string, 
    developer: string, 
    publisher: string, 
    genre: string,              
    release_date: string, 
    price: number,
    discount: number,
    is_free: boolean,
    rating_percent: number,
    followers: number 
}