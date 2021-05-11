

export const calculateDiscountedPrice = (fullPrice:number, discountPercent:number): number|null => {
    // if(discountPercent >= 0 && discountPercent <= 100){
    //     if(fullPrice >= 0){
            return fullPrice * (100 - discountPercent) / 100;
    //     }
    // }
    //return null;
}