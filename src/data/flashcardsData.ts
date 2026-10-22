import { Flashcard } from '../types';

export const flashcardsBank: Flashcard[] = [
  {
    id: 'fc1',
    moduleId: 1,
    category: 'Malzeme Bilimi',
    front: 'Malzeme Bilimi ile Malzeme Mühendisliği arasındaki fark nedir?',
    back: 'Malzeme Bilimi: Yapı ile özellik arasındaki ilişkiyi inceler.\nMalzeme Mühendisliği: Bu bilgiyi kullanarak istenilen özelliklerde yeni malzemeler tasarlar ve üretir.',
    examWarning: 'Vize Sınavı Klasik Soru Garantisi!'
  },
  {
    id: 'fc2',
    moduleId: 1,
    category: 'Kompozit vs Alaşım',
    front: 'Kompozit Malzeme ile Alaşım arasındaki fark nedir? Örnek veriniz.',
    back: 'Kompozit: Makro seviyede fiziksel birleşmedir, bileşenler birbiri içinde çözünmez (Örn: Alüminyum matrisli silisyum takviyeli kompozit).\nAlaşım: Mikro (atomik) seviyede birleşmedir, homojen çözünür (Örn: Alüminyum-Silisyum alaşımı veya Çelik Fe-C).',
    examWarning: 'Hocanın En Çok Sevdiği 15 Puanlık Soru!'
  },
  {
    id: 'fc3',
    moduleId: 1,
    category: 'Seramik Kristalografi',
    front: 'CaF₂ (Florit) birim hücresinde kaç iyon vardır?',
    back: 'Toplam 12 iyon vardır. (4 adet Ca²⁺ ve 8 adet F⁻ iyonu YMK kafes yapısında düzenlenmiştir).',
    examWarning: 'Test ve Boşluk Doldurmada Çıkar!'
  },
  {
    id: 'fc4',
    moduleId: 1,
    category: 'Seramikler',
    front: 'Perovskit ve Spinel yapıları hangi formüllere sahiptir ve özellikleri nelerdir?',
    back: 'Perovskit: M\'M\'\'X₃ (CaTiO₃, BaTiO₃) — Piezoelektrik ve elektroseramik.\nSpinel: M\'M\'\'₂X₄ (MgAl₂O₄, MgFe₂O₄) — Manyetik seramikler.',
    examWarning: 'Formül Eşleştirme Sorusu!'
  },
  {
    id: 'fc5',
    moduleId: 1,
    category: 'Balistik Zırh',
    front: 'Kompozit zırhta B₄C seramik ve UHMW-PE plastik katmanlarının rolleri nedir?',
    back: 'B₄C Seramik: Sert dış tabaka; merminin ucunu ezer, parçalar ve mantarlaştırır.\nUHMW-PE (PE-1000): Darbe emici arka tabaka; şarapnelleri tutar, kinetik enerjiyi sönümler.',
    examWarning: 'Uygulamalı Mühendislik Sorusu!'
  },
  {
    id: 'fc6',
    moduleId: 2,
    category: 'Kristalografi',
    front: 'Alüminyum neden Magnezyumdan daha sünektir?',
    back: 'Alüminyumda (FCC/YMK) 12 adet kayma düzlem/doğrultu kombinasyonu varken, Magnezyumda (HCP/HSP) yalnızca 3 adet kayma sistemi vardır.',
    examWarning: 'Slayt 10 Çekme Deneyi Sorusu!'
  },
  {
    id: 'fc7',
    moduleId: 2,
    category: 'Sayısal Problem',
    front: '100 g gümüşteki (Ag) atom sayısı formülü ve sonucu nedir? (Ag=107.868 g/mol)',
    back: 'N = (Kütle × N_A) / M_A\nN = (100 × 6.023 × 10²³) / 107.868\n= 5.58 × 10²³ atom.',
    examWarning: 'Rakam Değişmeden Çıkan Hesaplama!'
  },
  {
    id: 'fc8',
    moduleId: 2,
    category: 'Sayısal Problem',
    front: '1 Bakır atomunun kütlesi ve 1 g Bakırdaki atom sayısı nedir? (Cu=63.54 g/mol)',
    back: 'a) 1 atom kütlesi: 63.54 / (6.02 × 10²³) = 1.05 × 10⁻²² gram\nb) 1 g Cu atom sayısı: (6.02 × 10²³) / 63.54 = 9.47 × 10²¹ atom.',
    examWarning: 'Vize Banko Sayısalı!'
  },
  {
    id: 'fc9',
    moduleId: 2,
    category: 'Bağ Enerjileri',
    front: 'Bağ türlerinin enerji sıralaması nasıldır? (kcal/mol)',
    back: '1. İyonik: 150 - 370 kcal/mol\n2. Kovalent: 125 - 300 kcal/mol\n3. Metalik: 25 - 200 kcal/mol\n4. Van der Waals: < 10 kcal/mol.',
    examWarning: 'Büyükten Küçüğe Sıralama Sorusu!'
  },
  {
    id: 'fc10',
    moduleId: 2,
    category: 'Allotroplar',
    front: 'Elmas ve Grafit ikisi de saf Karbon olduğu halde neden özellikleri zıttır?',
    back: 'Elmas: 3D her yönde kuvvetli sp³ kovalent bağlar (Ergime 3300°C, aşırı sert).\nGrafit: Tabaka içi kovalent fakat tabakalar arası zayıf Van der Waals bağı (Tabakalar kayar, yumuşak, elektriği iletir).',
    examWarning: 'Klasik Sınav Sorusu!'
  },
  {
    id: 'fc11',
    moduleId: 3,
    category: 'Enerjetik Fiziği',
    front: '1 kg Petrol vs 1 kg TNT: Hangisinin enerjisi fazladır, hangisi patlar?',
    back: 'Petrolün enerjisi TNT\'nin 6 katıdır. Ancak TNT patlarken bu enerjiyi petrolden 100 MİLYON KAT DAHA HIZLI açığa çıkarır. Tahrip gücünü belirleyen enerjinin büyüklüğü değil, açığa çıkma hızıdır!',
    examWarning: 'Final Sınavının Yıldız Sorusu!'
  },
  {
    id: 'fc12',
    moduleId: 3,
    category: 'Enerjetik Sınıflar',
    front: 'Patlayıcılar, İticiler ve Pirotekniklerin reaksiyon süreleri ve amaçları nedir?',
    back: 'Patlayıcılar: Nanosaniye-mikrosaniye, detonasyon şok dalgası, yıkım.\nİticiler (Sevk Barutu): Milisaniye-saniye, deflagrasyon sürekli yanma, itki.\nPiroteknikler: Isı, ışık, duman, ses efektleri (havai fişek, roket ateşleyici).',
    examWarning: 'Tablo Halinde İstenir!'
  },
  {
    id: 'fc13',
    moduleId: 3,
    category: 'Roket Parçaları',
    front: 'Rokette Piroteknik Ateşleyici ve Nozul (Lüle) ne işe yarar?',
    back: 'Piroteknik Ateşleyici: Elektrik sinyaliyle 0.1 saniyede katı yakıtı tutuşturacak ilk yüksek ısı ve basıncı üretir.\nNozul (Lüle): Yanmış gazları daralıp genişleyen kesitle süpersonik hıza çıkararak zıt yönde itki (thrust) sağlar.',
    examWarning: 'Şema Üzerinde Eşleştirme!'
  },
  {
    id: 'fc14',
    moduleId: 4,
    category: 'Patlayıcı Tanımı',
    front: 'DuPont şirketinin patlayıcı madde tanımı nedir?',
    back: '"Bir kıvılcım, yüksek ısı veya güçlü bir darbe ile orijinal hacimlerinin katbekat büyüklüğünde gazlara anında dönüşebilen katı veya sıvılar."',
    examWarning: 'Tanım Sorusu!'
  },
  {
    id: 'fc15',
    moduleId: 4,
    category: 'Patlayıcı Şartları',
    front: 'Bir maddenin patlayıcı kabul edilmesi için 5 zorunlu şart nedir?',
    back: '1. İnsan müdahalesiyle tasarlanmış olmalı (doğal değil).\n2. Uygun dış etki olmadıkça kendiliğinden başlamamalı.\n3. Ekzotermik olmalı.\n4. Hızlı gerçekleşmeli ve gaz ürünlerine dönüşmeli.\n5. Başladıktan sonra dış müdahalesiz kendiliğinden tamamlanmalı.',
    examWarning: 'Finalde Kesin 15 Puan!'
  },
  {
    id: 'fc16',
    moduleId: 4,
    category: 'Kimyasal vs Nükleer',
    front: 'Kimyasal patlayıcı ile Nükleer patlayıcının 3 temel farkı nedir?',
    back: '1. Dış Etki: Fiziksel (darbe/kıvılcım) vs Nötron bombardımanı/kritik kütle.\n2. Enerji: Kimyasal bağ enerjisi vs Çekirdek nükleer bağ enerjisi.\n3. Ürünler: Gaz/şok dalgası vs Gama radyasyonu, nötronlar ve 3000-4000°C ısı.',
    examWarning: 'Karşılaştırma Sorusu!'
  },
  {
    id: 'fc17',
    moduleId: 4,
    category: 'Tarihçe',
    front: 'Schönbein nitroselülozu (dumansız barut) nasıl keşfetti (1846)?',
    back: 'Laboratuvarda dökülen nitrik ve sülfürik asit karışımını pamuklu önlüğüyle sildi. Önlüğü ocakta kuruturken aniden duman çıkarmadan parlayarak patladı.',
    examWarning: 'Hikayeli Bilgi Sorusu!'
  },
  {
    id: 'fc18',
    moduleId: 4,
    category: 'Alfred Nobel',
    front: 'Alfred Nobel Dinamiti ve Kapsülü nasıl icat etti?',
    back: 'Tehlikeli sıvı nitrogliserini gözenekli silisli Diatome toprağına emdirerek darbelere dayanıklı Dinamiti ("Güç") geliştirdi; 1868\'de ise güvenli ateşleme sağlayan Kapsülü icat etti.',
    examWarning: 'Nobel Sınav Sorusu!'
  },
  {
    id: 'fc19',
    moduleId: 4,
    category: 'Manhattan Projesi',
    front: 'Trinity testi, Little Boy ve Fat Man bombalarının detayları nelerdir?',
    back: '16 Temmuz 1945 Trinity: İlk atom testi.\nHiroşima (6 Ağustos): "Little Boy" — Uranyum-235.\nNagazaki (9 Ağustos): "Fat Man" — Plütonyum-239.\nEtki: 20.000 ton TNT eşdeğeri, 3000-4000°C merkez sıcaklığı, 280.000 ölüm.',
    examWarning: 'Tarih ve Yakıt Eşleştirmesi!'
  },
  {
    id: 'fc20',
    moduleId: 4,
    category: 'Oktanitrokuban',
    front: 'Oktanitrokuban [C₈(NO₂)₈] neden dünyanın en güçlü nükleer olmayan patlayıcısıdır?',
    back: 'Philip Eaton & Mao-Xi Zhang (2001) tarafından sentezlendi. Küp karbon omurgasındaki 90 derecelik açısal gerilim devasa potansiyel enerji depolar. Patlama hızı 10.100 m/s ve TNT eşdeğeri 2.38 kattır!',
    examWarning: 'Sınavın 100 Puanlık Zirve Sorusu!'
  }
];
