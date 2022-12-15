import React from "react";

import "./Test2.css";
const Test2 = ({
  investorAddress,
  investorName,
  investorSurname,
  investorFather,
  investorPhone,
  passportDate,
  passportSerial,
  jshshr,
  houseeNumber,
  homeLayer,
  homeArea,
  homeNumber,
  totalPrice,
  flatNumber
}) => {
  const styles = {
    page: {
      marginRight: "5rem",
      textAlign: "center",
      fontSize: "10px",
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

  return (
    <div style={styles.page}>
      <h4>
        Uy-joy qurilishiga investitsiya kiritish haqida <br />N 3/40 - sonli
        SHARTNOMA
      </h4>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Toshkent shahri</span>
        <span>“_____” _____________ 2022 yil</span>
      </div>
      <br />
      <br />
      <p>
        Pasport seriyasi{" "}
        <b>
          {passportSerial} {investorAddress}
        </b>{" "}
        IIB tomonidan <b>{passportDate}</b> sanada berilgan O'zbekiston
        Respublikasi fuqarosi <b>{investorName} {investorSurname} {investorFather}</b>(keyingi o'rinlarda –
        “Investor”) bir tomondan, «New Times Buildings» MChJ nomidan ustav
        asosida faoliyat yurituvchi direktor D.R.Malikov (keyingi o'rinlarda –
        “Uy-joy quruvchi”) ikkinchi tomondan hamda “O'zshahar qurilish invest”
        injiniring kompaniyasi MChJ nomidan 2022 yil 5 yanvardagi 03/08-sonli
        ishonchnoma asosida faoliyat yurituvchi direktor o'rinbosari
        А.N.Xanbabaev (keyingi o'rinlarda – “Texnik buyurtmachi”), uchinchi
        tomondan birgalikda “Tomonlar” deb nomlanuvchilar mazkur shartnomani
        quyidagilar haqida tuzdilar:
      </p>
      <br />
      <br />
      <h4>1.ASOSIY TUSHUNCHALAR</h4>

      <p>
        1.2. Ushbu shartnoma matnining keyingi o'rinlarida uchraydigan barcha
        atamalar, agar kontekstdan boshqacha ma'no anglanmasa, quyidagi bo'limda
        bayon qilingan tushunchalarni anglatadi: <br /> <b>“Uy-joy majmuasi”</b>{" "}
        – Qonun hujjatlarida belgilangan tartibda zamonaviy qurilish
        materiallari va texnologiyalarini respublika mintaqalarining
        tabiiy-iqlim sharoitlarini va joyning relefini, ijtimoiy-demografik
        xususiyatlarini hisobga olgan holda ishlab chiqilgan loyiha-smeta
        hujjatlariga asosan ma'lum bir hududda, barcha qurilish me'yorlariga mos
        ravishda, foydalanishga tayyor holatda, atrofida obodonlashtirish va
        muhandislik- kommunikasiya tarmoqlari bilan birgalikda qurilgan ikki
        yoki undan ortiq ko'p qavatli uy-joylar majmuasi; <br />{" "}
        <b>“Investor”</b> - “Uy-joy majmuasi”dagi ko'p qavatli uy-joylardan
        mazkur shartnomaga asosan unga ajratilgan xonadonni “Uy-joy quruvchi”
        tomonidan keyinchalik unga mulk huquqi asosida topshirilishi sharti
        bilan “Uy-joy majmuasi” qurilishiga ma'lum miqdordagi pul mablag'i
        ko'rinishida investisiya kirituvchi jismoniiy shaxs; <br />{" "}
        <b>“Uy-joy quruvchi”</b> - “Uy-joy majmuasi” qurilishi uchun barcha
        zarur hujjatlar, xususan loyiha-smeta hujjatlarini rasmiylashtirish,
        pudratchilarni tanlash, qurilish ishlarining o'z vaqtida va sifatli
        bajarilishi yuzasidan texnik nazoratni amalga oshirish, “Uy-joy
        majmuasi”ni o'z muddatida foydalanishga topshirish, shuningdek
        “Investor” mablag'laridan maqsadli va samarali foydalanilishi
        funksiyalari yuklangan holda, “New Times Buildings” MChJ; <br />{" "}
        <b>“Texnik buyurtmachi”</b> - “Uy-joy quruvchi” bilan rasmiylashtirilgan
        ikki tomonlama shartnomaga muvofiq, “Uy-joy majmuasi” bo'yicha tegishli
        loyihalashtirish ishlarini amalga oshiruvchi, qurilish ishlari ustidan
        doimiy texnik nazoratni olib boruvchi, shuningdek, kvartiralarni
        talabgorlarga sotilishi yuzasidan tegishli xizmatlarni ko'rsatuvchi
        “O'zshahar qurilish invest” injiniring kompaniyasi MChJ; <br />
        <b>“Kvartira”</b> – “Uy-joy majmuasi” qurilishi yakunlanib,
        foydalanishga topshirilgandan so'ng o'ziga yuklatilgan barcha
        majburiyatlarni o'z muddatida va to'liq bajargan “Investor”ga mulk
        huquqi asosida topshiriladigan ko'chmas mulk ob'ekti; <br />
      </p>

      <br />
      <h4>2.MUHIM SHARTLAR</h4>
      <p>
        2.2. Ushbu shartnoma bo'yicha munosabatlar O'zbekiston Respublikasi
        Fuqarolik kodeksi, O'zbekiston Respublikasi Prezidentining 28.11.2019
        yildagi PF-5886-son, 11.03.2021 yildagi PF-6186-sonli hamda 2021 yil 9
        dekabrdagi PF-33-sonli Farmonlari bilan o'rnatilgan yangi tartib va
        boshqa qonun hujjatlari asosida tartibga solinadi.
      </p>
      <br />

      <h4>3.ShARTNOMA PREDMETI</h4>
      <p>
        3.2.“Investor” “Uy-joy quruvchi”ning roziligi va mazkur shartnoma
        shartlariga muvofiq, Toshkent shahar, Yangihayot tumani, Yangidarhon
        MFY, Navro'z ko'chasida qurilayotgan “Uy-joy majmuasi”dagi (keyingi
        o'rinlarda “Uy-joy majmuasi”) ko'p qavatli uy-joylardan unga ajratilgan
        xonadonni “Uy-joy quruvchi” tomonidan keyinchalik mulk huquqi asosida
        topshirilishi sharti bilan “Uy-joy majmuasi” qurilishiga ma'lum
        miqdordagi pul mablag'i ko'rinishida investisiya kiritadi. <br /> 3.3.
        “Uy-joy quruvchi” “Investor”ning “Uy-joy majmuasi” qurilishi uchun
        investisiya kiritishiga rozilik berib, “Uy-joy majmuasi”dagi{" "}
        <b>{houseeNumber}</b> -sonli ko'p qavatli uyning, <b>{homeLayer}</b>{" "}
        -qavat, maydoni (shartli ravishda) <b>{homeArea}</b> m2 dan iborat,{" "}
        <b>{homeNumber}</b> xonali  {"  "}
        <b>{flatNumber}</b> -kvartirasini (keyingi o'rinlarda “Kvartira”) kiritilgan
        investisiya mablag'i evaziga unga ajratib, “Uy-joy majmuasi” belgilangan
        tartibda foydalanishga topshirilgandan so'ng notarial shartnoma tuzish
        orqali mulk huquqi asosida unga topshiradi. <br /> 3.4. Kvartira maydoni
        loyihaga asosan shartli bo'lib, kadastr hujjatlariga muvofiq kvartira
        maydoni o'zgarishi kvartira qiymatiga ta'sir etmaydi
      </p>
      <br />

      <h4>4.TOMONLARNING HUQUQ VA MAJBURIYATLARI</h4>
      <p>
        4.1. “Investor”ning majburiyatlari: <br />
        4.1.1. Mazkur shartnomada ko'rsatilgan miqdorda va shartlarda o'z
        mablag'lari va yoki jalb etilgan mablag'larni “Uy-joy majmuasi”
        qurilishiga ushbu shartnomada belgilangan tartibda yo'naltirish. <br />
        4.1.2. Mazkur shartnoma bo'yicha o'z zimmasiga olgan majburiyatlar
        bajarilishiga aloqador to'lov va boshqa hujjatlar nusxalarini “Uy-joy
        quruvchi”ga taqdim etish.
        <br />
        4.1.3. “Kvartira”ni “Uy-joy quruvchi”dan mazkur shartnomaga muvofiq
        topshirish-qabul qilish dalolatnomasi bo'yicha qabul qilib olish.
        <br />
        4.1.4. Uy-joy quruvchining talabi bilan investorning mablag'lari,
        tijorat banklarining kredit mablag'lar va qonunda taqiqlanmagan boshqa
        mablag'lar hisobidan ulush kiritish asosida qurilishga mablag'lar
        yo'naltirish. Mazkur holatda “Investor” ga ulush kiritish uchun tijorat
        banki tomonidan ipoteka krediti ajratilganda, kredit qarzdorligi va
        foizlarni o'z muddatida to'lash.
        <br />
        4.1.5. Uy-joy quruvchi mas'ul hodimlari tomonilan uy-joydagi qurilish
        ishlari yakunlanib kvartira foydalanishga tayyor holga keltirilganligi
        haqida xabar berilgandan so'ng 1 oy muddatda kvartira oldi-sotdisi
        bo'yicha notarial idorada shartnomani rasmiylashtirish, kvartira
        qiymatining qolgan qismini o'z mablag'lari, tijorat banklarining ipoteka
        kreditlari va boshqa qonun bilan taqiqlanmagan manbalar hisobidan
        to'lash.
        <br />
        4.1.6. O'zbekiston Respublikasi Prenzidentining 2021 yil 19 iyundagi
        “Ko'p kvartirali uy-joylarni boshqarish tizimini yanada
        takomillashtirish to'g'risida”gi PQ5152-son qarorining 7g-kichik bandiga
        asosan 2021 yil 1 oktyabrdan boshlab qurilishi tugallangan va
        foydalanishga qabul qilingan ko'p kvartirali uy-joyni boshqarish
        birinchi ikki yilda quruvchi tomonidan amalga oshirilishi, mazkur
        muddatga ko'p kvartirali uy-joy ekspluatasiyasining kafolat muddati
        joriy qilinishi, bunda - quruvchi tomonidan mazkur vazifani amalga
        oshirish uchun shartnomaga asosan boshqaruvchi tashkilot jalb qilinishi
        mumkinligi belgilanganligidan kelib chiqib, “Uy-joy majmuasi”
        foydalanishga topshirilgandan so'ng xonadon oldi sotdisi yuzasidan
        notarial idora orqali shartnoma imzolashdan oldin “Uy-joy quruvchi”
        tomonidan tavsiya etilgan boshqaruvchi kompaniya bilan “Uy-joy”ni
        boshqarish yuzasidan shartnoma imzolash. <br />
        Bunda boshqaruvchi kompaniya bilan tuzilgan shartnoma xonadonga
        “Investor”ning mulk huquqi davlat ro'yxatidan o'tkazilgandan so'ng
        kuchga kirishi nazarda tutiladi.
        <br />
        4.2. Investorning huquqlari:
        <br />
        4.2.1. “Uy-joy quruvchi”ning ruxsati bilan vakolatli shaxs hamrohligida
        qurilishning borishini kuzatib borish, uy-joyning loyihasidan chiqmagan
        holda qurilish ishlari ustidan takliflar kiritish. Bunda, Investor
        ishlarning bajarilishi ustidan tekshiruv va nazoratni amalga
        oshirayotganda qurilish pudrati shartnomasi shartlaridan ishlar sifatini
        yomonlashtirishi mumkin bo'lgan darajada chekinishni yoki boshqa
        kamchiliklarni aniqlasa, bu to'g'rida darhol “Uy-joy quruvchi”ga xabar
        berishi shart. Buni xabar qilmagan Investor aniqlangan kamchiliklarni
        keyinchalik vaj qilib keltirish huquqini yo'qotadi. <br />
        4.3. Uy-joy quruvchining majburiyatlari:
        <br />
        4.3.1. Qurilish ishlarini va boshqarishni tashkillashtirish, ishlarni
        amalga oshirish uchun zaruriy shart-sharoitlarni yaratish.
        <br />
        4.3.3. Loyiha-smeta hujjatlarini tasdiqlash.
        <br />
        4.3.4. Uy-joy majmuasini foydalanishga qabul qilish va undagi ajratilgan
        kvartirani “Investor”ga loyihaga asosan tayyor holda (pod klyuch)
        foydalanishga topshirish, qabul qilish-topshirish hujjatlarini imzolash.{" "}
        <br />
        4.3.5. Zarurat tug'ilganda “Investor”ning talabiga muvofiq unga
        buyurtmalarni joylashtirish va ijro etish haqida va ob'ektni qurish
        bo'yicha ishlar qanday bajarilayotganligi haqida ma'lumot berib borish.
        <br />
        4.3.6. Qurilish-montaj ishlari loyiha hujjatlari, texnik reglament,
        shartlar standartlar va me'yoriy, huquqiy hujjatlarga muvofiqligini
        ta'minlash.
        <br />
        4.3.7. Vakolatli organlar xulosalari hamda subpudrat tashkilotlari
        takliflari asosida tegishli hujjatlarga o'zgartirish va qo'shimchalar
        kiritilishini tashkil etadi.
        <br />
        4.3.8. Ob'ektda mehnat muhofazasi va texnika xavfsizligi qoidalariga
        rioya etilishini ta'minlash.
        <br />
        4.3.9. O'zbekiston Respublikasi Prenzidentining 2021 yil 19 iyundagi
        “Ko'p kvartirali uy-joylarni boshqarish tizimini yanada
        takomillashtirish to'g'risida”gi PQ5152-son qarorining 7g-kichik bandiga
        asosan foydalanishga topshirilgan ko'p kvartirali uy-joyni boshqarish
        uchun birinchi ikki yilda boshqaruvchi kompaniya jalb qilish va
        “Investor”ga tavsiya etish. 4.4. Uy-joy quruvchining huquqlari:
        <br />
        4.4.1. “Uy-joy majmuasi”ni qurish bo'yicha ishlarni bajarish tartibini
        o'z xohishiga ko'ra belgilash.
        <br />
        4.4.2. “Investor” mazkur shartnomaning 5-bo'limida nazarda tutilgan
        mablag'larni belgilangan muddatlarda to'lamaganda, ketma-ket 2 oy
        mobaynida ulush kiritish uchun tijorat banki tomonidan unga ajratilgan
        ipoteka krediti va foizi bo'yicha to'lovlarni belgilangan tartibda
        amalga oshirmaganda hamda o'zining shartnoma bo'yicha boshqa
        majburiyatlarini bajarmagan taqdirda mazkur shartnomani bir tomonlama
        “Investor”ni yozma ogohlantirishsiz bekor qilish.
        <br />
        4.4.3. Uy-joy quruvchi qurilish davrida investor tomonidan uy-joy
        qurilishini davom ettirish maqsadida Investor tomonidan o'z mablag'lari,
        tijorat banklarining kredit mablag'lari va qonunda ta'qiqlanmagan boshqa
        mablag'lar hisobidan qurilishni ulush kiritish asosida olib borilishini
        talab qilishga haqli.
        <br />
        4.4.4. O'rnatilgan tartibda qurilish ishlari yakunlanib, kvartira
        foydalanishga topshirilganidan so'ng, kvartirani qabul qilib olgan
        investorda kvartira bo'yicha jiddiy e'tirozlar yuzaga kelgan holatda
        investor tomonidan to'langan to'lovlarni to'liq qaytargan holda kvartira
        uy-joy quruvchiga qaytarilishi mumkin. <br />
        4.4.5. Bunda “Investor” ga ulush kiritish uchun tijorat banki tomonidan
        ajratilgan ipoteka krediti va foizi bo'yicha qarzdorlikni to'lash
        muddatlari “Investor” tomonidan buzilishi natijasida tijorat banki
        tomonidan "Uy-joy quruvchi"dan undirib olingan “Investor”ning
        qarzdorliklari uy-joy narxi ustiga qo'shilgan holda kvartira qiymati
        oshiriladi.
        <br />
        4.5. Texnik buyurtmachining majburiyatlari va huquqlari:
        <br />
        4.5.1. Uy-joy majmuasi qurilishiga birlamchi ruxsat beruvchi loyiha oldi
        va loyiha hujjatlarini rasmiylashtirish.
        <br />
        4.5.2. Loyiha boshqarilishini va ob'ektda qurilish ishlari ustidan
        tizimli texnik nazorat o'tkazilishini ta'minlaydi.
        <br />
        4.5.3. Uy-joy majmuasidagi kvartiralarni talabgorlarga sotuvi va
        rasmiylashtirish ishlarini tashkillashtirish.
        <br />
        4.5.4. O'z funksiyalarini amalga oshirish uchun qonun hujjatlariga
        muvofiq boshqa huquqlarga ega bo'lishi mumkin.
        <br />
      </p>
      <br />

      <h4>
        5. O'ZARO HISOB-KITOBLAR, INVESTISIYA MIQDORI VA TO'LOVNI AMALGA
        OShIRISh TARTIBI
      </h4>
      <p>
        5.1. “Investor” tomonidan pul ko'rinishida kiritiladigan jami
        investisiya mablag'i miqdori unga ajratilgan va keyinchalik mulk huquqi
        asosida topshiriladigan kvartira qiymatiga mos ravishda{" "}
        <b>{totalPrice}</b> so'mni tashkil qiladi (kvartira qiymati QQS bilan).{" "}
        <br />
        5.2. Investisiya kiritish (to'lovni amalga oshirish) turlari
        quyidagicha:
        <br />
        a) Oldindan 100% to'lov; _________________________ (“Investor” imzosi)
        <br />
        b) Bo'lib-bo'lib to'lash; ___________________________ (“Investor”
        imzosi)
        <br />
        v) Ipoteka krediti rasmiylashtirish (ulush kiritish) orqali to'lash.
        ______________ (“Investor” imzosi)
        <br />
        5.3. “Investor” tomonidan mazkur shartnomaning <br /> 5.2.-bandida
        ko'rsatilgan investisiya kiritish turi tanlanadi va yoniga
        “Investor”ning imzosi qo'yiladi, to'lovni amalga oshirish tartibi
        shartnomaning keyingi bandlarida shunga qarab belgilanadi. <br />
        5.4. “Investor” tomonidan shartnomaning 5.2. a) bandidagi to'lov turi
        tanlanganda investisiya mablag'i investor tomonidan mazkur shartnoma
        imzolangandan so'ng 10 bank ish kuni ichida oldindan 100 % miqdorda
        amalga oshiriladi.
        <br />
        5.5. “Investor” tomonidan shartnomaning 5.2. b) bandidagi to'lov turi
        tanlanganda Dastlabki investisiya mablag'i jami investisiya mablag'ining
        26 foizi, <b>{totalPrice * 0.26}</b> so'mni tashkil qilib, mazkur
        shartnoma imzolangandan so'ng “Investor” tomonidan 10 (o'n) kun ichida
        hamda <b>{totalPrice - totalPrice * 0.26}</b> so'm investisiya qoldiq
        mablag'i mazkur shartnomaning ajralmas qismi hisoblangan 1-ilovasida
        belgilangan grafik asosida malga oshiriladi.
        <br />
        5.6. “Investor” tomonidan shartnomaning 5.2. v) bandidagi to'lov turi
        tanlanganda Dastlabki investisiya mablag'i jami investisiya mablag'ining
        26 foizi, <b>{totalPrice * 0.26}</b> so'mni tashkil qilib, mazkur
        shartnoma imzolangandan so'ng “Investor” tomonidan 10 (o'n) kun ichida
        hamda <b>{totalPrice - totalPrice * 0.26}</b> so'm qoldiq investisiya
        mablag'i ko'p qavatli uy-joylarning kadastr hujjatlari tayyorlangandan
        so'ng yoki qurilish davrida uy-joy majmuasi qurilishi investor tomonidan
        ulush kiritish asosida ajratilgan kredit mablag'lari hisobidan amalga
        oshirilishi yuzasidan og'zaki xabardor (telefon, telegram va boshqa
        aloqa vositalari orqali) qilinganidan so'ng, 1 oy muddat ichida o'z
        mablag'lari yoki bankning ipoteka krediti mablag'lari hisobidan to'lov
        amalga oshiriladi. Agar bank ipoteka krediti ajratish sharti sifatida
        “Investor”dan boshlang'ich to'lov shakllantirishni talab qilgan taqdirda
        “Uy-joy quruvchi” “Investor” tomonidan to'langan dastlabki investisiya
        mablag'ini uning bankda ochilgan omonat hisob-raqamiga o'tkazib beradi.
        Bunda “Uy-joy quruvchi” bankda ipoteka krediti rasmiylashtirilishini
        tashkil etish majburiyatini o'z zimmasiga olmaydi. <br />
        5.7. “Investor” tomonidan Mazkur shartnomaning 5-bo'limida va uning
        ajralmas qismi hisoblangan 1-ilovasida belgilangan muddatda va miqdorda
        to'lovlar amalga oshirilmaganda hamda “Investor” o'ziga ajratilgan
        kvartirani olishdan voz kechgan taqdirda mazkur shartnoma o'z kuchini
        yo'qotadi va “Uy-joy quruvchi” tomonidan tomonidan sarflangan ma'muriy,
        bank va boshqa xarajatlarini qisman qoplash maqsadida “Investor”
        tomonidan kiritilgan investisiya mablag'ining 5 foizi ushlab qolinib,
        qolgan qismi “Investor” ga qaytariladi. <br />
        5.8. Uy-joylarning qiymati “Uy-joy quruvchi”ning xohish-irodasiga
        bog'liq bo'lmagan holatlarga ko'ra o'zgargan taqdirda mazkur shartnoma
        bo'yicha “Investor” tomonidan kiritiladigan investisiya miqdori ham
        o'zgarishi mumkin. <br />
        5.9. “Investor” tomonidan Mazkur shartnomaning 5-bo'limida va uning
        ajralmas qismi hisoblangan 1-ilovasida belgilangan muddatda va miqdorda
        to'lovlar amalga oshirilmaganda uy-joy majmuasi foydalanishga
        topshirilganidan so'ng, kvartira narxi qayta ko'rib chiqilishi va yangi
        tasdiqlangan bahoda investorga taklif etilishi mumkin.
      </p>

      <br />

      <h4>6. IShLARNI BAJARISh MUDDATLARI</h4>
      <p>
        6.1. Mazkur shartnomada nazarda tutilgan qurilishning davom etish vaqti
        va ishlarni bajarish muddatlari, pudratchini tanlash natijalariga
        muvofiq:
        <br />
        - qurilish ishlari 2022 yil mart oyidan boshlanadi; <br />
        - kurilish ishlari 2023 yil may oyida tugallanadi: <br />
        - Bunda “Investor” 5-bo'limida ko'rsatilgan majburiyatlarni bajarishdan
        ozod etilmaydi. <br />
        6.2. “Uy-joy majmuasi” qurilishi uchun “Investor”lar to'liq
        shakllanmaganda yoki ular tomonidan investisiya mablag'lari etarli
        miqdorda shakllantirilmaganda “Uy-joy majmuasi” qurilishi mazkur ishlar
        to'liq shakllangunga qadar boshqa “Investor”larni xabardor qilgan holda
        uzaytirilishi mumkin.
      </p>

      <br />
      <h4>
        7. KVARTIRANI “INVESTOR”GA TOPShIRILIShI VA “INVESTOR” <br />
        TOMONIDAN QABUL QILIB OLINIShI{" "}
      </h4>
      <p>
        7.1. Shartnomada kelishilgan loyiha bo'yicha barcha qurilish-montaj
        ishlari hajmi bajarilgandan keyin “Uy-joy majmuasi” qonunchilikda
        belgilangan tartibda foydalanishga qabul qilinib, kvartira oldi-sotdisi
        bo'yicha notarial idorada shartnoma rasmiylashtirilgandan so'ng
        “Investor”ga ajratilgan kvartira topshirish-qabul qilish dalolatnomasi
        (hisob faktura) bilan unga topshiriladi. Bunda, “Investor”ning
        investisiya bo'yicha “Uy-joy quruvchi” oldida qarzi bo'lgan taqdirda
        qarzdorlik to'langunga qadar ob'ektni unga topshirish kechiktiriladi.{" "}
        <br />
        7.2. “Investor”ga kvartirani mulk huquqini belgilash notarial shartnoma
        tuzish yo'li bilan amalga oshiriladi. <br />
        7.3. “Investor” nomiga kvartiraga nisbatan mulk huquqini belgilash
        bo'yicha barcha boj, to'lov va boshqa yig'imlar “Investor”ning o'z
        mablag'lari hisobidan amalga oshiriladi.
      </p>

      <br />
      <h4>8.FORS-MAJOR</h4>
      <p>
        8.1. Tomonlar mazkur shartnoma bo'yicha majburiyatlarni qisman yoki
        to'liq bajarmaganlik uchun javobgarlikdan, agar ushbu bajarmaslik
        shartnoma tuzilgandan keyin tomonlar oldindan ko'rishi, oqilona
        chora-tadbirlar bilan bartaraf etishi mumkin bo'lmagan tabiat hodisalari
        yoki ijtimoiy-iqtisodiy holatlar natijasida vujudga kelgan engib
        bo'lmaydigan kuchlar (fors-major) holatlari oqibati bo'lsa, ozod
        etiladi. <br />
        8.2. Yengib bo'lmaydigan kuchlar holatlarini vaj qilib keltiradigan
        tomon, bunday holatlar vujudga kelgani to'g'risida boshqa tomonni yozma
        ravishda darhol xabardor qilishi shart, bunda istagan tomonning talabi
        bo'yicha tegishli organ tomonidan berilgan tasdiqlovchi hujjat taqdim
        etilishi kerak. <br />
        8.3. Mazkur shartnoma bo'yicha majburiyatlarni bajarish muddati engib
        bo'lmaydigan kuch holatlari amal qilgan vaqtga mutanosib ravishda
        uzaytiriladi.
      </p>

      <br />
      <h4>9.TOMONLARNING JAVOBGARLIGI</h4>
      <p>
        9.1. Tomonlar mazkur shartnoma bilan ularga yuklatilgan majburiyatlarni
        bajarmaganligi yoki lozim darajada bajarmaganligi uchun O'zbekiston
        Respublikasining amaldagi qonun hujjatlariga muvofiq javobgar
        bo'ladilar. <br />
        9.2. “Investor” shartnoma majburiyatlarini buzganlik uchun u “Uy-joy
        quruvchi”ga: – mazkur shartnomaning 4.1-bandida ko'rsatilgan
        majburiyatlar bajarilmaganligi uchun – o'tkazib yuborilgan har bir kun
        uchun bajarilmagan majburiyatning 0,2 foizi miqdorida, ammo shartnoma
        bahosining bajarilmagan majburiyati kiymatining 20 foizidan ortiq
        bo'lmagan miqdorda penya to'laydi; <br />
        – qurilishi tugallangan ob'ektni qabul qilib olishni “Investor” ob'ekt
        topshirishga tayyor ekanligi to'g'risida xabar olgan kundan boshlab o'n
        ish kunidan ortiq kechiktirganligi uchun <br /> – o'tkazib yuborilgan
        har bir kun uchun kreditdan tashqari to'langan mablag'ni 0,2 foizi
        miqdorida, ammo shartnoma bahosining 20 foizidan ortiq bo'lmagan
        miqdorda penya to'laydi. <br />
        9.3. “Uy-joy quruvchi” shartnomaning 4.3-bandidagi majburiyatlarini
        shartnomaning <br />
        8-bo'limida mavjud asoslar bo'lmasdan buzgan taqdirda, “pudratchi”
        tashkilotini jalb etish, “Uy-joy majmuasi” qurilishi uchun kirtilgan
        investisiya mablag'larini maqsadli ishlatilishini ta'minlamaslik
        natijasida, uy-joy kurilishi muddatlarini kechiktirishiga sababchi
        bo'lsa, u “Investor”ga, bajarilmagan majburiyat uchun – o'tkazib
        yuborilgan har bir kun uchun fakat bajarilmagan majburiyatning 0,2 foizi
        miqdorida, ammo shartnoma bahosining bajarilmagan ishlar qismidan 20
        foizidan ortiq bo'lmagan miqdorda penya to'laydi. <br />
        9.4. Penya(neustoyka)ni to'lash shartnoma bo'yicha olingan
        majburiyatlarni bajarishdan ozod etmaydi. <br />
        9.5. “Uy-joy quruvchi” tomonidan uy-joy qurilishi boshqa uy-joylar
        qurilishi bilan birgalikda kompleks shaklda amalga oshirilishi sababli
        ular bilan bog'liq kommunikasiya va infratuzilmalar tizimini tayyorlash
        ishlari O'zbekiston Respublikasi Prezidentining 2021 yil 11 martdagi
        PF-6186-sonli Farmoniga muvofiq mahalliy byudjet mablag'lari hisobidan
        amalga oshirilib, mazkur ishlarni o'z muddatida bajarmasligi oqibatida
        o'z majburiyatini o'z vaqtida bajara olmasa bu holatda u javobgarlikdan
        ozod qilinadi. <br />{" "}
      </p>

      <br />
      <h4>10.NIZOLARNI HAL QILISh</h4>
      <p>
        10.1. Mazkur shartnomani ijro etish davomida kelib chiqadigan nizoli
        masalalarni tomonlar muzokaralar yo'li bilan hal qiladilar. <br />
        10.2. Mazkur shartnoma bo'yicha nizolarni sudgacha hal etish (talabnoma
        yuborish) tartibiga amal qilish majburiydir. Talabnomani ko'rib chiqish
        muddati talabnoma olingan paytdan boshlab 10 (o'n) kalendar kun. <br />
        10.3. Basharti, kelishmovchiliklar va nizolarni tomonlar 10 (o'n)
        kalendar kun ichida muzokara yo'li bilan hal qilishlari mumkin bo'lmasa,
        ushbu nizolarni tomonlar,sud tartibida umumiy asoslarda hal qiladilar.
      </p>

      <br />
      <h4>11.ALOHIDA ShARTLAR</h4>
      <p>
        11.1. Ko'p qavatli uy va kvartira va unga kiradigan muhandislik
        tizimlari, asbob-uskunalar, materiallardan foydalanish va ishlarning
        kafolatli muddati “Uy-joy quruvchi” qurilishi tugallangan ob'ektni qabul
        qilib olish to'g'risidagi dalolatnomani imzolagan kundan boshlab 12 oy
        etib belgilanadi. Agar ob'ektdan foydalanishning kafolatli davrida
        aniqlanib, ular bartaraf etilgunga qadar foydalanishni davom ettirish
        imkonini bermaydigan nuqsonlar aniqlansa, u holda kafolat muddati
        nuqsonlarni bartaraf etish davriga uzaytiriladi. Nuqsonlar qurilish
        ishlariga jalb qilingan pudratchi tomonidan uning o'z hisobidan bartaraf
        etiladi. Ko'rsatib o'tilgan kafolatlar ob'ekt uchinchi shaxslar
        tomonidan qasddan shikastlantirilishiga hamda “Uy-joy quruvchi” va
        pudratchi qurilishi tugallangan ob'ektni qabul qilib olish to'g'risidagi
        dalolatnomani imzolagan kundan boshlab, “Investor” kvartiraga 2 oy
        davomida ko'chib kelib yashamagan hollariga nisbatan tadbiq etilmaydi.{" "}
        <br />
        11.2. Mazkur shartnomani o'zgartirish va bekor qilish O'zbekiston
        Respublikasining qonun hujjatlariga muvofiq amalga oshiriladi. <br />
        11.3. Tomonlar o'rtasidagi mazkur shartnomada nazarda tutilmagan yangi
        majburiyatlar paydo bo'lishiga olib keladigan har qanday ahdlashuv, agar
        u tomonlar tomonidan qo'shimcha kelishuv tarzidagi yozma shaklda
        tasdiqlangan bo'lsa, haqiqiy hisoblanadi. <br />
        11.4. Mazkur shartnoma ikki nusxada tuzilgan bo'lib, barcha nusxalar bir
        xil va teng yuridik kuchga ega
      </p>

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>“Investor”</h3>
          <label htmlFor="ism">
            <input type="text" id="ism" readOnly defaultValue={investorName} />
          </label>{" "}
          <sub>(F.I.O)</sub>
          <label htmlFor="Xaridormanzili">
            <input type="text" id="Xaridormanzili" readOnly defaultValue={investorAddress} />
          </label>{" "}
          <sub>(Manzil)</sub>
          <label htmlFor="tel">
            <input type="text" id="tel"  readOnly defaultValue={investorPhone}/>
          </label>{" "}
          <sub>(Tel)</sub>
          <label htmlFor="dob">
            <input type="text" id="dob" />
          </label>
          <sub>(Tug'ilgan sanasi)</sub>
          <label htmlFor="jshshr">
            <input type="text" id="jshshr" readOnly defaultValue={jshshr} />
          </label>
          <sub>(JSHSHR)</sub>
        </form>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>“Uy-joy quruvchi”</h3>
          <label htmlFor="kompaniya">
            <input type="text" id="kompaniya" />
          </label>{" "}
          <sub>(Kompaniya to'liq nomi)</sub>
          <label htmlFor="manzil">
            <input type="text" id="manzil" />
          </label>{" "}
          <sub>(Manzili)</sub>
          <label htmlFor="bhr">
            <input type="text" id="bhr" />
          </label>{" "}
          <sub>(Bank h/r)</sub>
          <label htmlFor="br">
            <input type="text" id="br" />
          </label>
          <sub>(Bank rekvizitlari)</sub>
          <label htmlFor="rahbar">
            <input type="text" id="rahbar" />
          </label>
          <sub>(Direktor)</sub>
        </form>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop:"50px"
          }}
        >
          <h3>“Texnik buyurtmachi”</h3>
          <label htmlFor="kompaniya">
            <input type="text" id="kompaniya" />
          </label>{" "}
          <sub>(Kompaniya to'liq nomi)</sub>
          <label htmlFor="manzil">
            <input type="text" id="manzil" />
          </label>{" "}
          <sub>(Manzili)</sub>
          <label htmlFor="bhr">
            <input type="text" id="bhr" />
          </label>{" "}
          <sub>(Bank h/r)</sub>
          <label htmlFor="br">
            <input type="text" id="br" />
          </label>
          <sub>(Bank rekvizitlari)</sub>
          <label htmlFor="rahbar">
            <input type="text" id="rahbar" />
          </label>
          <sub>(Bo'lim boshlig'i)</sub>
        </form>
      </div>
    </div>
  );
};

export default Test2;
