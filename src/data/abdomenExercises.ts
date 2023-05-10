const exercises = [
    // {
    //     name:"Escalador con rotación de tronco",
    //     duration:"10 min",
    //     difficulty:"Intermidiate",
    //     description:"Apóyate en las manos y en las puntas de los pies asegurando el control de los hombros y la pelvis, mientras la columna está alineada. A partir de esta posición, lleva una rodilla hacia el codo opuesto realizando una leve rotación del tronco y manteniendo la estabilidad. Retorna a la posición inicial con mucho control para realizar la siguiente repetición. Recuerda mantener siempre el cuerpo alineado activando abdomen, glúteos, y aductores escapulares (músculos de la parte alta de la espalda).",
    //     mainImage: require("../assets/abdomen/escaladorRotacion/main.jpg"),
    //     images:
    //     [
    //         require("../assets/abdomen/escaladorRotacion/escaladorRotacion1.jpg"),
    //         require("../assets/abdomen/escaladorRotacion/escaladorRotacion2.jpg")
    //     ]
    // },
    {
        name:"Plancha",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"15 min",
        difficulty:"Expert",
        mainImage: require("../assets/abdomen/plancha/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Belly fat burner",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"20 min",
        difficulty:"Expert",
        mainImage: require("../assets/abdomen/bellyFatBurner/main.png"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Crunches",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"7 min",
        difficulty:"Beginner",
        mainImage: require("../assets/abdomen/crunches/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Dragon Flag",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"20 min",
        difficulty:"Expert",
        mainImage: require("../assets/abdomen/dragonFlag/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Hollow Hold",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"10 min",
        difficulty:"Intermidiate",
        mainImage: require("../assets/abdomen/hollowHold/main.png"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Leg Raise",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"15 min",
        difficulty:"Intermidiate",
        mainImage: require("../assets/abdomen/legRaise/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"L - Sit",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"8 min",
        difficulty:"Beginner",
        mainImage: require("../assets/abdomen/lSit/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Mountain Climber",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"20 min",
        difficulty:"Intermidiate",
        mainImage: require("../assets/abdomen/mountainClimber/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Russian Twist",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"6 min",
        difficulty:"Expert",
        mainImage: require("../assets/abdomen/russianTwist/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Scissors",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"15 min",
        difficulty:"Beginner",
        mainImage: require("../assets/abdomen/scissors/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Side plank with rotation",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"15 min",
        difficulty:"Expert",
        mainImage: require("../assets/abdomen/sidePlankWithRotation/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
    {
        name:"Superman Plank",
        description:"Póngase en posición de tabla mientras te apoyas con los antebrazos. Asegúrate de que los codos están en el suelo directamente debajo de los hombros con los pies separados al ancho de las caderas. Asegúrate de que la espalda está plana y su cabeza y cuello están en una posición neutral. Lleva los codos hacia el suelo y aprieta los cuádriceps, los glúteos y el core. Inhala por la nariz y exhale por la boca, no contenga la respiración.",
        duration:"10 min",
        difficulty:"Expert",
        mainImage: require("../assets/abdomen/supermanPlank/main.jpg"),
        images:
        [
            require("../assets/abdomen/plancha/plancha1.jpg"),
            require("../assets/abdomen/plancha/plancha2.jpg")
        ]
    },
]



export const dataAbdomenExercises = {
    exercises
}