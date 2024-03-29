const debounce = (cb, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  }
};

const search = (text, id) => console.log(`Searched with ${text} : ${id}`);

const debouncedSearch = debounce(search, 1000);

debouncedSearch("a", 1);
debouncedSearch("ab", 2);
debouncedSearch("abc", 3);
setTimeout(() => {
  debouncedSearch("abcd", 4);
  debouncedSearch("abcde", 5);
  setTimeout(() => {
    debouncedSearch("abcdef", 6);
  }, 1001);
}, 1001);
