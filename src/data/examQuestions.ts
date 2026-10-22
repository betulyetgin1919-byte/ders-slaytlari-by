import { ExamQuestion } from '../types';

export const examQuestionBank: ExamQuestion[] = [
  {
    id: 'q1',
    moduleId: 1,
    category: 'Malzeme Bilimi',
    difficulty: 'Kolay',
    examType: 'vize',
    question: 'Malzeme biliminin sunduğu yapı ve özellik arasındaki bilgiye dayanarak, arzu edilen özellikte malzemelerin tasarlanması ve imal edilmesine ne ad verilir?',
    options: [
      'Malzeme Fiziği',
      'Malzeme Mühendisliği',
      'Ekstraktif Metalurji',
      'Katı Hal Kimyası'
    ],
    correctIndex: 1,
    explanation: 'Malzeme Bilimi "yapı-özellik" ilişkisini inceler; Malzeme Mühendisliği ise bu bilgiyi kullanarak istenilen özellikte malzeme tasarlar ve üretir.'
  },
  {
    id: 'q2',
    moduleId: 1,
    category: 'Kompozit vs Alaşım',
    difficulty: 'Orta',
    examType: 'vize',
    question: 'Kompozit malzemeler ile alaşımlar arasındaki en temel fark aşağıdakilerden hangisidir?',
    options: [
      'Alaşımlar daima polimerlerden oluşurken kompozitler metalden oluşur',
      'Kompozit makro seviyede fiziksel birleşme iken, alaşım mikro (atomik) seviyede çözünme ve birleşmedir',
      'Kompozitlerde erime sıcaklığı daima alaşımlardan düşüktür',
      'Alaşımlarda bileşenler kimyasal olarak inert davranır'
    ],
    correctIndex: 1,
    explanation: 'Kompozit malzemeler makro boyutta fiziksel olarak bir araya getirilir ve bileşenler birbiri içinde çözünmez; alaşımlar ise atomik (mikro) seviyede birleşir.'
  },
  {
    id: 'q3',
    moduleId: 1,
    category: 'Seramik Kristalografi',
    difficulty: 'Zor',
    examType: 'vize',
    question: 'CaF₂ (Florit) tipi kristal yapıya sahip bir seramiğin birim hücresinde toplam kaç adet iyon bulunur?',
    options: ['4', '6', '12', '30'],
    correctIndex: 2,
    explanation: 'CaF₂ yapısında YMK kafesinde 4 adet Ca²⁺ ve 8 adet F⁻ iyonu yer alır; birim hücre başına toplam 12 iyon bulunur (Ders Notu 1, Slayt 12).'
  },
  {
    id: 'q4',
    moduleId: 1,
    category: 'Seramikler',
    difficulty: 'Orta',
    examType: 'vize',
    question: 'Piezoelektrik ve elektroseramik özellikleriyle bilinen ve M\'M\'\'X₃ (CaTiO₃, BaTiO₃) genel formülüne sahip kristal yapı aşağıdakilerden hangisidir?',
    options: ['Korundum', 'Florit', 'Perovskit', 'Spinel'],
    correctIndex: 2,
    explanation: 'CaTiO₃ ve BaTiO₃ "Perovskit" yapısına örnektir. M\'M\'\'2X4 ise Spinel (MgAl2O4) yapısıdır.'
  },
  {
    id: 'q5',
    moduleId: 1,
    category: 'Savunma Zırhı',
    difficulty: 'Orta',
    examType: 'vize',
    question: 'Modern kompozit askeri zırh sistemlerinde en dıştaki B₄C seramik yüzey ile arkasındaki UHMW-PE (PE-1000) tekniğin görev dağılımı hangi seçenekte doğru verilmiştir?',
    options: [
      'B₄C şarapnel tutar; UHMW-PE merminin ucunu kırar',
      'B₄C merminin sivri ucunu ezip parçalar; UHMW-PE kinetik enerjiyi emerek şarapnelleri tutar',
      'İki katman da sadece optik şeffaflık sağlamak içindir',
      'UHMW-PE eriyerek mermiyi soğutur'
    ],
    correctIndex: 1,
    explanation: 'Aşırı sert seramik (B4C) mermi ucunu köreltip kırar; esnek ve yüksek mukavemetli UHMW-PE ise saçılan şarapnelleri durdurup darbe enerjisini emer.'
  },
  {
    id: 'q6',
    moduleId: 2,
    category: 'Kristalografi & Kayma',
    difficulty: 'Zor',
    examType: 'vize',
    question: 'Çekme testinde Alüminyumun Magnezyuma göre çok daha fazla boy uzaması ve süneklik göstermesinin kristalografik sebebi nedir?',
    options: [
      'Alüminyumun yoğunluğunun magnezyumdan daha düşük olması',
      'Alüminyumda 12 adet yüksek yoğunluklu kayma düzlem/doğrultu kombinasyonu varken, magnezyumda sadece 3 adet olması',
      'Magnezyumun kovalent bağlı olması',
      'Alüminyumun amorf bir metal cam olması'
    ],
    correctIndex: 1,
    explanation: 'FCC kafesli Al’de 12 kayma sistemi bulunur ve dislokasyonlar kolay hareket eder; HCP kafesli Mg’de ise sadece 3 birincil kayma kombinasyonu olduğundan oda sıcaklığında kırılgandır.'
  },
  {
    id: 'q7',
    moduleId: 2,
    category: 'Mol & Atom Hesaplama',
    difficulty: 'Zor',
    examType: 'vize',
    question: '100 gram gümüş (Ag) içerisinde kaç adet gümüş atomu bulunur? (Gümüşün atom ağırlığı: 107.868 g/mol, N_A = 6.023 × 10²³)',
    options: [
      '5.58 × 10²³ atom',
      '1.05 × 10²² atom',
      '9.47 × 10²¹ atom',
      '6.02 × 10²⁵ atom'
    ],
    correctIndex: 0,
    explanation: 'N = (Kütle × N_A) / M_A = (100 × 6.023 × 10²³) / 107.868 = 5.58 × 10²³ atom (Ders Notu 2, Slayt 15).'
  },
  {
    id: 'q8',
    moduleId: 2,
    category: 'Mol & Atom Hesaplama',
    difficulty: 'Zor',
    examType: 'vize',
    question: '1 adet tekil Bakır (Cu) atomunun gram cinsinden kütlesi yaklaşık ne kadardır? (Bakır atom ağırlığı: 63.54 g/mol, N_A = 6.02 × 10²³)',
    options: [
      '1.05 × 10⁻²² gram',
      '6.35 × 10⁻²⁴ gram',
      '9.47 × 10⁻²¹ gram',
      '3.84 × 10⁻²³ gram'
    ],
    correctIndex: 0,
    explanation: 'Tek bir atomun kütlesi = Mol ağırlığı / Avogadro sayısı = 63.54 / (6.02 × 10²³) = 1.05 × 10⁻²² gram.'
  },
  {
    id: 'q9',
    moduleId: 2,
    category: 'Atomik Bağlar',
    difficulty: 'Orta',
    examType: 'vize',
    question: 'Elmasın erime sıcaklığının 3300°C gibi olağanüstü yüksek bir değere sahip olmasını sağlayan bağ türü ve geometrisi nedir?',
    options: [
      'Yönsüz Coulomb iyonik bağı',
      'Karbon atomlarının sp³ hibritleşmesiyle oluşturduğu kuvvetli 3 boyutlu kovalent ağ',
      'Serbest elektron denizi metalik bağı',
      'Tabakalar arası Van der Waals dipol çekimi'
    ],
    correctIndex: 1,
    explanation: 'Elmasta tüm karbon atomları 4 komşusuyla güçlü kovalent bağ paylaşarak 3D tetrahedral ağ kurar. Bağları koparmak için 3300°C gereklidir.'
  },
  {
    id: 'q10',
    moduleId: 2,
    category: 'Bağ Enerjisi',
    difficulty: 'Kolay',
    examType: 'vize',
    question: 'Aşağıdaki atomlar arası bağ türlerinden hangisi "İkincil (Secondary) Zayıf Bağ" sınıfında yer alır ve enerjisi 10 kcal/mol değerinden küçüktür?',
    options: [
      'İyonik Bağ',
      'Kovalent Bağ',
      'Metalik Bağ',
      'Van der Waals Bağı'
    ],
    correctIndex: 3,
    explanation: 'İyonik (150-370), Kovalent (125-300), Metalik (25-200) birincil kuvvetli bağlardır. Van der Waals (<10 kcal/mol) ikincil zayıf bağdır.'
  },
  {
    id: 'q11',
    moduleId: 3,
    category: 'Enerjetik Karşılaştırma',
    difficulty: 'Orta',
    examType: 'final',
    question: '1 kg petrolün kimyasal enerjisi 1 kg TNT\'den 6 kat fazla olmasına rağmen neden TNT gibi tahrip gücü yüksek bir patlama yapamaz?',
    options: [
      'Petrolün yoğunluğunun çok yüksek olması',
      'TNT patlaması sırasında enerjinin petrole göre 100 milyon kat daha hızlı açığa çıkması',
      'Petrolün içinde hidrojen bulunması',
      'TNT\'nin ekzotermik değil endotermik reaksiyon vermesi'
    ],
    correctIndex: 1,
    explanation: 'Patlama tahrip gücünü belirleyen unsur enerjinin büyüklüğünden ziyade enerjinin çevreye yayılma hızıdır (Güç = Enerji / Zaman). TNT enerjisini 100 milyon kat daha hızlı boşaltır.'
  },
  {
    id: 'q12',
    moduleId: 3,
    category: 'Enerjetik Sınıflandırma',
    difficulty: 'Orta',
    examType: 'final',
    question: 'Enerjetik malzemelerin 3 ana kategorisi hangi seçenekte tam ve doğru olarak sıralanmıştır?',
    options: [
      'Metaller, Seramikler, Polimerler',
      'Patlayıcılar, İticiler (Sevk Barutları), Piroteknikler',
      'Fisyon maddeleri, Füzyon maddeleri, Kimyasal tuzlar',
      'Oksitleyiciler, Redükleyiciler, Nötrleyiciler'
    ],
    correctIndex: 1,
    explanation: 'Enerjetik malzemeler enerji serbest bırakma hızları ve amaçlarına göre: 1) Patlayıcılar, 2) İticiler (Sevk yakıtları), 3) Piroteknikler olarak üçe ayrılır.'
  },
  {
    id: 'q13',
    moduleId: 3,
    category: 'Detonasyon Hızı',
    difficulty: 'Kolay',
    examType: 'final',
    question: 'Yüksek enerjili patlayıcılardan biri olan RDX\'in yayılma (detonasyon) hızı ders notlarında kaç m/s olarak belirtilmiştir?',
    options: ['340 m/s', '1.200 m/s', '8.750 m/s', '300.000 m/s'],
    correctIndex: 2,
    explanation: 'Ders Notu 3, Slayt 2 ve Ders Notu 4, Slayt 13’e göre RDX’in yayılma hızı tam 8.750 m/s’dir.'
  },
  {
    id: 'q14',
    moduleId: 3,
    category: 'Roket Sistemleri',
    difficulty: 'Orta',
    examType: 'final',
    question: 'Bir roket motorunda yanan sıcak gazların hızını süpersonik seviyelere çıkararak zıt yönde itme (thrust) kuvveti üreten daralan ve genişleyen parçaya ne ad verilir?',
    options: ['Tapa', 'Nozul (Lüle)', 'Piroteknik Ateşleyici', 'Gövde'],
    correctIndex: 1,
    explanation: 'Nozul (Lüle), yanma odasından gelen yüksek basınçlı gazları süpersonik hızlara çıkararak roket gövdesine itki kazandıran parçadır.'
  },
  {
    id: 'q15',
    moduleId: 3,
    category: 'Sevk Yakıtları',
    difficulty: 'Orta',
    examType: 'final',
    question: 'Modern katı roket yakıtlarında en çok bilinen ve yaygın kullanılan ikili bileşen aşağıdakilerden hangisidir?',
    options: [
      'Petrol ve Kömür',
      'Amonyum perklorat (AP) ve Hidroksil uçlu polibütadien (HTPB)',
      'Civafülminat ve Cıva',
      'Kalsiyum titanat ve Kurşun azit'
    ],
    correctIndex: 1,
    explanation: 'Amonyum perklorat (AP) oksitleyici ve HTPB bağlayıcı yakıt olarak katı roket motorlarının standart formülüdür.'
  },
  {
    id: 'q16',
    moduleId: 4,
    category: 'Patlayıcı Kriterleri',
    difficulty: 'Zor',
    examType: 'final',
    question: 'Bir maddenin bilimsel olarak patlayıcı madde kabul edilebilmesi için gereken 5 zorunlu kriterden biri hangisi DEĞİLDİR?',
    options: [
      'İnsan müdahalesiyle tasarlanmış olmalı (doğal olmamalı)',
      'Uygun bir dış etki olmadıkça kendiliğinden başlamamalı',
      'Reaksiyon endotermik (ısı alan) yapıda olmalı',
      'Reaksiyon başladıktan sonra dış desteğe ihtiyaç duymadan kendiliğinden tamamlanmalı'
    ],
    correctIndex: 2,
    explanation: 'Patlayıcı reaksiyonları ısı alan (endotermik) değil, dışarıya şiddetli ısı ve enerji veren EKZOTERMİK tepkimeler olmak zorundadır.'
  },
  {
    id: 'q17',
    moduleId: 4,
    category: 'Patlayıcı vs Nükleer',
    difficulty: 'Orta',
    examType: 'final',
    question: 'Nükleer patlayıcıların kimyasal patlayıcılardan temel farkları incelendiğinde aşağıdakilerden hangisi NÜKLEER patlayıcılara aittir?',
    options: [
      'Enerji kaynağı atom çekirdeğindeki nükleer bağ enerjisidir ve gama radyasyonu açığa çıkar',
      'Sadece fiziksel bir kıvılcım veya sürtünmeyle başlatılır',
      'Açığa çıkan tek ürün su buharı ve karbondioksittir',
      'Patlama merkezindeki sıcaklık oda sıcaklığına yakındır'
    ],
    correctIndex: 0,
    explanation: 'Kimyasal patlayıcı elektron bağlarını kullanırken, nükleer patlayıcı atom çekirdeğini (fisyon/füzyon) parçalar; merkezde 3000-4000°C ısı ve gama radyasyonu üretir.'
  },
  {
    id: 'q18',
    moduleId: 4,
    category: 'Tarihçe & Keşifler',
    difficulty: 'Kolay',
    examType: 'final',
    question: 'İnsanlık tarihinde keşfedilen ilk patlayıcı olan kara barutun bileşimindeki "Güherçile" hangi kimyasal maddedir ve yanmada duman hacmi yaklaşık kaç katına çıkar?',
    options: [
      'Sodyum klorür (NaCl) — 100 kat',
      'Potasyum nitrat (KNO₃) veya Sodyum nitrat (NaNO₃) — 4000 kat',
      'Nitroselüloz — 10 kat',
      'Civafülminat — 500 kat'
    ],
    correctIndex: 1,
    explanation: 'Güherçile potasyum nitrattır (KNO₃). Kükürt ve kömürle yandığında oluşan duman reaktant hacminin yaklaşık 4000 katına çıkar.'
  },
  {
    id: 'q19',
    moduleId: 4,
    category: 'Tarihçe & Keşifler',
    difficulty: 'Orta',
    examType: 'final',
    question: '1846 yılında laboratuvarda dökülen asit karışımını pamuklu önlüğüyle sildikten sonra kurutmaya çalışırken kazara "Nitroselüloz"u (dumansız barut) keşfeden kimyager kimdir?',
    options: [
      'Alfred Nobel',
      'Christian Friedrich Schönbein',
      'Ascanio Sobrero',
      'Henri Braconnot'
    ],
    correctIndex: 1,
    explanation: 'Christian Friedrich Schönbein 1846’da pamuklu önlük kazasıyla selüloz nitratı (nitroselüloz) keşfetmiştir.'
  },
  {
    id: 'q20',
    moduleId: 4,
    category: 'Alfred Nobel & Dinamit',
    difficulty: 'Orta',
    examType: 'final',
    question: 'Alfred Nobel sıvı nitrogliserini hangi inert gözenekli maddeye emdirerek patlamaya karşı güvenli "Dinamit"i icat etmiştir?',
    options: [
      'Kireçtaşı tozu',
      'Diatome toprağı (Kieselguhr / Silisli toprak)',
      'Bakır tozu',
      'Saf grafit'
    ],
    correctIndex: 1,
    explanation: 'Nobel, aşırı tehlikeli sıvı nitrogliserini gözenekli silisli diatome toprağına emdirerek darbelere dayanıklı katı Dinamit çubuklarını icat etmiştir.'
  },
  {
    id: 'q21',
    moduleId: 4,
    category: 'Tarihçe & Kapsül',
    difficulty: 'Orta',
    examType: 'final',
    question: 'Alfred Nobel’in 1868 yılında icat ettiği ve nitrogliserin/dinamit yemlemesinde emniyetli fitille birlikte kullanılan hayati buluşu nedir?',
    options: ['Elektronik radar', 'Patlatma Kapsülü (Detonatör)', 'Sonar cihazı', 'Lüle nozulu'],
    correctIndex: 1,
    explanation: '1868 yılında Nobel patlatma kapsülünü keşfederek patlayıcıların emniyetli ve kontrollü ateşlenmesini sağlamıştır.'
  },
  {
    id: 'q22',
    moduleId: 4,
    category: 'Manhattan Projesi',
    difficulty: 'Zor',
    examType: 'final',
    question: '1945 yılında Hiroşima\'ya atılan "Little Boy" ve Nagazaki\'ye atılan "Fat Man" atom bombalarında sırasıyla hangi fisyon yakıtları kullanılmıştır?',
    options: [
      'Uranyum-235 ve Plütonyum-239',
      'Toryum-232 ve Uranyum-238',
      'Radyum-226 ve Sezyum-137',
      'Plütonyum-239 ve Uranyum-235'
    ],
    correctIndex: 0,
    explanation: 'Hiroşima’ya atılan Little Boy: Uranyum-235; Nagazaki’ye atılan Fat Man: Plütonyum-239 tipi fisyon bombasıdır.'
  },
  {
    id: 'q23',
    moduleId: 4,
    category: 'Oktanitrokuban Zirvesi',
    difficulty: 'Efsane',
    examType: 'final',
    question: 'Dünyanın en güçlü nükleer olmayan patlayıcısı kabul edilen Oktanitrokuban [C₈(NO₂)₈] hakkında verilen bilgilerden hangisi YANLIŞTIR?',
    options: [
      'Philip E. Eaton ve Mao-Xi Zhang tarafından 2001 yılında sentezlenmiştir',
      'Patlama hızı 10.100 m/s gibi rekor bir seviyededir',
      '1 kg oktanitrokuban yaklaşık 2.38 kg TNT eşdeğerindedir',
      'Molekülü doğrusal bir polimer zinciridir ve karbon atomları halka şeklinde dizilmiştir'
    ],
    correctIndex: 3,
    explanation: 'Oktanitrokuban halka veya doğrusal değildir; nitro grupları 90 derecelik açısal gerilime sahip KARBON KÜPÜNÜN (küban kafesi) 8 köşesine bağlıdır!'
  },
  {
    id: 'q24',
    moduleId: 4,
    category: 'Mega Sivil Projeler',
    difficulty: 'Kolay',
    examType: 'final',
    question: '1914 yılında açılan ve tam 31 milyon kg dinamit kullanılarak Alfred Nobel\'in dinamitinin kullanıldığı tarihteki İLK BÜYÜK MEGA PROJE hangisidir?',
    options: [
      'Süveyş Kanalı',
      'Panama Kanalı',
      'Eyfel Kulesi Zemin Temeli',
      'Manş Tüneli'
    ],
    correctIndex: 1,
    explanation: '77 km uzunluğundaki Panama Kanalı, 1914’te 31 milyon kg dinamit patlatılarak tamamlanmış ilk mega projedir.'
  },
  {
    id: 'q25',
    moduleId: 3,
    category: 'Enerjetik Özellikler',
    difficulty: 'Zor',
    examType: 'all',
    question: 'Bir patlayıcının patlama anında kendi bünyesindeki oksijen miktarının yakıt elementlerini (C, H) tamamen CO₂ ve H₂O\'ya dönüştürmeye yetip yetmediğini gösteren değere ne denir?',
    options: [
      'Patlama Empedansı',
      'Oksijen Balans Değeri (OB%)',
      'Desensitizasyon Katsayısı',
      'Detonasyon Hacim Oranı'
    ],
    correctIndex: 1,
    explanation: 'Oksijen Balansı (OB%), patlayıcının moleküler formülündeki oksijenin tam yanma için pozitif mi, dengede mi (sıfır), yoksa negatif mi olduğunu gösteren kritik sınav parametresidir.'
  }
];
