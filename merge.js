let mergeObject = (oldTraits, newTraits) => {
    let mergeData = Object.assign(oldTraits, newTraits)
    console.log(mergeData)
  }
  
  
  let oldTraits = {
    name: 'nsame',
    age: 23,
    address: {
        city: 'chennai',
        state: 'tn'
    },
    quarterly_marks: [{
        
        english: 34,
        tamil: 53
    }, {
        
        science: 34,
        tamil: 53
    }]
  }
  
  let newTraits = {
      
    name: 'Alphanse',
    age: 23,
    address: {
        city: 'chennai',
        state: 'tn'
    },
    quarterly_marks: [{
        
        english: 34,
        tamil: 53,
        n:90
    }, {
        
        science: 34,
        tamil: 53
    }]
  }
  
  mergeObject(oldTraits , newTraits)