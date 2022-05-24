//*********Merhaba Dunya Ornekleri*******


//dokumana(document) Yazdirma Islemi ileMerhaba Dunya:
//document.write('Merhaba Dunya');

//Uyari MEsaji (Alert) ile Merhaba Dunya:
//alert("Merhaba Dunya")

//console/log ile Merhaba Dunya:
//console.log("Merhaba Dunya")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

//****************let ve const ile Degisken Tanimlama************

//var ile degisken tanimlamak:
//var serverName ="api.kodluyoruz.org"
//console.log(serverName)

//let ile degiskeni bis tanimlamak:
//let serverName;
//console.log(serverName)

//let iledegiskene bilgi atamak:
//serverName = "http:/ / kodluyoruz.com "
//console.log(serverName)

// let ile degiskene bilgi atayarak tanimlamak:
//let password = "1234";
//console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:

/*HATALI KULLANIM:
console.log(fullName)
let fullName = "Isa KAYABASI";
*/
//let fullName = "Hakan YALCINKAYA";

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:

//fullName = "Lorem Ipsum Dolor"
//console.log(fullName)

// birlestirme veya ekleme islemi
//fullName + "Yeni Eklenen Bilgi" / / acaba eklendimi ? ?
//console.log(fullName + " Test Bilgisi") // Ekle ve Goster ama Degiskene Eklemedik

//fullName = fullName + " Yeni Bilgi"
//fullName = "2: Bilgi: " + fullName

//fullName = "Sifirlandi"
//fullName += "ve Yeni Bilgi Eklendi"
//console.log(fullName)

//const ile degiskeni bos tanimlamaya calismak :( :
//const serverPassword; // sadece degisken tanimlandi ama ici bos ??

// const ile degisken tanimalamak:
//const SERVER_PASSWORD = "aksmdkm2123"
//console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///**************** Degisken Tanimlama Kurallari ****************/////
// https://www.w3schools.com/js/js_conventions.asp
// https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
// https://www.robinwieruch.de/javascript-naming-conventions

//## Degisken Genel Tanimlama Kurallari:
// camelCase Kullanimi:
//let fullname = "" // bu dogru bir kullanim degil  X
//let kodluyoruzserverinfo = "" //bu dogru kullanim degildir X
//let kodluyoruz_server_info = "" //bu dogru kullanim degildir X
//let fullName = "" // dogru kullanim
//let kodluyoruzServerInfo = "" // dogru kullanim
//let kodluyoruzServerInfo = "" // dogru kullanim

// let firstName ="Isa", lastName ="KAYABASI"
//let firstName = "Isa"
//let lastName = "KAYABASI"
//console.log(firstName, lastName)

// UPPER_CASE Kullanimi:
//const password = "1234" //bu dogru kullanim degil X
//const PASSWORD = "1234" //bu dogru kullanim
//const SERVER_PASSWORD = "1234"

// degiskenlerde turkce ve diger dillerin kullanimi:
//let turkceBilgi = 'Turkce Bilgi Yazdiriliyor..' // bu dogru kullanim degil X
// let turkceBilgi // olmaz X
//let info = 'Turkce Bilgi Yazdiriliyor..'
//console.log(info)


// anlamsiz degisken adlari kullanmayin!
// https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
// When i wrote this, only God and I understood what I was doing
// Now, God only knows
//let x = 1; //bu dogru kullanim degil X
//x, y, z, k, i, e, gibi anlamsiz degisken isimlerini kullanmayin!


//### Ek Bilgi:
// 1: boolean tanimlarken is/has kullanimi:
//let isActive = true
//let hasPassword = false

// 2: Line Length < 80

///////////////////////////////////////////////////////////////////////////////////////////////////////////

///************************** Number Veri Turu ile Calismak *************************
// number veri turu tanimlamak:
//let price = 100
//let tax = 0.13
//let priceTax = price * tax
//let total = price + priceTax
//console.log(
//"Fiyat:", price,
//"KDV Orani:", tax,
//"KDV Tutari:", priceTax,
//"Fiyat:", total
//)


//let stringNumber = "11"
//console.log(stringNumber)
//let newNumber = Number(stringNumber)
//console.log(newNumber)
//console.log("Number Constructor icine bilgi gonderildi:", Number("111"))

///arttirma ve azaltma islemleri:
//let counter = 320
//counter = counter + 1 //uzun yontem
//counter += 1;
//counter++;
//console.log(counter)

//counter--;
//counter -= 1;
//console.log(counter)

//counter *= 10;
//console.log(counter)

