for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // Definindo função para n divisíveis por 3 e 5
    console.log(`FizzBuzz`)
  } else if (i % 3 === 0) { // Definindo função para números divisíveis por 3
    console.log(`Fizz`)
  } else if (i % 5 === 0) { // Definindo função para números divisíveis por 5
    console.log(`Buzz`)
  } else {
    console.log(`${i}`)
  }
}
