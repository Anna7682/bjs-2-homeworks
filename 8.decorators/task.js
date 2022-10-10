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

  function debounceDecoratorNew(func) {
    let timer = null;
  
    function wrapper(...args) {
      if (timer === null) {
        func(...args);
        clearTimeout(timer);
        timer = setTimeout(() => func(...args));
      }
    }
    return wrapper;
  }
  
  
  function debounceDecorator2(func) {
    let timer = null;
  
    function wrapper(...args) {
      if (timer === null) {
        func(...args);
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), ms);
      }
      wrapper.count++;
    }
    wrapper.count = 0;
    return wrapper;
  }