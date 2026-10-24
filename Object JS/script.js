// Object
// let siswa = {
//   nama: "Andi",
//   umur: 16,
//   kelas: "XI",
//   aktif: true
// };

console.log(siswa);

// Mengakses Properti
// let siswa = {
//  nama: "Andi",
//  umur: 16
// };

console.log(siswa.nama);
console.log(siswa["umur"]);

// Menambah dan Mengubah Properti
let siswa = {
  nama: "Andi",
  umur: 16
};

siswa.kelas = "XI";  // Menambah properti
siswa.umur = 17;     // Mengubah nilai

console.log(siswa);

// Object Yang Memiliki Function
let siswa = {
  nama: "Andi",

  sapa: function() {
    console.log("Halo, nama saya " + this.nama);
  }
};

siswa.sapa();