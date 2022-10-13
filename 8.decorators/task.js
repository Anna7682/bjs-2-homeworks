function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...rest) {
    const hash = rest.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
        console.log('Из кэша: ' + cache[idx].value);
        return 'Из кэша: ' + cache[idx].value;
    } 
      let result = func(...rest);
      cache.push({
        'hash': hash,
        'value': result
      });
      if (cache.length > 5) { 
        cache.shift(); 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }

  function debounceDecoratorNew(func, ms) {
    let timeout;
    let immediate = true;
    return function (...args) {
      clearTimeout(timeout);
      if (immediate) {
        func.apply(this, args);
      }
      immediate = false;
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  }
  

  
  function debounceDecorator2(func) {
    let timeout;
    let immediate = true;
    wrapper.count = 0;
    function wrapper (...args) {  
      wrapper.count++;
    if (immediate) {
      func.apply(this, ...args);
      immediate = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, ...args);
      immediate = true;
    }, ms)
  }
    return wrapper;
  }