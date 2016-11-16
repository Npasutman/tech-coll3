export function loadJSON(url) {
  return new Promise(function(resolve){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return ;
      if (this.status === 200) {
        resolve(JSON.parse(this.responseText));
      }
    };
    xhr.send();
  });
}
