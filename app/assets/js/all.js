window.onload = function () {
  $('#load-page').fadeOut(1000);
}

$(document).ready(function () {
  $('.btn-e-invoice').click(function (event) {
    event.preventDefault();
    $('.invoice-form').toggleClass('d-none');
    $('.invoice-form-addr').toggleClass('d-none');
    $('.btn-e-invoice').toggleClass('active');
    $('.btn-invoice-addr').toggleClass('active');
  });
  $('.btn-invoice-addr').click(function (event) {
    event.preventDefault();
    $('.invoice-form').toggleClass('d-none');
    $('.invoice-form-addr').toggleClass('d-none');
    $('.btn-e-invoice').toggleClass('active');
    $('.btn-invoice-addr').toggleClass('active');
  });
  $('.like-heart-1').on('click', function (e) {
    e.preventDefault();
    $('.like-heart-1 i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
  });
  $('.like-heart-2').on('click', function (e) {
    e.preventDefault();
    $('.like-heart-2 i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
  });
  $('.like-heart-3').on('click', function (e) {
    e.preventDefault();
    $('.like-heart-3 i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
  });
  $('.like-heart-4').on('click', function (e) {
    e.preventDefault();
    $('.like-heart-4 i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
  });
  $('.like-heart-5').on('click', function (e) {
    e.preventDefault();
    $('.like-heart-5 i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
  });
  $('.like-heart-6').on('click', function (e) {
    e.preventDefault();
    $('.like-heart-6 i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
  });

  // 判斷瀏覽器是否支援 Service Workers
  if ('serviceWorker' in navigator) {
    // register 是支援 Promise 的
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js');
    });
  }
});