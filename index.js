$(".button-input").click(function() {
    var currentSize = $(".number-input").val();
    const realSize = (currentSize - 1);
    $(".input-div").css("display", "none");
    $(".result-div").css("display", "block");
    $(".greeting-result").text("Tu talla real es " + realSize);
})

$(".button-result").click(function() {
    $(".number-input").val(null);
    $(".input-div").css("display", "block");
    $(".result-div").css("display", "none");
})

// https://github.com/carlosayala29/size.github.com.git