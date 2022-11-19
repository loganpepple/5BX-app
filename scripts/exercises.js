const chartList = [1,2,3,4,5];
const levelList = ['D-','D','D+','C-','C','C+','B-','B','B+','A-','A','A+'];
const exerciseData = [
        {
            "chart": 1,
            "exercises": [
                {
                    "reps": [2,3,4,6,7,8,10,12,14,16,18,20],
                    "description": ["• Feet astride, arms upward.", "• Forward bend to floor touching then stretch upward and backward bend.", "• Do not strain to keep knees straight."]
                },
                {
                    "reps": [3,4,5,7,8,9,11,12,13,15,17,18],
                    "description": ["• Back lying, feet 6\" apart, arms at sides.", "• Sit up just far enough to see your heels.", "• Keep legs straight, head and shoulders must clear the floor."]
                },
                {
                    "reps": [4,5,6,8,10,12,13,14,15,16,17,18],
                    "description": ["• Front lying, plams placed under the thighs.", "• Raise head and one leg, repeat using legs alternately.", "• Keep leg straight at the knee, thighs must clear the palms.", "• Count one each time second leg touches floor."]
                },
                {
                    "reps": [2,3,3,4,5,6,7,8,9,11,12,13],
                    "description": ["• Front lying, hands unde rthe shoulders, palms flat on the floor.", "• Straighten arms lifting upper body, keeping he knees on the floor. Bend arms to lower body.", "• Keep body straight from the knees, arms must be fully extended, chest must touch floor to complete one movement."]
                },
                {
                    "reps": [100,145,175,205,235,260,280,305,320,335,375,400],
                    "description": ["• Stationary run - (count a step each time left foot touches floor - Lift feet approximately 4 inches off floor.) Every 75 steps do 10 \"scissor jumps\". Repeat this sequence until required number of steps is completed.", "• Scissor jumps - Stand with right leg and left arm extended forward, and left leg and right arm extended backward. Jump up - change position of arms and legs before landing. Repeat (arms shoulder high)."]
                }
            ],
            "run": {
                "distance": "1/2 mile",
                "time": [8,7.5,7,6.5,6.5,6.5,6,6,6,5.5,5.5,5.5]
            },
            "walk": {
                "distance": "1 mile",
                "time": [21,21,20,19,19,19,18,18,18,17,17,17]
            }
        },
        {
            "chart": 2,
            "exercises": [
                {
                    "reps": [14,15,16,18,19,20,22,25,26,28,29,30],
                    "description": ["• Feet astride, arms upward.", "• Touch floor and press (bounce) once then stretch upward and backward bend. Do not strain to keep knees straight."]
                },
                {
                    "reps": [10,11,12,13,14,15,16,17,18,20,21,23],
                    "description": ["• Back lying, feet 6\" apart, arms at sides.", "• \"Sit up\" to vertical position, keep feet on floor even if it is necessary to hook them under a chair. Allow knees to bend slightly."]
                },
                {
                    "reps": [13,14,15,17,29,21,23,25,27,29,31,33],
                    "description": ["• Front lying, palms placed under thighs.", "• Raise head, shoulders, and both legs.", "• Keep legs straight, both thighs must clear the palms."]
                },
                {
                    "reps": [9,10,11,12,13,14,15,16,17,18,29,20],
                    "description": ["• Front lying, hands under the shoulder, palms flat on floor.", "• Straighten arms to lift body with only palms and toes on the floor. Back straight.", "• Chest must touch floor for each completed movement after arms have been fully extended."]
                },
                {
                    "reps": [335,360,380,395,410,425,440,445,455,470,485,500],
                    "description": ["• Stationary run - (count a step each time left foot touches floor - Lift feet approximately 4 inches off floor.) After every 75 steps, do 10 \"astride jumps\". Repeat this sequence until required number of steps is completed.", "• Atride jumps - feet together, arms at side. Jump and land with feet astride and arms raised sideways to slightly above shoulder height. Return with a jump to the starting position for count of one. Keep arms straight."]
                }
            ],
            "run": {
                "distance": "1 mile",
                "time": [10.5,10.5,10.5,10,10,10,9.5,9.5,9.5,9,9,9]
            },
            "walk": {
                "distance": "2 miles",
                "time": [35,35,35,34,34,34,33,33,33,32,31,30]
            }
        },
        {
            "chart": 3,
            "exercises": [
                {
                    "reps": [24,24,24,26,26,26,28,28,28,30,30,30],
                    "description": ["• Feet astride, arms upward.", "• Touch floor 6\" outside left foot, again between feet and press once then 6\" outside right foot, bend backward as far as possible, repeat, reverse direction after half the number of counts. Do not strain to keep knees straight, return to erect position."]
                },
                {
                    "reps": [20,21,22,23,24,25,26,27,28,30,31,32],
                    "description": ["• Back lying, feet 6\" apart, arms clasped behind head. Allow knees to bend slightly.", "• Sit up to vertical position, keep feet on floor, hook feet under chair, etc., only if necessary."]
                },
                {
                    "reps": [29,30,31,33,34,35,37,39,41,43,45,47],
                    "description": ["• Front lying, hands interlocked behind the back.", "• Lift head, shoulders, chest, and both legs as high as possible.", "• Keep legs straight, and raise chest and both thighs completely off floor."]
                },
                {
                    "reps": [15,15,15,16,17,17,18,19,20,21,22,24],
                    "description": ["• Front lying, hands under the shoulders, palms flat on floor.", "• Touch chin to floor in front of hands - touch forehead to floor behind hands before returning to up position.", "• There are three definite movements, chin, forehead, arms straightened. DO NOT do in one continuous movement."]
                },
                {
                    "reps": [400,415,430,450,465,480,490,500,510,525,540,550],
                    "description": ["• Stationary run - (count a step each time left foot touches floor - Lift feet approximately 4 inches off floor.) After every 75 steps do 10 \"half knee bends\". Repeat this sequence until required number of steps is completed.", "• Half knee bends - Feet together, hands on hips, knees bent to form an angle of about 110 degrees. Do not bend kness past a right angle. Straighten to upright position, raising heel off florr, return to starting position each time. Keep feet in contact with floor - the back upright and straight at all times."]
                }
            ],
            "run": {
                "distance": "1 mile",
                "time": [8.75,8.75,8.75,8.5,8.5,8.5,8.25,8.25,8.25,8,8,8]
            },
            "walk": {
                "distance": "2 miles",
                "time": [29,28,28,27,27,27,26,26,26,25,25,25]
            }
        },
        {
            "chart": 4,
            "exercises": [
                {
                    "reps": [24,24,24,26,26,26,28,28,28,30,30,30],
                    "description": ["• Feet astride, arms upward.", "• Touch floor outside left foot, between feet, press once then outside right foot, circle bend backwards as far as possible, reverse direction after half the number of counts. Do not strain to keep knees straight.", "• Keep arms above heada and make full circle, bending backward past vertical each time."]
                },
                {
                    "reps": [18,18,18,19,19,19,21,21,21,22,22,22],
                    "description": ["• Back lying. legs straight, feet together, arms straight overhead.", "• Sit up and touch the toes keeping the arms and legs straight. Use chair to hook feet under only if necessary.", "• Keep arms in contact with the sides of the head throughout the movement. Allow knees to bend slightly."]
                },
                {
                    "reps": [40,40,41,43,43,44,46,46,47,49,49,50],
                    "description": ["• Front lying, hands and arms stretched sideways.", "• Lift head, shoulders, arms, chest and both legs as high as possible.", "• Keep legs straight, raise chest and both thighs, completely off floor."]
                },
                {
                    "reps": [17,19,21,24,26,28,30,32,34,37,40,42],
                    "description": ["• Front lying, palms of hands flat on floor, approximately 1 foot from ears directly to side of head.", "• Straighten arms to lift body.", "• Chest must touch floor for each completed movement."]
                },
                {
                    "reps": [300,315,325,335,345,355,365,375,380,390,395,400],
                    "description": ["• Stationary run - (count a step each time left foot touches floor - lift knees waist high.) Every 75 steps do 10 \"sem-squat jumps\". Repeat this sequence until required number of steps is completed.", "• Semi-squat jumps - Drop to a half crouch position with hands on knees and arms straight, keep back as straight as possible, right foot slightly ahead of left.", "• Jump to upright position with body straight and feet leaving floor. Reverse position of feet before landing. Return to half crouch position and repeat."]
                }
            ],
            "run": {
                "distance": "1 mile",
                "time": [7.75,7.75,7.75,7.5,7.5,7.5,7.25,7.25,7.25,7,7,7]
            },
            "walk": {
                "distance": "2 miles",
                "time": [23,23,23,21,21,21,20,20,20,19,19,19]
            }
        },
        {
            "chart": 5,
            "exercises": [
                {
                    "reps": [24,24,24,26,26,26,28,28,28,30,30,30],
                    "description": ["• Feet astride, arms upward, hands clasped, arms straight.", "• Touch floor outside left foot, betwen feet, press once then outside right foor, circle bend backwards as far as possible. Reverse direction after half the number of counts. Do not strain to keep knees straight."]
                },
                {
                    "reps": [26,27,28,30,31,32,34,35,36,38,39,40],
                    "description": ["• Back lying, legs straight, feet together, hands clasped behind head.", "• Sit up and raise legs in bent position at same time twist to touch right elbo to left knee. This completes one movement. Alternate the direction of the twist each time.", "• Keep feet off floor when elbow touches knee."]
                },
                {
                    "reps": [39,40,41,42,43,44,45,46,47,48,49,50],
                    "description": ["• Front lying, arms extended overhead.", "• Raise arms, head, chest, and both legs as high as possible.", "• Keep legs and arms straight, chest and both thighs completely off floor."]
                },
                {
                    "reps": [39,40,41,42,43,44,45,56,47,48,49,50],
                    "description": ["• Front lying, hands under shoulder, palms flat on floor.", "• Push off floor and clap hands before returning to starting position.", "• Keep body straight during the entire movement. Hand clap must be heard."]
                },
                {
                    "reps": [375,385,400,410,420,435,445,455,465,475,485,500],
                    "description": ["• Stationary run - (count a step each time left foot touches floor - lift knees waist high.) Every 75 steps do 10 \"semi0spread eagle jumps\". Repeat this sequence until required number of steps is completed.", "• Semi-spread eagle jumps - Feet together, drop to a half crouch position hands on knees with arms straight.", "• Jump up to feet astride swing arms overhead in mid-air, return directly to starting position on landing.", "• Raise hands above head level, spread feet at least shoulder width apart in astride position before landing with feet together."]
                }
            ],
            "run": {
                "distance": "1 mile",
                "time": []
            },
            "walk": {
                "distance": "n/a",
                "time": [0]
            }
        }
    ]