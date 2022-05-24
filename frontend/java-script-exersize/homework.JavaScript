//Function: date objesinden yılı eğer 2000 üstünde ise milenyum yılı yoksa milenyum değil yazdırsın
//keyword:if-else ,new Date()
/*************************************    ternary yapisi ile cozum      *****************************/
let zaman1 = new Date
console.log(zaman1)

let yil = zaman1.getFullYear();
let greeting;
let hesaplama1 = (yil > 2000) ? greeting = "milenyum yili" : greeting = "milenyum yili degildir";

console.log(hesaplama1)
    /***********************    if else yapisi ile  yapmak  ********************************/
let zaman2 = new Date
console.log(zaman1)

let yil2 = zaman2.getFullYear();
let guncel;
if (yil2 > 2000) {
    guncel = "milenyum yilidir"
} else {
    guncel = "milenyum yili degildir"
}
console.log(guncel)
    /////////////////////////////////////////////////////////////////////////////////////////////
    // function dateMilenium(){
    //     console.log((new Date().getFullYear()>=2000) ? "Milenyum(+)" : "Milenyum(-)")
    // }
    // dateMilenium()
let bugununYili = new Date()
let yil3 = bugununYili.getFullYear();
console.log(yil3)

function dateMileniumYili() {
    console.log((yil3 > 2000) ? "milenyum yili" : "milenyum yili degildir")
}
dateMileniumYili()

//////////////////////////////////////////////////////////////////////////////////////////////
//Örnek-1
//y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

var x = Number(prompt("lütfen x değerinii giriniz"));
var k = Number(prompt("lütfen k değerinii giriniz"));

var result = birinciDerecedenDenklem(x, k);
document.write(result)

function birinciDerecedenDenklem(x, k) {
    return 3 * x + 4 * k;
}

//////////////////////////////////////////////////////////////////////////////////////////////

//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
// dereceden fahrenayta cevirme formulu=(x * 9 / 5) + 32

let derece = Number(prompt("lutfen dereceyi giriniz.."))
document.write(fah(derece))

function fah(derece) {
    return (derece * 9 / 5) + 32 /
}

///////////////////////////////////////////////////////////////////////////////////////

//operatör kullanimi
//4+3*2(3:3-1*6+9:1+(3:3)) hesaplayalım

var islem1 = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));
document.write(islem1);

///////////////////////////////////////////////////////////////////////////////////////

// Soru: -5.9 sayısını aşağıdaki işlemleri yapalım
let deger = -5.9;

// 1-mutlak değeri alsın 5.9
let deger1 = Math.abs(deger)
console.log(deger1)

/////////////////////////////////////////////////////////////////////////////////////

// 2-yuvarlama yapsın  6.0
let deger2 = Math.round(deger1)
console.log(deger2)

///////////////////////////////////////////////////////////////////////////////////////

// 3-karesini alsın 36.00
let deger3 = deger2 **= 2
console.log(deger3)

////////////////////////////////////////////////////////////////////////////////////

// 4-karekök alsın  6.0
let deger4 = Math.sqrt(deger3)
console.log(deger4)

/////////////////////////////////////////////////////////////////////////////////////

// 5-yuvarlama yapsın 6.0
let deger5 = Math.round(deger4)
console.log(deger5)

////////////////////////////////////////////////////////////////////////////////////////


// 6-)çıkan sonucu 5 bölsün 6/5=1
let deger6 = deger5 % 5
console.log(deger6)

///////////////////////////////////////////////////////////////////////////////////////

// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
console.log(Math.min(5, 7, 4, 65));

////////////////////////////////////////////////////////////////////////////////////

// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
let sayilar = [1, 5, 6, 9, 2, 12, 56, 82];
let kucukten = sayilar.sort();
console.log(sayilar[0])

/////////////////////////////////////////////////////////////////////////////////////////////////

// /***sayilari kucukten buyuge( a-b) yada buyukten kucuge(b-a) siralamada kullanilir */
let sayilar2 = [2, 6, 21, 3, 7, 34, 54, 745, 65];
sayilar2.sort(function(a, b) {
    return a - b
})
console.log(sayilar2)

///////////////////////////////////////////////////////////////////////////////////
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

let sayi3 = Number(prompt("lutfen sayi giriniz"))
let kalan = sayi3 % 2;
if (kalan == 1) {
    document.write(sayi3 + 3)

} else {
    document.write(sayi3 + 5)

}
///////////////////////////////////////////////////////////////////////////
switch (sayi3 % 2) {
    case 1:
        document.write(sayi3 + 3);
        break;
    case 0:
        document.write(sayi3 + 5);
        break;
}

///////////////////////////////////////////////////////////////////////////

// // 9-) çıkan sonucu üslü göstersin  4 ^ 4 = 4 * 4 * 4 *4

let deger5 = 5.9;
let tamsayi5 = Math.round(deger5)
console.log(tamsayi5)

let deger10 = Number(prompt("lutfen ussunu istediginiz numarayi giriniz.."))

var matIslem = Math.pow(tamsayi5, deger10);
console.log(matIslem)

///////////////////////////////////////////////////////////////////////////////////////


// Verilen bir sayının negatif mi pozitif mi oldugunu gosteren bir algoritma yapin

let notur2 = Number(prompt("Lutfen bir sayi giriniz..."))

let deger9 = (notur2 < 0) ? "negatiftir" : "pozitiftir"
console.log(deger9)

////////////////////////////////////////////////////////////////////////////////////////////

// Soru
// kullanıcının girdiğini sayıya kadar olan sayılardan; ==>> 1<=X<=kullanıcıgirdiğisayı
//kaçtane sayı var
//bu sayılardan kaç tane tek sayı var
//bu sayılardan kaç tane çift sayı var
//bu sayıların toplamı

let sayiGiris = Number(prompt("Lutfen bir sayi giriniz"))
let sayiAdedi = 0
let ciftSayi = 0
let tekSayi = 0
let toplam = 0
for (var i = 1; i <= sayiGiris; i++) {
    sayiAdedi++
    if (i % 2 == 0) {
        ciftSayi++

    } else {
        tekSayi++

    }
    toplam += i
}

document.write("sayiAdedi:  " + sayiAdedi + "    Teksayi:  " + tekSayi + "    Ciftsayi:  " + ciftSayi + "   toplamsayi:  " + toplam)

********************** while ile cozumu***************************************************

let sayiGiris = Number(prompt("Lutfen bir sayi giriniz"))
let sayiAdedi = 0
let ciftSayi = 0
let tekSayi = 0
let toplam = 0

let i = 0
while (i < sayiGiris) {
    i++
    sayiAdedi++
    if (i % 2 == 0) {
        ciftSayi++

    } else { tekSayi++ }

}
document.write(" Index: " + i + "  Sayi adedi: " + sayiAdedi + " Cift sayi: " + ciftSayi + " Tek sayi: " + tekSayi)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Date objesinden haftanın hangi gün olduğunu bulan algoritma ?
//Not: Pazartesi:0 Pazar:6

let zaman1 = new Date()
buGun = zaman1.getDay()

console.log(buGun)

switch (buGun) {

    case 0:
        console.log("Pazar")

        break;
    case 1:

        console.log("Pazartesi")


        break;

    case 2:

        console.log("Sali")


        break;

    case 3:

        console.log("Carsamba")


        break;
    case 4:
        console.log("Persembe")

        break;

    case 5:
        console.log("Cuma")


        break;
    case 6:
        console.log("Cumartesi")


        break;

}
