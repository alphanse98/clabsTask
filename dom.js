// 1 Write a function that will collect all dom elements and group them based on the element name and store as a object 

let getElement = (param) => {
    let elements = document.getElementsByTagName(param)
    let obj = {}
    Object.assign(obj, elements);
    console.log(obj)
  }
  getElement('p')