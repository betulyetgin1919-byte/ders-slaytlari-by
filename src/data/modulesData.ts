import { CourseModule } from '../types';

export const courseModules: CourseModule[] = [
  {
    id: 1,
    code: 'DERS-1',
    title: 'Malzeme Bilimi ve Malzeme Türleri',
    instructor: 'Doç. Dr. Kubilay KARACİF',
    institution: 'Hitit Üniversitesi Mühendislik Fakültesi',
    description: 'Metaller, Seramik kristal yapıları (MX, MX₂, Perovskit, Spinel), Polimerler, Kompozit vs Alaşım farkları ve askeri zırh mimarisi.',
    slideCount: 10,
    pdfFilename: 'dersnotu-1_274de3cd.pdf',
    slides: [
      {
        id: 'm1-s1',
        title: 'Malzeme, Malzeme Bilimi ve Mühendisliği',
        subtitle: 'Temel Kavramlar ve Ayrım',
        category: 'Metaller',
        badge: 'Temel Tanım',
        keyTakeaway: 'Bilim "Yapı-Özellik" ilişkisini keşfeder; Mühendislik bu bilgiyi kullanarak istenilen performansta malzeme tasarlar ve üretir.',
        examTip: 'Hoca sınavda Malzeme Bilimi ile Malzeme Mühendisliği arasındaki farkı klasik soru olarak sorabilir!',
        contentPoints: [
          'Mühendislik Malzemesi: Mühendislik ürün ve sistemlerin imalatında kullanılan; mekanik, fiziksel ve kimyasal olarak arzu edilen özelliklere sahip katı maddelerdir.',
          'Malzeme Bilimi: Malzemelerin iç yapısı (atomik/mikroyapı) ile özellikleri arasındaki sebep-sonuç ilişkisini inceleyen temel bilim dalıdır.',
          'Malzeme Mühendisliği: Malzeme biliminin sunduğu yapı-özellik bilgisini kullanarak hedeflenen performansta malzeme tasarlamak ve imal etmektir.',
          'Dört Ana Malzeme Sınıfı: Metaller, Seramikler, Polimerler ve Kompozitler.'
        ],
        visualType: 'pyramid',
        visualData: {
          items: [
            { label: 'İşlem (Processing)', desc: 'Döküm, ısıl işlem, şekillendirme' },
            { label: 'Yapı (Structure)', desc: 'Atomik diziliş, kristal / amorf' },
            { label: 'Özellik (Properties)', desc: 'Mukavemet, iletkenlik, tokluk' },
            { label: 'Performans (Performance)', desc: 'Kullanım şartlarında başarı' }
          ]
        },
        quizCheck: {
          question: 'Malzeme biliminin sunduğu yapı ve özellik bilgisine dayanarak istenilen özelliklerde malzeme tasarlama ve imal etme sürecine ne denir?',
          options: ['Malzeme Bilimi', 'Malzeme Mühendisliği', 'Toz Metalürjisi', 'Kimyasal Sentez'],
          correctIndex: 1,
          explanation: 'Malzeme bilimi ilişkiyi inceler; bu bilgiyle yeni ürün tasarlayıp imal etmek Malzeme Mühendisliğinin tanımıdır.'
        }
      },
      {
        id: 'm1-s2',
        title: 'Metaller ve Metalik Karakter',
        subtitle: 'Kristal Yapı, Serbest Elektronlar ve Süneklik',
        category: 'Metaller',
        badge: 'Metalik Malzemeler',
        keyTakeaway: 'Metallerin yüksek iletkenliği serbest elektron bulutundan; yüksek yoğunluğu düzenli kristal istiflenmeden kaynaklanır (çoğu > 7 g/cm³).',
        examTip: 'Yoğunluk eşiği (>7 g/cm³) ve serbest elektronların sağladığı ısı-elektrik iletkenliği testlerde banko sorudur.',
        contentPoints: [
          'Kristal Yapı: Atomlar periyodik ve düzenli dizilerek kristal kafes oluştururlar. Bu nedenle yoğunlukları belirgin şekilde yüksektir (> 7 g/cm³).',
          'Elektron Denizi: Serbest değerlik elektronları serbestçe dolaşır; bu sayede ısı ve elektrik iletkenlikleri çok yüksektir.',
          'Optik Özellik: Opaktırlar (saydam değildirler) ve ışığı güçlü yansıtırlar.',
          'Mekanik Özellik: Elastiklik modülü ve mukavemetleri yüksektir. Çoğunlukla sünektirler; dövme, presleme, haddeleme ve kaynak ile şekillendirilebilirler.',
          'Örnek Metaller: Fe, Al, Cu, Zn, Ti, Mg, Au, Ag, Pt.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Metalik Karakter Analizi',
          leftTitle: 'Kristal Yapı & Yoğunluk',
          leftContent: 'Yoğunluk > 7 g/cm³ (Yüksek paketleme faktörü)',
          rightTitle: 'Serbest Elektron Denizi',
          rightContent: 'Maksimum termal ve elektriksel iletkenlik, süneklik'
        }
      },
      {
        id: 'm1-s3',
        title: 'Seramikler: Tanım ve Üstün Özellikler',
        subtitle: 'İyonik Bağ, Yüksek Ergime ve Basma Mukavemeti',
        category: 'Seramikler',
        badge: 'İyonik Karakter',
        keyTakeaway: 'Seramiklerin çekme mukavemeti düşüktür ancak basma mukavemetleri muazzamdır; korozyona ve aşırı sıcaklığa dayanıklıdırlar.',
        examTip: '"Seramiklerin çekme mukavemeti düşük, basma mukavemeti yüksektir" cümlesi doğru/yanlış sorularında kesinlikle sorulur!',
        contentPoints: [
          'Bağ Yapısı: Metal (Na, Mg, Fe, Al) ve ametal (Cl, O, C, N) elementlerin oluşturduğu kuvvetli iyonik veya kovalent bağlı bileşiklerdir.',
          'Yoğunluk: Metaller ile polimerler arasında yer alır (ortalama 2 - 3 g/cm³).',
          'Mekanik Davranış: Plastik kalıcı şekil değiştiremezler, sert ve gevrektirler (kırılgan). Çekme mukavemetleri düşük, basma mukavemetleri çok yüksektir.',
          'Termal & Elektriksel Özellik: Ergime sıcaklıkları çok yüksektir. Isı ve elektrik yalıtkanıdırlar (refrakter fırın astarları).',
          'Kimyasal Dayanım: Oksidasyona, korozyona ve aşınmaya karşı mükemmel direnç gösterirler.'
        ],
        visualType: 'formula',
        visualData: {
          formula: 'Metal (Elektropozitif: Na, Mg, Fe) + Ametal (Elektronegatif: O, Cl) → İyonik Bağ',
          highlight: 'Yoğunluk: 2-3 g/cm³ | Basma Mukavemeti >> Çekme Mukavemeti'
        }
      },
      {
        id: 'm1-s4',
        title: 'Geleneksel ve İleri Mühendislik Seramikleri',
        subtitle: 'Oksit, Karbür ve Nitrür Sınıflandırması',
        category: 'Seramikler',
        badge: 'Sınıflandırma',
        keyTakeaway: 'Zırhlarda ve balistikte kullanılan Bor Karbür (B₄C) ve Alumina (Al₂O₃) birer ileri mühendislik seramiğidir.',
        examTip: 'Oksit, karbür ve nitrür örneklerini formülleriyle ezberleyin! B4C ve SiC hangi gruptadır sorusu çok sevilir.',
        contentPoints: [
          'Geleneksel Seramikler: Doğal hammaddelerden üretilir. Kil, saf kum, tuğla, fayans, porselen, çanak, kiremit.',
          'Mühendislik (İleri) Seramikleri: Yüksek saflıkta kimyasal sentezlerle üretilir.',
          'a) Oksit Esaslı: Al₂O₃ (Alumina/Korundum), ZrO₂ (Zirkonya), MgO (Magnezya), TiO₂ (Titanoksit), SiO₂ (Kuvars/Cam).',
          'b) Karbür Esaslı: SiC (Silisyum karbür), TiC (Titan karbür), B₄C (Bor karbür - Zırh plakaları).',
          'c) Nitrür Esaslı: Si₃N₄ (Silisyum nitrür - Rulman ve turbo rotorları).'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Seramik Grupları',
          leftTitle: 'Geleneksel Seramikler',
          leftContent: 'Kil, Tuğla, Porselen, Kiremit, Kum',
          rightTitle: 'Mühendislik Seramikleri',
          rightContent: 'Al₂O₃, ZrO₂, SiC, TiC, B₄C, Si₃N₄'
        }
      },
      {
        id: 'm1-s5',
        title: 'Seramik Kristal Yapıları (MX ve MX₂)',
        subtitle: 'NaCl, CsCl, CaF₂ ve SiO₂ Cristobalite',
        category: 'Seramikler',
        badge: 'Kristalografi',
        keyTakeaway: 'CaF₂ florit yapısında birim hücrede toplam 12 iyon bulunur (4 Ca²⁺ + 8 F⁻).',
        examTip: 'Sınavda CaF2 birim hücresindeki toplam iyon sayısı sorulursa cevap 12’dir (4 Ca + 8 F).',
        contentPoints: [
          'MX Yapı (1:1 Oranı):',
          '• NaCl Tipi: YMK (FCC) kafes. Cl⁻ iyonları YMK noktalarında, Na⁺ iyonları kenar ortalarında ve merkezde. (MgO, CaO, FeO, NiO bu yapıdadır).',
          '• CsCl Tipi: Basit kübik (HMK benzeri). Cl⁻ köşelerde, Cs⁺ küp merkezinde.',
          'MX₂ Yapı (1:2 Oranı):',
          '• CaF₂ (Florit): YMK kafes. Her kafes noktasında 1 Ca ve 2 F olmak üzere 3 iyon. Birim hücrede toplam 12 iyon (4 Ca²⁺ + 8 F⁻). UO₂, ThO₂ örnekleridir.',
          '• SiO₂ (Kristobalit): YMK kafes, her noktada 2 Si ve 4 O (6 iyon). Birbirine bağlı SiO₄⁻⁴ tetrahedral ağ yapısı.'
        ],
        visualType: 'lattice',
        visualData: {
          type: 'fluorite',
          cations: 4,
          anions: 8,
          total: 12,
          structure: 'FCC / YMK'
        }
      },
      {
        id: 'm1-s6',
        title: 'Kompleks Seramik Yapılar: Perovskit ve Spinel',
        subtitle: 'M₂X₃, M\'M\'\'X₃ ve M\'M\'\'₂X₄ Kristalleri',
        category: 'Seramikler',
        badge: 'Elektro & Manyetik Seramik',
        keyTakeaway: 'BaTiO₃ ve CaTiO₃ perovskit yapıda olup piezoelektrik ve elektroseramik özellik gösterir.',
        examTip: 'Perovskit formülü M\'M\'\'X3 (BaTiO3) ve Spinel formülü M\'M\'\'2X4 (MgAl2O4) formül eşleştirmesi klasik sınav sorusudur.',
        contentPoints: [
          'M₂X₃ Yapı (Korundum - Al₂O₃): Rombohedral yapı (hegzagonal benzeri). Her kafes noktasında 12 Al ve 18 O olmak üzere 30 iyon bulunur. Cr₂O₃ ve Fe₂O₃ bu yapıdadır.',
          'M\'M\'\'X₃ Yapı (Perovskit): CaTiO₃ ve elektroseramik/piezoelektrik özellikli BaTiO₃. Köşelerde Ca²⁺, yüzey merkezlerinde O²⁻, hacim merkezinde Ti⁴⁺ (Birim hücrede 5 iyon).',
          'M\'M\'\'₂X₄ Yapı (Spinel): Manyetik seramikler grubudur. MgAl₂O₄ ve MgFe₂O₄ ferritleri bu yapıya dahildir.',
          'Amorf Camlar vs Cam Seramikler: Camlar kısa mesafeli düzenli (SRO - amorf), Cam seramikler uzun mesafeli düzenli (LRO - kristal cam) yapılardır.'
        ],
        visualType: 'formula',
        visualData: {
          formula: 'Perovskit: CaTiO₃ / BaTiO₃ (5 iyon/hücre) | Spinel: MgAl₂O₄ (Manyetik)',
          highlight: 'SRO (Short Range Order = Amorf Cam) vs LRO (Long Range Order = Kristal Cam Seramik)'
        }
      },
      {
        id: 'm1-s7',
        title: 'Polimerler: Yapı ve Sınıflandırma',
        subtitle: 'Kovalent Omurga, Van der Waals Ağları ve Yoğunluk',
        category: 'Polimerler',
        badge: 'Makromoleküller',
        keyTakeaway: 'Polimer zincirinin kendi içi güçlü kovalent, zincirler arası ise zayıf Van der Waals bağıdır; bu yüzden düşük sıcaklıkta erirler.',
        examTip: 'Polimerlerin yoğunluğu metallerden çok düşüktür (< 2 g/cm³) ve karışık bağ yapısına (kovalent + van der waals) sahiptir.',
        contentPoints: [
          'Kimyasal Yapı: Karbon (C) ana omurgalı dev moleküllerdir. H, Cl, F, O, N ve S içerebilirler. Monomerler kovalent bağla birleşerek polimer zinciri oluşturur.',
          'Bağ Karakteri: Zincir içi kovalent (kuvvetli), zincirler arası zayıf Van der Waals. Bu hibrit yapı düşük ergime sıcaklığı ve yüksek esneklik sağlar.',
          'Özellikler: Çok düşük yoğunluk (< 2 g/cm³), mükemmel elektrik ve ısı yalıtkanlığı, korozyon direnci ve düşük maliyet.',
          'Üç Ana Sınıf:',
          '1. Termoplastikler: Isıtılınca yumuşayan, soğuyunca katılaşan, geri dönüştürülebilir lineer zincirler (PE, PP, PVC).',
          '2. Termosetler: Çapraz bağlı, ısıtılınca erimeyen, bozunan sert polimerler (Epoksi, Bakalit).',
          '3. Elastomerler: Oda sıcaklığında büyük elastik uzama gösteren kauçuksu yapılar.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Polimer Ailesi Karşılaştırması',
          leftTitle: 'Termoplastikler',
          leftContent: 'Lineer/dallanmış zincirler, yumuşar, geri dönüştürülür',
          rightTitle: 'Termosetler',
          rightContent: '3D Çapraz bağlı ağ, erimez, sert ve kırılgandır'
        }
      },
      {
        id: 'm1-s8',
        title: 'Modern Savunma Sistemlerinde Polimer ve Seramik Zırhlar',
        subtitle: 'B₄C Seramik Yüzey + UHMW-PE (PE-1000) Şarapnel Bariyeri',
        category: 'Kompozitler',
        badge: 'Balistik Mühendisliği',
        keyTakeaway: 'Seramik ön yüz merminin sivri ucunu kırıp mantarlaşmaya zorlar; arkasındaki ultra yüksek moleküler ağırlıklı polietilen (UHMW-PE) kinetik enerjiyi emip şarapnelleri tutar.',
        examTip: 'Zırh sistemlerinde B4C seramiğin görevi ve UHMW-PE (PE-1000) görevi arasındaki fark kesinlikle sınav sorusudur!',
        contentPoints: [
          'Zırh Sistemlerinin Amacı: Metal ve seramik mermi/roket delip geçmesini engellerken; teknik plastikler hafiflik, şeffaflık, şarapnel tutma ve darbe emilimi sağlar.',
          'B₄C (Bor Karbür) Dış Katman: Aşırı serttir; gelen zırh delici merminin geometrisini bozar, çekirdeğini parçalar.',
          'UHMW-PE (PE-1000) Arka Katman: Patlama anında hayati tehlike yaratan iç şarapnel saçılmalarını durdurur ve yüksek enerji sönümler.',
          'Polikarbonat (PC): Askeri personele güvenli, kırılmaz ve kurşun geçirmez şeffaf görüş açısı sunar.',
          'Optimum Koruma: Metal + Seramik + Teknik Plastik kompozit hibriti en üst düzey STANAG balistik koruma standardını sağlar.'
        ],
        visualType: 'armor',
        visualData: {
          layers: [
            { name: 'B₄C Bor Karbür Seramik', role: 'Mermi ucunu ezer ve kırar', color: '#334155' },
            { name: 'UHMW-PE (PE-1000)', role: 'Şarapneli yakalar, darbeyi emer', color: '#0284c7' },
            { name: 'Polikarbonat / Kompozit Destek', role: 'Yapısal bütünlük & şeffaf vizör', color: '#10b981' }
          ]
        }
      },
      {
        id: 'm1-s9',
        title: 'Kompozit Malzemeler ve Alaşımdan Farkı',
        subtitle: 'Makro Fiziksel Karışım vs Mikro Atomik Çözünme',
        category: 'Kompozitler',
        badge: 'Sınavın Can Damarı',
        keyTakeaway: 'Kompozit makro boyutta fiziksel birleşimdir (bileşenler kimyasal olarak inerttir); Alaşım ise mikro (atomik) seviyede çözünmedir!',
        examTip: '"Kompozit ile alaşım arasındaki fark nedir?" sorusu Vize sınavlarının klasik 15 puanlık en garanti sorusudur!',
        contentPoints: [
          'Kompozit Tanımı: İki veya daha fazla malzemenin istenilen üstün özellikleri tek bir malzemede toplamak amacıyla makro boyutta fiziksel olarak bir araya getirilmesidir.',
          'Alaşım Farkı:',
          '• Alüminyum-Silisyum alaşımı: Atomik seviyede çözünmüş metalik fazdır.',
          '• Alüminyum esaslı silisyum takviyeli kompozit: Silisyum tanecikleri makro boyutta alüminyum matris içinde dağıtılmıştır, çözünmez.',
          '• Çelik (Fe-C) bir alaşımdır; Karbon takviyeli demir bir kompozittir!',
          'Matris Bileşeni: Kompozite şeklini verir, takviyeyi çevreden korur, yüke aktarır, tokluk katar.',
          'Takviye Elemanı: Dayanım, rijitlik ve termal özellikleri sağlar (sürekli fiber, kısa fiber, partikül).'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Kompozit vs Alaşım Karşılaştırma Matrisi',
          leftTitle: 'Kompozit Malzeme',
          leftContent: 'Makro fiziksel birleşme. Bileşenler çözünmez, arayüzey nettir. (Metal, seramik veya polimer esaslı)',
          rightTitle: 'Alaşım',
          rightContent: 'Mikro (atomik) seviyede birleşme/çözünme. Metalik esaslıdır. Homojen katı eriyik oluşturur.'
        },
        quizCheck: {
          question: 'Aşağıdakilerden hangisi kompozit malzeme ile alaşım arasındaki temel farktır?',
          options: [
            'Kompozitler daima elektriği iletir, alaşımlar iletmez',
            'Kompozit makro fiziksel birleşimken, alaşım atomik/mikro seviyede birleşimdir',
            'Alaşımlar sadece seramiklerden yapılır',
            'Kompozit malzemelerde matris elemanı bulunmaz'
          ],
          correctIndex: 1,
          explanation: 'Kompozit makro düzeyde fiziksel bir araya getirilmedir ve bileşenler birbiri içinde çözünmez; alaşım atomik seviyede birleşmedir.'
        }
      },
      {
        id: 'm1-s10',
        title: 'Kompozit Sınıflandırması ve Matris-Takviye Görevleri',
        subtitle: 'Sürekli Fiber, Kısa Fiber, Partikül ve Tabakalı Sistemler',
        category: 'Kompozitler',
        badge: 'Mimariler',
        keyTakeaway: 'Matris takviyeyi korur ve yükü transfer eder; takviye dayanımı ve rijitliği sağlar.',
        examTip: 'Matrisin 4 temel fonksiyonu: Şekil vermek, çevreden korumak, yük aktarmak, tokluk sunmak.',
        contentPoints: [
          'Takviye Geometrisine Göre:',
          '• Sürekli Fiber Takviyeli (Elyaf tek yönlü veya dokuma)',
          '• Kısa Fiber / Kırpık Elyaf Takviyeli',
          '• Partikül / Parçacık Takviyeli',
          '• Tabakalı (Laminat) ve Karma (Hibrit) Kompozitler',
          'Matris Türüne Göre: Metal Matrisli (MMC), Seramik Matrisli (CMC), Polimer Matrisli (PMC).'
        ],
        visualType: 'periodic_table',
        visualData: {}
      }
    ]
  },
  {
    id: 2,
    code: 'DERS-2',
    title: 'Atomik Yapı, Kristal Kafesler ve Bağlar',
    instructor: 'Doç. Dr. Kubilay KARACİF',
    institution: 'Hitit Üniversitesi Mühendislik Fakültesi',
    description: 'İşlem-Yapı-Özellik-Performans piramidi, 14 kritik enerjetik özellik, FCC/BCC/HCP kafesler, Avogadro hesaplama soruları ve bağ enerjileri.',
    slideCount: 11,
    pdfFilename: 'desnotu-2_52becc59.pdf',
    slides: [
      {
        id: 'm2-s1',
        title: 'İşlem-Yapı-Özellik-Performans İlişkisi',
        subtitle: 'Malzeme Mühendisliğinin Altın Kuralı',
        category: 'Atomik Yapı',
        badge: 'Temel Prensip',
        keyTakeaway: 'Malzemeye uygulanan İŞLEM yapıyı değiştirir; YAPI değişince ÖZELLİKLER ve PERFORMANS doğrudan değişir.',
        examTip: 'Hoca İşlem-Yapı-Özellik-Performans dörtgenini şematik olarak çizdirip açıklamanızı isteyebilir.',
        contentPoints: [
          'İşlem (Processing): Üretim yöntemleri (döküm, mekanik şekillendirme, talaşlı imalat, toz metalürjisi, kaynak, 3D baskı) ve ısıl işlemler.',
          'Yapı (Structure): Atom altı, atomik bağ, kristal yapı veya amorf dizilim, tane boyutu ve mikroyapı.',
          'Özellik (Properties): Mekanik (akma, çekme, tokluk), fiziksel (ısıl, elektriksel, optik), kimyasal (korozyon, oksidasyon).',
          'Performans (Performance): Malzemenin sahada, gerçek operasyon koşullarında görevini hatasız yerine getirmesi.'
        ],
        visualType: 'pyramid',
        visualData: {
          items: [
            { label: 'İşlem (Processing)', desc: 'Döküm, haddeleme, ısıl işlem, toz sinterleme' },
            { label: 'Yapı (Structure)', desc: 'Atomik bağlar, dislokasyonlar, mikroyapı' },
            { label: 'Özellik (Properties)', desc: 'Sertlik, akma mukavemeti, iletkenlik' },
            { label: 'Performans (Performance)', desc: 'Roket motorunda veya zırhta başarı' }
          ]
        }
      },
      {
        id: 'm2-s2',
        title: 'Enerjetik Malzemelerin 14 Kritik Özelliği',
        subtitle: 'Üretim ve Yapının Belirlediği Hayati Parametreler',
        category: 'Enerjetik',
        badge: '14 Maddelik Liste',
        keyTakeaway: 'Patlayıcı ve roket yakıtlarında üretim yöntemi ve mikroyapı bu 14 özelliği doğrudan kontrol eder.',
        examTip: 'Hoca sınavda "Patlayıcı ve enerjetik malzemelerde üretim yöntemi ve yapı ile etkilenen özelliklerden en az 5 tanesini yazınız" diye sorar!',
        contentPoints: [
          '1. Ağırlık Kuvveti | 2. Hacim Kuvveti | 3. Yoğunluk (Density)',
          '4. Detonasyon (Patlama) Hızı | 5. Duyarlılık (Sensitivity)',
          '6. Suya Direnç | 7. Duman Karakteri | 8. Raf Ömrü (Shelf Life)',
          '9. Desensitizasyon Direnci (Duyarlılık Kaybına Karşı Direnç)',
          '10. Çevre Sıcaklığına Duyarlılık | 11. Patlama Hızı ve Basıncı',
          '12. Patlama Empedansı | 13. Oksijen Balans Değeri (OB%)',
          '14. Patlayıcı Gücü ve Güç İndeksi'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Kritik Enerjetik Parametreler',
          leftTitle: 'Patlama Dinamikleri',
          leftContent: 'Detonasyon Hızı, Patlama Basıncı, Patlama Empedansı, Güç İndeksi',
          rightTitle: 'Güvenlik ve Dayanıklılık',
          rightContent: 'Duyarlılık, Desensitizasyon, Suya Direnç, Raf Ömrü, Oksijen Balansı'
        }
      },
      {
        id: 'm2-s3',
        title: 'Malzeme Yapısının 4 Ölçeği',
        subtitle: 'Atomaltı Seviyeden Gözle Görülen Makro Boyuta',
        category: 'Atomik Yapı',
        badge: 'Yapı Ölçekleri',
        keyTakeaway: 'Atomik boyut ~10⁻¹⁰ m (1 Ångström) iken atom çekirdeği ~10⁻¹⁴ m mertebesindedir.',
        examTip: 'Atom boyutu (10^-10 m) ile çekirdek boyutu (10^-14 m) arasındaki oran sınavda boşluk doldurma olarak gelebilir.',
        contentPoints: [
          '1. Atom Altı Seviye: Protonlar, nötronlar ve elektron bulutunun kuantum mekaniksel etkileşimi.',
          '2. Atomik Seviye: Atomların belirli bir geometrik düzende dizilmesi ve atomlar arası bağlar (iyonik, kovalent, metalik).',
          '3. Mikroskobik Seviye: Optik veya elektron mikroskobu (SEM/TEM) ile incelenen taneler, fazlar, tane sınırları ve çökeltiler.',
          '4. Makroskobik Seviye: Çıplak gözle görülebilen gövde geometrisi, çatlaklar ve kompozit tabakaları.'
        ],
        visualType: 'speed_meter',
        visualData: {
          scales: [
            { name: 'Atom Çekirdeği', size: '10⁻¹⁴ m' },
            { name: 'Atom Çapı', size: '10⁻¹⁰ m (1 Å)' },
            { name: 'Mikroyapı (Taneler)', size: '10⁻⁶ - 10⁻⁴ m' },
            { name: 'Makroyapı (Parça)', size: '> 10⁻² m' }
          ]
        }
      },
      {
        id: 'm2-s4',
        title: 'Kristal Kafes Tipleri ve Kayma Sistemleri',
        subtitle: 'YMK (FCC), HMK (BCC) ve HSP (HCP)',
        category: 'Atomik Yapı',
        badge: 'Alüminyum vs Magnezyum',
        keyTakeaway: 'Alüminyumda (YMK) 12 adet yoğun kayma düzlem/doğrultu kombinasyonu varken, Magnezyumda (HSP) sadece 3 tanedir; bu yüzden Al çok daha sünektir!',
        examTip: '"Alüminyum neden magnezyumdan daha sünektir ve çekme deneyinde daha çok uzar?" sorusunun yanıtı: Al’de 12 kayma sistemi, Mg’de sadece 3 kayma sistemi bulunmasıdır.',
        contentPoints: [
          'Yüzey Merkezli Kübik (YMK / FCC): Alüminyum, Bakır, Altın, Nikel. 12 adet yüksek yoğunluklu kayma düzlemi/doğrultusu bulunur. Yüksek süneklik ve kolay şekillendirme.',
          'Hacim Merkezli Kübik (HMK / BCC): Demir (alfa), Krom, Molibden, Tungsten. Yüksek mukavemet.',
          'Hegzagonal Sıkı Paket (HSP / HCP): Magnezyum, Çinko, Titanyum. Yalnızca 3 adet birincil kayma kombinasyonu vardır; bu sebeple oda sıcaklığında gevrektir ve az uzar.',
          'Çekme Deneyi Karşılaştırması: Aynı kuvvette Alüminyum numunesi boyun vererek belirgin plastik uzar, Magnezyum ise az uzayarak gevrek kopar.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Kayma Sistemi ve Süneklik',
          leftTitle: 'Alüminyum (YMK / FCC)',
          leftContent: '12 Kayma Kombinasyonu → Yüksek Süneklik, Kolay Şekillendirme',
          rightTitle: 'Magnezyum (HSP / HCP)',
          rightContent: '3 Kayma Kombinasyonu → Düşük Süneklik, Gevrek Kırılma'
        },
        quizCheck: {
          question: 'Alüminyumun magnezyuma göre belirgin derecede daha sünek ve plastik şekil vermeye elverişli olmasının temel nedeni nedir?',
          options: [
            'Magnezyumun yoğunluğunun daha yüksek olması',
            'Alüminyumda 12 adet kayma kombinasyonu varken magnezyumda sadece 3 tane olması',
            'Alüminyumun sadece amorf yapıda bulunması',
            'Magnezyumun kovalent bağlı bir seramik olması'
          ],
          correctIndex: 1,
          explanation: 'Slayt 10’da açıklandığı gibi Alüminyumda 12 adet yüksek yoğunluklu düzlem/doğrultu kombinasyonu varken Magnezyumda sadece 3 adettir.'
        }
      },
      {
        id: 'm2-s5',
        title: 'Atomik Kütle, Mol ve Avogadro Sayısı Problemleri',
        subtitle: 'Sınavda %100 Çıkan Klasik Sayısal Sorular',
        category: 'Atomik Yapı',
        badge: 'Sınav Hesaplamaları',
        keyTakeaway: 'N_A = 6.02 × 10²³ atom/mol. Atom Sayısı = (Kütle × N_A) / Mol Ağırlığı.',
        examTip: 'Hoca slaytlardaki 100g Gümüş ve 1g Bakır sorularını rakamları dahi değiştirmeden sorabilir!',
        contentPoints: [
          'Avogadro Sayısı (N_A): 6.02 × 10²³ atom/mol. Bir mol maddedeki atom sayısıdır.',
          'Problem 1 (Gümüş): 100 gram gümüşteki Ag atomlarının sayısını hesaplayınız (Ag = 107.868 g/mol).',
          'Çözüm: Atom Sayısı = (100 g × 6.023 × 10²³) / 107.868 = 5.58 × 10²³ atom.',
          'Problem 2 (Bakır): 1 Bakır atomunun gram cinsinden kütlesi nedir? (Cu = 63.54 g/mol).',
          'Çözüm a: m = 63.54 / (6.02 × 10²³) = 1.05 × 10⁻²² gram.',
          'Problem 3 (Bakır): 1 gram bakırda kaç adet bakır atomu vardır?',
          'Çözüm b: N = (6.02 × 10²³) / 63.54 = 9.47 × 10²¹ atom.'
        ],
        visualType: 'formula',
        visualData: {
          formula: 'N = (m × N_A) / M_A',
          highlight: '100g Ag → 5.58 × 10²³ atom | 1 Ag atomu kütlesi: M_A / N_A'
        }
      },
      {
        id: 'm2-s6',
        title: 'Elektron Konfigürasyonu ve Oktet Kuralı',
        subtitle: 'Aufbau İlkesi, K-L-M-N Kabukları ve Asal Gazlar',
        category: 'Atomik Yapı',
        badge: 'Orbital Teorisi',
        keyTakeaway: 'En dış kabuktaki elektronlar valans (değerlik) elektronlarıdır; kimyasal bağları ve reaktiviteyi onlar belirler.',
        examTip: 'Karbon (C, Z=6) elektron dizilimini yazınız: 1s² 2s² 2p². Na+ ve Cl- iyonlaşma elektron sayıları sınav sorusudur.',
        contentPoints: [
          'Kabuk Kapasiteleri: K (n=1, maks 2 e⁻), L (n=2, maks 8 e⁻), M (n=3, maks 18 e⁻), N (n=4, maks 32 e⁻).',
          'Alt Kabuklar (Orbitaller): s = 2, p = 6, d = 10, f = 14 elektron alır.',
          'Aufbau Sıralaması: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s...',
          'Oktet Kuralı: Atomların en dış yörüngelerini 8 elektrona tamamlayarak kararlı soy gaz (He, Ne, Ar, Kr, Xe) konfigürasyonuna ulaşma eğilimidir.',
          'İyonlaşma: Na (11) bir elektron vererek Na⁺ (10 e⁻, Ne izoelektronik katyon), Cl (17) bir elektron alarak Cl⁻ (18 e⁻, Ar izoelektronik anyon) olur.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Elektron Kabukları',
          leftTitle: 'Alt Kabuk Kapasiteleri',
          leftContent: 's: 2e⁻ | p: 6e⁻ | d: 10e⁻ | f: 14e⁻',
          rightTitle: 'Asal Gaz Kararlılığı',
          rightContent: 'Kapalı kabuk (Oktet) → Minimum enerji, maksimum kararlılık'
        }
      },
      {
        id: 'm2-s7',
        title: 'İyonik Bağ: Elektron Transferi ve Coulomb Çekimi',
        subtitle: 'Yönsüz Bağ ve Koordinasyon İstifi',
        category: 'Bağlar',
        badge: 'Kuvvetli Birincil Bağ',
        keyTakeaway: 'İyonik bağda YÖNLENME YOKTUR; zıt yüklü iyonlar birbirini her yönde eşit Coulomb kuvvetiyle çeker.',
        examTip: '"İyonik bağ yönlü müdür, yönsüz müdür?" -> Kesinlikle YÖNSÜZDÜR (non-directional)!',
        contentPoints: [
          'Oluşum Mekanizması: Elektronegatifliği çok farklı metal (katyon) ve ametal (anyon) arasında elektron transferi ile meydana gelir.',
          'Coulomb Çekim Kuvveti: F = k·(q₁·q₂)/r². Zıt yükler çeker; ancak çekirdekler çok yaklaştığında itme kuvveti devreye girer ve denge mesafesi (a₀) oluşur.',
          'Yönsüzlük (Non-directional): İyonik bağda yönlenme yoktur. İyonlar komşu zıt yüklü iyon sayısını (koordinasyon sayısı) maksimum yapacak şekilde 3 boyutta istiflenir.',
          'Bağ Enerjisi: 150 - 370 kcal/mol. Çok yüksek ergime sıcaklığı ve yüksek sertlik kazandırır.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'İyonik Bağ Özellikleri',
          leftTitle: 'Elektron Hareketi',
          leftContent: 'Elektron Alışverişi (Na → Cl)',
          rightTitle: 'Kuvvet Karakteri',
          rightContent: 'Yönsüz Coulomb Çekimi, Yüksek Bağ Enerjisi (150-370 kcal/mol)'
        }
      },
      {
        id: 'm2-s8',
        title: 'Kovalent Bağ: Elektron Ortaklaşması ve Elmas Mucizesi',
        subtitle: 'Yönlü Bağlar ve 3300°C Ergime Eşiği',
        category: 'Bağlar',
        badge: 'Yönlü Kuvvetli Bağ',
        keyTakeaway: 'Kovalent bağ YÖNLÜDÜR; Elmas 3D sp³ kovalent bağlı olduğu için bağlarını koparmak için 3300°C ısıtılması gerekir!',
        examTip: 'Elmasın erime sıcaklığı (3300°C) ve karbon atomlarının sp3 yönlü kovalent bağı sınavın en popüler sorularındandır.',
        contentPoints: [
          'Mekanizma: En dış yörüngedeki değerlik elektronlarının atomlar arasında ortaklaşa paylaşılmasıyla oluşur (Örn: Cl₂, H₂O, Elmas, Polimer omurgası).',
          'Yönlenme (Directional): Bağlar belirli açılarla (Örn: tetrahedrallerde 109.5°) oluşur.',
          'Bağ Enerjisi: 125 - 300 kcal/mol.',
          'Elmasın Olağanüstü Sertliği: Karbonun 4 değerlik elektronu komşu 4 karbonla tamamen paylaşılır. Kusursuz 3 boyutlu kovalent ağ oluşturur. Bağları koparmak için 3300°C sıcaklık gerekir.'
        ],
        visualType: 'formula',
        visualData: {
          formula: 'C (Elmas) — 3 Boyutlu Kovalent Ağ',
          highlight: 'Bağ Kopma Sıcaklığı: 3300 °C | Enerji: 125-300 kcal/mol'
        }
      },
      {
        id: 'm2-s9',
        title: 'Elmas ve Grafit Karşılaştırması',
        subtitle: 'Aynı Element (Karbon), Tamamen Farklı Bağ Geometrisi',
        category: 'Bağlar',
        badge: 'Allotrop Karşılaştırması',
        keyTakeaway: 'Elmasta sadece güçlü 3D kovalent bağ vardır; Grafitte ise tabaka içi kovalent, tabakalar arasında zayıf Van der Waals bağı vardır!',
        examTip: '"Elmas ile grafitin ikisi de saf karbon olduğu halde neden biri dünyanın en sert maddesi iken diğeri yumuşak ve kaygandır?" -> Kesin sınav sorusu!',
        contentPoints: [
          'Elmas: Karbon atomları 3 boyutlu tetrahedral ağda sadece güçlü kovalent bağlarla bağlıdır. Aşırı serttir, elektriği iletmez.',
          'Grafit: Karbon atomları hegzagonal tabakalar oluşturur. Tabaka içinde C-C bağları kovalenttir; fakat tabakalar arasında sadece zayıf Van der Waals bağları bulunur.',
          'Fiziksel Sonuç: Tabakalar birbiri üzerinden kolayca kayar; bu yüzden grafit yumuşaktır, kurşun kalem ucunda ve yağlayıcı olarak kullanılır, serbest pi elektronları sayesinde elektriği iletir.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Karbon Allotropları',
          leftTitle: 'Elmas (Diamond)',
          leftContent: '3D Kovalent Ağ, Sertlik: 10 Mohs, Elektrik Yalıtkanı, 3300°C',
          rightTitle: 'Grafit (Graphite)',
          rightContent: 'Tabakalar arası zayıf Van der Waals, Kaygan, Elektrik İletkeni'
        }
      },
      {
        id: 'm2-s10',
        title: 'Metalik Bağ ve Zayıf Van der Waals Bağları',
        subtitle: 'Elektron Bulutu Sünekliği ve Dipol Etkileşimleri',
        category: 'Bağlar',
        badge: 'İletkenlik & Dipoller',
        keyTakeaway: 'Metalik bağ atom çekirdekleri ile serbest elektron bulutu arasındaki çekimdir; bu yüzden metaller dövülebilir ve iletkendir.',
        examTip: 'Bağ enerjileri tablosu sıralaması: İyonik (150-370) > Kovalent (125-300) > Metalik (25-200) > Van der Waals (<10 kcal/mol).',
        contentPoints: [
          'Metalik Bağ (25 - 200 kcal/mol): Valans elektronları atomdan ayrılarak serbest elektron bulutu/denizi oluşturur. Pozitif iyonlar bu deniz içinde yüzer. Süneklik (haddeleme, dövme) ve yüksek iletkenlik sağlar.',
          'Van der Waals Bağı (< 10 kcal/mol): Elektron transferi veya paylaşımı yoktur! Yüklerin asimetrik dağılımıyla oluşan geçici veya kalıcı dipoller arasındaki elektrostatik çekimdir.',
          'Hidrojen Bağı: Van der Waals bağında hidrojen atomu yer alıyorsa (Örn: H₂O molekülleri arası) bu bağ Hidrojen bağı adını alır.',
          'Polimerlerde Karışık Bağ: Zincir içinde C-C kovalent, zincirler arasında Van der Waals bağı bulunur.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Bağ Enerjileri Tablosu (kcal/mol)',
          leftTitle: 'Birincil Kuvvetli Bağlar',
          leftContent: 'İyonik: 150-370 | Kovalent: 125-300 | Metalik: 25-200 kcal/mol',
          rightTitle: 'İkincil Zayıf Bağlar',
          rightContent: 'Van der Waals: < 10 kcal/mol (Dipol asimetrisi, H-bağları)'
        }
      },
      {
        id: 'm2-s11',
        title: 'Atom Düzenleri: Amorf vs Kristal Yapı',
        subtitle: 'Kısa Menzilli Düzen (SRO) ve Uzun Menzilli Düzen (LRO)',
        category: 'Atomik Yapı',
        badge: 'Yapı Düzeni',
        keyTakeaway: 'Metaller uzun menzilli düzenli (LRO) kristaldir; seramik camlar ise kısa menzilli düzenli (SRO) amorftur.',
        examTip: 'Camların yapısı sorulursa: Kristal değildir, Amorf (SRO) random network yapıdır.',
        contentPoints: [
          'Düzensiz (Amorf) Yapı: Atom veya moleküller rastgele dizilir. Camlar tipik amorf seramiklerdir.',
          'Kısa Aralıklı Düzenli (SRO - Short Range Order): Yalnızca komşu birkaç atom mesafesinde düzenlilik vardır (Rastgele ağ - Random network).',
          'Uzun Aralıklı Düzenli (LRO - Long Range Order): Tüm malzeme hacminde 3 boyutlu periyodik tekrar. Metaller, kristal seramikler.',
          'Polimerler: Hem amorf hem kristal bölgeleri aynı anda içerebilirler (yarı kristalin bölgeler).'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Atom Düzeni Tipleri',
          leftTitle: 'Amorf Yapı (SRO)',
          leftContent: 'Kısa menzilli düzen, rastgele ağ (Camlar, hızlı soğutulmuş polimerler)',
          rightTitle: 'Kristal Yapı (LRO)',
          rightContent: 'Uzun menzilli periyodik düzen (Metaller, kristalin seramikler)'
        }
      }
    ]
  },
  {
    id: 3,
    code: 'DERS-3',
    title: 'Enerjetik Malzemeler Dünyası',
    instructor: 'Doç. Dr. Kubilay KARACİF',
    institution: 'Hitit Üniversitesi Mühendislik Fakültesi',
    description: 'Petrol vs TNT 100 milyon kat enerji yayılma hızı, 3 ana kategori (Patlayıcılar, İticiler, Piroteknikler), roket anatomisi ve lüle/nozul süpersonik itkisi.',
    slideCount: 8,
    pdfFilename: 'dersnotu-3_77d25f88.pdf',
    slides: [
      {
        id: 'm3-s1',
        title: 'Enerjetik Malzeme Nedir?',
        subtitle: 'Kimyasal Enerjinin Ani ve Şiddetli Salınımı',
        category: 'Enerjetik',
        badge: 'Temel Prensip',
        keyTakeaway: 'Enerjetik malzemeler içlerinde depolanan muazzam kimyasal enerjiyi dış uyartımla kendi kendini besleyen ani ekzotermik tepkimeyle açığa çıkarır.',
        examTip: 'RDX yayılma hızı 8750 m/s sınavda hız karşılaştırmalarında sıkça sorulur!',
        contentPoints: [
          'Tanım: Kararlı halde bulunan moleküllerin dış uyartımla (mekanik, termal, şok) hızlı bozunma tepkimesi vererek ısı, ışık, basınç ve gaz ürettiği maddelerdir.',
          'Moleküler Bağ Enerjisi: Basınç ve şok etkisi altında moleküler bağlarındaki potansiyel enerjiyi ekzotermik olarak serbest bırakırlar.',
          'Reaksiyon Ürünleri: Katı ve gaz fazında NₓOᵧ, H₂O, CO, CO₂ gazları ile büyük miktarda ısı açığa çıkar.',
          'RDX Yayılma Hızı: 8750 m/s (Ses hızının yaklaşık 25 katı!).'
        ],
        visualType: 'speed_meter',
        visualData: {
          speed: 8750,
          label: 'RDX Yayılma Hızı (8.750 m/s)'
        }
      },
      {
        id: 'm3-s2',
        title: '1 kg Petrol vs 1 kg TNT Kıyaslaması',
        subtitle: 'Enerji Yoğunluğu vs Enerji Açığa Çıkma Hızı',
        category: 'Enerjetik',
        badge: 'Efsane Sınav Sorusu',
        keyTakeaway: 'Petrol TNT’den 6 kat daha fazla enerji içerir; ancak TNT patlarken bu enerjiyi petrolden 100 MİLYON KAT DAHA HIZLI açığa çıkarır!',
        examTip: '"1 kg petrolün enerjisi TNT\'den fazla olduğu halde neden TNT gibi patlamaz ve tahrip gücü oluşturmaz?" -> Sınavın en popüler 20 puanlık sorusudur!',
        contentPoints: [
          'Enerji Miktarı: 1 kg petrolün kimyasal enerjisi, 1 kg TNT’nin enerjisinden yaklaşık 6 kat daha fazladır.',
          'Enerji Açığa Çıkma Hızı (Güç): TNT patlaması esnasında açığa çıkan enerjinin hızı, petrolün açığa çıkardığı hızdan 100.000.000 (yüz milyon) kat daha fazladır!',
          'Tahrip Gücünün Nedeni: Birim zamanda serbest kalan muazzam enerji ve ani gaz genişlemesi süpersonik şok dalgası oluşturur.',
          'Sonuç: Patlayıcıların tahrip gücünü belirleyen şey toplam enerjiden ziyade ENERJİYİ SERBEST BIRAKMA HIZIDIR (Güç = Enerji / Zaman).'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Petrol vs TNT Karşılaştırması',
          leftTitle: '1 kg Petrol',
          leftContent: 'Enerji: TNT’nin 6 KAT FAZLASI | Hız: Yavaş yanma | Tahrip: Düşük',
          rightTitle: '1 kg TNT',
          rightContent: 'Enerji: Petrolden az | Enerji Çıkış Hızı: 100 MİLYON KAT DAHA HIZLI | Tahrip: Çok Yüksek'
        },
        quizCheck: {
          question: '1 kg petrolün kimyasal enerjisi TNT\'den 6 kat fazla olmasına rağmen patlayıcı olarak tahrip gücü oluşturmamasının ana sebebi nedir?',
          options: [
            'Petrolün sıvı olması',
            'TNT patlamasında enerjinin petrolden yüz milyon kat daha hızlı açığa çıkması',
            'TNT\'nin karbon içermemesi',
            'Petrolün ekzotermik reaksiyon vermemesi'
          ],
          correctIndex: 1,
          explanation: 'Tahrip gücünü belirleyen unsur enerjinin çevreye yayılma hızıdır. TNT enerjisini petrolden 100 milyon kat daha hızlı boşaltır.'
        }
      },
      {
        id: 'm3-s3',
        title: 'Enerjetik Malzemelerin 3 Ana Kategorisi',
        subtitle: 'Patlayıcılar, İticiler ve Piroteknikler',
        category: 'Enerjetik',
        badge: 'Ana Sınıflandırma',
        keyTakeaway: 'Aralarındaki en büyük fark enerjiyi serbest bırakma hızları ve kullanım amaçlarıdır.',
        examTip: '3 kategori: Patlayıcılar (nanosaniye/detonasyon), İticiler (milisaniye/deflagrasyon), Piroteknikler (özel efektler).',
        contentPoints: [
          '1. Patlayıcılar (Explosives): Anlık ve yıkıcı şok dalgası (detonasyon). Reaksiyon süresi nanosaniye-mikrosaniye. HMX, RDX savaş başlıklarında.',
          '2. Sevk Barutları / İticiler (Propellants): Kontrollü ve sürekli yanma (deflagrasyon). Roket ve mermilere itki kazandırmak. Reaksiyon süresi milisaniye-saniye. Hız: 10⁻² - 10² m/s. AP + HTPB katı roket yakıtı.',
          '3. Piroteknikler (Pyrotechnics): Isı, ışık, duman veya ses gibi özel efektler üretmek. Havai fişekler, sis bombaları, işaret fişekleri, roket ateşleyicileri.'
        ],
        visualType: 'comparison',
        visualData: {
          title: '3 Temel Enerjetik Sınıf',
          leftTitle: 'Patlayıcılar (Explosives)',
          leftContent: 'Detonasyon (şok dalgası), Nanosaniyeler, Yıkım ve delme',
          rightTitle: 'İticiler (Propellants) & Piroteknikler',
          rightContent: 'Deflagrasyon (sürekli yanma), Milisaniyeler, İtki veya Işık/Duman/Ses'
        }
      },
      {
        id: 'm3-s4',
        title: 'Sevk Barutları (İticiler) ve Kara Barutun İkili Rolü',
        subtitle: 'Kontrollü Yanma (Deflagrasyon) ve İtki Kuvveti',
        category: 'Enerjetik',
        badge: 'Roket Yakıtları',
        keyTakeaway: 'Kara barut serbest ortamda itici/yakıt gibi davranırken; kapalı bir hacimde sıkıştırıldığında patlayıcı davranışı sergiler!',
        examTip: 'Amonyum perklorat (AP) ve hidroksil uçlu polibütadien (HTPB) en çok bilinen katı roket yakıtıdır.',
        contentPoints: [
          'Tepkime Rejimi: Deflagrasyon (ses altı yanma). Katı fazdan gaza geçiş milisaniyeler veya saniyeler sürer.',
          'Amonyum Perklorat (AP) & HTPB: Modern katı yakıtlı roket motorlarının standart yakıt ve oksitleyici kombinasyonudur.',
          'Kara Barutun Özelliği: Belirli bir hacim içinde sıkıştırılma (sınırlandırılma) derecesine göre hem yakıt hem patlayıcı olabilir.',
          'Sınırlandırma Arttıkça: Gaz dışarı kaçamadığından basınç katlanarak artar, tepkime şiddetlenir ve patlayıcı davranışı oluşur.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Kara Barut Davranışı',
          leftTitle: 'Açık / Düşük Sıkıştırma',
          leftContent: 'Kontrollü yanar, itici güç üretir (Yakıt modu)',
          rightTitle: 'Kapalı Hacim / Yüksek Sıkıştırma',
          rightContent: 'Basınç patlaması, şok dalgası (Patlayıcı modu)'
        }
      },
      {
        id: 'm3-s5',
        title: 'Piroteknikler ve Roket Sistemindeki Kritik Rolleri',
        subtitle: 'Ateşleyici, Roket Motoru, Tapa ve Nozul (Lüle)',
        category: 'Enerjetik',
        badge: 'Roket Mimarisi',
        keyTakeaway: 'Nozul (lüle) yanma odasındaki sıcak gazları süpersonik hızlara çıkararak rokete muazzam tepki itki kuvveti sağlar.',
        examTip: 'Roketin ana kısımları: Tapa, Harp başlığı, Roket motoru, Nozul (lüle), Piroteknik ateşleyici, Gövde.',
        contentPoints: [
          'Piroteknik Ateşleyici: Roket motorundaki katı yakıtı tutuşturmak için ilk yüksek ısı ve basıncı üreten zincirin ilk halkasıdır. Elektrik sinyaliyle 0.1 saniyede ateşler!',
          'Roket Motoru: Katı veya sıvı kimyasal yakıt barındırır. Kararlı ve devasa hızla yanarak yüksek basınçlı gaz üretir.',
          'Nozul (Lüle): Motor arkasında yer alan daralan ve genişleyen (de Laval) yapı. Gazları süpersonik hıza çıkarıp itme (thrust) oluşturur.',
          'Tapa (Fuze): Hedefe varıldığında veya belirli sürede ana harp başlığını infilak ettiren mekanik/elektronik kontrol sistemidir.',
          'Kritik Piroteknik Bileşenler: Zirkonyum potasyum perklorat (ZPP), Bor potasyum nitrat (BPN), Zirkonyum ferrik oksit.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Roket Tahrik Bileşenleri',
          leftTitle: 'Piroteknik Ateşleyici (0.1 sn)',
          leftContent: 'Elektrik sinyali → İlk yüksek ısı/kıvılcım → Katı yakıtı yakar',
          rightTitle: 'Nozul / Lüle',
          rightContent: 'Daralan-genişleyen geometri → Gazları süpersonik hıza ulaştırır'
        }
      },
      {
        id: 'm3-s6',
        title: 'Enerjetik Moleküllerin Kimyasal Grupları',
        subtitle: 'Nitro (-NO₂), Hidrazin (-N₂H₄) ve Amino (-NH₂)',
        category: 'Enerjetik',
        badge: 'Azot Zenginliği',
        keyTakeaway: 'Enerjetik malzemeler yüksek azotlu gruplar içerir; bağlar koptuğunda aşırı kararlı N₂ bağı oluşturarak devasa enerji serbest kalır.',
        examTip: 'Enerjetik maddelerdeki en yaygın fonksiyonel gruplar: Nitro (-NO2), Hidrazin (-N2H4), Amino (-NH2).',
        contentPoints: [
          'Ateşleme Yöntemleri: Termal (ısı), mekanik (darbe/sürtünme) veya elektrostatik kıvılcım.',
          'Azot Oranı Yüksek Gruplar: Nitro (-NO₂), Hidrazin (-N₂H₄), Amino (-NH₂).',
          'Oksidasyon Tepkimesi: Molekül kendi içindeki oksijenle yakıtını yakar. Dışarıdan hava oksijeni beklemez.',
          'Reaksiyon Sonunda: N₂, H₂O, CO, CO₂ gazları ile şiddetli termal enerji açığa çıkar.',
          'Mevcut Formlar: Katı, toz, jel, sıvı ve gaz formlarında bulunabilirler.'
        ],
        visualType: 'formula',
        visualData: {
          formula: 'Molekül: R—NO₂ (Nitro) / R—N₂H₄ (Hidrazin) → N₂ + CO₂ + H₂O + ΔH (Şiddetli Isı)',
          highlight: 'Kendinden oksijenli iç yanma (Oksidasyon)'
        }
      },
      {
        id: 'm3-s7',
        title: 'Endüstriyel ve Sivil Kullanım Alanları',
        subtitle: 'Madencilik, Tünel Açma ve Kontrollü Yıkım',
        category: 'Enerjetik',
        badge: 'Sivil Mühendislik',
        keyTakeaway: 'Patlayıcılar sadece savaşta değil; maden çıkarma, metro inşaatları, baraj zeminleri ve patlatma kaynağında vazgeçilmezdir.',
        examTip: 'Sivil kullanım alanları: Madencilik, Tünel/Metro açma, Baraj hazırlama, Kontrollü bina yıkımı, Patlatma kaynağı.',
        contentPoints: [
          'Madencilik: Taşocağı patlatmaları, maden galerisi açma, cevher parçalama ve maden altyapısı.',
          'İnşaat ve Altyapı: Yol ve tünel açma, metro inşaatları, baraj zemin hazırlığı, su kanalları, petrol/doğalgaz boru hattı hendekleri.',
          'Kontrollü Yıkım: Şehir içindeki ömrünü tamamlamış gökdelen ve köprülerin çevreye zarar vermeden kendi içine çökertilmesi.',
          'Patlatma Kaynağı: Farklı iki metal plakanın (örneğin titanyum ile çelik) patlama şokuyla moleküler düzeyde birbirine kaynatılması.',
          'Eğlence: Havai fişek gösterileri ve film sektörü özel efektleri.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Sivil Uygulama Yelpazesi',
          leftTitle: 'Madencilik & Kazı',
          leftContent: 'Cevher kırma, Taşocağı, Galeri açma',
          rightTitle: 'İnşaat & İmalat',
          rightContent: 'Metro, Tünel, Kontrollü yıkım, Patlatma kaynağı'
        }
      },
      {
        id: 'm3-s8',
        title: 'Savunma ve Havacılıkta Stratejik Enerjetikler',
        subtitle: 'Güdümlü Füzelerden Uçak Fırlatma Koltuklarına',
        category: 'Enerjetik',
        badge: 'Havacılık & Denizcilik',
        keyTakeaway: 'Enerjetik malzemeler mühimmat sistemlerinden uçak acil fırlatma koltuklarına ve su altı torpidolarına kadar stratejik omurgadır.',
        examTip: 'Denizaltı sonar karşı tedbirleri ve uçak fırlatma koltuğu fişekleri enerjetik malzeme uygulamalarıdır.',
        contentPoints: [
          'Havacılık: Jet pilotu acil fırlatma koltukları piroteknik fişeklerle mikro saniyede kokpitten dışarı fırlatılır.',
          'Füze Teknolojileri: Katı yakıtlı sevk motorları, yönlendirici yan nozullar ve harp başlığı patlatıcıları.',
          'Denizaltı ve Torpidolar: Su altı patlatma sistemleri, torpido sevk yakıtları ve sonar yanıltma karşı tedbirleri.',
          'Yönlendirilmiş Enerji: Şekillendirilmiş çukur imlalı mühimmatlar (Munroe etkisi) ile zırh delme kabiliyeti.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Stratejik Platformlar',
          leftTitle: 'Havacılık & Uzay',
          leftContent: 'Fırlatma koltuğu roketleri, Kademe ayrılma fitilleri, Uydu yönlendirme',
          rightTitle: 'Denizaltı Sistemleri',
          rightContent: 'Su altı infilak, Torpido itkisi, Sonar yanıltıcı decoylar'
        }
      }
    ]
  },
  {
    id: 4,
    code: 'DERS-4',
    title: 'Patlayıcılar, Tanımlar ve Tarihsel Evrim',
    instructor: 'Doç. Dr. Kubilay KARACİF',
    institution: 'Hitit Üniversitesi Mühendislik Fakültesi',
    description: 'DuPont tanımı, 5 kabul kriteri, Kimyasal vs Nükleer farkı, Peloponnesos’tan Nobel Dinamitine, Manhattan Projesinden Oktanitrokubana!',
    slideCount: 11,
    pdfFilename: 'dersnotu-4_3415b006.pdf',
    slides: [
      {
        id: 'm4-s1',
        title: 'Patlayıcı Maddelerin Tanımı ve DuPont Kriteri',
        subtitle: 'Kıvılcım, Isı veya Darbeyle Katbekat Gaz Genişlemesi',
        category: 'Patlayıcılar',
        badge: 'DuPont Tanımı',
        keyTakeaway: 'DuPont tanımı: "Bir kıvılcım, yüksek ısı veya güçlü darbe ile orijinal hacimlerinin katbekat büyüklüğünde gazlara anında dönüşen katı veya sıvılardır."',
        examTip: 'DuPont şirketinin patlayıcı tanımı ve patlayıcıların atmosferik oksijene ihtiyaç duymadan reaksiyona girmesi sınavda klasik sorudur.',
        contentPoints: [
          'Genel Tanım: Kendi enerjisiyle bir patlatma üretebilme kapasitesine sahip, saf bir madde ya da maddeler karışımıdır.',
          'DuPont Şirketi Tanımı: "Bir kıvılcım, yüksek ısı veya güçlü bir darbe ile orijinal hacimlerinin katbekat büyüklüğünde gazlara anında dönüşebilen katı veya sıvılar."',
          'Oksijensiz Reaksiyon: Yanma süresi çok hızlı (nanosaniye) olduğundan havadaki oksijen yetişemez; bu nedenle patlayıcının kendi moleküler yapısında oksijen bulunması zorunludur.',
          'Açıkta Yanma vs Kapalı Düzenek: Kuvvetli patlayıcıların çoğu kapalı bir alanda veya şok dalgasıyla tetiklenmedikçe açıkta tutuşturulduklarında patlamaz, sadece sakin yanarlar.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Patlayıcı Tanımının Esasları',
          leftTitle: 'Hacim Katlanması',
          leftContent: 'Katı/sıvı fazdan anında binlerce kat gaz hacmine dönüşüm',
          rightTitle: 'Dahili Oksijen',
          rightContent: 'Atmosferik oksijene ihtiyaç duymadan iç oksidasyon'
        }
      },
      {
        id: 'm4-s2',
        title: 'Bir Maddenin Patlayıcı Sayılması İçin 5 Zorunlu Kriter',
        subtitle: 'Sınavın En Önemli Maddeli Teori Sorusu',
        category: 'Patlayıcılar',
        badge: '5 Altın Kriter',
        keyTakeaway: 'Doğal olmamalı (insan yapımı), kendiliğinden başlamamalı, ekzotermik olmalı, aşırı hızlı olmalı, başladıktan sonra dış yardımsız bitmeli!',
        examTip: 'Hoca sınavda "Bir maddenin patlayıcı madde olarak kabul edilebilmesi için gereken 5 kriteri yazınız" diye 15-20 puanlık soru sorar!',
        contentPoints: [
          'a) İnsan Yapımı Olmalı: Doğal yollardan oluşan değil, insan müdahalesiyle özel amaçlar doğrultusunda tasarlanarak üretilmiş olmalıdır.',
          'b) Kendiliğinden Başlamamalı: Kimyasal patlayıcılarda uygun fiziksel bir dış etki (ısı, darbe, kıvılcım); nükleer patlayıcılarda nötron bombardımanı olmadan başlamamalıdır.',
          'c) Ekzotermik Olmalı: Tepkime çevreye büyük miktarda ısı ve enerji vermelidir.',
          'd) Hızlı Gerçekleşmeli: Çok kısa sürede gerçekleşmeli ve patlayıcı türüne göre gaz ürünlerine dönüşmelidir.',
          'e) Kendi Kendine Tamamlanmalı: Reaksiyon başladıktan sonra, dışarıdan herhangi bir fiziksel veya kimyasal dış desteğe ihtiyaç duymaksızın kendiliğinden tamamlanmalıdır.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Patlayıcı Kabul Edilme Kriterleri',
          leftTitle: 'Tasarım & Başlama',
          leftContent: '1. İnsan yapımı olmalı\n2. Dış etki olmadan kendiliğinden başlamamalı',
          rightTitle: 'Termodinamik & Süreç',
          rightContent: '3. Ekzotermik olmalı\n4. Hızlı reaksiyon\n5. Başladıktan sonra dış müdahalesiz tamamlanmalı'
        },
        quizCheck: {
          question: 'Aşağıdakilerden hangisi bir maddenin patlayıcı madde kabul edilebilmesi için gereken şartlardan biri DEĞİLDİR?',
          options: [
            'Reaksiyonun ekzotermik olması',
            'Doğal yollarla yer kabuğunda kendiliğinden oluşmuş olması',
            'Başladıktan sonra dış yardıma ihtiyaç duymadan tamamlanması',
            'Uygun bir dış etki olmadıkça kendiliğinden başlamaması'
          ],
          correctIndex: 1,
          explanation: 'Patlayıcı madde kriterlerinden ilki: Doğal yollardan oluşan değil, insan müdahalesiyle özel amaçlar doğrultusunda tasarlanıp üretilmiş olmasıdır.'
        }
      },
      {
        id: 'm4-s3',
        title: 'Kimyasal Patlayıcılar vs Nükleer Patlayıcılar',
        subtitle: 'Bağ Enerjisi, Dış Etki ve Reaksiyon Ürünleri Karşılaştırması',
        category: 'Patlayıcılar',
        badge: 'Karşılaştırma Tablosu',
        keyTakeaway: 'Kimyasal patlayıcı bağ enerjisini salar ve şok gazı üretir; Nükleer patlayıcı atom çekirdeği fisyon enerjisini salar, gama radyasyonu ve 4000°C ısı üretir.',
        examTip: 'Kimyasal ve nükleer patlayıcıların 3 temel farkı (Dış etki, Açığa çıkan enerji, Patlama ürünleri) tablo sorusu olarak çıkar.',
        contentPoints: [
          '1. Uygun Dış Etki:',
          '• Kimyasal Patlayıcı: Fiziksel bir dış etki (kıvılcım, darbe, sürtünme, şok).',
          '• Nükleer Patlayıcı: Yüksek sıcaklık, kritik basınç veya nötron bombardımanı.',
          '2. Açığa Çıkan Enerji:',
          '• Kimyasal Patlayıcı: Kimyasal bağ enerjisi (elektron bağları).',
          '• Nükleer Patlayıcı: Atom çekirdeği içindeki nükleer bağ enerjisi (fisyon/füzyon).',
          '3. Patlama Ürünleri:',
          '• Kimyasal Patlayıcı: Isı, ışık, ses, şok dalgası, yüksek basınçlı gaz (N₂, CO, CO₂).',
          '• Nükleer Patlayıcı: Nükleer radyasyon (özellikle gama ışınları), nötronlar, elektromanyetik darbe (EMP), 3.000 - 4.000 °C sıcaklık.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Kimyasal vs Nükleer Patlayıcı Matrisi',
          leftTitle: 'Kimyasal Patlayıcılar',
          leftContent: 'Dış Etki: Darbe / Isı / Kıvılcım\nEnerji: Kimyasal Bağ Enerjisi\nÜrünler: Gaz, Şok, Isı, Ses',
          rightTitle: 'Nükleer Patlayıcılar',
          rightContent: 'Dış Etki: Nötron bombardımanı\nEnerji: Çekirdek Nükleer Bağ Enerjisi\nÜrünler: Gama Radyasyonu, Nötronlar, 4000°C Isı'
        }
      },
      {
        id: 'm4-s4',
        title: 'Tarihsel Gelişim: Yunan Ateşinden Çin Kara Barutuna',
        subtitle: 'M.Ö. 434 Peloponnesos Savaşı ve 10. Yüzyıl Güherçile Keşfi',
        category: 'Tarihçe',
        badge: 'İlk Keşifler',
        keyTakeaway: 'Kara barutta güherçile (KNO₃ veya NaNO₃), kükürt ve odun kömürü birleşir; duman hacmi başlangıç katısının yaklaşık 4000 KATINA ulaşır!',
        examTip: 'Güherçilenin kimyasal adı (Potasyum nitrat - KNO3) ve kara barutun yanmasında duman hacminin 4000 kat artması sınavda sıkça sorulur.',
        contentPoints: [
          'M.Ö. 434 - 404: Peloponnesos Savaşlarında kükürt ve zift karışımı "Yunan Ateşi" kullanıldı.',
          '10. Yüzyıl Başı (Çin): İnsanlık tarihindeki ilk gerçek patlayıcı olan kara barut keşfedildi. Martı ve yarasa dışkılarındaki güherçile (potasyum nitrat) kullanıldı.',
          'Kara Barut Formülasyonu: Güherçile (KNO₃ / NaNO₃) + Kükürt (S) + Odun Kömürü (C).',
          '4000 Kat Hacim Patlaması: Güherçileden çıkan oksijenle kükürt ve kömür anında yanar. Oluşan duman miktarı katı reaktanların yaklaşık 4000 katı hacim kaplar.',
          'Avrupa’ya Yayılış: Marco Polo gezileri ve Haçlı Seferleri ile Avrupa’ya geçti.',
          '1627 Slovakya: İlk kez madencilik sektöründe bir maden kuyusu açmak için patlatma yapıldı.'
        ],
        visualType: 'timeline',
        visualData: {
          year: 'M.Ö. 434 - 1627',
          event: 'Yunan Ateşi → Çin Kara Barutu (4000x gaz) → Slovakya Madeni'
        }
      },
      {
        id: 'm4-s5',
        title: 'Kimya Devrimi: Amonyum Nitrat, Civafülminat ve Nitroselüloz',
        subtitle: 'Schönbein’in Laboratuvar Önlüğü Kazası (1846)',
        category: 'Tarihçe',
        badge: '17. ve 19. Yüzyıl',
        keyTakeaway: '1846’da Christian Schönbein pamuklu önlüğüyle asit karışımını sildikten sonra sobada kuruturken kazara patlayıcı nitroselülozu keşfetti!',
        examTip: 'Nitroselülozun (dumansız barut) keşfi Christian Friedrich Schönbein tarafından pamuk ve nitrik+sülfürik asit kazasıyla olmuştur.',
        contentPoints: [
          '1654: Alman Johann Rudolf Glauber, nitrik asidin amonyakla reaksiyonu sonucu Amonyum Nitratı (NH₄NO₃) elde etti.',
          '1690: Alman Johann von Löwenstern-Kunckel cıva, nitrik asit ve alkolle Civafülminatı [Hg(CNO)₂] sentezledi.',
          '1832: Fransız Henri Braconnot nişasta ve pamuğu nitrik asitle işleyerek Ksiloidin elde etti.',
          '1846 Efsane Keşif: Alman kimyager Christian Friedrich Schönbein, laboratuvarında dökülen nitrik ve sülfürik asit karışımını pamuklu önlüğüyle sildi. Önlüğü ocak başında kuruturken önlük alev almadan anında patlayarak yok oldu!',
          'Sonuç: "Nitroselüloz" (Selüloz Nitrat) keşfedildi; dumansız barutun ve kolodyumun temeli atıldı.'
        ],
        visualType: 'timeline',
        visualData: {
          year: '1654 - 1846',
          event: 'Amonyum Nitrat → Civafülminat → Nitroselüloz (Schönbein Kazası)'
        }
      },
      {
        id: 'm4-s6',
        title: 'Nitrogliserin ve Alfred Nobel: Dinamitin Doğuşu',
        subtitle: 'Ascanio Sobrero (1846) ve Alfred Nobel’in Kapsül İcadı (1868)',
        category: 'Tarihçe',
        badge: 'Dinamit Devrimi',
        keyTakeaway: 'Sobrero nitrogliserini buldu ancak çok kararsızdı; Nobel silisli toprak (diatome toprağı) emdirerek güvenli DİNAMİTİ ve 1868’de patlatma kapsülünü icat etti!',
        examTip: 'Dinamitin Yunanca "Dynamis" (Güç) kelimesinden gelmesi, diatome toprağı ile nitrogliserin birleşimi ve Nobel\'in 1868 kapsül icadı kesin sınav sorusudur.',
        contentPoints: [
          '1846 Ascanio Sobrero: Gliserole nitrik ve sülfürik asit ekleyerek Nitrogliserini (TNG, C₃H₅N₃O₉) keşfetti. Madde aşırı hassastı, dokunmak bile patlatıyordu.',
          '1864 Trajedisi: Alfred Nobel’in Stockholm fabrikasında patlama oldu; kardeşi Emil dahil 4 kişi öldü. Nobel şehir dışına sürüldü.',
          '1860’lar Dinamit İcadı: Nobel sıvı nitrogliserini inert gözenekli silisli toprağa (Diatome toprağı / Kieselguhr) emdirerek katı, güvenli dinamiti buldu.',
          'İsim Kökeni: Eski Yunanca "Dynámis" (Güç) kelimesinden türetildi.',
          '1868 Patlatma Kapsülü: Nitrogliserin yemlemesinde emniyetli fitille birlikte çalışan kapsülü icat ederek modern patlatma teknolojisini başlattı.',
          '1875 Jelatin Dinamit: Nitrogliserini nitroselüloz içinde tutmayı başararak jelatin bazlı patlayıcıları üretti.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Sobrero vs Alfred Nobel',
          leftTitle: 'Ascanio Sobrero (1846)',
          leftContent: 'Nitrogliserini keşfetti (C₃H₅N₃O₉). Kontrolsüz, sarsıntıda patlayan sıvı.',
          rightTitle: 'Alfred Nobel (1860’lar)',
          rightContent: 'Diatome toprağına emdirdi → Dinamit! 1868 Kapsülü icat etti. Nobel Ödülleri.'
        }
      },
      {
        id: 'm4-s7',
        title: 'Alfred Nobel Vasiyeti, Nobel Ödülleri ve Nobelyum',
        subtitle: '10 Aralık Törenleri ve 33 Milyon Kronluk Miras',
        category: 'Tarihçe',
        badge: 'Nobel Mirası',
        keyTakeaway: 'Nobel mirasının 33 milyon kronunu her yıl insanlığa hizmet edenlere verilmek üzere Nobel Ödülleri Vakfı’na bağışlamıştır.',
        examTip: 'Nobel ödüllerinin verildiği alanlar (Fizik, Kimya, Tıp, Edebiyat, Barış, Ekonomi) ve sentetik Nobelyum elementi genel kültür ve vize sorusudur.',
        contentPoints: [
          'Vasiyet: Alfred Nobel servetini insanlığa fayda sağlayan bilim insanlarına ve barış elçilerine bağışladı (33 milyon kron).',
          'Nobel Vakfı (1900): İsveç hükümeti tarafından kuruldu. Ödüller Alfred Nobel’in ölüm yıldönümü olan 10 Aralık’ta sunulur.',
          'Kategoriler: Fizik, Kimya, Tıp-Fizyoloji, Edebiyat, Barış ve Ekonomi.',
          'Nobelyum (No, Atom No 102): Sentetik radyoaktif element Nobel’in anısına bu isimle adlandırılmıştır.',
          '19. Yüzyıl Sonu Yeni Patlayıcılar: TNT (Trinitrotoluen), Tetril, Pikrik Asit, Amonyum Pikrat ve PETN.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Nobel Vakfı & Patlayıcı Mirası',
          leftTitle: 'Konvansiyonel Patlayıcılar',
          leftContent: 'TNT (C₇H₅N₃O₆), Tetril, Pikrik Asit, PETN (C₅H₈N₄O₁₂)',
          rightTitle: 'Nobel Ödülleri & Element',
          rightContent: '10 Aralık törenleri, Nobelyum (No, 102) elementi'
        }
      },
      {
        id: 'm4-s8',
        title: '20. Yüzyılın Askeri Devleri: RDX ve HMX',
        subtitle: 'Kraliyet Yıkım Patlayıcısı ve Yüksek Ergimeli Patlayıcı',
        category: 'Patlayıcılar',
        badge: 'Yüksek Enerjili HEMs',
        keyTakeaway: 'RDX (C₃H₆N₆O₆) = Royal Demolition Explosive; HMX (C₄H₈N₈O₈) = High Melting Explosive. Savaş başlıklarının ana gücüdür.',
        examTip: 'RDX ve HMX kısaltmalarının açılımları ve formülleri eşleştirme sorularında kesin gelir!',
        contentPoints: [
          'HEMs (High Energy Materials): 20. yüzyıl başlarında geliştirilen yüksek enerjili malzemelere verilen genel isimdir.',
          'RDX (Siklotrimetilen-trinitramin, C₃H₆N₆O₆):',
          '• Research Department Explosive veya Royal Demolition Explosive (Kraliyet Yıkım Patlayıcısı) olarak bilinir.',
          '• Yayılma hızı 8.750 m/s.',
          'HMX (Siklotetrametilen-tetranitramin, C₄H₈N₈O₈):',
          '• High Melting Explosive (Yüksek Ergimeli Patlayıcı) olarak bilinir.',
          '• Daha yüksek sıcaklık stabilitesine ve detonasyon hızına sahiptir.',
          '1. Dünya Savaşı Tuzları: Civasiyanat Hg(OCN)₂ ve Kurşun(II) azit Pb(N₃)₂ gibi darbe duyarlı başlatıcı tuzlar geliştirildi.'
        ],
        visualType: 'formula',
        visualData: {
          formula: 'RDX: C₃H₆N₆O₆ (8750 m/s) | HMX: C₄H₈N₈O₈ (Yüksek Ergimeli)',
          highlight: 'Royal Demolition Explosive vs High Melting Explosive'
        }
      },
      {
        id: 'm4-s9',
        title: 'Manhattan Projesi ve Nükleer Çağın Doğuşu (1942-1945)',
        subtitle: 'Trinity Testi, Little Boy (U-235) ve Fat Man (Pu-239)',
        category: 'Tarihçe',
        badge: 'Tarihin Dönüm Noktası',
        keyTakeaway: 'Manhattan Projesi 130.000 kişi ve bugünkü değeriyle 28 milyar dolara mal oldu; Hiroşima ve Nagazaki’de 280.000 kişi öldü, merkez sıcaklık 3.000-4.000 °C oldu.',
        examTip: 'Little Boy (Uranyum-235) Hiroşima; Fat Man (Plütonyum-239) Nagazaki eşleşmesi ve 20.000 ton TNT eşdeğer etkisi sınavda çıkar.',
        contentPoints: [
          '1942 Manhattan Projesi: ABD tarafından başlatıldı. İlk karargah Manhattan’da kurulduğu için bu ismi aldı. 130.000 kişi çalıştı, 2 milyar $ (bugün 28 milyar $) harcandı.',
          '16 Temmuz 1945 Trinity Testi: Tarihteki ilk atom bombası denemesi New Mexico çölünde başarıyla yapıldı.',
          '6 Ağustos 1945 Hiroşima: Uranyum-235 tipi fisyon bombası "Little Boy" atıldı.',
          '9 Ağustos 1945 Nagazaki: Plütonyum-239 tipi fisyon bombası "Fat Man" atıldı.',
          'Yıkım Gücü: Her biri 20.000 ton TNT eşdeğerinde patlama gücüne sahipti.',
          'Patlama Merkezi: Sıcaklık 3.000 - 4.000 °C’ye ulaştı; toplamda 280.000 insan hayatını kaybetti.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Manhattan Projesi Bombaları',
          leftTitle: 'Little Boy (Hiroşima - 6 Ağustos)',
          leftContent: 'Uranyum-235 Tipi Fisyon Bombası | 20.000 ton TNT eşdeğeri',
          rightTitle: 'Fat Man (Nagazaki - 9 Ağustos)',
          rightContent: 'Plütonyum-239 Tipi Fisyon Bombası | 3.000-4.000 °C Merkez Sıcaklığı'
        }
      },
      {
        id: 'm4-s10',
        title: 'Zirve Noktası: Oktanitrokuban [C₈(NO₂)₈]',
        subtitle: 'Dünyanın En Güçlü Nükleer Olmayan Patlayıcısı',
        category: 'Patlayıcılar',
        badge: 'Rekortmen Molekül',
        keyTakeaway: 'Philip Eaton & Mao-Xi Zhang 2001’de sentezledi: Küp karbon köşelerine bağlı 8 nitro grubu, 2.38 kg TNT eşdeğeri ve 10.100 m/s patlama hızı!',
        examTip: 'Oktanitrokubanın kimyasal formülü [C8(NO2)8], 10100 m/s patlama hızı ve 2.38 kg TNT eşdeğeri sınavda mutlaka sorulacak süper sorudur!',
        contentPoints: [
          'İmkansız Görülen Sentez: Kimyagerler gerilimli küp karbon kafesine 8 nitro grubunun bağlanmasının imkansız olduğunu düşünüyordu.',
          '2001 Keşfi: Philip E. Eaton ve Mao-Xi Zhang (Angewandte Chemie dergisinde) sentezi yayınladı. 2000 yılının en büyük kimya dönüm noktası seçildi.',
          'Küp Kafes Gerilimi: Karbon atomları 90 derecelik küp köşelerindedir (normalde tetrahedral 109.5° ister). Bu muazzam açısal gerilim depolanmış devasa enerji demektir!',
          'Patlama Hızı: 10.100 m/s (Dünya rekoru!).',
          'TNT Eşdeğeri: 1 kg Oktanitrokuban = 2.38 kg TNT gücündedir.',
          'Çevre Dostu: Patladığında sadece zararsız CO₂ ve N₂ gazı açığa çıkarır.'
        ],
        visualType: 'molecule',
        visualData: {
          formula: 'C₈(NO₂)₈',
          speed: '10.100 m/s',
          tntEq: '2.38x TNT',
          discoverer: 'Philip E. Eaton & Mao-Xi Zhang (2001)'
        },
        quizCheck: {
          question: 'Dünyanın en güçlü nükleer olmayan patlayıcısı olarak bilinen ve 10.100 m/s patlama hızına sahip olan bileşik hangisidir?',
          options: ['Nitrogliserin', 'Trinitrotoluen (TNT)', 'Oktanitrokuban [C8(NO2)8]', 'RDX'],
          correctIndex: 2,
          explanation: 'Oktanitrokuban [C8(NO2)8], Philip Eaton tarafından sentezlenen ve 10.100 m/s patlama hızına ulaşan en güçlü nükleer olmayan patlayıcıdır.'
        }
      },
      {
        id: 'm4-s11',
        title: 'Sivil Patlatma Devleri: Panama Kanalı ve Petrol Yangınları',
        subtitle: '1913 Petrol Kuyuları ve 1914’te 31 Milyon kg Dinamit',
        category: 'Tarihçe',
        badge: 'Mühendislik Zaferleri',
        keyTakeaway: '1914’te 77 km uzunluğundaki Panama Kanalı’nı açmak için 31 milyon kg dinamit kullanıldı; bu dinamitin kullanıldığı ilk dev projedir.',
        examTip: 'Dinamitin kullanıldığı ilk büyük sivil proje Panama Kanalı’dır (31 milyon kg dinamit, 1914).',
        contentPoints: [
          '1913 Petrol Kuyuları: Tarihte ilk defa kontrolden çıkan ve günlerce yanan bir petrol kuyusunu söndürmek için kontrollü patlayıcı kullanıldı (patlama şoku oksijeni anında tüketir).',
          '1914 Panama Kanalı: 77 km uzunluğundaki kanalı Atlas ve Pasifik okyanuslarını birleştirmek üzere açmak için tam 31.000.000 kg (31 bin ton) dinamit patlatıldı.',
          'Tarihi Önem: Panama Kanalı, Alfred Nobel’in icadı olan dinamitin endüstriyel boyutta kullanıldığı tarihteki İLK BÜYÜK MEGA PROJEDİR.',
          'Geleceğe Bakış: Günümüzde daha az duyarlı, depolaması güvenli ve yüksek performanslı yeşil enerjetik malzemelerin geliştirilmesi devam etmektedir.'
        ],
        visualType: 'comparison',
        visualData: {
          title: 'Mega Sivil Projeler',
          leftTitle: '1913 Petrol Yangını Söndürme',
          leftContent: 'Alevin oksijeni şok dalgasıyla kesildi, ilk kez petrol kuyusunda kullanıldı',
          rightTitle: '1914 Panama Kanalı',
          rightContent: '31 Milyon kg dinamit, 77 km kanal, dinamitin ilk mega projesi'
        }
      }
    ]
  }
];
