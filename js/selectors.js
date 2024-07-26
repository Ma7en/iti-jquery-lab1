$(document).ready(function () {
    // ============================================
    // Q1
    // 1 -= Point No. 1
    // 1 -> Solution No. 1
    $(".container1 > div").each(function (index) {
        // console.log($(this).attr("class"));
        $(this).css({
            background: $(this).attr("class"),
        });
    });
    $(".container1 > div p").each(function (index) {
        // console.log($(this).attr("class"));
        $(this).css({
            color: $(this).attr("class"),
        });
    });
    // 2 -> Solution No. 2
    // $(".container1 div").each(function () {
    //     $(this).css("background-color", $(this).attr("class"));
    //     $(this).find("p").css("color", $(this).find("p").attr("class"));
    // });

    // ============================================
    // Q2
    // 1 -> Solution No. 1
    // $(".container2 a").each(function (index) {
    //     // console.log($(this).attr("href").startsWith("https"));
    //     if ($(this).attr("href").includes("google")) {
    //         $(this).text("Google");
    //     }
    //     if ($(this).attr("href").endsWith("org")) {
    //         $(this).text("IEEE");
    //     }
    //     if ($(this).attr("href").startsWith("https")) {
    //         $(this).text("Facebook");
    //     }
    //     if ($(this).attr("href").startsWith("http")) {
    //         $(this).text("Official Website");
    //     }
    // });

    // 2 -> Solution No. 2
    $('.container2 a[href*="google"]').text("Google");
    $('.container2 a[href$="org"]').text("IEEE");
    $('.container2 a[href^="https"]').text("Facebook");
    $('.container2 a[href^="http"]').text("Official Website");

    // Q3
    // 1 -> Solution No. 1
    // $(".container3 figure:nth-child(3) img").attr(
    //     "src",
    //     "./img/orange.png"
    // );
    // $(".container3 figure:nth-child(3) figcaption").text(
    //     "Fig.3 - Orange Juice"
    // );
    // 2 -> Solution No. 2
    $(".container3 figure:nth-child(3) img")
        .attr("src", "./img/orange.png")
        .siblings()
        .text("Fig.3 - Orange Juice");
    // 3 -> Solution No. 3
    // $(".container3 figure:nth-child(3)")
    //     .find("img")
    //     .attr("src", "img/orange.png")
    //     .end()
    //     .find("figcaption")
    //     .text("Fig.3 - Orange Juice");
    // 4 -> Solution No. 4
    // $(".container3 figure:nth-child(3)").html(`
    //    <img src="./img/orange.png" alt="" width="100" height="100" />
    //    <figcaption>Fig.3 - Orange Juice</figcaption>
    // `);

    // ============================================
    // Q4
    // 1 -= Point No. 1
    // 1 -> Solution No. 1
    // $(".container4 td").each(function () {
    //     // console.log($(this).attr("class"));
    //     if ($(this).attr("class") == "col-name my-name") {
    //         $(this).css("color", "blue");
    //     }
    // });
    // 2 -> Solution No. 2
    $(".container4 td").each(function () {
        if ($(this).attr("class").includes("my-name")) {
            $(this).css("color", "blue");
        }
    });
    // 2 -> Solution No. 3
    $('.container4 td[col-name="my-name"]').css("color", "blue");

    // 2 -= Point No. 2
    $(".container4 td:odd").css("background", "pink");

    // 3 -= Point No. 3
    // $(".container4 .row3 .col-email").css("font-weight", "bold");
    $(".container4 tr:last td:nth-child(2)").css("font-weight", "bold");

    // ============================================
    // Q5
    // 1 -= Point No. 1
    $(".container5 ul > li:nth-child(2)").css("font-style", "italic");
    // 2 -= Point No. 2
    $(".container5 ol > li:nth-child(2)").next().css("color", "red");
});
