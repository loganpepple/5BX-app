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
            finalExercise = 'exercise';
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
            $(exerciseNode).find('img').attr('src', `./img/charts/chart-${selectedChart + 1}/exercise-${exerciseNumber}.png`);
        })
        $('#run-div > h5').text(`${run.distance} run`);
        $('#run-div > h3').text(`${secToMin(run.time[selectedLevel])}`);

        // only charts 1 - 4 allow running
        if (selectedChart < 4) {
            $('#walk-div > h5').text(`${walk.distance} walk`);
            $('#walk-div > h3').text(`${secToMin(walk.time[selectedLevel])}`);
            $('.selection').click(function() {
                $('.selection').find('span').text('radio_button_unchecked');
                $(this).find('span').text('radio_button_checked');
                finalExercise = this.label;
            })
        } else {
            $('#walk-div > h5').text('no walk');
            $('#walk-div > h3').text('0:00');
            $('#walk-div').addClass('greyed');
            $('#walk-button').addClass('greyed');
            $('#walk-button').css('cursor', 'default')
        }

        $('.selection').click(function() {
            if (!$(this).hasClass('greyed')) {
                $('.selection').removeClass('highlighted')
                $(this).addClass('highlighted');
                finalExercise = this.label;
            }
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

function secToMin(seconds) {
    let minutes = Math.floor(seconds/60) + ':' + (seconds%60)
    if ((seconds%60).toString.length == 1) minutes += '0'
    return minutes;
}

var selectedChart = 0;
var selectedLevel = 0;
var finalExercise = 'exercise';