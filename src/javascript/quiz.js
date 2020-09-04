document.addEventListener('DOMContentLoaded', () => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple", {
        "method": "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.results)
        console.log(data.results[1])

        // Det her er her hvor jeg får start knappen til at virke
        let quizArticle = document.querySelector('.quiz-article');
        let quizstart = document.querySelector('.quizStart');



        //her får det første spørgsmål frem når man trykker på start på knappen. 
        // Her starter spørgsemål nr 1
        quizstart.addEventListener('click', () => {
            quizArticle.innerHTML = `
                <section>
                    <h1>Spøgrsmål 1</h1>
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
            //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
            let sandt = document.querySelector('.true')
            let falsk = document.querySelectorAll('.false')
            sandt.addEventListener('click', () => {
                sandt.style.backgroundColor = "lightgreen";
                if (sandt.style.backgroundColor = "lightgreen") {
                     falsk.forEach(elements => {
                        elements.disabled = true;
                    })
                }
            })

            falsk.forEach(element => {
                element.addEventListener('click', () => {
                    element.style.backgroundColor = "red";
                    if (element.style.backgroundColor = "red") {
                        falsk.forEach(elements => {
                            elements.disabled = true;
                            sandt.disabled = true;
                        })
                    }
                })
            });
            //her slutter spørgsmål 1



            // Her starter spørgsemål nr 2
            document.querySelector('.next1').addEventListener('click', () => {

                if (sandt.style.backgroundColor = "lightgreen") {
                    quizArticle.innerHTML = `
                        <section>
                            <h1>Spøgrsmål 2</h1>
                            <h2>${data.results[1].question}</h2>
                        </section>
                        <section>
                            <button class="false">${data.results[1].incorrect_answers[0]}</button>
                            <button class="false">${data.results[1].incorrect_answers[1]}</button>
                            <button class="false">${data.results[1].incorrect_answers[2]}</button>
                            <button class="true">${data.results[1].correct_answer}</button>
                            <button class="next2">Næste Spørgsmål</button>
                        </section>
                    `
                //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                let sandt = document.querySelector('.true')
                let falsk = document.querySelectorAll('.false')
                sandt.addEventListener('click', () => {
                    sandt.style.backgroundColor = "lightgreen";
                    if (sandt.style.backgroundColor = "lightgreen") {
                        falsk.forEach(elements => {
                            elements.disabled = true;
                        })
                    }
                })
                falsk.forEach(element => {
                    element.addEventListener('click', () => {
                        element.style.backgroundColor = "red";
                        if (element.style.backgroundColor = "red") {
                            falsk.forEach(elements => {
                                elements.disabled = true;
                                sandt.disabled = true;
                            })
                        }
                    })
                });
            //her slutter spørgsmål 2



            // Her starter spørgsemål nr 3
            document.querySelector('.next2').addEventListener('click', () => {

                if (sandt.style.backgroundColor = "lightgreen") {
                    quizArticle.innerHTML = `
                        <section>
                                <h1>Spøgrsmål 3</h1>
                                <h2>${data.results[2].question}</h2>
                            </section>
                            <section>
                                <button class="true">${data.results[2].correct_answer}</button>
                                <button class="false">${data.results[2].incorrect_answers[0]}</button>
                                <button class="false">${data.results[2].incorrect_answers[1]}</button>
                                <button class="false">${data.results[2].incorrect_answers[2]}</button>
                                <button class="next3">Næste Spørgsmål</button>
                            </section>
                        `
                    //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                        let sandt = document.querySelector('.true')
                        let falsk = document.querySelectorAll('.false')
                        sandt.addEventListener('click', () => {
                            sandt.style.backgroundColor = "lightgreen";
                            if (sandt.style.backgroundColor = "lightgreen") {
                                falsk.forEach(elements => {
                                    elements.disabled = true;
                                })
                            }
                        })
                        falsk.forEach(element => {
                            element.addEventListener('click', () => {
                                element.style.backgroundColor = "red";
                                if (element.style.backgroundColor = "red") {
                                    falsk.forEach(elements => {
                                        elements.disabled = true;
                                        sandt.disabled = true;
                                    })
                                }
                            })
                        });
                    //her slutter spørgsmål 3



                    // Her starter spørgsemål nr 4
                    document.querySelector('.next3').addEventListener('click', () => {
                                    if (sandt.style.backgroundColor = "lightgreen") {
                                        quizArticle.innerHTML = `
                        <section>
                        <h1>Spøgrsmål 4</h1>
                        <h2>${data.results[3].question}</h2>
                    </section>
                    <section>
                    <button class="false">${data.results[3].incorrect_answers[0]}}</button>
                    <button class="true">${data.results[3].correct_answer}</button>
                    <button class="false">${data.results[3].incorrect_answers[1]}</button>
                    <button class="false">${data.results[3].incorrect_answers[2]}</button>
                        <button class="next4">Næste Spørgsmål</button>
                        </section>
                        `
                                        //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                                        let sandt = document.querySelector('.true')
                                        let falsk = document.querySelectorAll('.false')
                                        sandt.addEventListener('click', () => {
                                            sandt.style.backgroundColor = "lightgreen";
                                            if (sandt.style.backgroundColor = "lightgreen") {
                                                falsk.forEach(elements => {
                                                    elements.disabled = true;
                                                })
                                            }
                                        })
                                        falsk.forEach(element => {
                                            element.addEventListener('click', () => {
                                                element.style.backgroundColor = "red";
                                                if (element.style.backgroundColor = "red") {
                                                    falsk.forEach(elements => {
                                                        elements.disabled = true;
                                                        sandt.disabled = true;
                                                    })
                                                }
                                            })
                                        });
                                        // Her slutter spørgsemål nr 4

                                        // Her starter spørgsemål nr 5
                                        document.querySelector('.next4').addEventListener('click', () => {
                                            if (sandt.style.backgroundColor = "lightgreen") {
                                                quizArticle.innerHTML = `
    <section>
    <h1>Spøgrsmål 5</h1>
    <h2>${data.results[4].question}</h2>
</section>
<section>
<button class="true">${data.results[4].correct_answer}</button>
<button class="false">${data.results[4].incorrect_answers[0]}</button>
<button class="false">${data.results[4].incorrect_answers[1]}</button>
<button class="false">${data.results[4].incorrect_answers[2]}</button>
    <button class="next5">Næste Spørgsmål</button>
    </section>
    `
                                                //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                                                let sandt = document.querySelector('.true')
                                                let falsk = document.querySelectorAll('.false')
                                                sandt.addEventListener('click', () => {
                                                    sandt.style.backgroundColor = "lightgreen";
                                                    if (sandt.style.backgroundColor = "lightgreen") {
                                                        falsk.forEach(elements => {
                                                            elements.disabled = true;
                                                        })
                                                    }
                                                })
                                                falsk.forEach(element => {
                                                    element.addEventListener('click', () => {
                                                        element.style.backgroundColor = "red";
                                                        if (element.style.backgroundColor = "red") {
                                                            falsk.forEach(elements => {
                                                                elements.disabled = true;
                                                                sandt.disabled = true;
                                                            })
                                                        }
                                                    })
                                                });
                                                //her slutter spørgsmål 5

                                                // Her starter spørgsemål nr 6
                                                document.querySelector('.next5').addEventListener('click', () => {
                                                    if (sandt.style.backgroundColor = "lightgreen") {
                                                        quizArticle.innerHTML = `
                                            <section>
                                            <h1>Spøgrsmål 6</h1>
                                            <h2>${data.results[5].question}</h2>
                                        </section>
                                        <section>
                                        <button class="false">${data.results[5].incorrect_answers[0]}}</button>
                                        <button class="true">${data.results[5].correct_answer}</button>
                                        <button class="false">${data.results[5].incorrect_answers[1]}</button>
                                        <button class="false">${data.results[5].incorrect_answers[2]}</button>
                                            <button class="next6">Næste Spørgsmål</button>
                                            </section>
                                            `
                                                        //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                                                        let sandt = document.querySelector('.true')
                                                        let falsk = document.querySelectorAll('.false')
                                                        sandt.addEventListener('click', () => {
                                                            sandt.style.backgroundColor = "lightgreen";
                                                            if (sandt.style.backgroundColor = "lightgreen") {
                                                                falsk.forEach(elements => {
                                                                    elements.disabled = true;
                                                                })
                                                            }
                                                        })
                                                        falsk.forEach(element => {
                                                            element.addEventListener('click', () => {
                                                                element.style.backgroundColor = "red";
                                                                if (element.style.backgroundColor = "red") {
                                                                    falsk.forEach(elements => {
                                                                        elements.disabled = true;
                                                                        sandt.disabled = true;
                                                                    })
                                                                }
                                                            })
                                                        });
                                                        // Her slutter spørgsemål nr 6

                                                        // Her starter spørgsemål nr 7
                                                        document.querySelector('.next6').addEventListener('click', () => {
                                                            if (sandt.style.backgroundColor = "lightgreen") {
                                                                quizArticle.innerHTML = `
                                                <section>
                                                <h1>Spøgrsmål 7</h1>
                                                <h2>${data.results[6].question}</h2>
                                            </section>
                                            <section>
                                            <button class="false">${data.results[6].incorrect_answers[0]}}</button>
                                            <button class="true">${data.results[6].correct_answer}</button>
                                            <button class="false">${data.results[6].incorrect_answers[1]}</button>
                                            <button class="false">${data.results[6].incorrect_answers[2]}</button>
                                                <button class="next7">Næste Spørgsmål</button>
                                                </section>
                                                `
                                                                //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                                                                let sandt = document.querySelector('.true')
                                                                let falsk = document.querySelectorAll('.false')
                                                                sandt.addEventListener('click', () => {
                                                                    sandt.style.backgroundColor = "lightgreen";
                                                                    if (sandt.style.backgroundColor = "lightgreen") {
                                                                        falsk.forEach(elements => {
                                                                            elements.disabled = true;
                                                                        })
                                                                    }
                                                                })
                                                                falsk.forEach(element => {
                                                                    element.addEventListener('click', () => {
                                                                        element.style.backgroundColor = "red";
                                                                        if (element.style.backgroundColor = "red") {
                                                                            falsk.forEach(elements => {
                                                                                elements.disabled = true;
                                                                                sandt.disabled = true;
                                                                            })
                                                                        }
                                                                    })
                                                                });

                                                                //her slutter spørgsmål 7
                                                                // Her starter spørgsemål nr 8
                                                                document.querySelector('.next7').addEventListener('click', () => {
                                                                    if (sandt.style.backgroundColor = "lightgreen") {
                                                                        quizArticle.innerHTML = `
                                                                                        <section>
                                                                                        <h1>Spøgrsmål 8</h1>
                                                                                        <h2>${data.results[7].question}</h2>
                                                                                    </section>
                                                                                    <section>
                                                                                    <button class="false">${data.results[7].incorrect_answers[0]}}</button>
                                                                                    <button class="true">${data.results[7].correct_answer}</button>
                                                                                    <button class="false">${data.results[7].incorrect_answers[1]}</button>
                                                                                    <button class="false">${data.results[7].incorrect_answers[2]}</button>
                                                                                        <button class="next8">Næste Spørgsmål</button>
                                                                                        </section>
                                                                                        `
                                                                        //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                                                                        let sandt = document.querySelector('.true')
                                                                        let falsk = document.querySelectorAll('.false')
                                                                        sandt.addEventListener('click', () => {
                                                                            sandt.style.backgroundColor = "lightgreen";
                                                                            if (sandt.style.backgroundColor = "lightgreen") {
                                                                                falsk.forEach(elements => {
                                                                                    elements.disabled = true;
                                                                                })
                                                                            }
                                                                        })
                                                                        falsk.forEach(element => {
                                                                            element.addEventListener('click', () => {
                                                                                element.style.backgroundColor = "red";
                                                                                if (element.style.backgroundColor = "red") {
                                                                                    falsk.forEach(elements => {
                                                                                        elements.disabled = true;
                                                                                        sandt.disabled = true;
                                                                                    })
                                                                                }
                                                                            })
                                                                        });

                                                                        //her slutter spørgsmål 8
                                                                        // Her starter spørgsemål nr 9
                                                                        document.querySelector('.next8').addEventListener('click', () => {
                                                                            if (sandt.style.backgroundColor = "lightgreen") {
                                                                                quizArticle.innerHTML = `
                                                                                                <section>
                                                                                                <h1>Spøgrsmål 9</h1>
                                                                                                <h2>${data.results[8].question}</h2>
                                                                                            </section>
                                                                                            <section>
                                                                                            <button class="false">${data.results[8].incorrect_answers[0]}}</button>
                                                                                            <button class="true">${data.results[8].correct_answer}</button>
                                                                                            <button class="false">${data.results[8].incorrect_answers[1]}</button>
                                                                                            <button class="false">${data.results[8].incorrect_answers[2]}</button>
                                                                                                <button class="next9">Næste Spørgsmål</button>
                                                                                                </section>
                                                                                                `
                                                                                //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                                                                                let sandt = document.querySelector('.true')
                                                                                let falsk = document.querySelectorAll('.false')
                                                                                sandt.addEventListener('click', () => {
                                                                                    sandt.style.backgroundColor = "lightgreen";
                                                                                    if (sandt.style.backgroundColor = "lightgreen") {
                                                                                        falsk.forEach(elements => {
                                                                                            elements.disabled = true;
                                                                                        })
                                                                                    }
                                                                                })
                                                                                falsk.forEach(element => {
                                                                                    element.addEventListener('click', () => {
                                                                                        element.style.backgroundColor = "red";
                                                                                        if (element.style.backgroundColor = "red") {
                                                                                            falsk.forEach(elements => {
                                                                                                elements.disabled = true;
                                                                                                sandt.disabled = true;
                                                                                            })
                                                                                        }
                                                                                    })
                                                                                });
        
                                                                                //her slutter spørgsmål 8

                                                                                //her slutter spørgsmål 9
                                                                                // Her starter spørgsemål nr 10
                                                                                document.querySelector('.next9').addEventListener('click', () => {
                                                                                    if (sandt.style.backgroundColor = "lightgreen") {
                                                                                        quizArticle.innerHTML = `
                                                                                        <section>
                                                                                        <h1>Spøgrsmål 10</h1>
                                                                                        <h2>${data.results[9].question}</h2>
                                                                                    </section>
                                                                                    <section>
                                                                                    <button class="false">${data.results[9].incorrect_answers[0]}}</button>
                                                                                    <button class="true">${data.results[9].correct_answer}</button>
                                                                                    <button class="false">${data.results[9].incorrect_answers[1]}</button>
                                                                                    <button class="false">${data.results[9].incorrect_answers[2]}</button>
                                                                                        <button class="next10">Næste Spørgsmål</button>
                                                                                        </section>
                                                                                        `
                                                                                        //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
                                                                                        let sandt = document.querySelector('.true')
                                                                                        let falsk = document.querySelectorAll('.false')
                                                                                        sandt.addEventListener('click', () => {
                                                                                            sandt.style.backgroundColor = "lightgreen";
                                                                                            if (sandt.style.backgroundColor = "lightgreen") {
                                                                                                falsk.forEach(elements => {
                                                                                                    elements.disabled = true;
                                                                                                })
                                                                                            }
                                                                                        })
                                                                                        falsk.forEach(element => {
                                                                                            element.addEventListener('click', () => {
                                                                                                element.style.backgroundColor = "red";
                                                                                                if (element.style.backgroundColor = "red") {
                                                                                                    falsk.forEach(elements => {
                                                                                                        elements.disabled = true;
                                                                                                        sandt.disabled = true;
                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                        });
                                                                                    }
                                                                                })
                                                                                //her slutter spørgsmål 10
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })

                            }
                        })
                    }
                })
            })
        })
});