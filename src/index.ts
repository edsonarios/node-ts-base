import { Ctest } from './test'

function fixPackages(packages: string): string {
  const regex = /\(([^()]+)\)/g
  const match = regex.exec(packages)
  console.log(match)
  if (match !== null) {
    const finded = match[0]
    const text = match[1].split('').reverse().join('')
    console.log('finded', finded)
    console.log('text', text)
    console.log(packages.replace(finded, text))
    console.log(packages)
  }
  return ''
}

// function fixPackages(packages: string): string {
//   let cont = 0
//   packages.split('').forEach((e) => {
//     if (e === '(') cont++
//   })

//   let finalPackages = packages
//   for (let index = 0; index < cont; index++) {
//     const init = finalPackages.lastIndexOf('(')
//     const end = finalPackages.indexOf(')')
//     const part = finalPackages.substring(init + 1, end)
//     const reverse = part.split('').reverse().join('')
//     const initString = finalPackages.substring(0, init)
//     const endString = finalPackages.substring(end + 1, finalPackages.length)
//     finalPackages = initString + reverse + endString
//   }
//   return finalPackages
// }

// Ctest(fixPackages('a(cb)de'), 'abcde')
// Ctest(fixPackages('a(bc(def)g)h'), 'agdefcbh')
// Ctest(fixPackages('abc(def(gh)i)jk'), 'abcighfedjk')
// Ctest(fixPackages('a(b(c))e'), 'acbe')
// Ctest(fixPackages('a(b(cd(efg)))h'), 'acdgfebh')
// Ctest(fixPackages('((a)b)c'), 'bac')
// Ctest(fixPackages('(a(b(c)))'), 'bca')
// Ctest(fixPackages(''), '')
// Ctest(fixPackages('()'), '')
// Ctest(fixPackages('a'), 'a')
// Ctest(fixPackages('(a)'), 'a')
// Ctest(fixPackages('a()b'), 'ab')
// Ctest(fixPackages('a((b))c'), 'abc')
// Ctest(fixPackages('((a))'), 'a')
// Ctest(fixPackages('(a)'), 'a')

// Casos con muchos niveles de anidamiento
// Ctest(fixPackages('(((((a)))))'), 'a')
// Ctest(fixPackages('(((((((((a)))))))))'), 'a')
// Ctest(fixPackages('(((((a)))))'), 'a')

// Combinaciones de niveles de anidamiento y otros caracteres
Ctest(fixPackages('a((bc))d(ef)g'), 'acbdfeg')
// Ctest(fixPackages('abcdefg'), 'acbdfeg')

// Ctest(fixPackages('(((a)))(((b)))(((c)))'), 'cba')

// // Casos con paréntesis anidados y otros caracteres intercalados
// Ctest(fixPackages('x(((a)))y(((b)))z'), 'xbayz')
// Ctest(fixPackages('(((a)))b(((c)))d(((e)))'), 'ecbad')

// // Casos con paréntesis anidados y espacios en blanco
// Ctest(fixPackages('  (((a)))   (((b)))  '), '  ba  ')

// Ctest(fixPackages('a(b)c(d)'), 'abcd')
