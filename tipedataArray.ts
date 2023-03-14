//cara deklarasi variabel untuk tipe data array
//cara 1
let banyakNama : string[] = ["Raihan","Sabiq","Rabbani"]

//cara 2
let banyakAngka : Array<number> = [1,2,3,4,5]
//coba ubah jadi isi array jadi tipe data string
// let banyakBuah : Array<number> = ['apel','belimbing','ceri'] //error karean isinya bukan number tapi string

//eksekusi variabel array bnykNama posisi 2
 console.log('Nama Belakang Saya = '+ banyakNama[2]) //jika 2 diganti 100 gak error namun ketika eksekusi tak ada datanya (undefined) ketika tampil di console
//eksekusi isi variabel array bnykAngka
 console.log("isi dari variabel banyakAngka yg awal : " + banyakAngka)

//eksekusi isi variabel array bnykAngka
 console.log("data array bnykAngka posisi 0 sebelum diubah : " + banyakAngka[0])
 //ubah isi variabel array
 banyakAngka[0]=100
//eksekusi setelah ubah isi array posisi 0
 console.log("data array bnykAngka posisi 0 sesudah diubah : " + banyakAngka[0])
 console.log("isi dari variabel banyakAngka yg akhir : " + banyakAngka)
 
 //eksekusi variabel banyakNama sblm tambah
 console.log("isi dari variabel banyakNama yg awal : " + banyakNama)
 //tambah data pada variabel banyakNama
 banyakNama.push ("Haya", 'Taqiyyah', "Rabbania")
 console.log("isi dari variabel banyakNama yg akhir : " + banyakNama)

 //hapus data
 delete banyakAngka[0]
 delete banyakAngka[3]
 console.log("isi dari variabel banyakAngka setelah dihapus : " + banyakAngka)