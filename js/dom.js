$(document).ready(function () {
    // ============================================
    // Q1
    // 1 -= Point No. 1
    $(".container1").append(`
        <div class="black"></div>
    `);

    // 2 -= Point No. 2
    // 1-> Solution No. 1
    $(".container1 .red").before(`
    	<div class="white"></div>
    `);
    // 2 -> Solution No. 2
    // $(".container1").prepend('<div class="white"></div>');

    // 3 -= Point No. 3
    $(".container1 p.pink").before(`
        <p class="yellow"></p>
    `);

    // ============================================
    // Q2
    // 1 -= Point No. 1
    $(".container2 p").each(function () {
        // console.log($(this).text().slice(4, -4));
        $(this).replaceWith(`
            <a href="http://${$(
                this
            ).text()}">${$(this).text().slice(4, -4)}</a>
        `);
    });

    // ============================================
    // Q3
    // 1 -= Point No. 1
    $(".container3 img")
        .wrap("<figure></figure>")
        .after("<figcaption>Coffee</figcaption>");

    // ============================================
    // Q4
    // 1 -= Point No. 1
    // 1 -> Solution No. 1
    $(".container4 td.col-age").text("");
    // 2 -> Solution No. 2
    // $(".container4 .col-age").empty();

    // 2 -= Point No. 2
    $(".container4 td:contains('Mohsen')").addClass("man");

    // 3 -= Point No. 3
    // 1 -> Solution No. 1
    $(".container4 td").toggleClass("your-email");
    // 2 -> Solution No. 2
    // $(".container4 td").each(function () {
    //     if ($(this).hasClass("your-email")) {
    //         $(this).removeClass("your-email");
    //     } else {
    //         $(this).addClass("your-email");
    //    }
    // });

    // ============================================
    // Q5
    // 1 -= Point No. 1
    $(".container5 li")
        .filter(function (index) {
            console.log(index);
            return index % 3 === 0;
        })
        .css("background-color", "yellow");

    // ============================================
    // Q6
    // 1 -= Point No. 1
    $(".container6 input[name='username']").val("mazen saad");
    // 2 -= Point No. 2
    $('.container6 #my-form input[type="checkbox"]').prop("checked", true);
});
