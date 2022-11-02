$(document).ready(function() {
    appStart();
})

function appStart() {
    console.log("LOADED!")
    $("body").load("../views/levelSelect.html");
    let chart = 0;
    let level = 0;
    $(".level-up").click(function() {
        console.log("oi")
        chart++;
        $(".level-number").text(charts[chart]);
    })
}

const charts = [1,2,3,4,5];
const levels = ["D-","D","D+","C-","C","C+","B-","B","B+","A-","A","A+"];