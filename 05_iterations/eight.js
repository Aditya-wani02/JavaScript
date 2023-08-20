const myNum = [1,2,3]

// const mytotal = myNum.reduce(function(acc , currval){
//     console.log(acc,currval);

//     return acc +currval
// },0)

const mytotal = myNum.reduce((acc,curr) => acc+curr,0)

console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(pricetopay);