$(document).ready(function(){
    $(".header_block").click(()=>{
        $(".group").removeClass("hidden");
        $(".container_introduce").addClass("hidden fadeIn");
    })
    $("#group1").click(() => {
        $(".group").addClass("hidden");
        $(".container_introduce").removeClass("hidden");
        $(".introduce_charc").attr('id','charc1');
        $(".introduce_header").empty().append("INDUSTRIAL DESIGN");
        $(".introduce_title").empty().append("Ting-Yi<br>WU<br>Designer");
    });
    $("#group2").click(() => {
        $(".group").addClass("hidden");
        $(".container_introduce").removeClass("hidden");
        $(".introduce_charc").attr('id','charc2');
        $(".introduce_header").empty().append("ELECTRICAL ENGINEERING");
        $(".introduce_title").empty().append("Hung-Yueh<br>Lin<br>Engineer");
    });
    $("#group3").click(() => {
        $(".group").addClass("hidden");
        $(".container_introduce").removeClass("hidden");
        $(".introduce_charc").attr('id','charc3');
        $(".introduce_header").empty().append("ENGINEERING SCIENCE");
        $(".introduce_title").empty().append("<br>Allision<br>Engineer");
    });
    $("#group4").click(() => {
        $(".group").addClass("hidden");
        $(".container_introduce").removeClass("hidden");
        $(".introduce_charc").attr('id','charc4');
        $(".introduce_header").empty().append("ELECTRICAL ENGINEERING");
        $(".introduce_title").empty().append("<br>JiaWei<br>Engineer");
    });
    $("#group5").click(() => {
        $(".group").addClass("hidden");
        $(".container_introduce").removeClass("hidden");
        $(".introduce_charc").attr('id','charc5');
        $(".introduce_header").empty().append("ELECTRICAL ENGINEERING");
        $(".introduce_title").empty().append("<br>YuChen<br>Engineer");
    });
});