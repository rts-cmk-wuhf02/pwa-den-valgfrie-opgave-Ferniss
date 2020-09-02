document.addEventListener('DOMContentLoaded', () => {
fetch("https://opentdb.com/api.php?amount=10&type=multiple", {
      "method": "GET"
    })
    .then(response => response.json())
.then(data =>{
    console.log(data)
    console.log(data.results)
    console.log(data.results[1])
  // document.querySelector('.src').src = data.url


    // Det her er her hvor jeg laver start knappen til at virke
    let quizArticle = document.querySelector('.quiz-article');
    let quizstart = document.querySelector('.quizStart');
    quizstart.addEventListener('click', ()=>{
    //her får det første spørgsmål frem når man trykker på start på knappen
        quizArticle.innerHTML = `
        <section>
        <h2>${data.results[0].question}</h2>
    </section>
    <section>
        <button class="false">${data.results[0].incorrect_answers[0]}</button>
        <button class="false">${data.results[0].incorrect_answers[1]}</button>
        <button class="true">${data.results[0].correct_answer}</button>
        <button class="false">${data.results[0].incorrect_answers[2]}</button>
        <button class="next1">Næste Spørgsmål</button>
        </section>
        `
        //Her får jeg det rigtige svar til at blive blot
        
        let sandt = document.querySelector('.true')
        let falsk = document.querySelectorAll('.false')
        sandt.addEventListener('click', ()=>{
            sandt.style.backgroundColor = "lightgreen";
            if (sandt.style.backgroundColor = "lightgreen") {
                falsk.forEach(elements => {
                    elements.disabled = true;
                })
            }
        })
        falsk.forEach(element => {
            element.addEventListener('click', () =>{
                element.style.backgroundColor = "red";
                if (element.style.backgroundColor = "red") {
                    falsk.forEach(elements => {
                        elements.disabled = true;
                        sandt.disabled = true;
                    })
                }
            })
        });

        //Her starter det andet spørgsmål
        document.querySelector('.next1').addEventListener('click', ()=>{

            if (sandt.style.backgroundColor = "lightgreen") {
                quizArticle.innerHTML = `
                <section>
                <h2>${data.results[1].question}</h2>
            </section>
            <section>
            <button class="false">${data.results[1].incorrect_answers[0]}</button>
            <button class="false">${data.results[1].incorrect_answers[1]}</button>
            <button class="false">${data.results[1].incorrect_answers[2]}</button>
            <button class="true">${data.results[1].correct_answer[0]}</button>
                <button class="next2">Næste Spørgsmål</button>
                </section>
                `
                // her bliver det rigtige svar blåt
                let sandt = document.querySelector('.true')
                sandt.addEventListener('click', ()=>{
                    sandt.style.backgroundColor = "lightgreen";
                })
            }


            // Her starter spørgsemål nr 3
            document.querySelector('.next2').addEventListener('click', ()=>{
                if (sandt.style.backgroundColor = "lightgreen") {
                    quizArticle.innerHTML = `
                    <section>
                    <h2>Hvad er h2o</h2>
                </section>
                <section>
                    <button class="true">vand</button>
                    <button class="false">ild</button>
                    <button class="false">jord</button>
                    <button class="false">luft</button>
                    <button class="next2">Næste Spørgsmål</button>
                    </section>
                    `
                    // her bliver det rigtige svar blåt
                    let sandt = document.querySelector('.true')
                    sandt.addEventListener('click', ()=>{
                        sandt.style.backgroundColor = "lightgreen";
                    })
                }
            })
        })
    })
})
});