//counter /= 2;
//console.log(counter)

// islem onceligi:
// https://tr.wikipedia.org/wiki/%c4%b0%c5%9f1em_s%c4%b1ras%c4%b1
//console.log(2 + 3 * 10) //50 ??????????
//console.log((2 + 3) * 10) //50 ???????


// mod(kalan) alma %
// sayi tek mi cift mi ????
//console.log(17 % 2) //0 ise cift, 1 ise tek

// 8 urun alan koliye tum urunler sigiyor mu ?
//console.log("Koli Kalan Urun Ornegi: ", 18 % 8)

// us alma **:
//console.log(2 * 2 * 2)
//console(2 ** 4)

// asagi yuvarlama islemi --> Math.floor:
//console.log("Asagi Yuvarlama:", Math.floor(1.9)) / // --> 1

// yukari yuvarlama islemi --> Math.ceil :
//console.log("Yukari Yuvarlama:", Math.ceil(1.9)) // --> 2

// yakina yuvarlama islemi --> Math.round :
//console.log("Yakina Yuvarlama:", Math.round(1.5)) // ---> 2  eger(1.4) olsaydi 1 e yuvarlardi

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/********************** Boolean Veru=i Turu ile Calismak *****************/

// 0 ve 1'i Anlamak   ->
//let isActive = false // 0
//isActive = true // 1
//console.log(isActive)

//let userName;
//let isUserName = boolean(userName)
//console.log(isUserNAme)

//Boolean("11") //true
//Boolean("0") //true
//Boolean("") //false

//userName = "user"

//console.log("User Name:", Boolean(userName))

// 0 ,-0, null, false, NaN,undefined, ("") ->
//Boolean(0) // false
//Boolean(-0) // false
//Boolean(-0.1) //true
//Boolean(0 === 0) //true

//Not: Karar Yapilari Kisminda Tekrar Anlatilacak
//Boolean(userName.length > 0) // true

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//************** Veri Turunu Ogrenmek ve Veri Turu Donusumleri ******************************//

// veri turunu ogrenmek typeof:
//let price = 111
//let stringPrice = "111"
//let hasPassword = true

//console.log(
//   "price:",
//   typeof(price))

//console.log(
//"hasPassword: ",
//typeof(hasPassword)
//)


//string(metinsel) bilgileri int ve float'a donusturmek
//let number1 = "11"
//number1 = parseInt(number1)
//console.log("number1: ", number1, typeof(number1))

//let number2 = "11px"
//number2 = parseInt(number2)
//console.log("number2: ", number2, typeof(number2))

//let number3 = "11.1"
//number3 = Number(number3)
//console.log("number3: ", number3, typeof(number3))

//let number4 = "11.4px"
//number4 = parseFloat(number4)
//console.log("number4: ", number4, typeof(number4))


/// number veri tipindenstring'e donusturmek:
//let number5 = 55
//number5 = number5.toString()
////console.log(number5, typeof(number5))

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*********************** Template Literals Kullanimi**************************************/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_;iterals

// let username = "Hakan"
// const DOMAIN = "kodluyoruz.org"

// let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

// info `
// Merhaba ${username} sitemize hosgeldiniz..

// mail adresin: $ { email }

// mail adresinin uzunlugu: ${email.length}
// borcunuz: ${(2+3) * 10} TL
// gunun saat bilgisi : ${new Date().getHours()}

// kisa isminiz: ${username[0]}.
// `

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*************************** String Veri Turu Islemleri ***********************/
// https://www.w3schools.com/jsref/jsref_obj_string.asp

//let email = "isakayabasi30@gmail.com"
//let firstName = "isa"
//let lastName = "KAYABASI"

//string karakter sayisi -> length
//console.log(email.length)

// Ilk Karakteri Bulmak -> [0]:
//console.log(firstName[0])
//console.log(firstName.charAt)

// buyuk harf / kucuk harf :
//firstName = firstName.toUpperCase()
//console.log(firstName)

//firstName = firstName.toLoverCase()
//console.log(firstName)
// String icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
//console.log(email.search("@"))
//console.log(email[15])

//email.search('olmayan') // -1

// belli bir yere kadar al -> slice :(domain bilgisi)
//let Domain = email.slice(email.search("@") + 1)
//console.log(DOMAIN)

//console.log(
//DOMAIN.slice(0, DOMAIN.indexOf('.')) // sadece gmail kismini aldik
//)

//bilgiyi degistir -> replace:
//email = email.replace('gmail.com', "kodluyoruz.org")
//console.log(email)

