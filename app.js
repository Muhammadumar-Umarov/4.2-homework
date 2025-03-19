// 1-misol
// {
//     // decloration
//     function ortaQiymat(a,b,c){
//         return (a + b + c) / 3
//     }
//     console.log(ortaQiymat(3,4,8));

//     // expression
//     let ortaQiymat2 = function(a,b,c){
//         return (a + b + c) / 3
//     }
//     console.log(ortaQiymat2(3,4,8));

//     // arrow
//     const ortaQiymat3 = (a,b,c) => (a + b + c) / 3
//     console.log(ortaQiymat3(3,4,8));

// }

// 2-misol
// {
//     // decloration
//     function kattaRaqam(a,b){
//         if(a > b) return a
//         if(b > a) return b
//         if (a === b) return "raqamlar teng"
//     }
//     console.log(kattaRaqam(3,4));
    
//     // expression
//     let kattaRaqam2 = function(a,b){
//         if(a > b) return a
//         if(b > a) return b
//         if (a === b) return "raqamlar teng"
//     }
//     console.log(kattaRaqam2(3,5));

//     // arrow
//     const kattaRaqam3 = (a,b) => {
//         if(a > b) return a
//         if(b > a) return b
//         if (a === b) return "raqamlar teng"
//     }
//     console.log(kattaRaqam3(3,6));

// }

// 3-misol
// {
//     // decloration
//     function oxirgiElement(arr){
//         return arr.pop()
//     }

//     console.log(oxirgiElement([1,2,3,54]));
    
//     // expression
//     let oxirgiElement2 = function(arr){
//         return arr.pop()
//     }
//     console.log(oxirgiElement2([1,2,3,64]));

//     // arrow
//     const oxirgiElement3 = (arr) => arr.pop()
//     console.log(oxirgiElement3([1,2,3,74]));
// }

// 4-misol
{
    const info = {
        name: "John",
        age: 32
    }

    function funksiya(info){
        return `${info.name} is ${info.age} years old`
    }
    console.log(funksiya(info));
    
}