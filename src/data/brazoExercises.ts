const exercises = [
    {
        name: "Curl de bíceps",
        description: "Sitúate en pie con la espalda bien recta y los hombros relajados. A continuación, coge el tensor y agárralo con ambas manos sujetándolo con las plantas de los pies. Una vez estés bien colocado, empieza el movimiento. Sube ambos brazos flexionándolos hasta que las manos lleguen casi a la altura de los hombros. Mantén esta posición un par de segundos y vuelve a bajar los brazos desflexionándolos. Intenta permanecer con la espalda erguida, los hombros relajados y realizando el movimiento lentamente. Una vez en la posición inicial, vuelve a repetir el movimiento.",
        duration:"10 min",
        difficulty:"Intermidiate",
        mainImage: require("../assets/brazo/curlBiceps/main.jpg"),
        images:
            [
                require("../assets/brazo/curlBiceps/curlBiceps1.jpg"),
                require("../assets/brazo/curlBiceps/curlBiceps2.jpg")
            ]
    },
    {
        name: "Fondos de triceps",
        duration:"5 min",
        difficulty:"Beginer",
        description: "Consiste en sentarse sobre un banco o silla y colocar las manos a los lados, con las palmas hacia abajo. Luego, se debe llevar el cuerpo ligeramente hacia adelante y flexionar los brazos; los glúteos quedan en el aire, ya no en el banco. En tanto, las piernas han de estar semiflexionadas y con los talones como punto de apoyo. El primer movimiento del trabajo consiste en flexionar los codos hasta lograr un ángulo de 90°; después, debes hacer fuerza con los tríceps para volver a la posición inicial.",
        mainImage: require("../assets/brazo/fondosTriceps/main.jpg"),
        images:
            [
                require("../assets/brazo/fondosTriceps/fondosTriceps1.jpg"),
                require("../assets/brazo/fondosTriceps/fondosTriceps2.jpg")
            ]
    },
]



export const dataBrazoExercises = {
    exercises
}