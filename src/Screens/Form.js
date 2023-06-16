function resultAll(arr){
    let result =0;
    for(let k=0;k<arr.lenght;k++)
    {
        for(let m=0;m<arr[k].lenght;m++){
            if(arr[k][m]>60)
            result +=(arr[k][m]);
        }
    }
    return result ;
        }
        resultAll([56,12],[23,54],[22,66,88]);

    

