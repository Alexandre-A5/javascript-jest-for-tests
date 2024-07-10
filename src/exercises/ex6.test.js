const { findMaxValue, removeDuplicates, includesValue, sortArray } = require('./ex6');

// Cas de test pour findMaxValue
test('findMaxValue doit retourner la valeur maximale du tableau', () => {
    expect(findMaxValue([1, 2, 3, 4, 5])).toBe(5);
    expect(findMaxValue([-10, -5, -3, -1])).toBe(-1);
    expect(findMaxValue([])).toBeNull();
});

// Cas de test pour removeDuplicates
test('removeDuplicates doit supprimer les valeurs dupliquées du tableau', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(removeDuplicates(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    expect(removeDuplicates([])).toEqual([]);
});

// Cas de test pour includesValue
test('includesValue doit vérifier si le tableau contient une valeur spécifique', () => {
    expect(includesValue([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(includesValue([1, 2, 3, 4, 5], 6)).toBe(false);
    expect(includesValue([], 1)).toBe(false);
});

// Cas de test pour sortArray
test('sortArray doit trier le tableau par ordre croissant', () => {
    expect(sortArray([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8]);
    expect(sortArray([-2, -5, -1, -3])).toEqual([-5, -3, -2, -1]);
    expect(sortArray([])).toEqual([]);
});
