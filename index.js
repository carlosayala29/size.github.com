$(document).ready(function() {
    $("#button").click(function() {
      var currentSize = $("#input").val();
      const realSize = currentSize - 1;
      $("#result-h1").text("Tu talla real es " + realSize);
      $("#main-container-1").css("display", "none");
      $("#main-container-2").css("display", "block");
    });
  
    $("#go-back").click(function() {
      $("#input").val("");
      $("#main-container-1").css("display", "block");
      $("#main-container-2").css("display", "none");
    });
  });
 document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('input');
  
    inputElement.addEventListener('input', function(event) {
      var inputValue = event.target.value;
      var cleanedValue = inputValue.replace(/\D/g, '');
      event.target.value = cleanedValue;
    });
  });