//istedigim bilgi var mi ? -> includes:
//email.includes('dkfhsd') // false
//email.includes('@') // true

//istedigim bilgiyle basladi mi ? bitti mi -> startWidth ,endsWidth :
//console.log(
//email.endsWidth('kodluyoruz.org')
//)

// Ilk Harflerini Buyuk Yapmak 
//firstName = "FIRST"
//lastName = "LAST"
//let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase}${lastName.slice(1).toLowerCase()}`

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*****************               DOM       ****************************/

// https://developer.mozilla.org/en-US/docs/web/API/Document_Object_Model

//pathname
//console.log(document.location.pathname)

// head icindeki bilgiler
//console.log(document.head)

//body icindeki bilgiler
//console.log(document.body)

// url bilgisi
//console.log(document.URL)
//console.log(document.baseURL)


// document icerisinde style bilgilerini degistirmek:
// css bilginizle birlikte style yapisi uzerinde duzenlemeler yapabilirsiniz...
//document.body.style.backgroundColor = "aqua"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*************************** DOM Icinde Oge Secimi ***********************/

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// let h2 = document.getElementByTagName('h2')
//let title = document.getElementById('title')
//title.innerHTML = "Degisen Bilgi"
//console.log(title.innerHTML)

//let link = document.querySelector("#kodluyoruzLink")
//link.innerHTML += "degisti"
//link.style.color = "red"
//link.classList.add('btn')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**************************      prompt ile Kullanicidan Bilgi Almak      ***********************/
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

//let fullName = prompt("Lutfen Adinizi Giriniz:")

//let greeting = document.querySelector("#greeting")

//greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*******   Liste icerisindeki son elemana  ulasmak veya eleman ulasmak veya eleman eklemek   **************/

//let lastChild = document.querySelector("ul#list>li:last-child")
//lastChild.innerHTML = "son oge degisti..."

//let firstChild = document.querySelector("ul#list>li:first-child")
//firstChild.innerHTML = "ilk oge degisti..."

//let ulDOM = document.querySelector("ul#list")
//let liDOM = document.createElement("li")

//liDOM.innerHTML = "Kendi Olusturdugumuz Oge"

//ulDOM.append(liDOM) // en sona ekler
//ulDOM.prepend(liDOM)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/********************     css class eklemek veya cikartmak    *****************************/

//let greeting = document.querySelector("#greeting")

//greeting.classList.add("text-primary")
//greeting.classList.add("title")
//greeting.classList.add("new-info", "second-class", "third-class") // birden fazla class eklemek


//greeting.classList.remove("title", "secont-class", "third-class") //birden fazla class silmemk icin

//console.log(greeting.classList)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**************************  Karsilastirma Operatorleri ve Mantiksal Operatorler   ********************/
// https://www.w3schools.com/js/js_comparisons.asp

//let price = "0"
//let user = "isa"

// == Esitse
//console.log("== :", price == 1)
//console.log("== :", price == 100)

// === Hem degeri hem de turu esitse
//console.log("=== :", price === 1)
//console.log("=== :", price === 100)

// != Esit degilse
//console.log(user != "guest")

// < kucukse
//console.log("price < 100", price < 100)

// kucuk veya esitse
//console.log("price <= 100", price <= 100)

// > buyukse
//console.log("price > 200", price > 200)

// >= Buyuk veya esitse
//console.log("price >= 100", price >= 100)

//  &&  ve
//price = 0
//console.log(price > 0 && user != "guest")

//  || veya
//console.log(price > 0 || user != "guest")

//   ! degil (verilen iseratin basina koyulunca olumsuzluk anlami ekler)
//user = "guest"
//price = 1
//console.log(price > 0 && !user == "guest")

////////////////////////////////////////////////////////////////////////////////////////////////////

//***************     Kosullarla Calismak     *****************///

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement/if..else

//let username = prompt("Kullanici Adinizi Giriniz:")
//eger kullanici bilgisi varsa ekrana ismini yazdir
//eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if(username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

//if (username) { //if kismi her zaman true ile calisir
//console.log(`Kullanici Bilginiz ${username}`)
//}
//else {
//   console.log("/bilgi yok")
//}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************  Coklu Kosullarla Calismak **********************************/

//let userName = prompt("Kullanici adini:")
//let age = prompt("Yasiniz:")
//let info = document.querySelector("#info")

//if (userName && age >= 18) {
//   info.innerHTML = "ehliyet alabilirsiniz"

