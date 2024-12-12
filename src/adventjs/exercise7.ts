import { Ctest } from '../test'

function fixPackages(packages: string): string {
  let cont = 0
  packages.split('').forEach((e) => {
    if (e === '(') cont++
  })
  let finalPackages = packages
  const regex = /\(([^()]+)\)/
  for (let index = 0; index < cont; index++) {
    const match = regex.exec(finalPackages)
    if (match !== null) {
      const finded = match[0]
      const text = match[1].split('').reverse().join('')
      finalPackages = finalPackages.replace(finded, text)
    }
  }
  return finalPackages
}

Ctest(fixPackages('a(cb)de'), 'abcde')
Ctest(fixPackages('a(bc(def)g)h'), 'agdefcbh')
Ctest(fixPackages('abc(def(gh)i)jk'), 'abcighfedjk')
Ctest(fixPackages('a(b(c))e'), 'acbe')
Ctest(fixPackages('a(b(cd(efg)))h'), 'acdgfebh')
Ctest(fixPackages('((a)b)c'), 'bac')
Ctest(fixPackages('(a(b(c)))'), 'bca')
