# Array

## Implementar os métodos:
* push
* map
* reduce
* forEach (Implementado como exemplo)
* filter
* find
* some
* every
* sort

## Regras:
* Não vale usar os métodos nativos do array

## Código exemplo

```javascript
class MyArray {
    constructor(array=[]){
        this.array = [...array];
    }

    // Adiciona item no final do array
    push(item){}

    // Transforma array em outro formato
    map(callback){}

    // Transforma o array em um único objeto
    reduce(callback){}

    // Gera uma iteração para cada item do array
    forEach(callback){
        for (let i = 0; i < this.array.length; i++) {
            const element = this.array[i];
            callback(element);            
        }
    }

    // Filtra os itens do array
    filter(callback){}

    // Busca itens no array
    find(callback){}

    // Retorna verdadeiro se algum elemento do array cumpre os requisitos
    some(callback){}

    // Retorna verdadeiro se todos elementos do array cumprem os requisitos
    every(callback){}

    // Ordena os itens do array
    some(callback){}
}


// Exemplo
const array = new MyArray([1,2,3]);
array.forEach((item) => console.log(item))

```

## Exemplo de saída
```javascript
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
```

```
------ MyArray -------
MyArray { array: [ 3, 2, 1, 4 ] }
------ forEach -------
3
2
1
4
------ filter -------
MyArray { array: [ 3, 4 ] }
------ map -------
MyArray { array: [ 6, 4, 2, 8 ] }
------ reduce -------
10
------ find -------
2
------ some -------
true
false
------ every -------
false
true
------ sort -------
[ 1, 2, 3, 4 ]
[ 4, 3, 2, 1 ]
```