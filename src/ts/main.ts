window.onload = () => {
  let name: String = 'Sara'
  console.log(name)

  console.log(add(3, 6))

  let arrs: number[] = [2, 4, 65, 7, 4]
  arrs.push(99)
  console.log(arrs)

  let myObj: Obj = {
    name: 'Sara',
    age: 22,
    married: false,
  }
  let myMam: Obj = {
    name: 'Anili',
    age: 62,
    married: true,
  }
  let myDou: Obj = {
    name: 'Sarita',
    age: 7,
    married: false,
  }
  let myFath: Obj = {
    name: 'kalle',
    age: 65,
    married: true,
  }

  let myArrs: Obj[] = [myObj, myMam, myDou, myFath]
  for (let i = 0; i < myArrs.length; i++) {
    let container = document.createElement('div')
    let heading = document.createElement('h1')
    heading.innerHTML = myArrs[i].name
    let span = document.createElement('span')
      span.innerHTML = myArrs[i].age.toString()
      span.style.fontSize = "25px"
      span.style.color = "red"
    container.append(heading, span)
    let extraInf = document.createElement("h2")
      document.body.append(container,extraInf)
      
      if (myArrs[i].married === false) {
          extraInf.innerHTML = `Är personen gift? ${myArrs[i].married.toString()}`
      } else {
          extraInf.innerHTML = "Den personen är inte gift"
      }
  }
}

function add(x: number, y: number): number {
  return x + y
}

interface Obj {
  name: string
  age: number
  married: Boolean
}
