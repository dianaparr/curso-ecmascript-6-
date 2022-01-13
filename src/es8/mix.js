// Mezcla de flujos síncronos y asíncronos

// 1. Crear una función que recibe un string con una lista de rutas de archivos. Convertir ese string en un array y luego leer todos esos archivos del disco

import fs from 'fs'
import { promisify } from 'utils'

const readFile = promisify(fs.readFile);

const readMultiFiles = list => {
    const files = JSON.parse(list)
    return Promise.all(
        files.map(file => readFile(file, 'utf8'))
    )
}

// 2. Incluir un try/catch pues el JSON.parse se puede romper si mandamos un dato inválido en el parámetro

import fs from 'fs'
import { promisify } from 'utils'

const readFile = promisify(fs.readFile);

const readMultiFiles = list => {
    try {
        const files = JSON.parse(list)
        return Promise.all(
            files.map(file => readFile(file, 'utf8'))
        )
    } catch (err) {
        // se puede hacer cualquier cosa con el error
    }
}

// 3. Podemos usar un método estático del objeto Promise para crear una promesa que ya está rechazada.

// Si hay un error síncrono, nuestra función va a devolver una promesa.

import fs from 'fs'
import { promisify } from 'utils'

const readFile = promisify(fs.readFile);

const readMultiFiles = list => {
    try {
        const files = JSON.parse(list)
        return Promise.all(
            files.map(file => readFile(file, 'utf8'))
        )
    } catch (err) {
        return Promise.reject(err)
    }
}

// 4. Si list contiene un objeto ({}), va a dar un error cuando se intente hacer el JSON.parse. Se puede válidar esto previamente

import fs from 'fs'
import { promisify } from 'utils'

const readFile = promisify(fs.readFile);

const readMultiFiles = list => {
    try {
        const files = JSON.parse(list)
        if (!Array.isArray(files)) throw new TypeError('The list of files must be a list not a map.')
        return Promise.all(
            files.map(file => readFile(file, 'utf8'))
        )
    } catch (err) {
        return Promise.reject(err)
    }
}

// 5. Agragar otra validación si files está vacío y devolver una promesa resuelta con una lista vacia.
// Usar el método estático Promise.resolve

import fs from 'fs'
import { promisify } from 'utils'

const readFile = promisify(fs.readFile);

const readMultiFiles = list => {
    try {
        const files = JSON.parse(list)
        if (!Array.isArray(files)) throw new TypeError('The list of files must be a list not a map.')
        if (files.length === 0) return Promise.resolve([])
        return Promise.all(
            files.map(file => readFile(file, 'utf8'))
        )
    } catch (err) {
        return Promise.reject(err)
    }
}
