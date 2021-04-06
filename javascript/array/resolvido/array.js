
class MyArray {
    constructor(array = []) {
        this.array = [...array];
    }

    // Adiciona item no final do array
    push(item) {
        this.array[this.array.length] = item;
    }

    // Transforma array em outro formato
    map(callback) {
        const mappedItems = new MyArray();
        this.forEach((item) => {
            mappedItems.push(callback(item))
        })
        return mappedItems;
    }

    // Transforma o array em um único objeto
    reduce(callback, value = null) {
        this.forEach((item) => {
            value = callback(value, item);
        })
        return value;
    }

    // Gera uma iteração para cada item do array
    forEach(callback) {
        for (let i = 0; i < this.array.length; i++) {
            const element = this.array[i];
            callback(element);
        }
    }

    // Filtra os itens do array
    filter(callback) {
        const filteredItems = new MyArray();
        this.forEach((item) => {
            if (callback(item)) filteredItems.push(item)
        })
        return filteredItems;
    }

    // Busca itens no array
    find(callback) {
        for (let i = 0; i < this.array.length; i++) {
            const item = this.array[i];
            if (callback(item)) return item;
        }
    }

    // Retorna verdadeiro se algum elemento do array cumpre os requisitos
    some(callback) {
        for (let i = 0; i < this.array.length; i++) {
            const item = this.array[i];
            if (callback(item)) return true;
        }
        return false;
    }

    // Retorna verdadeiro se todos elementos do array cumprem os requisitos
    every(callback) {
        for (let i = 0; i < this.array.length; i++) {
            const item = this.array[i];
            if (!callback(item)) return false;
        }
        return true;
    }

    // Ordena os itens do array
    sort(callback) {
        return this.array.sort(callback);
     }
}


const array = new MyArray([3, 2, 1]);
array.push(4);
console.log("------ MyArray -------")
console.log(array)
console.log("------ forEach -------")
array.forEach((item) => console.log(item))
console.log("------ filter -------")
console.log(array.filter((item) => item > 2))
console.log("------ map -------")
console.log(array.map((item) => item * 2))
console.log("------ reduce -------")
console.log(array.reduce((a, b) => a + b))
console.log("------ find -------")
console.log(array.find((item) => item === 2))
console.log("------ some -------")
console.log(array.some((item) => item > 2))
console.log(array.some((item) => item > 5))
console.log("------ every -------")
console.log(array.every((item) => item > 2))
console.log(array.every((item) => item > 0))
console.log("------ sort -------")
console.log(array.sort((a,b) => a - b))
console.log(array.sort((a,b) => b - a))