// Kelas
class Hewan {
  constructor(nama, jenis, suara, kaki) {
    this.nama = nama;
    this.jenis = jenis;
    this.suara = suara;
    this.kaki = kaki;
  }

  deskripsikan() {
    return this.nama + ' adalah ' + this.jenis + ' ber kaki ' + this.kaki + ' dan bersuara ' + this.suara;
  }
}

const kucing = new Hewan('Garong', 'karnivora', 'Meong', 4);
console.warn(kucing.kaki); // 4
console.warn(kucing.deskripsikan()); // Garong adalah karnivora ber kaki 4 dan bersuara Meong