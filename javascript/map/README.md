# Exercicios

Utilizando a função ```.map()``` resolva os seguintes exercicíos:

## 1. Dobrar valores
```javascript
function doubleNumbers(arr){
  // your code here
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
```

## 2. Transformar números em string
```javascript
function stringItUp(arr){
  // your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
```

## 3. Captalizar textos
```javascript
function capitalizeNames(arr){
  // your code here
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
```
## 4. Transformar elementos em string de nome
```javascript
function namesOnly(arr){
  // your code here
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
```
## 5. Transformar elementos em string informando se é maior ou menor de idade
```javascript
function makeStrings(arr){
  // your code here
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie é maior de idade", 
// "Eric Jones é menor de idade!!", 
// "Paris Hilton é menor de idade!!", 
// "Kayne West é menor de idade!!", 
// "Bob Ziroll é maior de idade"]
```
## 6. Transformar em elementos para inserir no DOM HTML
```javascript
function readyToPutInTheDOM(arr){
  // your code here
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
```
## 7. Desafio React: Usando seus conhecimentos de .map(), faça a lista 'people' ser exibida na página abaixo
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>React Map Exercise</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        const people = [
            {
                name: "Angelina Jolie",
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Paris Hilton",
                age: 5
            },
            {
                name: "Kayne West",
                age: 16
            },
            {
                name: "Bob Ziroll",
                age: 100
            }
        ]

        const People = () => {
            return <>Edit here...</>
        }

        ReactDOM.render(
            <div><People /></div>,
            document.getElementById('root')
        );

    </script>
</body>

</html>
``` 

## Fonte
* https://coursework.vschool.io/array-map-exercises/
