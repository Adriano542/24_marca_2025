// const mainHeader= document.getElementById('mainHeader')
const mainHeader= document.querySelector('#mainHeader')
console.log('Nagłówek główny: ', mainHeader);
// const articleTitles= document.getElementsByTagName('h2')

mainHeader.innerHTML = '<h1>Mój artykuł</h1>'
mainHeader.style.color = '#f00'
mainHeader.style.backgroundColor='#ff0'

const articleTitles=document.querySelectorAll('article h2')
for(let i=0; i<articleTitles.length; i++){
    console.log(articleTitles[i])
    articleTitles[i].textContent = 'Art. 0${i+1}'
}



const firstArticleHeader = document.querySelector('.article_header');
console.log("Nagłówek pierwszego artykułu", firstArticleHeader);



