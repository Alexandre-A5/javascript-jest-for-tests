// Fonction pour trouver la valeur max
function findMaxValue(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

// Fonction pour supprimer les valeurs dupliqués 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Fonction pour vérifier si un tableau contient une valeur spécifique
function includesValue(arr, value) {
    return arr.includes(value);
}

// Fonction pour trier un tableau de nombres par ordre croissant
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

module.exports = {
    findMaxValue,
    removeDuplicates,
    includesValue,
    sortArray
};
