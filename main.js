// const mainHeader= document.getElementById('mainHeader')
const mainHeader= document.querySelector('#mainHeader')

// const articleTitles= document.getElementsByTagName('h2')

const articleTitles=document.querySelectorAll('article h2')

for(let i=0; i<articleTitles.length; i++){
    console.log(articleTitles[i])
}
