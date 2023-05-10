const exercises = [
    {
        name: "Prensa de pierna",
        description: "Carga el peso deseado en la máquina y siéntate en el asiento apoyando la espalda en el respaldo. Coloca los pies en la plataforma de la prensa separados el ancho de los hombros. Desengancha los cierres de seguridad para sacar la plataforma de los soportes y sujeta las asas laterales con las manos para ganar estabilidad. Empuja la plataforma con los pies hasta que las piernas estén extendidas, pero no totalmente rectas. Respira profundamente y baja la plataforma de forma lenta y controlada hasta que las piernas formen un ángulo de 90º (esta es la parte excéntrica del movimiento). Exhala y vuelve a subir la plataforma empujando con los pies (centrándote en trabajar los cuádriceps) para llevar la plataforma a la posición inicial. Realiza las repeticiones deseadas.",
        duration:"10 min",
        difficulty:"Intermidiate",
        mainImage: require("../assets/pierna/prensa/main.jpg"),
        images:
            [
                require("../assets/pierna/prensa/prensa1.jpg"),
                require("../assets/pierna/prensa/prensa2.jpg")
            ]
    },
    {
        name: "Sentadilla",
        description: "El ejercicio consiste en flexionar las rodillas y bajar el cuerpo manteniendo la verticalidad, para luego regresar a una posición erguida. Por lo general, mientras realiza sentadillas, la persona sostiene algún peso con sus brazos o el cuello.",
        duration:"10 min",
        difficulty:"Intermidiate",
        mainImage: require("../assets/pierna/sentadilla/main.jpg"),
        images:
            [
                require("../assets/pierna/sentadilla/sentadilla1.jpg"),
                require("../assets/pierna/sentadilla/sentadilla2.jpg")
            ]
    },
]



export const dataPiernaExercises = {
    exercises
}