export const formatCurrency = (number: number | undefined) => {

    let x : any = number;
    if(number !== undefined){
        x = x.toLocaleString('vi', {style : 'currency', currency : 'VND'});

    }
    return x;
}