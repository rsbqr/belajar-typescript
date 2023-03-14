//buat tuple dengan nama variabel dataMurid
let dataMurid : [string,string,number] = ['Hans','Indonesia, 21 Syakban 1444 H',2023]
//tuple dengan nama variabel dataProduk 
let dataProduk : [string,string,number] = ['Gawai','Rilme C25',2500000]

//coba ubah isi tuple
// dataProduk[0] = 200 jadi error karena tipe data posisi tuple 0 itu string perlu ada tanda ' ' atau " "
//eksekusi 
//ingat dimulai dari posisi 0
console.log('Tgl dan Lokasi belajar = '+dataMurid[1]) 
console.log("Nama Produk = " +dataProduk[0]) //jika 0 diganti 100 maka error langsung diberi tau dari editor jika masih dieksekusi akan error di console

//tambah data
console.log("Data Produk Awal = " +dataProduk) 
dataProduk.push("Jam Tangan","Gshock",10000000)
console.log("Data Produk Akhir = " +dataProduk) 

//ubah data pada tuple
console.log("data array dataProduk sebelum diubah : " + dataProduk)
 //ubah isi variabel array
 dataProduk[1]="redmi 6"
//eksekusi setelah ubah isi array posisi 0
 console.log("variabel dataProduk sesudah diubah : " + dataProduk)
//hapus data
dataProduk.pop();
console.log("variabel dataProduk sesudah dihapus : " + dataProduk)

//hapus data pada tuple
console.log("data murid sebelum hapus : ")
//dataMurid.pop() //gabisa hapus 1 data dan tidak sequence
console.log("data murid setelah hapus : ")