//} else if (!userName) { 
//info.innerHTML = "Kullanici adiniz yok"
//}
//else if (!(age >= 18)) {
//info.innerHTML = "Yas Bilginiz Yok veya 19 Yasindan Kucuksunuz"
//}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


/***************    ternary operator ile short if kullanimi   ***********************/

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

//let userName: "jesus"
//console.log(userName)

//let userName = prompt("Kullanici Bilginizi Yaziniz")
//let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa 

//userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi  :("
//info, innerHTML = `${userName ? userName : "Kullanici Bilginiz Bulunamadi :("}`

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**************       Kosullarla calismak bolum sonu egzersizi          *******************************/

/*
1- prompt ile aldigin blgiye gore asagidaki yapiyi kullanarak notun bilgisini #inf'ya yazdir

AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, dogerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun 
*/

//let examGrade = prompt("Puani Girin")
//let textInfo;
//let info = document.querySelector("#info")

//if (ExamGrade >= 0 && <= 100) {
//tum if yapilari buraya gelsin
//textInfo = ":("
//info.classList.add('text-primary')
//if (examGrade >= 90) {
//textInfo += " AA"
//} else if (examGrade >= 85) {
//textInfo += "Ba"
//} else if (examGrade >= 80) {
//textInfo += "BB"
//} else if (examGrade >= 75) {
//textInfo += "CB"
//} else if (examGrade >= 70) {
//  textInfo += "CC"
//} else if (examGrade >= 65) {
//textInfo += "DC"
//} else if (examGrade >= 60) {
//  textInfo += "DD"
//} else if (examGrade >= 50) {
//  textInfo += "FD"
//} else if (examGrade < 50) {
//  textInfo += "FF :("
//info.classList.remove('text - primary')
//info.classList.add('text-danger')
//}
//} else {
//textInfo = "Bilgiler Dogru Degil"
//}
//info.innerHTML = `${textInfo} -> ${examGrade}`


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************             Ilk fonksiyonumuzu tanimlamak                           ***************************************/

//function helloWorld() {
//console.log("Hello World")
//}

//function hello() {
//  console.log("Merhaba")
//helloWorld()
//}



// hata alabiliriz
//function userCheck() {
//  if (userName && age >= 18) {
//    info.innerHTML = "ehliyet alabilirsiniz"
//} else if (!userName) {
//  info.innerHTML = "Kullanici adiniz yok"
//} else if (!(age >= 18)) {
//  info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz"
//}
//}

//hello() //calistir

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/********************************  Fonksiyonlara parametreler atamak ve fonksiyondan geridonus almak    ***************************/

//Temek kurallar:
//1: Bir fonksiyon bir veya birden fazla parametre alabilir veyahic almayabilir
//2: Bir fonksiyon disari bilgi gonderebilir(return) veya gondermeyebilir
//3: Mumkunse fonsiyonun bagimliliklarini azaltmak gerekir


//let firstName = "isa"

//function greetings(firstName = "", lastName = "") { // default parametre aliyor..
// console.log(`Merhaba ${firstName ? firstName : ""}`)
// console.log(`Merhaba ${firstName}`)
//console.log(`Merhaba ${firstName} ${lastName}`)
//}

//console.log(firstName) // degisken
//greetings() // fonksiyona parametre gondermek ??
//greetings("Parametre")

//function greetings2(firstName, lastName) {
//   let info = `Merhaba ${firstName} ${lastName}`
// return info
//}

//let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // ??
//console.log(greetingsInfo)

//function domIdWriteInfo(id, info) {
//  let domObject = document.querySelector(`#${id}`)
//domObject.innerHTML = info
//}

//let htmlInfo = `<span style="color:red">Color REDDDD</span>`

//domIdWriteInfo('greeting', htmlInfo)
//domIdWriteInfo('info', greeting2("Lorem", "Ipsum"))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/****************************        Arrow function kullanimi          **************************************** */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//function hello(firstName) {
//  console.log(`Merhaba ${firstName}`)
//}

//hello("JavaScript")

//const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }
//helloFuncV1("helloFuncV1")

//const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`) //bir parametre,bir donus islemi
//helloFuncV2("helloFuncV2")

//const helloFuncV3 = (firstName, lastName) => console.log(
//      `Merhaba ${firstName} ${lastName}`
//) // console.log parantezi

//helloFuncV3("helloFuncV3", "Last Name info")

//const helloFuncV4 = (firstName, lastName) => {
//  let info = `Merhaba ${firstName} ${lastName}`
//console.log(info)
//return info
//}

//helloFuncV4("helloFunV4", "Other info")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/****************************   DOM Etiketleriyle Calismak      *****************************/

