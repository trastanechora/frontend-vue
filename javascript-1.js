// 2 cara Deklarasi variabel:
const nama = 'Javascript'; // Nilai tidak bisa dirubah
let singkatan = 'js'; // Nilai bisa dirubah
var ekstensi = '.js' // Sudah tidak digunakan

singkatan = 'JS'; // Merubah nilai variabel
// ----------------------------------------------------------------------

// Tipe variabel pada JS
const boolean = true;
const string = 'karakter';
const number = 2022;
const array = [1, 'satu', true];
const object = {
  string: 'karakter',
  number: 2022,
  array: [1, 'satu', true];
}
// ----------------------------------------------------------------------

// Operasi Matematika
const bilangan1 = 10;
const bilangan2 = 2;

const hasilTambah = bilangan1 + bilangan2; // 12
const hasilKurang = bilangan1 - bilangan2; // 8
const hasilKali = bilangan1 * bilangan2; // 20
const hasilBagi = bilangan1 / bilangan2; // 5
const hasilPangkat = bilangan1 ** bilangan2; // 100
const hasilSisaBagi = bilangan1 % bilangan2; // 0
// ----------------------------------------------------------------------

// Fungsi sederhana
function penambahan(variabel1, variabel2) {
  return variabel1 + variabel2;
}

// Fungsi moderen (arrow function)
const pengurangan = (variabel1, variabel2) => {
  return variabel1 - variabel2;
}

// Pemakaian fungsi
const bilangan1 = 10;
const bilangan2 = 2;
const hasilPenambahan = penambahan(bilangan1, bilangan2);
const hasilPengurangan = pengurangan(bilangan1, bilangan2);
// ----------------------------------------------------------------------

// Kelas
class Hewan {
  constructor(jenis, suara, kaki) {
    this.jenis = jenis;
    this.suara = suara;
    this.kaki = kaki;
  }

  deskripsikan() {
    return 'Adalah ' + this.jenis + ' ber kaki ' + this.kaki + ' dan bersuara ' + this.suara;
  }
}

const kucing = new Hewan('karnivora', 'Meong', 4);
console.warn(kucing.kaki); // 4
console.warn(kucing.deskripsikan()); // Adalah karnivora ber kaki 4 dan bersuara Meong

// ----------------------------------------------------------------------

// Kondisi - if
const temperaturTubuh = 35;

if (temperaturTubuh < 37) {
  console.log('Sehat');
} else {
  console.log('Demam');
}

// Kondisi - if | dengan else if
const hariIni = 'Minggu';

if (hariIni === 'Minggu') {
  console.log('Tidur');
} else if (hariIni === 'Sabtu') {
  console.log('Memancing');
} else {
  console.log('Bekerja');
}

// Kondisi - switch
const bulanIni = 'Mei';

switch (bulanIni) {
  case 'Mei':
    console.log('Musim Rambutan');
    break;
  case 'Juni':
    console.log('Musim Kedondong');
    break;
  case 'Juli':
    console.log('Musim Manggis');
    break;
  case 'Agustus':
    console.log('Musim Kelengkeng');
    break;
  case 'September':
    console.log('Musim Markisa');
    break;
  default:
    console.log('Musim apa ya ini?');
    break;
}
// ----------------------------------------------------------------------

// Pengulangan - for loop
const ulangiBerapaKali = 4;

for (let i = 0; i < ulangiBerapaKali; i++) {
  console.log('Hello World!');
}

// output:
// Hello World!
// Hello World!
// Hello World!
// Hello World!

// Pengulangan - while
let i = 0;
while (i < 3) {
  console.log('Hello World!');
  i++;
}

// output:
// Hello World!
// Hello World!
// Hello World!

// Pengulangan - do while
let i = 3;
do {
  text += "The number is " + i;
  i++;
}
while (i < 3);
// output:
// Hello World!

// ----------------------------------------------------------------------

// ForEach, Map dan Filter
const daftarTamu = [
  {
    nama: 'Andy',
    umur: 20,
    gender: 'laki-laki'
  },
  {
    nama: 'Budi',
    umur: 21,
    gender: 'laki-laki'
  },
  {
    nama: 'Cindy',
    umur: 19,
    gender: 'perempuan'
  },
  {
    nama: 'Deny',
    umur: 21,
    gender: 'laki-laki'
  }
];

const tamuPerempuan = daftarTamu.forEach((tamu) => {
  if (tamu.gender === 'perempuan') {
    console.log(tamu.nama);
  }
});
//  output:
//  Cindy

console.log(tamuPerempuan);
// output:
// undefined

const tamuLakiLaki = daftarTamu.map((tamu) => {
  if (tamu.gender === 'laki-laki') {
    console.log(tamu.nama);
    return tamu.nama
  }
});
//  output:
//  Andy
//  Budi
//  Deny

console.log(tamuLakiLaki);
// output:
// ['Andy', 'Budi', 'Deny']

const tamuDewasa = daftarTamu.filter((tamu) => {
  return tamu.umur > 20;
});

console.log(tamuDewasa);
// output:
// [
//   {
//     nama: 'Budi',
//     umur: 21,
//     gender: 'laki-laki'
//   },
//   {
//     nama: 'Deny',
//     umur: 21,
//     gender: 'laki-laki'
//  }
// ]

// ----------------------------------------------------------------------

// Aturan Nama variabel
// Gunakan camelCase atau UPPERCASE
const firstname = 'Robin'; // bad
const first_name = 'Robin'; // bad
const first-name = 'Robin'; // error
const firstName = 'Robin'; // good
const DAYS_OF_A_WEEK = 7; // good

// Gunakan camelCase dan intonasi pertanyaan
const visible = true; // bad
const isVisible = true; // good
const equal = false; // bad
const areEqual = false; // good
const encryption = true; // bad
const hasEncryption = true; // good

// Aturan Nama Fungsi
// Gunakan camelCase dan awalan kata kerja
function name(firstName, lastName) { // bad
  return `${firstName} ${lastName}`;
}

function getName(firstName, lastName) { // good
  return `${firstName} ${lastName}`;
}

// Aturan Nama Kelas & Komponen
// Gunakan PascalCase dan kata benda
class SoftwareDeveloper { // good
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
