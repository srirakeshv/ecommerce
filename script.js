let decrementButton=document.querySelector('.minus')
let incrementButton=document.querySelector('.add')
let numberOfItems=document.querySelector('#number')
let imageClick=document.querySelectorAll('.img1')
let bodyContent=document.querySelector('body')
let closeButton=document.querySelector('#xmark')
let blackScreen=document.querySelector('.black')
let carousal=document.querySelector('#carousal')
let previousButton=document.querySelector('.left')
let nextButton=document.querySelector('.right')
let cart=document.querySelector('.cartpop')
let cartMessage=document.querySelector('.message1')
let addToCart=document.querySelector('.addtocart')
let priceAmount=document.querySelector('.price')
let num=0

decrementButton.addEventListener('click',()=>{
    if(num===0)
    {
        numberOfItems.innerHTML=0
    }
    else{
        num--
        numberOfItems.innerHTML=num
    }
})

incrementButton.addEventListener('click',()=>{
    num++
    numberOfItems.innerHTML=num
})

imageClick.forEach((img)=>{
    img.addEventListener('click',()=>{
        bodyContent.classList.add('active')
        bodyContent.classList.add('true')
    })
})
closeButton.addEventListener('click',()=>{
    bodyContent.classList.remove('active')
    bodyContent.classList.remove('true')
})

// array images popoup
const array=['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg']

let currIndex=0
let j=array.length
previousButton.addEventListener('click',()=>{
    currIndex=(currIndex+j-1)%j
    displayImage()
})
nextButton.addEventListener('click',()=>{
    currIndex=(currIndex+j+1)%j
    displayImage()
})

function displayImage(){
    carousal.src=array[currIndex]
}

window.onload=displayImage

// cart popup
// initialize
let cartm=document.querySelector('.cartmm')
let cartimg=document.querySelector('#cartimg')
let productName=document.querySelector('.productname')
let productAmount=document.querySelector(".productamount")
let deleteIcon=document.querySelector('#delete')
let cartp=document.querySelector('.cartpop')
let trolley=document.querySelector('.trolley')
let content=document.querySelector('.content')
let divnote=document.querySelector('.divnote')
let cartTrolley=document.querySelector('.carttrolley')

function cartMs(){
    productName.innerHTML='Fall Limited Edition Sneakers'
    productAmount.innerHTML=priceAmount.innerHTML+' x '+numberOfItems.innerHTML+' '+'$'+(Number(priceAmount.innerHTML)*Number(numberOfItems.innerHTML))
    // console.log(Number(priceAmount.innerHTML)*Number(numberOfItems.innerHTML))
    cartimg.src='images/image-product-1.jpg'
    deleteIcon.src='images/icon-delete.svg'
    cartMessage.classList.add('hi')
    cartMessage.classList.add('bu')
    cartp.classList.add('hello')
}

addToCart.addEventListener('click',()=>{
    if(numberOfItems.innerHTML==0)
    {
        cartm.style.display='block'
        cartm.innerHTML='Your Cart is empty'
        cartMessage.classList.remove('hi')
        cartp.classList.remove('hello')
        cartMessage.classList.remove('bu')
        cartTrolley.classList.remove('pop')
    }
    else{
        cartm.style.display='none'
        cartTrolley.classList.add('pop')
        divnote.innerHTML=numberOfItems.innerHTML
        cartMs()
    }
    
})

trolley.addEventListener('click',()=>{
    content.classList.toggle('display')
})

deleteIcon.addEventListener('click',()=>{
        cartm.style.display='block'
        cartm.innerHTML='Your Cart is empty'
        cartMessage.classList.remove('hi')
        cartp.classList.remove('hello')
        cartMessage.classList.remove('bu')
        cartTrolley.classList.remove('pop')
        numberOfItems.innerHTML=0
})


// 
let menuiconOpen=document.querySelector('.menuicon')
let closeMenuButton=document.querySelector('#closemenubutton')
let logo=document.querySelector('.logo')
let elements=document.querySelectorAll('li')

menuiconOpen.addEventListener('click',()=>{
    logo.classList.add('openmenu')
    bodyContent.classList.add('true')
})
closeMenuButton.addEventListener('click',()=>{
    logo.classList.remove('openmenu')
    bodyContent.classList.remove('true')
})

// 
let pre=document.querySelector('.p')
let nex=document.querySelector('.n')
let changeImage=document.querySelector('.car')
let i=0
let k=array.length

pre.addEventListener('click',()=>{
    i=(i+k-1)%k
    displayImage1()
})
nex.addEventListener('click',()=>{
    i=(i+j+1)%k
    displayImage1()
})

function displayImage1(){
    changeImage.src=array[i]
}
window.onload=displayImage1
