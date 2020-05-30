//BUSAR EN ARRAYS SI EXISTE ARRAY
export const isExistInObj = (array, arrays) => {
    let validate = false
    arrays ? arrays.map((arr) => {
        if (arr.id === array.id) {
            validate = true
        }
    }) : ''
    return validate
}

//
export const deleteObjectInArray = (obj, array) => {
    const newArray = []
    array.map((cliente) => {
        newArray.push(cliente.id)
    })

    if (newArray.indexOf(obj.id) > -1) {
        array.splice(newArray.indexOf(obj.id), 1);
    }

    return array
}

export const bytesToMegabytes = (value) => (value / (1024 * 1024)).toFixed(2)