//https://www.w3schools.com/jsref/dom_obj_event.asp
//https://developer.mozilla.org/en-US/docs/Web/Events

//let greeting = document.querySelector("#greeting")
//greeting.addEventListener("click", domClick)

//  function domClick() {
//  console.log("etkinlik denetlendi")
//  this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
//  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//****************************** Functions Bolum sonu egzersizi *********************************************/


//let counter = 0
//let counterDOM = document.querySelector('#counter')
//let increaseDOM = document.querySelector('#encrease')
//let decreaseDOM = document.querySelector('#devrease')

//counterDOM.innerHTML = counter

//increaseDOM.addEventListener("click", clickEvent)
//decreaseDOM.addEventListener("click", clickEvent)

//function clickEvent() {
//console.log(this.id)
//this.id == "increase" ? counter += 1 : counter -= 1
//counterDOM.innerHTML = counter
//}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/******************************* Local Storagee ********************************************************/
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// localStorageicerisine bigli kaydetmek:
//let email = "isakayabasi@gmail.com"
//localStorage.setItem('userEmail', email) // -> anahtar, deger yapisi kullanilabilir(key, value)

//localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
//let localStorageEMailInfo = localStorage.getItem('userEmail') // dahaonce atadigimiz anahtar bilgisi

//console.log(localStorageEMailInfo)

//localStorage icerisinden istenilen Keybilgisinin silinmesi:
//localStorage.removeItem('userEmail') // key bilgisini yazarak silebilirsiniz.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/***********************       Local storage islemleri       *************************************/

//eger tutacagimiz bilgiobject ise JSON.stringify ile objeyi string yapmaya cevirebilirsiniz.

//let user = { userName: "isakayabasi", isActive: true }
//console.log(user)
//locelstorage.setItem('userInfo', JSON.stringify(user))

//let userInfo = localStorage.getItem('userInfo') //bilgiyi al
//userInfo = JSON.parse(userInfo)
//console.log(userInfo)

// 2. egzersiz:
//let items = [1, 2, 3, user]
// localstorage.setItem('newItems',items)            // hatali
//localStorage.setItem('newItems', JSON.stringify(items))

//let newItems = JSON.parse(localStorage.getItem('newItem')) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************           localStorage Bolum sonu egzersizi         *************************/

//let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
//let counterDOM = document.querySelector('#counter')
//let increaseDOM = document.querySelector('#increase')
//let decreaseDOM = document.querySelector('#decrease')

//counterDOM.innerHTML = counter

//increaseDOM.addEventListener("click", clickEvent)
//decreaseDOM.addEventListener("click", clickEvent)

//function clickEvent() {
//this.id == "increase" ? counter += 1 : counter -= 1
//localStorage.setItem('counter', counter)
//counterDOM.innerHTML = counter
//}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***************************      FORM SUBMIT        *********************************************/

//let formDOM = document.querySelector("#userForm")
//formDOM.addEventListener('submit', formSubmit)

//function formSubmit(event) {
//  event.preventDefault() // default islemi engelledik
//console.log("islemi gerceklesti")
//}

//////////////////////////////////////////////////////////////////////////////////////////////////

/*********************         INPUT icindeki degeri(value)  almak       *****************************/


//let formDom = document.querySelector("#userForm")
//formDom.addEventListener('submit', formSubmit)

//function formSubmit(event) {
//  event.preventDefault() // default islemi engelledik
//console.log("islem gerceklesti")


//let scoreInputDOM = document.querySelector('#score')
//console.log(scoreInputDOM.value)
//localStorage.setItem('score', scoreInputDOM.value)
//}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**************************   FORMLARLA CALISMAK: BOLUM SONU EGZERSIZI   ***********************/


/*
1: Formu sec
2: Input bilgisini UL icerisine ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

//let userForDOM = document.querySelector('#userForm')
//userFormDOM.addEventListener('submit', formHandler)
//const alertDOM = document.querySelector('#alert')

//const alertFunction = (title, message, className = "warning") => `
//<div class="alert alert-${className} alert-dismissible fade show" role="alert">
//<strong>${title}</strong> ${message}
//<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//</div>
//`

//function formHandler(event) {
//  event.preventDefault()
//const USER_NAME = document.querySelector("#username")
//const SCORE = document.querySelector("#score")

//if (USER_NAME.value && SCORE.value) {
//  addItem(USER_NAME.value, SCORE.value) // gonderdikten sonra sifirladik
//USER_NAME.value = ""
//SCORE.value = ""
//}
//else {
//  alertDOM.innerHTML = alertFunction(
//    "Baslik Bilgisi",
//  "Eksik Bilgi Girdiniz",
//"success"
//)
//}
//}

//let userListDOM = document.querySelector('#userList')

//const addItem = (userName, score) => {
//  let liDOM = document.createElement('li')
//liDOM.innerHTML = `
//$ { userName } <
//span class = "badge bg-primary rounded-pill" > $ { score } < /span>
//`
//  liDOM.classList.add(
//    'list-group-item', 'dflex', 'justify-content-between', 'align-items-center'
// )
//userListDOM
//}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/****************   array  -  dizilerle calismak  **************************/

