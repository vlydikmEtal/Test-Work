function generateFibonacciSequence(limit) {
  const fibSequence = [0, 1]

  while (fibSequence.length < limit) {
    const nextFib =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]
    fibSequence.push(nextFib)
  }

  return fibSequence
}

function printFibonacciPyramid(fibSequence) {
  const maxLength = fibSequence.length

  for (let i = 0; i < maxLength; i++) {
    let line = ''

    for (let j = 0; j < maxLength - i - 1; j++) {
      line += ' '
    }

    for (let k = 0; k <= i; k++) {
      line += fibSequence[k] + ' '
    }

    console.log(line.trim())
  }
}

const limit = 20
const fibonacciSequence = generateFibonacciSequence(limit)
printFibonacciPyramid(fibonacciSequence)
