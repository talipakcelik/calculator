# calculator_project_top
###### gidişat yönergesi / walkthrough
- (1) hesap makinesindeki number'lara  `forEach` ile seçildi.
	- (1.1) sonrasında da  `.addEventListener('click', function ()` ile hepsi dinlenmeye başlandı
	- (1.2) primaryvalue değeri htmll attribute value değerine eşitlendi. 
		-  yani 5'e ardından 6'ya basılınca primaryvalue string olarak 56 oluyor.
	- (1.3) primary değeri blankscreen.textContent içerisine yazdırıldı.
		- böylece hesap makinesinin ekranında göründü.
- (2) hesap makinesindeki operatorlerin her biri `forEach` ile seçildi. 
	- (2.1) `if (primaryValue && secondaryValue) {
      calculate();}`
		- bu aslında *repeadet addition* işlemini yapan olay.
		- art arda sadece dört operatörden birisini kullanarak (+-/x) mesela toplama işlemi yapmanın yolu, `=`i kullanmadan. 
		- şayet, pV ile sV mevcutsa yani bu değişkenlere herhangi bir değer atanmışsa, operator butonuna basıldığı anda `calculate()`i çağır. hesapla yani.
	- (2.2) secondaryValue değeri, daha önceki aşamadan gelen primaryValue eşitlenecek.
		- böylece ekrana ilk yazılan değer ==depolanmış== olacak.
		- bu noktada artık primaryValue = secondaryValue  
	- (2.3) `operator = el.textContent;` ile operator değişkeninin değeri, hesap makinesinde yer alan butonların textContent'iyle eşleştirildi.
		- yani `+`'ya basıldığında operator = `+` olacak.
		- sonrasında da var olan `operate` fonksiyonuna atıf yapmış olacak. 
			- `if (operator === '+')` gibisinden. 
	- (2.4) ``blankScreenUp.textContent = `${primaryValue} ${operator}`;`` 
		- sanırım burada pV ile sV olmasının bir önemi yok. birbirine eşitlediğimiz için aynı mevzu.
		- yani ekranın üstüne yazdırıyor.
	- (2.5) `primaryValue = '';`
		- en son tekrardan primaryValue sıfırlandı. 
		- çünkü operatörden tekrar number'a basmaya geçince, ekrandaki bS.textContent değerinin de sıfırlanmasını istiyoruz.
		- bunu yapmamış olsak, kaldığı yerden yazmaya devam edicek. 
- `calculate()`in içine `primaryValue = result;` eklenmesinin nedeni,
	- eklemezsek, pV değeri bSUp.textContent tarafından yazmaya devam ediyor.
	- bS.textContent böylece 65 oluyor. 
	- buradaki sıkıntı *pv = result* eklenince bStextContent'te yer alan result sonucuna eklenerek yazmaya devam ediyor.
		- sanırım zaten istenilen de bu. 
	- peki bunun yerine `primaryValue = '';` eklenirse ne olur?
		- bS'yi baştan yazmaya başlıyor.
			![[2021-12-31_01-50-25.mp4]]
- `calculete()` içerisinde sonucu hesaplarken `operate()` fonksiyonun argümanlarına ilk olarak secondaryValue sonra primaryValue, aslında bir nevi ters gibi. ancak düzgün işlemesi için, bu şekilde olması gerekti.
	- ufak bir detay. 