// Array olusturmak
//let domain = "kodluyoruz"
//let isActive = false
//let items = [15, 25, 35, isActive, domain]
//console.log(items)

//let emptyArray = [] // bos list

// Array icerisindeki eleman/oge sayisini ogrenmek
//console.log(
//  items.length // array icerisindeki oge sayisi
//)

// document.querySelector('#info').innerHTML =items.length

// Array icindeki ilk elemanin cagirilmasi
//console.log(items[0])

//Array icindeki son elemanin cagirilmasi
//console.log(
//"ortadaki :",
//items[Math.floor(items.length / 2)]
//)

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
//console.log(items) //  object olarak cikti veriyor

//console.log(
//Array.isArray(items)
//)

//hangileri isArray -> True verir ?

//comsole.log("[]:", Array.isArray([]))
//console.log("1 :", Array.isArray(1))
//console.log("true:", Array.isArray(true))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/********************   Array yapisina oge eklemek ve Array icerisinde istenilen ogenin cikarilmasi  ***********************/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//let items = [10, 20, 30, 40, ]
//console.log("items - ilk hali : ", items)

//Array sone oge/eleman eklemek -> push
//items.push(50)
//console.log("50 : ", items)

//Array : basa oge eklemek -> unshift
//items.unshift(5)
//console.log("5:", items)

//Array: sondaki ogeyi cikarmak  -> pop
//let lastItem = item.pop() // son elemani lastItem icerisine ekledik
//console.log("lastItem: ", lastItem, "items:", items)

//Array:bastaki ogeyi cikarmak -> shift
//let firstItem = item.shift() // ilk elemani firstItem icerisine ekledik
//console.log("firstItem:", firstItem, ",items:", items)

// Array icindeki birogenin bilgisinin degistirilmesi:


//ilk ogenin degistirilmesi
//item[0] = 5;
//console.log(items)

//sonuncu ogenin degistirilmesi:
//items[items.length - 1] = 1000
//console.log(items)

//items[2] = 10000
//console.log(items)


/////////////////////////////////////////////////////////////////////////////////////////////////////////

/**************   cok kullanilan array (dizi) metotlari ve array icinde array       ******************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www/w3schools.com/js/js_array_methods.asp

//let items = [1, 2, 3, 4, 5]

// Array icinde Array:
//let femaleUsers = ["Ayse", "Hulya", "Merve"]
//let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

//items.unshift(femaleUsers)

//items.push(maleUsers)

//console.log(items)

//console.log(items.length)
//console.log(items[0].lenght) // Array icindeki istedigimiz Array'in length bilgisini aldik
//console.log(items[0][0]) // Ayse bilgisine ulastik

// Array icerisinden oge ayirmak -> splice (pos, item?)
//let newItems = items.splice(1, 5)

//console.log("newItems:", newItems)
//console.log("items:", items)

//Array icerisindeki ogenin index bilgisini bulmak  -> indexof('value)

//items.unshift("Lorem")
//items.push("Ipsum")

//console.log(items.indexOf("ipsum"))

// Arraykopyalamak -> slice, [...ES6]
//let copyItems = items
//console.log(items)

//copyItems.pop() // son ogeyi cikarttik
//console.log("copyItems", copyItems)
//console.log("items", items)

//console.log("kopyalandiktan sonraki hali:")
//copyItems = items.slice() // kopyalama yapti
//copyItems.pop() // son ogeyi cikarttik
//console.log("coptItems", copyItems)
//console.log("items", items)

//let es6Items = [...items] // es6 ve sonrasinde gelen kopyalama islemi
//console.log(es6Items)

// iki Arraybilgisini birlestirmek ->[...es6, ...es6]
//let allUsers = [...femaleUsers, ...maleUsers] // es6 birdan fazla array yapisini birlestirmek
//console.log(allUsers)

//Array icerisindeki bilgiyi String'e cevirmek -> toString, join
//console.log(allUsers.toString())
//console.log(allUsers.join("---"))


//istedigimiz index bilgisine oge eklemek -> splice(index, 0, value)
//allUsers.splice(allUsers.length - 1, 0, "Melissa")
//allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem")
//console.log(allUser)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*****************************       FOR  dongusu          ******************************/

// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

// for ([baslangisAtamasi]; [kosulIfadesi]; [arttirimIfadesi])
//yapilacak islem
//}

//let users = ["Lorem", "Ipsum", "Dolor", ]

//for(let index = 0; index < 10; index++){
//console.log(index)
//}

//let index = 0

// for (; index < 10; index++){
// console.log(index)
// }

//const userListDOM = document.querySelector('#userList')

//for (index = 0; index < users.length; index++) {
//const liDOM = document.createElement('li')
//liDOM.innerHTML = users[index]
//  userListDOM.appendChild(liDOM)
//}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*********************           Break & Continue            **************************/

// https://www.w3schools.com/js/js_break.asp

//const LOREM_LIST = [
//        'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', "elit"
//]

//let counter = 0

//for (; counter < 10; counter++) {
//console.log(counter)
//if (counter === 5) { break }
//}

//for (; counter < 10; counter++) {
//if (counter === 5) { continue }
//  console.log(counter)
//}


//const UL_DOM = document.querySelector('#userList')

//let index = 0

//for (; index < LOREM_LIST.length; index++) {
//  if (LOREM_LIST[index] == "dolor") { break }
//let LI_DOM = document.createElement('li')
//LI_DOM.innerHTML = LOREM_LIST[index]
//UL_DOM.append(LI_DOM)
//}

//for (; index < LOREM_LIST.length; index++) {
//if (LOREM_LIST[index] == "dolor") { continue }
//let LI_DOM = document.createElement('li')
//LI_DOM.innerHTML = LOREM_LIST[index]
//  UL_DOM.append(LI_DOM)
//}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**************************        While dongusu kullanimi           ****************************************/

// https://www.w3schools.com/js/js_loop_while.asp


// let counter = 0

// while (counter < 10) {
// console.log(counter)
// counter++
// }

//let userName = ""

//while (!userName) {
//userName = prompt("Kullanici adini Giriniz: ")
//  console.log(userName)
//}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************      Array forEach Metodu     *****************************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

//const PRODUCTS = ["Laptop", "Phone", "Speaker", "Deskop PC", "Server", "Mouse", "Keyboard"]

//PRODUCTS.forEach((product, index, array) => array[index] = product + "111")
//PRODUCTS.forEach((products, index, array) => array[index] = `${product.toUpperCase()}`) // toUpperCase

//console.log(PRODUCTS)

/*****
 const userListDOM = document.querySelector('#userList')

 for   (index = 0; index < users.length;index++) {
     const liDOM = document.createElement('li')
     liDOM.innerHTML = users[index]
     userListDOM.appendChild(liDOM)
 }

 */

//const userListDOM = document.querySelector('#userList')

//PRODUCTS.forEach(item => {
//  const liDOM = document.createElement('li')
//liDOM.innerHTML = item
//userListDOM.append(liDOM)
//})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*****************          Array filtre kullanimi      ************************/
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar (6) ??

//const PRODUCTS = ["Mic", "Cable", "Speaker", "Deskop PC", "Server", "Mouse", "Keyboard"]

//const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
//console.log(NEW_PRODUCTS)

// Aktif kullanicilar ??
//const USERS = [
//  { fullName: "Ayse SUMER", isActive: false },
//{ fullName: "Ahmet KURGAN", isActive: true },
//{ fullName: "Asya BASAR", isActive: true }, { fullName: "Aksel DURNAZ", isActive: false },
//]

//const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
//const ACTIVE_USERS = USERS.filter(user => user.isActive)
//console.log(ACTIVE_USERS)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/*******************   array map kullanimi          *******************/

//const USERS = ["AYSE", "MehMET", "TugCE", "AkSEL"]

//userNAme icinde orjinal isim kalsin,
//shortName icinde ilkharf buyuk. (A.)
//newName icinde ilk harf buyuk olsun
//{userName: "AYSE", shortName: "A.", newName: "Ayse"}

//const NEW_USERS = USERS.map(user => user.toLowerCase())
//console.log(NEW_USERS)

//const USERS_OBJ =USERS.map(item =>
//{
//return{
//userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//}
//}
//)

//const USERS_OBJ = USERS.map(item => ({ userName: item, shortNAme: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
//  )
// )

