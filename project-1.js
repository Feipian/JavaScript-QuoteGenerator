// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"I love mankind ... it's people I can't stand!!"`,
        person: `Charles M. Schulz`
    },
    {
        quote: `"Never love anyone who treats you like you're ordinary."`,
        person: `Oscar Wilde`
    },
    {
        quote: `"When someone shows you who they are believe them the first time."`,
        person: `Maya Angelou`
    },
    {
        quote: `"I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal."`,
        person: `Jane Austen, Jane Austen's Letters`
    },
    {
        quote: `"The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen."`,
        person: `Elisabeth Kübler-Ross`
    },
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)
    // console.log(random)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    
})