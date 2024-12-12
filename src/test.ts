import { green, red } from 'colors'

export function Ctest(input: any, expectedOutput: any) {
  if (input === expectedOutput) {
    console.log(green('Test passed'), input)
  } else {
    console.log(red(`Test failed. Input "${input}"`))
  }
}
