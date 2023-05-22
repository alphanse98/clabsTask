const cache = (key, value) => {
    if (value !== undefined) {
      cache[key] = value;
    } else {
      return cache[key];
    }
  };
  cache('myKey', 'myValue');
  
  const cachedValue = cache('myKey');
  console.log(cachedValue); 