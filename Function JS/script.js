// Function
function sapa() {
  console.log("Halo, selamat belajar!");
}

sapa();
sapa();

// Parameter
function sapa(nama) {
  console.log("Halo, " + nama);
}

sapa("Andi");
sapa("Budi");

// Return
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);

console.log(hasil);

// Arrow
const kali = (a, b) => {
  return a * b;
};

console.log(kali(4, 5));