"use strict";

document.addEventListener('DOMContentLoaded', function () {
  fetch("https://opentdb.com/api.php?amount=10&type=multiple", {
    "method": "GET"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    console.log(data.results);
    console.log(data.results[1]); // Det her er her hvor jeg får start knappen til at virke

    var quizArticle = document.querySelector('.quiz-article');
    var quizstart = document.querySelector('.quizStart');
    quizstart.addEventListener('click', function () {
      //her får det første spørgsmål frem når man trykker på start på knappen. 
      //
      quizArticle.innerHTML = "\n        <section>\n        <h1>Sp\xF8grsm\xE5l 1</h1>\n        <h2>".concat(data.results[0].question, "</h2>\n    </section>\n    <section>\n        <button class=\"false\">").concat(data.results[0].incorrect_answers[0], "</button>\n        <button class=\"false\">").concat(data.results[0].incorrect_answers[1], "</button>\n        <button class=\"true\">").concat(data.results[0].correct_answer, "</button>\n        <button class=\"false\">").concat(data.results[0].incorrect_answers[2], "</button>\n        <button class=\"next1\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n        </section>\n        "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt
      // Her starter spørgsemål nr 1

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
      }); //her slutter spørgsmål 1
      // Her starter spørgsemål nr 2

      document.querySelector('.next1').addEventListener('click', function () {
        if (sandt.style.backgroundColor = "lightgreen") {
          quizArticle.innerHTML = "\n                <section>\n                <h1>Sp\xF8grsm\xE5l 2</h1>\n                <h2>".concat(data.results[1].question, "</h2>\n            </section>\n            <section>\n            <button class=\"false\">").concat(data.results[1].incorrect_answers[0], "</button>\n            <button class=\"false\">").concat(data.results[1].incorrect_answers[1], "</button>\n            <button class=\"false\">").concat(data.results[1].incorrect_answers[2], "</button>\n            <button class=\"true\">").concat(data.results[1].correct_answer, "</button>\n                <button class=\"next2\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                </section>\n                "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

          var _sandt = document.querySelector('.true');

          var _falsk = document.querySelectorAll('.false');

          _sandt.addEventListener('click', function () {
            _sandt.style.backgroundColor = "lightgreen";

            if (_sandt.style.backgroundColor = "lightgreen") {
              _falsk.forEach(function (elements) {
                elements.disabled = true;
              });
            }
          });

          _falsk.forEach(function (element) {
            element.addEventListener('click', function () {
              element.style.backgroundColor = "red";

              if (element.style.backgroundColor = "red") {
                _falsk.forEach(function (elements) {
                  elements.disabled = true;
                  _sandt.disabled = true;
                });
              }
            });
          }); //her slutter spørgsmål 2
          // Her starter spørgsemål nr 3


          document.querySelector('.next2').addEventListener('click', function () {
            if (_sandt.style.backgroundColor = "lightgreen") {
              quizArticle.innerHTML = "\n                    <section>\n                    <h1>Sp\xF8grsm\xE5l 3</h1>\n                    <h2>".concat(data.results[2].question, "</h2>\n                </section>\n                <section>\n                <button class=\"true\">").concat(data.results[2].correct_answer, "</button>\n                <button class=\"false\">").concat(data.results[2].incorrect_answers[0], "</button>\n                <button class=\"false\">").concat(data.results[2].incorrect_answers[1], "</button>\n                <button class=\"false\">").concat(data.results[2].incorrect_answers[2], "</button>\n                    <button class=\"next3\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                    </section>\n                    "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

              var _sandt2 = document.querySelector('.true');

              var _falsk2 = document.querySelectorAll('.false');

              _sandt2.addEventListener('click', function () {
                _sandt2.style.backgroundColor = "lightgreen";

                if (_sandt2.style.backgroundColor = "lightgreen") {
                  _falsk2.forEach(function (elements) {
                    elements.disabled = true;
                  });
                }
              });

              _falsk2.forEach(function (element) {
                element.addEventListener('click', function () {
                  element.style.backgroundColor = "red";

                  if (element.style.backgroundColor = "red") {
                    _falsk2.forEach(function (elements) {
                      elements.disabled = true;
                      _sandt2.disabled = true;
                    });
                  }
                });
              }); //her slutter spørgsmål 3
              // Her starter spørgsemål nr 4


              document.querySelector('.next3').addEventListener('click', function () {
                if (_sandt2.style.backgroundColor = "lightgreen") {
                  quizArticle.innerHTML = "\n                        <section>\n                        <h1>Sp\xF8grsm\xE5l 4</h1>\n                        <h2>".concat(data.results[3].question, "</h2>\n                    </section>\n                    <section>\n                    <button class=\"false\">").concat(data.results[3].incorrect_answers[0], "}</button>\n                    <button class=\"true\">").concat(data.results[3].correct_answer, "</button>\n                    <button class=\"false\">").concat(data.results[3].incorrect_answers[1], "</button>\n                    <button class=\"false\">").concat(data.results[3].incorrect_answers[2], "</button>\n                        <button class=\"next4\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                        </section>\n                        "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

                  var _sandt3 = document.querySelector('.true');

                  var _falsk3 = document.querySelectorAll('.false');

                  _sandt3.addEventListener('click', function () {
                    _sandt3.style.backgroundColor = "lightgreen";

                    if (_sandt3.style.backgroundColor = "lightgreen") {
                      _falsk3.forEach(function (elements) {
                        elements.disabled = true;
                      });
                    }
                  });

                  _falsk3.forEach(function (element) {
                    element.addEventListener('click', function () {
                      element.style.backgroundColor = "red";

                      if (element.style.backgroundColor = "red") {
                        _falsk3.forEach(function (elements) {
                          elements.disabled = true;
                          _sandt3.disabled = true;
                        });
                      }
                    });
                  }); // Her slutter spørgsemål nr 4
                  // Her starter spørgsemål nr 5


                  document.querySelector('.next4').addEventListener('click', function () {
                    if (_sandt3.style.backgroundColor = "lightgreen") {
                      quizArticle.innerHTML = "\n    <section>\n    <h1>Sp\xF8grsm\xE5l 5</h1>\n    <h2>".concat(data.results[4].question, "</h2>\n</section>\n<section>\n<button class=\"true\">").concat(data.results[4].correct_answer, "</button>\n<button class=\"false\">").concat(data.results[4].incorrect_answers[0], "</button>\n<button class=\"false\">").concat(data.results[4].incorrect_answers[1], "</button>\n<button class=\"false\">").concat(data.results[4].incorrect_answers[2], "</button>\n    <button class=\"next5\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n    </section>\n    "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

                      var _sandt4 = document.querySelector('.true');

                      var _falsk4 = document.querySelectorAll('.false');

                      _sandt4.addEventListener('click', function () {
                        _sandt4.style.backgroundColor = "lightgreen";

                        if (_sandt4.style.backgroundColor = "lightgreen") {
                          _falsk4.forEach(function (elements) {
                            elements.disabled = true;
                          });
                        }
                      });

                      _falsk4.forEach(function (element) {
                        element.addEventListener('click', function () {
                          element.style.backgroundColor = "red";

                          if (element.style.backgroundColor = "red") {
                            _falsk4.forEach(function (elements) {
                              elements.disabled = true;
                              _sandt4.disabled = true;
                            });
                          }
                        });
                      }); //her slutter spørgsmål 5
                      // Her starter spørgsemål nr 6


                      document.querySelector('.next5').addEventListener('click', function () {
                        if (_sandt4.style.backgroundColor = "lightgreen") {
                          quizArticle.innerHTML = "\n                                            <section>\n                                            <h1>Sp\xF8grsm\xE5l 6</h1>\n                                            <h2>".concat(data.results[5].question, "</h2>\n                                        </section>\n                                        <section>\n                                        <button class=\"false\">").concat(data.results[5].incorrect_answers[0], "}</button>\n                                        <button class=\"true\">").concat(data.results[5].correct_answer, "</button>\n                                        <button class=\"false\">").concat(data.results[5].incorrect_answers[1], "</button>\n                                        <button class=\"false\">").concat(data.results[5].incorrect_answers[2], "</button>\n                                            <button class=\"next6\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                                            </section>\n                                            "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

                          var _sandt5 = document.querySelector('.true');

                          var _falsk5 = document.querySelectorAll('.false');

                          _sandt5.addEventListener('click', function () {
                            _sandt5.style.backgroundColor = "lightgreen";

                            if (_sandt5.style.backgroundColor = "lightgreen") {
                              _falsk5.forEach(function (elements) {
                                elements.disabled = true;
                              });
                            }
                          });

                          _falsk5.forEach(function (element) {
                            element.addEventListener('click', function () {
                              element.style.backgroundColor = "red";

                              if (element.style.backgroundColor = "red") {
                                _falsk5.forEach(function (elements) {
                                  elements.disabled = true;
                                  _sandt5.disabled = true;
                                });
                              }
                            });
                          }); // Her slutter spørgsemål nr 6
                          // Her starter spørgsemål nr 7


                          document.querySelector('.next6').addEventListener('click', function () {
                            if (_sandt5.style.backgroundColor = "lightgreen") {
                              quizArticle.innerHTML = "\n                                                <section>\n                                                <h1>Sp\xF8grsm\xE5l 7</h1>\n                                                <h2>".concat(data.results[6].question, "</h2>\n                                            </section>\n                                            <section>\n                                            <button class=\"false\">").concat(data.results[6].incorrect_answers[0], "}</button>\n                                            <button class=\"true\">").concat(data.results[6].correct_answer, "</button>\n                                            <button class=\"false\">").concat(data.results[6].incorrect_answers[1], "</button>\n                                            <button class=\"false\">").concat(data.results[6].incorrect_answers[2], "</button>\n                                                <button class=\"next7\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                                                </section>\n                                                "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

                              var _sandt6 = document.querySelector('.true');

                              var _falsk6 = document.querySelectorAll('.false');

                              _sandt6.addEventListener('click', function () {
                                _sandt6.style.backgroundColor = "lightgreen";

                                if (_sandt6.style.backgroundColor = "lightgreen") {
                                  _falsk6.forEach(function (elements) {
                                    elements.disabled = true;
                                  });
                                }
                              });

                              _falsk6.forEach(function (element) {
                                element.addEventListener('click', function () {
                                  element.style.backgroundColor = "red";

                                  if (element.style.backgroundColor = "red") {
                                    _falsk6.forEach(function (elements) {
                                      elements.disabled = true;
                                      _sandt6.disabled = true;
                                    });
                                  }
                                });
                              }); //her slutter spørgsmål 7
                              // Her starter spørgsemål nr 8


                              document.querySelector('.next7').addEventListener('click', function () {
                                if (_sandt6.style.backgroundColor = "lightgreen") {
                                  quizArticle.innerHTML = "\n                                                                                        <section>\n                                                                                        <h1>Sp\xF8grsm\xE5l 8</h1>\n                                                                                        <h2>".concat(data.results[8].question, "</h2>\n                                                                                    </section>\n                                                                                    <section>\n                                                                                    <button class=\"false\">").concat(data.results[6].incorrect_answers[0], "}</button>\n                                                                                    <button class=\"true\">").concat(data.results[8].correct_answer, "</button>\n                                                                                    <button class=\"false\">").concat(data.results[8].incorrect_answers[1], "</button>\n                                                                                    <button class=\"false\">").concat(data.results[8].incorrect_answers[2], "</button>\n                                                                                        <button class=\"next8\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                                                                                        </section>\n                                                                                        "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

                                  var _sandt7 = document.querySelector('.true');

                                  var _falsk7 = document.querySelectorAll('.false');

                                  _sandt7.addEventListener('click', function () {
                                    _sandt7.style.backgroundColor = "lightgreen";

                                    if (_sandt7.style.backgroundColor = "lightgreen") {
                                      _falsk7.forEach(function (elements) {
                                        elements.disabled = true;
                                      });
                                    }
                                  });

                                  _falsk7.forEach(function (element) {
                                    element.addEventListener('click', function () {
                                      element.style.backgroundColor = "red";

                                      if (element.style.backgroundColor = "red") {
                                        _falsk7.forEach(function (elements) {
                                          elements.disabled = true;
                                          _sandt7.disabled = true;
                                        });
                                      }
                                    });
                                  }); //her slutter spørgsmål 8
                                  // Her starter spørgsemål nr 9


                                  document.querySelector('.next8').addEventListener('click', function () {
                                    if (_sandt7.style.backgroundColor = "lightgreen") {
                                      quizArticle.innerHTML = "\n                                                                                        <section>\n                                                                                        <h1>Sp\xF8grsm\xE5l 9</h1>\n                                                                                        <h2>".concat(data.results[9].question, "</h2>\n                                                                                    </section>\n                                                                                    <section>\n                                                                                    <button class=\"false\">").concat(data.results[9].incorrect_answers[0], "}</button>\n                                                                                    <button class=\"true\">").concat(data.results[9].correct_answer, "</button>\n                                                                                    <button class=\"false\">").concat(data.results[9].incorrect_answers[1], "</button>\n                                                                                    <button class=\"false\">").concat(data.results[9].incorrect_answers[2], "</button>\n                                                                                        <button class=\"next9\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                                                                                        </section>\n                                                                                        "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

                                      var _sandt8 = document.querySelector('.true');

                                      var _falsk8 = document.querySelectorAll('.false');

                                      _sandt8.addEventListener('click', function () {
                                        _sandt8.style.backgroundColor = "lightgreen";

                                        if (_sandt8.style.backgroundColor = "lightgreen") {
                                          _falsk8.forEach(function (elements) {
                                            elements.disabled = true;
                                          });
                                        }
                                      });

                                      _falsk8.forEach(function (element) {
                                        element.addEventListener('click', function () {
                                          element.style.backgroundColor = "red";

                                          if (element.style.backgroundColor = "red") {
                                            _falsk8.forEach(function (elements) {
                                              elements.disabled = true;
                                              _sandt8.disabled = true;
                                            });
                                          }
                                        });
                                      }); //her slutter spørgsmål 9
                                      // Her starter spørgsemål nr 10


                                      document.querySelector('.next9').addEventListener('click', function () {
                                        if (_sandt8.style.backgroundColor = "lightgreen") {
                                          quizArticle.innerHTML = "\n                                                                                        <section>\n                                                                                        <h1>Sp\xF8grsm\xE5l 10</h1>\n                                                                                        <h2>".concat(data.results[10].question, "</h2>\n                                                                                    </section>\n                                                                                    <section>\n                                                                                    <button class=\"false\">").concat(data.results[10].incorrect_answers[0], "}</button>\n                                                                                    <button class=\"true\">").concat(data.results[10].correct_answer, "</button>\n                                                                                    <button class=\"false\">").concat(data.results[10].incorrect_answers[1], "</button>\n                                                                                    <button class=\"false\">").concat(data.results[10].incorrect_answers[2], "</button>\n                                                                                        <button class=\"next10\">N\xE6ste Sp\xF8rgsm\xE5l</button>\n                                                                                        </section>\n                                                                                        "); //Her får jeg det rigtige svar til at blive blot og forkerte svar rødt

                                          var _sandt9 = document.querySelector('.true');

                                          var _falsk9 = document.querySelectorAll('.false');

                                          _sandt9.addEventListener('click', function () {
                                            _sandt9.style.backgroundColor = "lightgreen";

                                            if (_sandt9.style.backgroundColor = "lightgreen") {
                                              _falsk9.forEach(function (elements) {
                                                elements.disabled = true;
                                              });
                                            }
                                          });

                                          _falsk9.forEach(function (element) {
                                            element.addEventListener('click', function () {
                                              element.style.backgroundColor = "red";

                                              if (element.style.backgroundColor = "red") {
                                                _falsk9.forEach(function (elements) {
                                                  elements.disabled = true;
                                                  _sandt9.disabled = true;
                                                });
                                              }
                                            });
                                          });
                                        }
                                      }); //her slutter spørgsmål 10
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    });
  });
});