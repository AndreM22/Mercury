import { dataAbdomenExercises } from "./abdomenExercises"
import { dataBrazoExercises } from "./brazoExercises"
import { dataEspaldaExercises } from "./espaldaExercises"
import { dataHombroExercises } from "./hombroExercises"
import { dataPechoExercises } from "./pechoExercises"
import { dataPiernaExercises } from "./piernaExercises"

const pecho = {
    id:"Pecho",
    exercises: dataPechoExercises,
}

const brazo = {
    id:"Brazo",
    exercises: dataBrazoExercises,
}

const pierna = {
    id:"Pierna",
    exercises: dataPiernaExercises,
}

const espalda = {
    id:"Espalda",
    exercises: dataEspaldaExercises,
}

const hombro = {
    id:"Hombro",
    exercises: dataHombroExercises,
}

const abdomen = {
    id:"Abdomen",
    exercises: dataAbdomenExercises,
}

export const data = {
    pecho,
    brazo,
    pierna,
    espalda,
    hombro,
    abdomen
}