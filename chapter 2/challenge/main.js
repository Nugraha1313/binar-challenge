/*
Buatlah sebuah program untuk input nilai siswa 
dari satu mata pelajaran di kelas, dimana nilai 
tersebut disimpan dalam sebuah variabel (array). 
Kemudian keluarkan output setelah selesai 
menginputkan nilai:
1. Nilai tertinggi & terendah 
2. Mencari rata-rata
3. Jumlah Siswa lulus / tidak lulus ujian 
dengan kriteria nilai lulus harus >= 60
4. Urutkan nilai siswa 
5. Cari dan tampilkan siswa nilai=90 dan 
nilai=100

*/

const readLine = require("readline");

/**
 * Merupakan ADT(Abstract Data Type) untuk mengolah nilai siswa
 * @param {Array} nilai
 * Nilai harus berupa Number
 */
class Nilai {
  constructor(nilai) {
    if (!Array.isArray(nilai)) {
      throw new Error("Nilai harus berupa array");
    } else if (nilai.length == 0) {
      throw new Error("Nilai tidak boleh kosong");
    }
    for (const iterator of nilai) {
      if (typeof iterator != "number") {
        throw new Error("Nilai harus berupa angka");
      }
    }
    this.nilai = nilai;
  }

  setNilai(nilai) {
    if (!Array.isArray(nilai)) {
      throw new Error("Nilai harus berupa array");
    } else if (nilai.length == 0) {
      throw new Error("Nilai tidak boleh kosong");
    }
    for (const iterator of nilai) {
      if (typeof iterator != "number") {
        throw new Error("Nilai harus berupa angka");
      }
    }
    this.nilai = nilai;
  }

  getNilai() {
    return this.nilai;
  }

  getNilaiTertinggi() {
    // looping to find max value
    let max = this.nilai[0];
    for (let i = 1; i < this.nilai.length; i++) {
      if (this.nilai[i] > max) {
        max = this.nilai[i];
      }
    }
    return max;
    // return Math.max(...this.nilai);
  }

  getNilaiTerendah() {
    // looping to find min value
    let min = this.nilai[0];
    for (let i = 1; i < this.nilai.length; i++) {
      if (this.nilai[i] < min) {
        min = this.nilai[i];
      }
    }
    return min;
    // return Math.min(...this.nilai);
  }

  getRataRata() {
    // looping to find average value
    let sum = 0;
    for (let i = 0; i < this.nilai.length; i++) {
      sum += this.nilai[i];
    }
    return sum / this.nilai.length;
    // return this.nilai.reduce((a, b) => a + b, 0) / this.nilai.length;
  }

  getJumlahSiswaLulus() {
    // looping to find number of students who pass with criteria >= 60
    let count = 0;
    for (let i = 0; i < this.nilai.length; i++) {
      if (this.nilai[i] >= 60) {
        count++;
      }
    }
    return count;
    // return this.nilai.filter((n) => n >= 60).length;
  }

  getJumlahSiswaTidakLulus() {
    // looping to find number of students who fail with criteria < 60
    let count = 0;
    for (let i = 0; i < this.nilai.length; i++) {
      if (this.nilai[i] < 60) {
        count++;
      }
    }
    return count;
    // return this.nilai.filter((n) => n < 60).length;
  }

  getUrutanNilai() {
    // Mengurutkan nilai siswa dari yang terkecil ke terbesar
    let nilaiUrut = this.nilai,
      temp;
    // looping to sort the array using bubble sort
    for (let i = 0; i < nilaiUrut.length; i++) {
      for (let j = 0; j < nilaiUrut.length - 1; j++) {
        if (nilaiUrut[j] > nilaiUrut[j + 1]) {
          temp = nilaiUrut[j];
          nilaiUrut[j] = nilaiUrut[j + 1];
          nilaiUrut[j + 1] = temp;
        }
      }
    }
    return nilaiUrut;
    // return this.nilai.sort((a, b) => a - b);
  }

  getSiswaNilai90dan100() {
    let listNilai = [];
    // looping to find number of students who have score 90 and 100
    for (let i = 0; i < this.nilai.length; i++) {
      if (this.nilai[i] == 90 || this.nilai[i] == 100) {
        listNilai.push(this.nilai[i]);
      }
    }
    if (listNilai.length == 0) {
      return "Tidak ada siswa yang memiliki nilai 90 dan 100";
    }
    return listNilai;
    // return this.nilai.filter((n) => n == 90 || n == 100);
  }
}

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.clear();
  console.log(
    "=== Selamat Datang di Program Nilai Siswa === \n Tekan q untuk Keluar"
  );
  let listNilai = [],
    isContinue = true,
    i = 1;

  while (isContinue) {
    try {
      let nilai = await askQuestion(`Masukkan Nilai Siswa ke-${i}: `);
      if (nilai.trim(nilai.toLowerCase()) === "q") {
        isContinue = false;
      } else if (nilai.trim() == "") {
        throw new Error("Nilai tidak boleh kosong");
      } else if (isNaN(nilai)) {
        throw new Error("Nilai harus berupa angka");
      } else if (nilai < 0 || nilai > 100) {
        throw new Error("Nilai harus berada diantara 0 - 100");
      } else {
        // nilai.push(parseInt(input))
        listNilai.push(Number(nilai));
        i++;
      }
    } catch (error) {
      console.error("Error occurred: ", error);
    }
  }
  rl.close();
  //   creaet object
  console.log("============================================");
  if (listNilai.length == 0) {
    console.log("Terima Kasih Telah Menggunakan Program Ini");
    return;
  }
  let nilaiSiswa = new Nilai(listNilai);
  //   output
  let output = `Nilai siswa: ${nilaiSiswa.getNilai()} 
Nilai tertinggi: ${nilaiSiswa.getNilaiTertinggi()} 
Nilai terendah: ${nilaiSiswa.getNilaiTerendah()} 
Rata-rata: ${nilaiSiswa.getRataRata()} 
Jumlah siswa lulus: ${nilaiSiswa.getJumlahSiswaLulus()} 
Jumlah siswa tidak lulus: ${nilaiSiswa.getJumlahSiswaTidakLulus()} 
Urutan nilai: ${nilaiSiswa.getUrutanNilai()} 
Siswa nilai 90 dan 100: ${nilaiSiswa.getSiswaNilai90dan100()}`;
  console.log(output);
}

main();
