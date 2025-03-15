// تأكد من أن الكود يعمل بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    // مثال لدالة الشراء السريع
    window.quickCheckout = function() {
      window.location.href = '/checkout?quick=true';
    };
  
    // تفعيل مؤقت العد التنازلي إذا وجد في الصفحة
    var countdown = document.querySelector('.countdown-timer');
    if(countdown) {
      var endDate = new Date(countdown.getAttribute('data-end-date')).getTime();
      var timer = setInterval(function() {
        var now = new Date().getTime();
        var distance = endDate - now;
        if (distance < 0) {
          clearInterval(timer);
          countdown.innerHTML = "انتهى العرض";
          return;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdown.innerHTML = days + " أيام " + hours + " ساعات " + minutes + " دقائق " + seconds + " ثواني";
      }, 1000);
    }
    
    // يمكنك إضافة المزيد من الأكواد للتعامل مع الميزات الأخرى (مثل Live Chat أو تفعيل زر الواتساب) هنا
  });
  