//console.log(USERS_OBJ)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***************************     OBJECT(Nesne) nedir ?  Nasil olusturulur ?  *********************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

//let arrayObj = [1, 2, 3]
//let object1 = { obj: 1 }

//console.log("arrayObj", typeof(arrayObj))
//console.log("object1", typeof(object1))

//let item1 = new Object()
//let irem2 = {}
//console.log("item1", typeof(item1))
//console.log("item2", typeof(item2))

//Object olusturmak 
//let item3 = {}
//let item4 = new Object()

//console.log("object1", object1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/********************************         Object Key - Value     *******************************************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

//[key1:1, key2:2, key3:3,]
// let laptop1 = {
//     brand: "Apple",
//     model: "Macbook pro",
//     "2kg": 2,
//     modelName: "Macbook pro",
//     //model-name:"Macbook pro",
//     model_name: "Macbook pro"
// }


// console.log(laptop1)
//     // Dogru anahtar bilgisi olurturmak

// console.log(laptop1.brand, laptop1["brand"])
// console.log(laptop1.model, laptop1["model"])
// console.log(laptop1["2kg"])

// //Anahtar bilgisine yeni deger eklemek
// laptop1.brand = "Mac"
// laptop1["brand"] = "Mac1"
// console.log(laptop1)

// //yeni bilgi eklemek
// laptop1.version = "10.15.7"
// console.log(laptop1)

// //Anahtar Bilgilerine ulasmak (keys) -> Object.keys(item)
// keys = Object.keys(laptop1)
// console.log(keys)
// console.log(Object.keys(laptop1))

// keys.forEach(keyInfo => {
//     console.log(keyInfo)
//     console.log(laptop1[keyInfo])
// })

// /// deger bilgilerine ulasmak (values)  -> Object.values(item)
// console.log(
//     Object.values(laptop1)
// )

// let values = Object.values(laptop1)

// values.forEach(value => {
//     console.log("value:", value)
// })

// //tum bilgilerin tek yerde toplanmasi icin object kullanabiliriz 

// let setting = {
//     password: 1234,
//     userName: "user1"
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/****************************     Object icine metot nasil ekleriz       **************************/

// let user1 = {
//     firstName: "isa",
//     lastName: "kayabasi",
//     score: [1, 2, 3, 4, ],
//     isActive: true,
//     shortName: function() {
//         return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
//     }
// };

// console.log(user1)
// console.log(user1.shortName)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**********************     Object ve Array  Destructuring nasil kullanilir     ********************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object destructuting:

// let settings = {
//     userName: "LoremIpsum",
//     password: "BadPassword",
//     isActive: false,
//     ip: "127.0.0.1",
//     serverName: "kodluyoruz.org"
// }

// //obje icindeki bilgilerin tek seferde cikarilmasi
// //let userName= settings.userName
// //console.log(userName)

// //rename && destructuring
// let { userName: user, password, isActive, ip: serverIP, serverName } = settings

// console.log(user, password, isActive, serverIP, serverName)
// console.log(settings)
// console.log(user)


// //obje icindeki bazi bilgilerin cikarilmasi
// let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings
// //eger degisken isme daha once tanimlanmadiysa:
// // let{userName,password,isActive, ...newSettings} = settings

// console.log(userName2, password2, isActive2, newSettings)

// //objenin destructuring ile kopyalanmasi

// // HATALI !!!

// //let settings2 = settings
// //setting2.userName ="Degisen Bilgi"
// //console.log("settings", settings)
// //console.loh("settings2", settings2)

// /////DOGRUSU

// let settings2 = {...settings }
// settings2.userName = "degisen bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2)

// let score = [100, 200, 300, 400]

// let [score1, score2, ...otherScore] = score
// console.log(score1, score2, otherScore)

// //object kopyalama ile ayni... let settings2 = {...settings}
// let copyOfScore = [...score]
// console.log(copyOfScore)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*******************       hata-yonetimi-icin-try-catch-kullanimi          *****************/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://www.w3schools.com/js/js_errors.asp

// let products;


// try {
//     products.forEach(item => console.log(item))
// } catch (error) {
//     console.log("error:", error)
//         //products = [1,2,3]
//         //products.forEach(item => console.log(item));
// }
// console.log("hata yonetimi duzgun calisiyor")

// let info = "kodluyoruz"
// console.log(info)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/******************                fetch api ile calismak                     ***********************/
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// JSON dosyadanveri cekmek:
fetch("data/settings.json").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

let userListDOM = document.querySelector("#userList")

// API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})
