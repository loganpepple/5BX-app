$(document).ready(function() {
    appStart();
    
})

function appStart() {
    $('body').load('../views/levelSelect.html', function() {
        $('#chart-number').text(chartList[selectedChart]);
        $('#level-number').text(levelList[selectedLevel]);

        $('.change-difficulty').click(function() {
            changeDifficulty(this);
            //todo: animate selection
        })

        $('#next').click(function() {
            fadeOut($('#difficulty-select'));
            setTimeout(function() {loadPreview()}, 700);
        })
    });
    
}

function loadPreview() {
    $('body').load('../views/workoutPreview.html', function() {
        // dynamically change exercise info based on selections
        $('#preview-header > h2').text(`chart ${selectedChart + 1} level ${levelList[selectedLevel]}`);
        const exerciseNodes = $('.exercise');
        let {exercises, run, walk} = exerciseData[selectedChart];
        [...exerciseNodes].forEach((exerciseNode, exerciseNumber) => {
            $(exerciseNode).find('h3').text(exercises[exerciseNumber].reps[selectedLevel]);
            $(exerciseNode).find('.explanation').html(exercises[exerciseNumber].description.join('<br />'));
            // todo: create workout images ex: `<img src='./chart-${chart-number}/${exercise}.png'></img>`
        })
        $('#run-div > h5').text(`${run.distance} run in`);
        $('#run-div > h3').text(`${run.time[selectedLevel]} minutes`);
        $('#walk-div > h5').text(`${walk.distance} walk in`);
        $('#walk-div > h3').text(`${walk.time[selectedLevel]} minutes`);

        $('.selection').click(function() {
            $('.selection').find('span').text('radio_button_unchecked');
            $(this).find('span').text('radio_button_checked');
            finalExercise = this.label;
        })

        $('#cancel').click(function() {
            fadeOut($('#workout-preview'));
            setTimeout(function() {appStart()}, 700);
        })

        $('#start').click(function() {
            fadeOut($('#workout-preview'));
            setTimeout(function() {loadWorkout()}, 700);
        })
    })
}

function loadWorkout() {
    $('body').load()
}


function changeDifficulty ({parentNode, classList}) {
    const increment = ([...classList].includes('up')) ? 1 : -1;
    const setting = (parentNode.id == 'chart-select') ? 'chart' : 'level';
    const text = $(parentNode).find('p');

    if (setting == 'chart') {
        if (selectedChart > 0 && selectedChart < 5 || (selectedChart == 0 && increment > 0) || (selectedChart == 5 && increment < 0)) {
            selectedChart += increment;
        }
        $(text).text(chartList[selectedChart]);
    } else {
        if (selectedLevel > 0 && selectedLevel < 11 || (selectedLevel == 0 && increment > 0) || (selectedLevel == 11 && increment < 0)) {
            selectedLevel += increment;
        }
        $(text).text(levelList[selectedLevel]);
    }
}

function fadeOut(node) {
    console.log('fading');
    $(node).removeClass('fade-in').addClass('fade-out');
    setTimeout(function() {$(node).remove()}, 700);
}

var selectedChart = 0;
var selectedLevel = 0;
var finalExercise = 'exercise';