$(document).ready(function() {
    appStart();
    
})

function appStart() {
    $('body').load('../views/levelSelect.html', function() {
        $('.change-difficulty').click(function() {
            changeDifficulty(this);
        })

        $('#next').click(function() {
            fadeOut($('#difficulty-select'));
            setTimeout(function() {appStart()}, 700);
        })
    });
    
}

function loadWorkout() {

}

function loadExercise() {
    
}

function changeDifficulty ({parentNode: {id: parentId, childNodes}, classList}) {
    const increment = (classList[1] == 'up') ? 1 : -1;
    const setting = (parentId == 'chart-select') ? 'chart' : 'level';
    const text = childNodes[5];


    if (setting == 'chart') {
        if (chart > 0 && chart < 5 || (chart == 0 && increment > 0) || (chart == 5 && increment < 0)) {
            chart += increment;
        }
        $(text).text(charts[chart]);
    } else {
        if (level > 0 && level < 11 || (level == 0 && increment > 0) || (level == 11 && increment < 0)) {
            level += increment;
        }
        $(text).text(levels[level]);
    }
}

function fadeOut(node) {
    $(node).removeClass('fade-in').addClass('fade-out');
    setTimeout(function() {$(node).remove()}, 700);
}

const charts = [1,2,3,4,5];
const levels = ['D-','D','D+','C-','C','C+','B-','B','B+','A-','A','A+'];
var chart = 0;
var level = 0;