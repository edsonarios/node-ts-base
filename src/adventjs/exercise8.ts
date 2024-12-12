import { Ctest } from '../test'

function drawRace(indices: number[], length: number): string {
  let response = ''
  for (let index = 0; index < indices.length; index++) {
    let line = ' '.repeat(indices.length - index - 1)
    for (let indexJ = 1; indexJ <= length; indexJ++) {
      const position =
        indices[index] >= 0 ? indices[index] : length + indices[index]
      // console.log(length, indices[index], position)
      if (position !== 0 && position + 1 === indexJ) {
        line += 'r'
      } else {
        line += '~'
      }
    }
    line += ` /${index + 1}`
    response += line
    if (index !== indices.length - 1) response += '\n'
  }
  // console.log(response)
  return response
}

Ctest(
  drawRace([0, 5, -3], 10),
  `  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`,
)
