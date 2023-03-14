//data enum
enum Gender {pria, wanita}
let jenisKelamin : Gender = Gender.pria;

console.log(jenisKelamin) //tercetak pada console itu 0 karena pria di posisi pertama pada data enum

//mari cek data js nya dengan ketikkan pada console tsc tipedataEnum.ts
// ada tanda error pada editor karena ada file js nya namun masih bisa running

//data enum 2
enum Kategori {
    makanan = 'makanan',
    minuman = 'minuman',
    elektronik = 'elektronik'
    }
let Jenis : Kategori = Kategori.makanan;

//tercetak bukan angka lagi karena sudah di deklarasi jadi string
console.log(Jenis)