//=================================================
//1-Berilgan massivdagi barcha elementlarni konsolga chiqaring.
// let arr =[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


//=================================================
//2-Massiv elementlarining yig‘indisini hisoblang.
// let number=[1,2,3,4,5,6,7,8,9, 10]
// let sum=0
// for(let i=0;i<number.length;i++){
//     sum+=number[i]
// }
// console.log(sum)


//=================================================
//3-Massivdagi eng katta elementni toping.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max=Math.max(...num)
// console.log(max)


//=================================================
//4-Massivdagi eng kichik elementni toping.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = Math.min(...num)
// console.log(min)


//=================================================
//5-Massivdagi barcha juft sonlarni konsolga chiqaring.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i=0;i<=num.length;i++){
//     if(i%2!=1){
//         console.log(i)
//     }
// }


//=================================================
//6-Massivdagi barcha toq sonlarni konsolga chiqaring.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i=0;i<=num.length;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }


//=================================================
//7-Massivdagi manfiy sonlar sonini hisoblang.
// let num = [-1, -2, -3, -4, 5, 6, 7, 8, 9, 10];
// let sum=0
// for(let i=0;i<num.length;i++){
//     if(num[i]<0){
//        sum++
//   }
// }
// console.log(sum);


//=================================================
//8-Massivdagi musbat sonlar sonini hisoblang.
// let num = [-1, -2, -3, -4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 0) {
//     sum++;
//   }
// }
// console.log(sum);


//=================================================
//9-Massivdagi elementlarning o‘rtacha qiymatini toping.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let sum1=0
// for (let i = 0; i < num.length; i++) {
//     sum+=num[i]
//     sum1++
// }
// console.log(sum/sum1);


//=================================================
//10-Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'olma'];
// for(let i=num.length;i>=0;i--){
//     console.log(num[i]);
// }

//=================================================
//11-Massivning teskari nusxasini yarating.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, "olma"];
// for (let i = num.length; i >= 0; i--) {
//   console.log(num[i]);
// }


//=================================================
//12-Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newnum=[]
// for(let i=0;i<num.length;i++){
//   newnum.push(num[i]*2)
// }
// console.log(newnum)


//=================================================
//13-Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.
// let num = [0, 1, 0, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9, 10];
// let sum=0
// for(let i=0;i<num.length;i++){
//   if(num[i]==0){
//     sum++
//   }
// }
// console.log(sum)


//=================================================
//14-Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.
// let num = [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10, 15];
// let sum=0
// for(let i=0;i<num.length;i++){
//   if(num[i]%5==0 && num[i]!=0){
//     console.log(num[i])
//   }
// }


//=================================================
//15-Massivni tartiblang (o‘sish bo‘yicha).
//TUSHUNMADM


//=================================================
//16-Massivni tartiblang (kamayish bo‘yicha).
//TUSHUNMADM


//=================================================
//17-Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res=[]
// for(let i=0;i<num.length;i++){
//   res.push(num[i]+3)
// }
// console.log(res)


//=================================================
//18-Massivdagi barcha musbat sonlarni alohida massivga ajrating.
// let num = [-6, -3, -61, 2, 3, 4, 5, 6, -9, -7, 8, -9, 10];
// let res=[]
// for(let i=0;i<num.length;i++){
//   if(num[i]>0){
//     res.push(num[i])
//   }
// }
// console.log(res)


//=================================================
//19-Massivdagi barcha manfiy sonlarni alohida massivga ajrating.
// let num = [-6, -3, -61, 2, 3, 4, 5, 6, -9, -7, 8, -9, 10];
// let res=[]
// for(let i=0;i<num.length;i++){
//   if(num[i]<0){
//     res.push(num[i])
//   }
// }
// console.log(res)


//=================================================
//20-Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.
// let num = [4, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res=[]
// for(let i=0;i<num.length;i+=2){
//     res.push(num[i])
// }
// console.log(res)


//=================================================
//21-Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmalarini alohida massivlarga ajrating.

//Yarmalarini Tushunmadm va Massivdagi elementlarni 2ga bo'lib qoyaverdim.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i=0;i<num.length;i++){
//   console.log(num[i]/2)
// }


//=================================================
//22-Massivda nechta element 10 dan katta ekanini aniqlang.
// let num = [19, 2, 3, 0, 41, 5, 6, 7, 81, 9, 10, 15];
// let sum=0
// for(let i=0;i<num.length;i++){
//   if(num[i]>10){
//     sum++
//   }
// }
// console.log(`${sum} ta`)


//=================================================
//23-Massivdagi barcha elementlarni 0 ga almashtiring.
// let num = [19, 2, 3, 0, 41, 5, 6, 7, 81, 9, 10, 15];
// for(let i=0;i<num.length;i++){
//   console.log(num[i] * 0);

// }


//=================================================
//24-Massivning birinchi elementini oxiriga o‘tkazing.
//Tushunmadm


//=================================================
//25-Massivning oxirgi elementini boshiga o‘tkazing.
//Tushunmadm


//=================================================
//26-Massivdan har ikkinchi elementni o‘chiring.
//TUSHUNMADM


//=================================================
//27-Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.
// let num = [-6,6, -3, -61, 2, 3, 4, 5, 6, -9,3, -7, 8, -9, 10];
// for(let i=0;i<num.length;i++){
//     if(num[i]<0){
//        console.log(num[i]*-0)
//     }else{
//         console.log(num[i])
//     }
// }


