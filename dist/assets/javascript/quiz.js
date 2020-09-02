"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch("https://opentdb.com/api.php?amount=10&type=multiple", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    console.log(data.results);
    console.log(data.results[1]); // document.querySelector('.src').src = data.url
    // Det her er her hvor jeg laver start knappen til at virke

    var quizArticle = document.querySelector('.quiz-article');
    var quizstart = document.querySelector('.quizStart');
    quizstart.addEventListener('click', function () {
      //her får det første spørgsmål frem når man trykker på start på knappen
      quizArticle.innerHTML = "\n        <section>\n        <h2>".concat(data.results[0].question, "</h2>\n    </section>\n    <section>\n        <button class=\"false\">").concat(data.results[0].incorrect_answers[0], "</button>\n        <button class=\"false\">").concat(data.results[0].incorrect_answers[1], "</button>\n        <button class=\"true\">").concat(data.results[0].correct_answer, "</button>\n        <button class=\"false\">").concat(data.results[0].incorrect_answers[2], "</button>\n        <button class=\"next1\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n        </section>\n        "); //Her får jeg det rigtige svar til at blive blot

      var sandt = document.querySelector('.true');
      var falsk = document.querySelectorAll('.false');
      sandt.addEventListener('click', function () {
        sandt.style.backgroundColor = "lightgreen";

        if (sandt.style.backgroundColor = "lightgreen") {
          falsk.forEach(function (elements) {
            elements.disabled = true;
          });
        }
      });
      falsk.forEach(function (element) {
        element.addEventListener('click', function () {
          element.style.backgroundColor = "red";

          if (element.style.backgroundColor = "red") {
            falsk.forEach(function (elements) {
              elements.disabled = true;
              sandt.disabled = true;
            });
          }
        });
      }); //Her starter det andet spørgsmål

      document.querySelector('.next1').addEventListener('click', function () {
        if (sandt.style.backgroundColor = "lightgreen") {
          quizArticle.innerHTML = "\n                <section>\n                <h2>".concat(data.results[1].question, "</h2>\n            </section>\n            <section>\n            <button class=\"false\">").concat(data.results[1].incorrect_answers[0], "</button>\n            <button class=\"false\">").concat(data.results[1].incorrect_answers[1], "</button>\n            <button class=\"false\">").concat(data.results[1].incorrect_answers[2], "</button>\n            <button class=\"true\">").concat(data.results[1].correct_answer[0], "</button>\n                <button class=\"next2\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                </section>\n                "); // her bliver det rigtige svar blåt

          var _sandt = document.querySelector('.true');

          _sandt.addEventListener('click', function () {
            _sandt.style.backgroundColor = "lightgreen";
          });
        } // Her starter spørgsemål nr 3


        document.querySelector('.next2').addEventListener('click', function () {
          if (sandt.style.backgroundColor = "lightgreen") {
            quizArticle.innerHTML = "\n                    <section>\n                    <h2>Hvad er h2o</h2>\n                </section>\n                <section>\n                    <button class=\"true\">vand</button>\n                    <button class=\"false\">ild</button>\n                    <button class=\"false\">jord</button>\n                    <button class=\"false\">luft</button>\n                    <button class=\"next2\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                    </section>\n                    "; // her bliver det rigtige svar blåt

            var _sandt2 = document.querySelector('.true');

            _sandt2.addEventListener('click', function () {
              _sandt2.style.backgroundColor = "lightgreen";
            });
          }
        });
      });
    });
  });
});