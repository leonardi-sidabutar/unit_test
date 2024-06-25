//  1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

const fishbash = function(n){
    for(i = 1 ; i<=n ; i++){
        //  
        if((i % 3) == 0){
            console.log('fish')
        }
        if(i % 5 == 0){
            console.log('bash')
        }
        if(i % 15 == 0){
            console.log('fish bash')
        } 
    }
}
fishbash(5);

// =========================================================================================

//  2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

const bubbleSortAsc = function(arr){
    for(i = 0; i<arr.length ; i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
                let dummy = arr[i];
                arr[i] = arr[j];
                arr[j] = dummy;
            }
        }
    }
    console.log(arr)
    return arr;
}
bubbleSortAsc([3, 7, 2, 1, 8, 4, 5, 6]);

const bubbleSortDesc = function(arr){
    for(i = 0; i<arr.length ; i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                let dummy = arr[i];
                arr[i] = arr[j];
                arr[j] = dummy;
            }
        }
    }
    console.log(arr)
    return arr;
}
bubbleSortDesc([3, 7, 2, 1, 8, 4, 5, 6]);

// =========================================================================================

//  3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

const palindrome = function(str){
    // Convert to Array
    const front = str.split('');
    const back  = [];
    for(i=front.length-1;0<=i;i--){
        back.push(front[i])
    }
    // Convert to String Back
    if(front.join('') == back.join('')){
        return true
    }else{
        return false
    }
}
console.log(palindrome('tenet'));
