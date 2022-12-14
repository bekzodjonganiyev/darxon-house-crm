import React from "react";

const PdfDocument = (props) => {
  const styles = {
    page: {
      marginLeft: "5rem",
      marginRight: "5rem",
      "page-break-after": "always",
      padding: "3rem",
      fonSize:"15px"
    },

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "3rem 0 5rem 0",
      gap: "2rem",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    spacer2: {
      height: "2rem",
    },

    fullWidth: {
      width: "100%",
    },

    marginb0: {
      marginBottom: 0,
    },
  };
  const a = `Uy-joy qurilishiga investitsiya kiritish haqida
  № 3/40 - sonli ShАRTNOMА
  
  Toshkent shahri							 “_____” _____________ 2022 yil
  
  Pasport seriyasi АА6432505 Jizzax viloyati Doʼstlik tumani IIB tomonidan 04.08.2014 sanada berilgan Oʼzbekiston Respublikasi fuqarosi Julbekov Toirbek Yuldashevich (keyingi oʼrinlarda – “Investor”) bir tomondan, «New Times Buildings» MChJ nomidan ustav asosida faoliyat yurituvchi direktor D.R.Malikov (keyingi oʼrinlarda – “Uy-joy quruvchi”) ikkinchi tomondan hamda “Oʼzshahar qurilish invest” injiniring kompaniyasi MChJ nomidan 2022 yil 5 yanvardagi 03/08-sonli ishonchnoma asosida faoliyat yurituvchi direktor oʼrinbosari А.N.Xanbabaev (keyingi oʼrinlarda – “Texnik buyurtmachi”), uchinchi tomondan birgalikda “Tomonlar” deb nomlanuvchilar mazkur shartnomani quyidagilar haqida tuzdilar:
  
  1.	АSOSIY TUShUNChАLАR
  
  1.2.	Ushbu shartnoma matnining keyingi oʼrinlarida uchraydigan barcha atamalar, agar kontekstdan boshqacha maʼno anglanmasa, quyidagi boʼlimda bayon qilingan tushunchalarni anglatadi:
  “Uy-joy majmuasi” – Qonun hujjatlarida belgilangan tartibda zamonaviy qurilish materiallari va texnologiyalarini respublika mintaqalarining tabiiy-iqlim sharoitlarini va joyning relьefini, ijtimoiy-demografik xususiyatlarini hisobga olgan holda ishlab chiqilgan loyiha-smeta hujjatlariga asosan maʼlum bir hududda, barcha qurilish meʼyorlariga mos ravishda, foydalanishga tayyor holatda, atrofida obodonlashtirish va muhandislik- kommunikatsiya tarmoqlari bilan birgalikda qurilgan ikki yoki undan ortiq koʼp qavatli uy-joylar majmuasi;
  “Investor” - “Uy-joy majmuasi”dagi koʼp qavatli uy-joylardan mazkur shartnomaga asosan unga ajratilgan xonadonni “Uy-joy quruvchi” tomonidan keyinchalik unga mulk huquqi asosida topshirilishi sharti bilan “Uy-joy majmuasi” qurilishiga maʼlum miqdordagi pul mablagʼi koʼrinishida investitsiya kirituvchi jismoniiy shaxs;
  “Uy-joy quruvchi” - “Uy-joy majmuasi” qurilishi uchun barcha zarur hujjatlar, xususan loyiha-smeta hujjatlarini rasmiylashtirish, pudratchilarni tanlash, qurilish ishlarining oʼz vaqtida va sifatli bajarilishi yuzasidan texnik nazoratni amalga oshirish, “Uy-joy majmuasi”ni oʼz muddatida foydalanishga topshirish, shuningdek “Investor” mablagʼlaridan maqsadli va samarali foydalanilishi funktsiyalari yuklangan holda, “New Times Buildings” MChJ;
  “Texnik buyurtmachi” - “Uy-joy quruvchi” bilan rasmiylashtirilgan ikki tomonlama shartnomaga muvofiq, “Uy-joy majmuasi” boʼyicha tegishli loyihalashtirish ishlarini amalga oshiruvchi, qurilish ishlari ustidan doimiy texnik nazoratni olib boruvchi, shuningdek, kvartiralarni talabgorlarga sotilishi yuzasidan tegishli xizmatlarni koʼrsatuvchi “Oʼzshahar qurilish invest” injiniring kompaniyasi MChJ;
  “Kvartira” – “Uy-joy majmuasi” qurilishi yakunlanib, foydalanishga topshirilgandan soʼng oʼziga yuklatilgan barcha majburiyatlarni oʼz muddatida va toʼliq bajargan “Investor”ga mulk huquqi asosida topshiriladigan koʼchmas mulk obʼekti;
                       
  2.	MUHIM ShАRTLАR
   
  2.2.	Ushbu shartnoma boʼyicha munosabatlar Oʼzbekiston Respublikasi Fuqarolik kodeksi, Oʼzbekiston Respublikasi Prezidentining 28.11.2019 yildagi PF-5886-son, 11.03.2021 yildagi PF-6186-sonli hamda
  2021 yil 9 dekabrdagi PF-33-sonli Farmonlari bilan oʼrnatilgan yangi tartib va boshqa qonun hujjatlari asosida tartibga solinadi.
  
  3.	ShАRTNOMА PREDMETI
  
  3.2.	“Investor” “Uy-joy quruvchi”ning roziligi va mazkur shartnoma shartlariga muvofiq, Toshkent shahar, Yangihayot tumani, Yangidarhon MFY, Navroʼz koʼchasida qurilayotgan “Uy-joy majmuasi”dagi (keyingi oʼrinlarda “Uy-joy majmuasi”) koʼp qavatli uy-joylardan unga ajratilgan xonadonni “Uy-joy quruvchi” tomonidan keyinchalik mulk huquqi asosida topshirilishi sharti bilan “Uy-joy majmuasi” qurilishiga maʼlum miqdordagi pul mablagʼi koʼrinishida investitsiya kiritadi.
  3.3.	“Uy-joy quruvchi” “Investor”ning “Uy-joy majmuasi” qurilishi uchun investitsiya kiritishiga rozilik berib, “Uy-joy majmuasi”dagi 3-sonli koʼp qavatli uyning, 6-qavat, maydoni (shartli ravishda) 69,6 m2 dan iborat, 3 xonali 40-kvartirasini (keyingi oʼrinlarda “Kvartira”) kiritilgan investitsiya mablagʼi evaziga unga ajratib, “Uy-joy majmuasi” belgilangan tartibda foydalanishga topshirilgandan soʼng notarial shartnoma tuzish orqali mulk huquqi asosida unga topshiradi.
  3.4.	Kvartira maydoni loyihaga asosan shartli boʼlib, kadastr hujjatlariga muvofiq kvartira maydoni oʼzgarishi kvartira qiymatiga taʼsir etmaydi
  
  4. TOMONLАRNING HUQUQ VА MАJBURIYaTLАRI
  
  4.1. “Investor”ning majburiyatlari:
  4.1.1. Mazkur shartnomada koʼrsatilgan miqdorda va shartlarda oʼz mablagʼlari va yoki jalb etilgan mablagʼlarni “Uy-joy majmuasi” qurilishiga ushbu shartnomada belgilangan tartibda yoʼnaltirish. 
  4.1.2. Mazkur shartnoma boʼyicha oʼz zimmasiga olgan majburiyatlar bajarilishiga aloqador toʼlov va boshqa hujjatlar nusxalarini “Uy-joy quruvchi”ga taqdim etish.
  4.1.3. “Kvartira”ni “Uy-joy quruvchi”dan mazkur shartnomaga muvofiq topshirish-qabul qilish dalolatnomasi boʼyicha qabul qilib olish.
  4.1.4. Uy-joy quruvchining talabi bilan investorning mablagʼlari, tijorat banklarining kredit mablagʼlar va qonunda taqiqlanmagan boshqa mablagʼlar hisobidan ulush kiritish asosida qurilishga mablagʼlar yoʼnaltirish.
  Mazkur holatda “Investor” ga ulush kiritish uchun tijorat banki tomonidan ipoteka krediti ajratilganda, kredit qarzdorligi va foizlarni oʼz muddatida toʼlash.
  4.1.5. Uy-joy quruvchi masʼul hodimlari tomonilan uy-joydagi qurilish ishlari yakunlanib kvartira foydalanishga tayyor holga keltirilganligi haqida xabar berilgandan soʼng 1 oy muddatda kvartira oldi-sotdisi boʼyicha notarial idorada shartnomani rasmiylashtirish, kvartira qiymatining qolgan qismini oʼz mablagʼlari, tijorat banklarining ipoteka kreditlari va boshqa qonun bilan taqiqlanmagan manbalar hisobidan toʼlash.
  4.1.6. Oʼzbekiston Respublikasi Prenzidentining 2021 yil 19 iyundagi “Koʼp kvartirali uy-joylarni boshqarish tizimini yanada takomillashtirish toʼgʼrisida”gi PQ5152-son qarorining 7g-kichik bandiga asosan 
  2021 yil 1 oktyabrdan boshlab qurilishi tugallangan va foydalanishga qabul qilingan koʼp kvartirali uy-joyni boshqarish birinchi ikki yilda quruvchi tomonidan amalga oshirilishi, mazkur muddatga koʼp kvartirali uy-joy ekspluatatsiyasining kafolat muddati joriy qilinishi, bunda - quruvchi tomonidan mazkur vazifani amalga oshirish uchun shartnomaga asosan boshqaruvchi tashkilot jalb qilinishi mumkinligi belgilanganligidan kelib chiqib, “Uy-joy majmuasi” foydalanishga topshirilgandan soʼng xonadon oldi sotdisi yuzasidan notarial idora orqali shartnoma imzolashdan oldin “Uy-joy quruvchi” tomonidan tavsiya etilgan boshqaruvchi kompaniya bilan “Uy-joy”ni boshqarish yuzasidan shartnoma imzolash. 
  Bunda boshqaruvchi kompaniya bilan tuzilgan shartnoma xonadonga “Investor”ning mulk huquqi davlat roʼyxatidan oʼtkazilgandan soʼng kuchga kirishi nazarda tutiladi.
  4.2. Investorning huquqlari:
  4.2.1. “Uy-joy quruvchi”ning ruxsati bilan vakolatli shaxs hamrohligida qurilishning borishini kuzatib borish, uy-joyning loyihasidan chiqmagan holda qurilish ishlari ustidan takliflar kiritish. Bunda, Investor ishlarning bajarilishi ustidan tekshiruv va nazoratni amalga oshirayotganda qurilish pudrati shartnomasi shartlaridan ishlar sifatini yomonlashtirishi mumkin boʼlgan darajada chekinishni yoki boshqa kamchiliklarni aniqlasa, bu toʼgʼrida darhol “Uy-joy quruvchi”ga xabar berishi shart. Buni xabar qilmagan Investor aniqlangan kamchiliklarni keyinchalik vaj qilib keltirish huquqini yoʼqotadi.
  4.3. Uy-joy quruvchining majburiyatlari:
  4.3.1. Qurilish ishlarini va boshqarishni tashkillashtirish, ishlarni amalga oshirish uchun zaruriy shart-sharoitlarni yaratish.
  4.3.3. Loyiha-smeta hujjatlarini tasdiqlash.
  4.3.4. Uy-joy majmuasini foydalanishga qabul qilish va undagi ajratilgan kvartirani “Investor”ga loyihaga asosan tayyor holda (pod klyuch) foydalanishga topshirish, qabul qilish-topshirish hujjatlarini imzolash.
  4.3.5. Zarurat tugʼilganda “Investor”ning talabiga muvofiq unga buyurtmalarni joylashtirish va ijro etish haqida va obʼektni qurish boʼyicha ishlar qanday bajarilayotganligi haqida maʼlumot berib borish.
  4.3.6. Qurilish-montaj ishlari loyiha hujjatlari, texnik reglament, shartlar standartlar va meʼyoriy, huquqiy hujjatlarga muvofiqligini taʼminlash.
  4.3.7. Vakolatli organlar xulosalari hamda subpudrat tashkilotlari takliflari asosida tegishli hujjatlarga oʼzgartirish va qoʼshimchalar kiritilishini tashkil etadi.
  4.3.8. Obʼektda mehnat muhofazasi va texnika xavfsizligi qoidalariga rioya etilishini taʼminlash. 
  4.3.9. Oʼzbekiston Respublikasi Prenzidentining 2021 yil 19 iyundagi “Koʼp kvartirali uy-joylarni boshqarish tizimini yanada takomillashtirish toʼgʼrisida”gi PQ5152-son qarorining 7g-kichik bandiga asosan foydalanishga topshirilgan koʼp kvartirali uy-joyni boshqarish uchun birinchi ikki yilda boshqaruvchi kompaniya jalb qilish va “Investor”ga tavsiya etish.
  
  4.4. Uy-joy quruvchining huquqlari:
  4.4.1. “Uy-joy majmuasi”ni qurish boʼyicha ishlarni bajarish tartibini oʼz xohishiga koʼra belgilash.
  4.4.2. “Investor” mazkur shartnomaning 5-boʼlimida nazarda tutilgan mablagʼlarni belgilangan muddatlarda toʼlamaganda, ketma-ket 2 oy mobaynida ulush kiritish uchun tijorat banki tomonidan unga ajratilgan ipoteka krediti va foizi boʼyicha toʼlovlarni belgilangan tartibda amalga oshirmaganda hamda oʼzining shartnoma boʼyicha boshqa majburiyatlarini bajarmagan taqdirda mazkur shartnomani bir tomonlama “Investor”ni yozma ogohlantirishsiz bekor qilish.
  4.4.3. Uy-joy quruvchi qurilish davrida investor tomonidan uy-joy qurilishini davom ettirish maqsadida Investor tomonidan oʼz mablagʼlari, tijorat banklarining kredit mablagʼlari va qonunda taʼqiqlanmagan boshqa mablagʼlar hisobidan qurilishni ulush kiritish asosida olib borilishini talab qilishga haqli.
  4.4.4. Oʼrnatilgan tartibda qurilish ishlari yakunlanib, kvartira foydalanishga topshirilganidan soʼng, kvartirani qabul qilib olgan investorda kvartira boʼyicha jiddiy eʼtirozlar yuzaga kelgan holatda investor tomonidan toʼlangan toʼlovlarni toʼliq qaytargan holda kvartira uy-joy quruvchiga qaytarilishi mumkin. 
  4.4.5. Bunda “Investor” ga ulush kiritish uchun tijorat banki tomonidan ajratilgan ipoteka krediti va foizi boʼyicha qarzdorlikni toʼlash muddatlari “Investor” tomonidan buzilishi natijasida tijorat banki tomonidan "Uy-joy quruvchi"dan undirib olingan “Investor”ning qarzdorliklari uy-joy narxi ustiga qoʼshilgan holda kvartira qiymati oshiriladi.
  4.5. Texnik buyurtmachining majburiyatlari va huquqlari:
  4.5.1. Uy-joy majmuasi qurilishiga birlamchi ruxsat beruvchi loyiha oldi va loyiha hujjatlarini rasmiylashtirish.
  4.5.2. Loyiha boshqarilishini va obʼektda qurilish ishlari ustidan tizimli texnik nazorat oʼtkazilishini taʼminlaydi.
  4.5.3. Uy-joy majmuasidagi kvartiralarni talabgorlarga sotuvi va rasmiylashtirish ishlarini tashkillashtirish.
  4.5.4. Oʼz funktsiyalarini amalga oshirish uchun qonun hujjatlariga muvofiq boshqa huquqlarga ega boʼlishi mumkin.
  5.	OʼZАRO HISOB-KITOBLАR, INVESTITsIYa MIQDORI VА TOʼLOVNI АMАLGА OShIRISh TАRTIBI
  
  5.1.	 “Investor” tomonidan pul koʼrinishida kiritiladigan jami investitsiya mablagʼi miqdori unga ajratilgan va keyinchalik mulk huquqi asosida topshiriladigan kvartira qiymatiga mos ravishda 480 240 000 (toʼrt yuz sakson million ikki yuz qirq ming) soʼmni tashkil qiladi (kvartira qiymati QQS bilan). 
  5.2.	Investitsiya kiritish (toʼlovni amalga oshirish) turlari quyidagicha:
  a) Oldindan 100% toʼlov; _________________________ (“Investor” imzosi)
  b) Boʼlib-boʼlib toʼlash; ___________________________ (“Investor” imzosi)
  v) Ipoteka krediti rasmiylashtirish (ulush kiritish) orqali toʼlash. ______________ (“Investor” imzosi)
  5.3. “Investor” tomonidan mazkur shartnomaning 5.2.-bandida koʼrsatilgan investitsiya kiritish turi tanlanadi va yoniga “Investor”ning imzosi qoʼyiladi, toʼlovni amalga oshirish tartibi shartnomaning keyingi bandlarida shunga qarab belgilanadi.
  5.4. “Investor” tomonidan shartnomaning 5.2. a) bandidagi toʼlov turi tanlanganda investitsiya mablagʼi investor tomonidan mazkur shartnoma imzolangandan soʼng 10 bank ish kuni ichida oldindan 100 % miqdorda amalga oshiriladi.
  5.5. “Investor” tomonidan shartnomaning 5.2. b) bandidagi toʼlov turi tanlanganda Dastlabki investitsiya mablagʼi jami investitsiya mablagʼining 26 foizi, 124 862 400 soʼmni tashkil qilib, mazkur shartnoma imzolangandan soʼng “Investor” tomonidan 10 (oʼn) kun ichida hamda 355 377 600 soʼm investitsiya qoldiq mablagʼi mazkur shartnomaning ajralmas qismi hisoblangan 1-ilovasida belgilangan grafik asosida malga oshiriladi.
  5.6. “Investor” tomonidan shartnomaning 5.2. v) bandidagi toʼlov turi tanlanganda Dastlabki investitsiya mablagʼi jami investitsiya mablagʼining 26 foizi, 124 862 400 soʼmni tashkil qilib, mazkur shartnoma imzolangandan soʼng “Investor” tomonidan 10 (oʼn) kun ichida hamda 355 377 600 soʼm qoldiq investitsiya mablagʼi koʼp qavatli uy-joylarning kadastr hujjatlari tayyorlangandan soʼng yoki qurilish davrida uy-joy majmuasi qurilishi investor tomonidan ulush kiritish asosida ajratilgan kredit mablagʼlari hisobidan amalga oshirilishi yuzasidan ogʼzaki xabardor (telefon, telegram va boshqa aloqa vositalari orqali) qilinganidan soʼng, 1 oy muddat ichida oʼz mablagʼlari yoki bankning ipoteka krediti mablagʼlari hisobidan toʼlov amalga oshiriladi. Аgar bank ipoteka krediti ajratish sharti sifatida “Investor”dan boshlangʼich toʼlov shakllantirishni talab qilgan taqdirda “Uy-joy quruvchi” “Investor” tomonidan toʼlangan dastlabki investitsiya mablagʼini uning bankda ochilgan omonat hisob-raqamiga oʼtkazib beradi. Bunda “Uy-joy quruvchi” bankda ipoteka krediti rasmiylashtirilishini tashkil etish majburiyatini oʼz zimmasiga olmaydi.
  5.7. “Investor” tomonidan Mazkur shartnomaning 5-boʼlimida va uning ajralmas qismi hisoblangan 1-ilovasida belgilangan muddatda va miqdorda toʼlovlar amalga oshirilmaganda hamda “Investor” oʼziga ajratilgan kvartirani olishdan voz kechgan taqdirda mazkur shartnoma oʼz kuchini yoʼqotadi va “Uy-joy quruvchi” tomonidan tomonidan sarflangan maʼmuriy, bank va boshqa xarajatlarini qisman qoplash maqsadida “Investor” tomonidan kiritilgan investitsiya mablagʼining 5 foizi ushlab qolinib, qolgan qismi “Investor” ga qaytariladi.
  5.8. Uy-joylarning qiymati “Uy-joy quruvchi”ning xohish-irodasiga bogʼliq boʼlmagan holatlarga koʼra oʼzgargan taqdirda mazkur shartnoma boʼyicha “Investor” tomonidan kiritiladigan investitsiya miqdori ham oʼzgarishi mumkin.
  5.9. “Investor” tomonidan Mazkur shartnomaning 5-boʼlimida va uning ajralmas qismi hisoblangan 1-ilovasida belgilangan muddatda va miqdorda toʼlovlar amalga oshirilmaganda uy-joy majmuasi foydalanishga topshirilganidan soʼng, kvartira narxi qayta koʼrib chiqilishi va yangi tasdiqlangan bahoda investorga taklif etilishi mumkin. 
  6.	IShLАRNI BАJАRISh MUDDАTLАRI
  6.1. Mazkur shartnomada nazarda tutilgan qurilishning davom etish vaqti va ishlarni bajarish muddatlari, pudratchini tanlash natijalariga muvofiq: 
  - qurilish ishlari 2022 yil mart oyidan boshlanadi;
   - kurilish ishlari 2023 yil may oyida tugallanadi:
   - Bunda “Investor” 5-boʼlimida koʼrsatilgan majburiyatlarni bajarishdan ozod etilmaydi.
  6.2. “Uy-joy majmuasi” qurilishi uchun “Investor”lar toʼliq shakllanmaganda yoki ular tomonidan investitsiya mablagʼlari yetarli miqdorda shakllantirilmaganda “Uy-joy majmuasi” qurilishi mazkur ishlar toʼliq shakllangunga qadar boshqa “Investor”larni xabardor qilgan holda uzaytirilishi mumkin. 
  
  7.	KVАRTIRАNI “INVESTOR”GА TOPShIRILIShI VА “INVESTOR” 
  TOMONIDАN QАBUL QILIB OLINIShI
  7.1.	 Shartnomada kelishilgan loyiha boʼyicha barcha qurilish-montaj ishlari hajmi bajarilgandan keyin “Uy-joy majmuasi” qonunchilikda belgilangan tartibda foydalanishga qabul qilinib, kvartira oldi-sotdisi boʼyicha notarial idorada shartnoma rasmiylashtirilgandan soʼng “Investor”ga ajratilgan kvartira topshirish-qabul qilish dalolatnomasi (hisob faktura) bilan unga topshiriladi. Bunda, “Investor”ning investitsiya boʼyicha “Uy-joy quruvchi” oldida qarzi boʼlgan taqdirda qarzdorlik toʼlangunga qadar obʼektni unga topshirish kechiktiriladi.
  7.2.	“Investor”ga kvartirani mulk huquqini belgilash notarial shartnoma tuzish yoʼli bilan amalga oshiriladi.
  7.3.	“Investor” nomiga kvartiraga nisbatan mulk huquqini belgilash boʼyicha barcha boj, toʼlov va boshqa yigʼimlar “Investor”ning oʼz mablagʼlari hisobidan amalga oshiriladi.
  
  8.	FORS-MАJOR
  8.1. Tomonlar mazkur shartnoma boʼyicha majburiyatlarni qisman yoki toʼliq bajarmaganlik uchun javobgarlikdan, agar ushbu bajarmaslik shartnoma tuzilgandan keyin tomonlar oldindan koʼrishi, oqilona chora-tadbirlar bilan bartaraf etishi mumkin boʼlmagan tabiat hodisalari yoki ijtimoiy-iqtisodiy holatlar natijasida vujudga kelgan yengib boʼlmaydigan kuchlar (fors-major) holatlari oqibati boʼlsa, ozod etiladi.
  8.2. Yengib boʼlmaydigan kuchlar holatlarini vaj qilib keltiradigan tomon, bunday holatlar vujudga kelgani toʼgʼrisida boshqa tomonni yozma ravishda darhol xabardor qilishi shart, bunda istagan tomonning talabi boʼyicha tegishli organ tomonidan berilgan tasdiqlovchi hujjat taqdim etilishi kerak.
  8.3. Mazkur shartnoma boʼyicha majburiyatlarni bajarish muddati yengib boʼlmaydigan kuch holatlari amal qilgan vaqtga mutanosib ravishda uzaytiriladi.
  
  9.	TOMONLАRNING JАVOBGАRLIGI
  9.1. Tomonlar mazkur shartnoma bilan ularga yuklatilgan majburiyatlarni bajarmaganligi yoki lozim darajada bajarmaganligi uchun Oʼzbekiston Respublikasining amaldagi qonun hujjatlariga muvofiq javobgar boʼladilar.
  9.2. “Investor” shartnoma majburiyatlarini buzganlik uchun u “Uy-joy quruvchi”ga:
  –	mazkur shartnomaning 4.1-bandida koʼrsatilgan majburiyatlar bajarilmaganligi uchun – oʼtkazib yuborilgan har bir kun uchun bajarilmagan majburiyatning 0,2 foizi miqdorida, ammo shartnoma bahosining bajarilmagan majburiyati kiymatining 20 foizidan ortiq boʼlmagan miqdorda penya toʼlaydi;
  –	qurilishi tugallangan obʼektni qabul qilib olishni “Investor” obʼekt topshirishga tayyor ekanligi toʼgʼrisida xabar olgan kundan boshlab oʼn ish kunidan ortiq kechiktirganligi uchun – oʼtkazib yuborilgan har bir kun uchun kreditdan tashqari toʼlangan mablagʼni 0,2 foizi miqdorida, ammo shartnoma bahosining 20 foizidan ortiq boʼlmagan miqdorda penya toʼlaydi.
  9.3. “Uy-joy quruvchi” shartnomaning 4.3-bandidagi majburiyatlarini shartnomaning 
  8-boʼlimida mavjud asoslar boʼlmasdan buzgan taqdirda, “pudratchi” tashkilotini jalb etish, “Uy-joy majmuasi” qurilishi uchun kirtilgan investitsiya mablagʼlarini maqsadli ishlatilishini taʼminlamaslik natijasida, uy-joy kurilishi muddatlarini kechiktirishiga sababchi boʼlsa, u “Investor”ga, bajarilmagan majburiyat uchun – oʼtkazib yuborilgan har bir kun uchun fakat bajarilmagan majburiyatning 0,2 foizi miqdorida, ammo shartnoma bahosining bajarilmagan ishlar qismidan 20 foizidan ortiq boʼlmagan miqdorda penya toʼlaydi.
  9.4. Penya(neustoyka)ni toʼlash shartnoma boʼyicha olingan majburiyatlarni bajarishdan ozod etmaydi.
  9.5. “Uy-joy quruvchi” tomonidan uy-joy qurilishi boshqa uy-joylar qurilishi bilan birgalikda kompleks shaklda amalga oshirilishi sababli ular bilan bogʼliq kommunikatsiya va infratuzilmalar tizimini tayyorlash ishlari Oʼzbekiston Respublikasi Prezidentining 2021 yil 11 martdagi PF-6186-sonli Farmoniga muvofiq mahalliy byudjet mablagʼlari hisobidan amalga oshirilib, mazkur ishlarni oʼz muddatida bajarmasligi oqibatida oʼz majburiyatini oʼz vaqtida bajara olmasa bu holatda u javobgarlikdan ozod qilinadi. 
   
  10.	NIZOLАRNI HАL QILISh
  10.1. Mazkur shartnomani ijro etish davomida kelib chiqadigan nizoli masalalarni tomonlar muzokaralar yoʼli bilan hal qiladilar.
  10.2. Mazkur shartnoma boʼyicha nizolarni sudgacha hal etish (talabnoma yuborish) tartibiga amal qilish majburiydir. Talabnomani koʼrib chiqish muddati talabnoma olingan paytdan boshlab 10 (oʼn) kalendarь kun.
  10.3. Basharti, kelishmovchiliklar va nizolarni tomonlar 10 (oʼn) kalendarь kun ichida muzokara yoʼli bilan hal qilishlari mumkin boʼlmasa, ushbu nizolarni tomonlar,sud tartibida umumiy asoslarda hal qiladilar.
  
  11.	АLOHIDА ShАRTLАR
  11.1.	Koʼp qavatli uy va kvartira va unga kiradigan muhandislik tizimlari, asbob-uskunalar, materiallardan foydalanish va ishlarning kafolatli muddati “Uy-joy quruvchi” qurilishi tugallangan obʼektni qabul qilib olish toʼgʼrisidagi dalolatnomani imzolagan kundan boshlab 12 oy etib belgilanadi.
  Аgar obʼektdan foydalanishning kafolatli davrida aniqlanib, ular bartaraf etilgunga qadar foydalanishni davom ettirish imkonini bermaydigan nuqsonlar aniqlansa, u holda kafolat muddati nuqsonlarni bartaraf etish davriga uzaytiriladi. Nuqsonlar qurilish ishlariga jalb qilingan pudratchi tomonidan uning oʼz hisobidan bartaraf etiladi.
  Koʼrsatib oʼtilgan kafolatlar obʼekt uchinchi shaxslar tomonidan qasddan shikastlantirilishiga hamda “Uy-joy quruvchi” va pudratchi qurilishi tugallangan obʼektni qabul qilib olish toʼgʼrisidagi dalolatnomani imzolagan kundan boshlab, “Investor” kvartiraga 2 oy davomida koʼchib kelib yashamagan hollariga nisbatan tadbiq etilmaydi.
  11.2. Mazkur shartnomani oʼzgartirish va bekor qilish Oʼzbekiston Respublikasining qonun hujjatlariga muvofiq amalga oshiriladi.
  11.3. Tomonlar oʼrtasidagi mazkur shartnomada nazarda tutilmagan yangi majburiyatlar paydo boʼlishiga olib keladigan har qanday ahdlashuv, agar u tomonlar tomonidan qoʼshimcha kelishuv tarzidagi yozma shaklda tasdiqlangan boʼlsa, haqiqiy hisoblanadi.
  11.4. Mazkur shartnoma ikki nusxada tuzilgan boʼlib, barcha nusxalar bir xil va teng yuridik kuchga ega
  12. TOMONLАRNING MАNZILLАRI, REKVIZITLАRI 
  VА IMZOLАRI
  “Investor”:		“Uy-joy quruvchi”:
  Julbekov Toirbek Yuldashevich		“New Times Buildings” MChJ
  (F.I.O. toʼliq)
  Jizzax viloyati Doʼstlik tumani		(Kompaniya toʼliq nomi)
  Yangixayot А.Navoiy MFY
  
  ddw		Manzil: Toshkent shaxri, Yangixayot tumani, Tursunzoda koʼchasi, 60 -uy
  Tel: +99897 784 32 33		АTIB «Ipoteka Bank» Shayxantoxur filiali 
  (manzil, tel.)
                
  x/r: 2020 8000 0008 3155 6002
   21.05.1971 yil		(bank rekvizitlari)
   MFO 00425 STIR 305 238 901
   (tugʼilgan sanasi)
                
  
  JShSh IR: 321 057 116 000 13		
  Direktor: D.R.Malikov
         
                       
         Imzo		M.Oʼ.	Imzo
  
  “Texnik buyurtmachi”:
  “Oʼzshahar kurilish invest” IK MChJ
  (Kompaniya toʼliq nomi)
  Manzil: Indeks 100 084. Toshkent shaxar Mirobod tumani Аmir Temur shox kucha 4 uy
  АTIB «Ipoteka Bank» Shayxantoxur filiali
  
  STIR 304 573 795; MFO 00425 
  (bank rekvizitlari)
   
  
  Tijoriy obʼektlar sotuvi 
  boʼlimi boshligʼi: А. Xanbabaev
         
  M.Oʼ  Imzo`;

  return (
    <div style={{
      
    }} dangerouslySetInnerHTML={{ __html: a }}></div>
    //     <>
    //       <div style={styles.page}>
    //         <div>
    //           <h1 style={styles.introText}>
    //             Report Heading That Spans More Than Just One Line
    //           </h1>
    //         </div>

    //         <div style={styles.spacer2}></div>

    //         <img style={styles.fullWidth} src="photo-2.png" />
    //       </div>

    //       <div style={styles.page}>
    //         <div>
    //           <h2 style={styles.introText}>
    //             Report Heading That Spans More Than Just One Line
    //           </h2>
    //         </div>

    //         <div style={styles.columnLayout}>
    //           <div style={styles.column}>
    //             <img style={styles.fullWidth} src="photo-2.png" />
    //             <h4 style={styles.marginb0}>Subtitle One</h4>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //               eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>

    //           <div style={styles.column}>
    //             <img style={styles.fullWidth} src="photo-1.png" />
    //             <h4 style={styles.marginb0}>Subtitle Two</h4>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //               eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>

    //         <div style={styles.columnLayout}>
    //           <div style={styles.column}>
    //             <img style={styles.fullWidth} src="photo-3.png" />
    //             <h4 style={styles.marginb0}>Subtitle One</h4>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //               eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>

    //           <div style={styles.column}>
    //             <img style={styles.fullWidth} src="photo-4.png" />
    //             <h4 style={styles.marginb0}>Subtitle Two</h4>
    //             <p>
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //               eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </>
  );
};

export default PdfDocument;
