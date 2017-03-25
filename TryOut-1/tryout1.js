
var kata="a b c d 3 5 2 a b x y z z z r t s a b 90";

function semuaKata(str) {
  // return str.split(" ").length;
  return str.split(" ").length;
}
function unikKata(str) {
    var words = str.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}

function angka(str) {
  // return str.split(" ").length;
  return str.replace(/[^0-9]/g,"").length;
}

console.log("Jumlah semua kata: "+semuaKata(kata));
console.log("Jumlah kata yang unik dan jumlahnya masing-masing: ");
var freq = unikKata(kata);
var i=0,j=0,k=0,jum=0;
Object.keys(freq).sort().forEach(function(word) {
    console.log(word + ": " + freq[word]);
    if(freq[word]==1){
      i++;
    }else{
      j++;
    }
    if(word.match(/^\d+$/)){
      k++;
      jum=jum+parseInt(word);
    }
});
console.log("Jumlah kata yang unik: "+(i+j));
console.log("Ada "+k+" angka");
console.log("Jumlah semua angka :"+jum);
