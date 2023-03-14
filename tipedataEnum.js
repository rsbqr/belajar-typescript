//data enum
var Gender;
(function (Gender) {
    Gender[Gender["pria"] = 0] = "pria";
    Gender[Gender["wanita"] = 1] = "wanita";
})(Gender || (Gender = {}));
var jenisKelamin = Gender.pria;
console.log(jenisKelamin); //tercetak pada console itu 0 karena pria di posisi pertama pada data enum
//mari cek data js nya dengan ketikkan pada console tsc tipedataEnum.ts
