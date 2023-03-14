//tipedata primitif

//1. boolean
let isMarried:boolean = true;
//misalnya diubah isi variabelnya
// isMarried ="ini jadi string"; dan jadi errror

//2. number
let decimal: number = 6; 
let hex: number = 0x111; //setelah 0 merupakan kode jenis tipe datanya
let binary: number = 0b111; //setelah 0 merupakan kode jenis tipe datanya
let octal: number=0o111; //setelah 0 merupakan kode jenis tipe datanya

let usia: number=23;
//tes ubah isinya lagi
// usia = "ini jadi string"; error lagi

//3. string
let namaSaya: string = "Raihan";
namaSaya = namaSaya + " Sabiq Rabbani";
//coba ubah isi lagi
// namaSaya=true; error

//string subsitut dengan `${namaVariabel}`

//variabel hi dengan isi sapaan
let hi: string = `Assalamu'alaikum ${namaSaya}`;

//eksekusi
console.log(hi)


