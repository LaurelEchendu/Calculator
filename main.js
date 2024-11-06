var input = document.getElementById('input')
let input = ('')

const input=(e) =>{
    input(e.target.value)
}




































function calculateDiscount(totalAmount){
    let discount = 0.9 * totalAmount;
    if(totalAmount >= 100){
        console.log(discount)
    }
    else{
        console.log(totalAmount)
    }
    return discount
}
let price = calculateDiscount (50);
console.log(price);


function getGrade (score){
    if(score >= 90){
        return 'A'
    }
    else if(score >=80 && score <=89){
        return'B'
    }
    else if(score >=70 && score <=79){
        return'C'
    }
    else if(score >=60 && score <=69){
        return'C'
    }
    else{
        return 'F'
    }
}
let grade = getGrade (70)
console.log(grade);


const user = {
    name: 'Laurel',
    age: 40,
    complextion: 'Light skinned',
};

const lilly =(runcode)=>{
    if(user.hasOwnProperty.name){
        return true
    }
    else{
        return false
    }
}

console.log(lilly());


const itemList = document.getElementById('item-list')
const items= ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6']

for(let i=0; i < items.length; i++){
    const li =document.createElement('li');
    li.textContent=items[i];
    itemList.appendChild(li)
}