//=================================================
//28-Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.
// let num = [5,1, 2, 3, 4, 5,6, 6, 7, 8, 9, 10];
// let res=[]
// for(let i=0;i<num.length;i++){
//     res.push(num[i]*i)
// }
// console.log(res)


//=================================================
//29-Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.
// let num = [19, 2, 3, 0, 41, 5, 6, 7, 81, 9, 10, 15];
// for(let i=0;i<num.length;i++){
//     if(num[i]%3==0 && num[i]!=0){
//         console.log(num[i])
//     }
// }


//=================================================
//30-Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak).
//TUSHUNMADM


//=================================================
// //31-Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.
// let num = [19, 2, 3, 0, 41, 5, 6, 7, 81, 9, 10, 15];
// for(let i=0;i<num.length;i+=2){
//     console.log(num[i])
// }


//=================================================
//32-Massivdan 2 ga karrali sonlarni olib tashlang.
/// for(let i=0;i<num.length;i++){
//     if(num[i]%2!=0){
//         console.log(num[i])
//     }
// }


//=================================================
//33-Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,23,3];
// let orta=num.length/2
// let ortajuft=num.length/2+1
// for(let i=0;i<num.length;i++){
//     if(num[i]!=orta && num[i]!==ortajuft){
//         console.log(num[i])
//     }
// }


//=================================================
//34-Massivning birinchi va oxirgi elementlarini almashtiring.
// let num = [1, 2, 3, 4, 5, 6, 7,70, 8, 9, 10];
// let birirnchi=num[0]
// let oxirigi=[num.length-1]

// num[0]=oxirigi
// num[num.length-1]=birirnchi

// console.log(num)


//=================================================
//35-Massivni boshqa massiv bilan birlashtiring.
// let num = [1, 2, 3, 4, 5];
// let num1 = [6, 7, 8, 9, 10];
// for(let i=0;i<num1.length;i++){
//     num.push(num1[i])
// }
// console.log(num)


//=================================================
//36-Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res=[]
// for(let i=0;i<num.length;i++){
//    res.push(num[i]/3)
// }
// console.log(res)


//=================================================
//37-Massivdan manfiy sonlarni olib tashlang.
// let num = [1, -2, 3, 4, 5, -6, 7, 8, 9, 10];
// let res=[]
// for(let i=0;i<num.length;i++){
//     if(num[i]>0){
//         res.push(num[i])
//     }
// }
// console.log(res)


//=================================================
//38-Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res=[]
// for (let i = 0; i < num.length; i++) {
//     if(i%2==0) {
//         res.push(num[i]*0)
//     }else{
//         res.push(num[i])
//     }
// }
// console.log(res)


//=================================================
//39-Massivdan takroriy elementlarni olib tashlang.
//TUSHUNMADM


//=================================================
//40-Massivning o‘rta indeksiga yangi element qo‘shing.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res=[]
// let orta=Math.floor(num.length/2)
// for(let i=0;i<num.length;i++){
//     if(i==orta){
//         res.push("salom")
//     }
//     res.push(num[i])
// }
// console.log(res);


//=================================================
//41-Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.
//TUSHUNMADM

//=================================================
//42-Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).
// let num = [1, 2, 3, 4, 5, 6, 7,70, 8, 9, 10];
// let oxirigi=[num.length-1]
// num.length=num.length-1
// num.unshift(oxirigi)
// console.log(num)


//=================================================
//43-Massivni aylantiring (birinchi elementni oxiriga qo‘ying).
// let num = [345, 1, 2, 3, 4, 5, 6, 7, 70, 8, 9, 10];
// let boshi = num[0];
// num.shift()
// num.push(boshi)
// console.log(num);


//=================================================
//44-Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring.
// let num = [-6, 6, -3, -61, 2, 3, 4, 5, 6, -9, 3, -7, 8, -9, 10];
// let musbat = []
// let manfiy = [];
// for(let i=0;i<num.length;i++){
//     if(num[i]>0){
//         musbat.push(num[i])
//     }else if(num[i]<0){
//         manfiy.push(num[i])
//     }
// }
// let num2=[...musbat,...manfiy]
// console.log(num2)


//=================================================
//45-Massivning eng kichik elementini o‘chiring.
// let num = [345, 1, 2, 3, 4, 5, 6, 7, 70, 8, 9, 10];
// let min=(Math.min(...num))
// for(let i=0;i<num.length;i++){
//     if(num[i]!=min){
//         console.log(num[i])
//     }
// }


//=================================================
//46-Massivning eng katta elementini o‘chiring.
// let num = [345, 1, 2, 3, 4, 5, 6, 7, 70, 8, 9, 10];
// let max = Math.max(...num);
// for (let i = 0; i < num.length; i++) {
//   if (num[i] != max) {
//     console.log(num[i]);
//   }
// }


//=================================================
//47-Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i=0;i<num.length;i++){
//     console.log(num[i]*2)
// }


//=================================================
//48-Massivdan bir xil qiymatlarni olib tashlab, faqat noyob qiymatlarni qaytaring.
//TUSHUNMADM
//=================================================
//49-Massiv elementlarini karralik bo‘yicha (2, 3, 5 kabi) guruhlarga ajrating.
//TUSHUNMADM
//=================================================
//50-Massivni aylantirish (rotation) orqali 3 marta oldinga suring.
//TUSHUNMADM





