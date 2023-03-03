let isValidInput = false,
  input1,
  input2;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(prompt) {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input) => {
      resolve(Number(input));
    });
  });
}

const tambah = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan angka pertama: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);

  do {
    isValidInput = false;
    input2 = await getInput("Inputkan angka kedua: ");
    if (isNaN(input2)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);
  console.log(
    `Hasil penjumlahan dari ${input1} + ${input2} = ${input1 + input2}`
  );
  console.log("=================");
};

const kurang = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan angka pertama: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);

  do {
    isValidInput = false;
    input2 = await getInput("Inputkan angka kedua: ");
    if (isNaN(input2)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);
  console.log(
    `Hasil pengurangan dari ${input1} - ${input2} = ${input1 - input2}`
  );
  console.log("=================");
};

const kali = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan angka pertama: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);

  do {
    isValidInput = false;
    input2 = await getInput("Inputkan angka kedua: ");
    if (isNaN(input2)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);
  console.log(
    `Hasil perkalian dari ${input1} * ${input2} = ${input1 * input2}`
  );
  console.log("=================");
};

const bagi = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan angka pertama: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);

  do {
    isValidInput = false;
    input2 = await getInput("Inputkan angka kedua: ");
    if (isNaN(input2)) {
      console.log("Input Harus Angka");
    } else if (input2 === 0) {
      console.log("Angka Tidak bisa dibagi oleh 0");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput || input2 === 0);
  console.log(
    `Hasil pembagian dari ${input1} / ${input2} = ${input1 / input2}`
  );
  console.log("=================");
};

const akarKuadrat = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan angka pertama: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);
  const result = Math.sqrt(input1);
  console.log(`√${input1} = ${result}`);
  console.log("=================");
};

const luasPersegi = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan Panjang: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);

  do {
    isValidInput = false;
    input2 = await getInput("Inputkan Lebar: ");
    if (isNaN(input2)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);
  const result = input1 * input2;
  console.log(`L = ${input1} x ${input2} = ${result}`);
  console.log("=================");
};

const volumeKubus = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan Panjang Rusuk: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);
  const result = input1 ** 3;
  console.log(`V = ${input1} x ${input1} x ${input1} = ${result}`);
  console.log("=================");
};

const volumeTabung = async () => {
  do {
    isValidInput = false;
    input1 = await getInput("Inputkan Jari-Jari: ");
    if (isNaN(input1)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);

  do {
    isValidInput = false;
    input2 = await getInput("Inputkan Tinggi: ");
    if (isNaN(input2)) {
      console.log("Input Harus Angka");
    } else {
      isValidInput = true;
    }
  } while (!isValidInput);
  const result = Math.round(Math.PI * input1 * input1 * input2);
  console.log(`Jari jari = ${input1}`);
  console.log(`Tinggi = ${input2}`);
  console.log(`V = π x ${input1} x ${input1} x ${input2} = ${result}`);
  console.log("=================");
};

async function main() {
  let pilihanMenu = [
    "Penjumlahan",
    "Pengurangan",
    "Perkalian",
    "Pembagian",
    "Akar Kuadrat",
    "Luas Persegi",
    "Volume Kubus",
    "Volume Tabung",
    "Keluar",
  ];

  try {
    let isValidMenu, menu;
    do {
      isValidMenu = false;
      while (!isValidMenu) {
        console.log(
          `Selamat Datang di aplikasi calculator pilih process yang ingin dilakukan`
        );
        for (let i = 0; i < pilihanMenu.length; i++) {
          console.log(`${i + 1}. ${pilihanMenu[i]}`);
        }
        menu = await getInput("Pilih : ");
        if (menu >= 1 && menu <= 9) {
          isValidMenu = true;
        } else {
          console.log("Input tidak valid");
        }
      } //endwhile
      console.log("=================");
      console.log(`Kamu Memilih Nomor ${menu}`);
      console.log("=================");

      switch (menu) {
        case 1:
          await tambah();
          break;
        case 2:
          await kurang();
          break;
        case 3:
          await kali();
          break;
        case 4:
          await bagi();
          break;
        case 5:
          await akarKuadrat();
          break;
        case 6:
          await luasPersegi();
          break;
        case 7:
          await volumeKubus();
          break;
        case 8:
          await volumeTabung();
          break;
        case 9:
          console.log("Terima Kasih");
          process.exit();
      }
    } while (menu != 9);
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
}

main();
