/**
 *
 */
export function urlParse() {
  let paramUrl = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]*/g;
  let arr = paramUrl.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let arrays = item.substring(1).split('=');
      let key = decodeURIComponent(arrays[0]);
      let value = decodeURIComponent(arrays[1]);
      if (key in obj) {
        let oldValue = obj[key];
        if (Object.prototype.toString.call(oldValue) === '[object Array]') {
          oldValue.push(value);
          // obj[key] = oldValue;
        } else {
          let array = [oldValue, value];
          obj[key] = array;
        }
      } else {
        obj[key] = value;
      }
    });
  }
  return obj;
};
