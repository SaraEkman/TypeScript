window.onload = () => {
  let name: String = 'Sara'
  console.log(name)

  function add(x: number, y: number): number {
    return x + y
  }
  console.log(add(3, 6))

  let arrs: number[] = [2, 4, 65, 7, 4]
  arrs.push(99)
  console.log(arrs)
}
