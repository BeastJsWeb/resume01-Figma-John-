"use strict";
/* jslint node: true */
/* jshint browser: true */

document.addEventListener("DOMContentLoaded", () => {
  // JS-функция определения поддержки WebP
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
    document.querySelector("body").classList.add("webp");
    } else {
    document.querySelector("body").classList.add("no-webp");
    }
  });
  // JS-функция определения поддержки WebP //

  // header
  // переключатель меню бургер
  document.getElementById("icon-menu").addEventListener("click", (e) => {
    document.getElementById("menu__body").classList.toggle("--active");
    document.getElementById('icon-menu').classList.toggle("--active");
  });
});

//@@include('alert.js')
