// Jurnal riil, diverifikasi manual (nama, situs, status Sinta, dan cover
// dicek langsung ke situs OJS masing-masing jurnal per 2026-08-07). Bukan
// pengganti API SINTA/Scopus resmi (lihat catatan tim soal akses API) --
// tetap perlu direfresh berkala karena akreditasi/URL bisa berubah.
export const JOURNAL_FIELDS = [
  "Kedokteran & Kesehatan",
  "Teknik & Rekayasa",
  "Ekonomi, Manajemen & Akuntansi",
  "Ilmu Komputer & Teknologi Informasi",
  "Pendidikan",
  "Hukum",
  "Pertanian & Lingkungan",
  "Ilmu Sosial & Politik",
  "Psikologi",
  "Sains & Matematika",
  "Sastra, Bahasa & Budaya",
  "Energi, Migas & Pertambangan",
] as const;

export type JournalField = (typeof JOURNAL_FIELDS)[number];

export const JOURNAL_RECOMMENDATIONS: Record<
  JournalField,
  { name: string; type: "Sinta" | "Scopus"; tier: string; focus: string; url: string }[]
> = {
  "Kedokteran & Kesehatan": [
    { name: "JKKI: Jurnal Kedokteran dan Kesehatan Indonesia", type: "Sinta", tier: "S1", focus: "Ilmu biomedis, kedokteran klinis, kesehatan masyarakat, dan pendidikan ilmu kedokteran.", url: "https://journal.uii.ac.id/JKKI" },
    { name: "KEMAS: Jurnal Kesehatan Masyarakat", type: "Sinta", tier: "S2", focus: "Epidemiologi, kebijakan kesehatan, gizi kesehatan masyarakat, kesehatan lingkungan dan kerja.", url: "https://journal.unnes.ac.id/journals/kemas" },
    { name: "Media Kesehatan Masyarakat Indonesia (MKMI)", type: "Sinta", tier: "S1", focus: "Kesehatan masyarakat Indonesia dan Asia: epidemiologi, promosi kesehatan, kesehatan lingkungan, gizi, sistem informasi kesehatan.", url: "https://scholarhub.unhas.ac.id/mkmi/" },
    { name: "Kesmas: Jurnal Kesehatan Masyarakat Nasional", type: "Sinta", tier: "S1", focus: "Kesehatan masyarakat nasional, terbit berkala plus edisi khusus.", url: "https://scholarhub.ui.ac.id/kesmas/" },
    { name: "JIKM: Jurnal Ilmiah Kesehatan Masyarakat", type: "Sinta", tier: "S2", focus: "K3, epidemiologi, biostatistik, kesehatan lingkungan, gizi komunitas, kesehatan reproduksi.", url: "https://jikm.upnvj.ac.id/index.php/home" },
  ],
  "Teknik & Rekayasa": [
    { name: "ROTASI", type: "Sinta", tier: "S3", focus: "Penelitian ilmiah bidang teknik mesin.", url: "https://ejournal.undip.ac.id/index.php/rotasi" },
    { name: "JNTETI: Jurnal Nasional Teknik Elektro dan Teknologi Informasi", type: "Sinta", tier: "S2", focus: "Teknik elektro, sistem tenaga, sinyal & elektronika, sistem komunikasi.", url: "https://jurnal.ugm.ac.id/v3/JNTETI" },
    { name: "SINERGI POLMED: Jurnal Ilmiah Teknik Mesin", type: "Sinta", tier: "S3", focus: "Teknik mesin, konversi energi, energi baru terbarukan, material & metalurgi, tribologi, bioenergi.", url: "https://ojs.polmed.ac.id/index.php/Sinergi" },
    { name: "Jurnal Teknik Mesin (JTM) Petra", type: "Sinta", tier: "S3", focus: "Otomotif, desain, struktur, industri, konversi energi, manufaktur, material & metalurgi.", url: "https://jurnalmesin.petra.ac.id" },
    { name: "Jurnal Reaktor", type: "Sinta", tier: "Terakreditasi", focus: "Teknik kimia: fenomena transport, reaksi & katalisis kimia, desain dan optimasi proses.", url: "https://ejournal.undip.ac.id/index.php/reaktor" },
  ],
  "Ekonomi, Manajemen & Akuntansi": [
    { name: "JAEMB: Jurnal Akuntansi, Ekonomi dan Manajemen Bisnis", type: "Sinta", tier: "S3", focus: "Penelitian akuntansi, ekonomi, dan manajemen bisnis.", url: "https://jurnal.polibatam.ac.id/index.php/JAEMB" },
    { name: "Jurnal Dinamika Akuntansi", type: "Sinta", tier: "S2", focus: "Akuntansi keuangan, manajemen biaya, perpajakan, audit, sistem informasi akuntansi.", url: "https://journal.unnes.ac.id/journals/jda" },
    { name: "Jurnal Ekonomi Pembangunan: Kajian Masalah Ekonomi dan Pembangunan", type: "Sinta", tier: "S2", focus: "Kajian teoretis dan riset masalah ekonomi dan pembangunan.", url: "https://journals2.ums.ac.id/jep/index" },
    { name: "JEPI: Jurnal Ekonomi dan Pembangunan Indonesia", type: "Sinta", tier: "S2", focus: "Artikel ekonomi dan pembangunan.", url: "https://scholarhub.ui.ac.id/jepi/" },
    { name: "Jurnal Siasat Bisnis (JSB)", type: "Sinta", tier: "S2", focus: "Ilmu manajemen dan aplikasinya di bisnis dan industri, lintas sektor profit/nonprofit.", url: "https://journal.uii.ac.id/JSB/" },
  ],
  "Ilmu Komputer & Teknologi Informasi": [
    { name: "Jurnal RESTI (Rekayasa Sistem dan Teknologi Informasi)", type: "Sinta", tier: "S2", focus: "Rekayasa perangkat lunak, keamanan informasi, data mining, AI, jaringan komputer.", url: "https://resti.org/home/" },
    { name: "IJCCS: Indonesian Journal of Computing and Cybernetics Systems", type: "Sinta", tier: "S2", focus: "Kecerdasan komputasi, jaringan syaraf tiruan, fuzzy logic, algoritma genetika.", url: "https://journal.ugm.ac.id/ijccs" },
    { name: "Register: Jurnal Ilmiah Teknologi Sistem Informasi", type: "Sinta", tier: "S1", focus: "TIK: enterprise systems, manajemen sistem informasi, data engineering, keamanan infrastruktur TI.", url: "https://journal.unipdu.ac.id/index.php/register" },
    { name: "JIKI: Jurnal Ilmu Komputer dan Informasi", type: "Sinta", tier: "S2", focus: "Riset murni dan terapan ilmu komputer dan informasi.", url: "https://jiki.cs.ui.ac.id" },
    { name: "Ultimatics: Jurnal Teknik Informatika", type: "Sinta", tier: "S3", focus: "Algoritma, rekayasa perangkat lunak, keamanan sistem/jaringan, AI/ML.", url: "https://ejournals.umn.ac.id/index.php/TI/" },
  ],
  "Pendidikan": [
    { name: "Cakrawala Pendidikan", type: "Sinta", tier: "S1", focus: "Penelitian empiris berkualitas tinggi di bidang pendidikan.", url: "https://journal.uny.ac.id/index.php/cp" },
    { name: "PENDASI: Jurnal Pendidikan Dasar Indonesia", type: "Sinta", tier: "S4", focus: "Penelitian dan pengabdian masyarakat di bidang pendidikan Sekolah Dasar.", url: "https://ejournal2.undiksha.ac.id/index.php/jurnal_pendas" },
    { name: "JPII: Jurnal Pendidikan IPA Indonesia", type: "Sinta", tier: "S1", focus: "Kajian dan riset pendidikan sains (IPA) di jenjang dasar, menengah, dan tinggi.", url: "https://journal.unnes.ac.id/nju/jpii" },
    { name: "Al-Bidayah: Jurnal Pendidikan Dasar Islam", type: "Sinta", tier: "S2", focus: "Pendidikan dasar dan pendidikan dasar Islam: literasi, numerasi, kurikulum PAI.", url: "https://ejournal.uin-suka.ac.id/tarbiyah/albidayah" },
    { name: "EduLearn: Journal of Education and Learning", type: "Sinta", tier: "Terakreditasi", focus: "Jurnal multidisiplin pendidikan dan pembelajaran: kurikulum, STEM, metodologi pembelajaran.", url: "https://edulearn.intelektual.org" },
  ],
  "Hukum": [
    { name: "Mimbar Hukum", type: "Sinta", tier: "S2", focus: "Dialektika asas, teori, dan filsafat hukum.", url: "https://jurnal.ugm.ac.id/v3/MH" },
    { name: "Kertha Semaya: Journal Ilmu Hukum", type: "Sinta", tier: "S3", focus: "Ilmu hukum umum, diterbitkan Fakultas Hukum Universitas Udayana.", url: "https://ojs.unud.ac.id/index.php/kerthasemaya" },
    { name: "Jurnal Magister Hukum Udayana (Udayana Master Law Journal)", type: "Sinta", tier: "S2", focus: "Riset ilmu hukum pascasarjana.", url: "https://ojs.unud.ac.id/index.php/jmhu" },
    { name: "PJIH: Padjadjaran Jurnal Ilmu Hukum", type: "Scopus", tier: "Q2", focus: "Forum internasional teori dan praktik hukum publik: hukum internasional, sosiologi hukum, HAM, hukum lingkungan.", url: "https://journal.unpad.ac.id/pjih" },
    { name: "JDH: Jurnal Dinamika Hukum", type: "Sinta", tier: "Terakreditasi", focus: "Media riset dan gagasan konseptual ilmu hukum: pidana, HAM, tata negara, hukum Islam.", url: "https://dinamikahukum.fh.unsoed.ac.id/index.php/JDH" },
  ],
  "Pertanian & Lingkungan": [
    { name: "JIPI: Jurnal Ilmu Pertanian Indonesia", type: "Sinta", tier: "S2", focus: "Agronomi, ilmu tanah, teknologi pangan, peternakan, perikanan, kehutanan, sosial ekonomi pertanian.", url: "https://journal.ipb.ac.id/index.php/JIPI" },
    { name: "Jurnal Tanah dan Iklim", type: "Sinta", tier: "S2", focus: "Sumberdaya lahan pertanian, ilmu tanah, iklim pertanian, hidrologi pertanian.", url: "https://epublikasi.pertanian.go.id/berkala/jti" },
    { name: "J-AGT: Jurnal Agroteknologi", type: "Sinta", tier: "S2", focus: "Teknologi pertanian: produk pertanian, teknik pertanian, teknologi industri pertanian.", url: "https://jagt.journal.unej.ac.id/" },
    { name: "JTPK: Jurnal Teknologi Perikanan dan Kelautan", type: "Sinta", tier: "S2", focus: "Teknologi perikanan tangkap, kelautan, bioteknologi kelautan, manajemen wilayah pesisir.", url: "https://journal.ipb.ac.id/index.php/jtpk" },
    { name: "JITL: Jurnal Ilmu Tanah dan Lingkungan", type: "Sinta", tier: "S3", focus: "Riset ilmu tanah, air, dan lingkungan.", url: "https://journal.ipb.ac.id/index.php/jtanah/" },
  ],
  "Ilmu Sosial & Politik": [
    { name: "JSP: Jurnal Ilmu Sosial dan Ilmu Politik", type: "Sinta", tier: "S1", focus: "Isu sosial-politik kontemporer (gender, masyarakat sipil, kebijakan publik, demokrasi).", url: "https://journal.ugm.ac.id/jsp" },
    { name: "POLITIKA: Jurnal Ilmu Politik", type: "Sinta", tier: "S2", focus: "Ilmu politik, tata kelola, dan kebijakan publik Indonesia/Asia.", url: "https://ejournal.undip.ac.id/index.php/politika" },
    { name: "JIS: Jurnal Ilmu Sosial", type: "Sinta", tier: "S2", focus: "Isu sosial, administrasi, politik, komunikasi, dan internasional kontemporer.", url: "https://ejournal.undip.ac.id/index.php/ilmusos" },
    { name: "MJS: Masyarakat, Jurnal Sosiologi", type: "Sinta", tier: "S2", focus: "Riset sosiologi atas isu sosial, ekonomi, dan politik Indonesia/Asia.", url: "https://scholarhub.ui.ac.id/mjs/" },
    { name: "JSPM: Jurnal Ilmu Sosial dan Ilmu Politik Malikussaleh", type: "Sinta", tier: "S4", focus: "Platform riset teoretis dan empiris ilmu sosial dan politik.", url: "https://ojs.unimal.ac.id/jspm" },
  ],
  "Psikologi": [
    { name: "Psikologika: Jurnal Pemikiran dan Penelitian Psikologi", type: "Sinta", tier: "S2", focus: "Psikologi klinis, pendidikan, perkembangan, industri-organisasi, sosial, dan Islam.", url: "https://journal.uii.ac.id/Psikologika" },
    { name: "ANIMA Indonesian Psychological Journal", type: "Sinta", tier: "S2", focus: "Riset psikologi Indonesia, penekanan pada pendidikan, kesehatan, dan organisasi.", url: "https://journal.ubaya.ac.id/index.php/jpa" },
    { name: "Jurnal Psikologi Undip", type: "Sinta", tier: "S2", focus: "Psikologi klinis, perkembangan, industri/organisasi, pendidikan, sosial.", url: "https://ejournal.undip.ac.id/index.php/psikologi" },
    { name: "Jurnal Psikologi: Indonesian Journal of Psychology (UGM)", type: "Sinta", tier: "S2", focus: "Riset psikologi tentang populasi Indonesia.", url: "https://journal.ugm.ac.id/jpsi" },
    { name: "Psikostudia: Jurnal Psikologi", type: "Sinta", tier: "S2", focus: "Psikologi industri/organisasi, klinis, pendidikan, olahraga, eksperimental.", url: "https://e-journals.unmul.ac.id/index.php/PSIKO/" },
  ],
  "Sains & Matematika": [
    { name: "MIMS: Majalah Ilmiah Matematika dan Statistika", type: "Sinta", tier: "S3", focus: "Matematika dan statistika.", url: "https://mims.journal.unej.ac.id/" },
    { name: "JKSA: Jurnal Kimia Sains dan Aplikasi", type: "Sinta", tier: "S2", focus: "Penelitian dan review bidang kimia.", url: "https://ejournal.undip.ac.id/index.php/ksa" },
    { name: "BAREKENG: Journal of Mathematics and Its Application", type: "Sinta", tier: "S2", focus: "Matematika murni & terapan, statistika, aktuaria, komputasi matematika.", url: "https://ojs3.unpatti.ac.id/index.php/barekeng/" },
    { name: "Bioma: Berkala Ilmiah Biologi", type: "Sinta", tier: "S3", focus: "Riset dan kajian teknis dari seluruh disiplin ilmu biologi.", url: "https://ejournal.undip.ac.id/index.php/bioma" },
    { name: "Berkala Fisika", type: "Sinta", tier: "Terakreditasi", focus: "Fisika teoretik dan eksperimen, termasuk aplikasi di teknologi, hayati, dan kedokteran.", url: "https://ejournal.undip.ac.id/index.php/berkala_fisika" },
  ],
  "Sastra, Bahasa & Budaya": [
    { name: "Ilmu Budaya: Jurnal Bahasa, Sastra, Seni, dan Budaya", type: "Sinta", tier: "S4", focus: "Budaya, sastra, bahasa, dan seni.", url: "https://e-journals.unmul.ac.id/index.php/jbssb" },
    { name: "LITERA", type: "Sinta", tier: "S2", focus: "Linguistik, sastra, dan pengajarannya.", url: "https://journal.uny.ac.id/index.php/litera" },
    { name: "LITE: Jurnal Bahasa, Sastra, dan Budaya", type: "Sinta", tier: "S2", focus: "Linguistik, pengajaran bahasa, penerjemahan, sastra, dan kajian budaya.", url: "https://publikasi.dinus.ac.id/index.php/lite" },
    { name: "Kandai", type: "Sinta", tier: "S2", focus: "Linguistik teoretis/terapan, tradisi lisan, filologi, semiotika, dan sastra.", url: "https://ojs.badanbahasa.kemendikdasmen.go.id/jurnal/index.php/kandai" },
  ],
  "Energi, Migas & Pertambangan": [
    { name: "Jurnal Nasional Pengelolaan Energi Migas", type: "Sinta", tier: "S4", focus: "Manajemen energi, khususnya sektor migas.", url: "https://journal.esdm.go.id/" },
    { name: "JTP: Jurnal Teknologi Pertambangan", type: "Sinta", tier: "S5", focus: "Eksplorasi, eksploitasi tambang, pengolahan minerba, reklamasi pasca tambang.", url: "https://jurnal.upnyk.ac.id/index.php/jtp" },
    { name: "Jurnal Teknologi Mineral dan Batubara", type: "Sinta", tier: "S2", focus: "Eksplorasi, eksploitasi, pengolahan, ekstraksi, lingkungan, kebijakan, dan ekonomi mineral & batubara.", url: "https://jurnal.tekmira.esdm.go.id/index.php/minerba" },
    { name: "JGSM: Journal of Geology and Mineral Resources", type: "Sinta", tier: "S3", focus: "Geo-sciences, geo-resources, geo-hazards, geo-environments.", url: "https://journal.esdm.go.id/jgsm" },
    { name: "JPGT: Journal of Petroleum and Geothermal Technology", type: "Sinta", tier: "S4", focus: "Geologi, geofisika, teknik, dan mekanika perminyakan serta panas bumi.", url: "https://jurnal.upnyk.ac.id/index.php/jest/" },
  ],
};

// Slide pertama adalah headline utama (dirender sebagai satu-satunya <h1> di
// DOM demi SEO, lewat field `headline` polos) — teksnya tidak diubah. Slide
// berikutnya melengkapi pesan utama dengan sudut pandang lain dari layanan
// yang sama. `headlineLines` adalah pemisah baris manual (dua baris pasti,
// tidak bergantung pada lebar layar) untuk tampilan visualnya.
export const HERO_SLIDES = [
  {
    headline: "Jasa Publikasi Jurnal Terpercaya.",
    headlineLines: ["Jasa Publikasi Jurnal", "Terpercaya."],
    subheading: "Pendampingan Publikasi Ilmiah untuk Jurnal Terakreditasi Sinta & Terindeks Scopus.",
    description:
      "Dari pemilihan jurnal yang sesuai bidang risetmu, penyempurnaan bahasa dan struktur, hingga pendampingan submisi dan respons reviewer — kami membantu peneliti Indonesia menembus jurnal Sinta dan Scopus tanpa jalan pintas.",
  },
  {
    headline: "Menembus Jurnal Bereputasi Internasional.",
    headlineLines: ["Menembus Jurnal", "Bereputasi Internasional."],
    subheading: "Scientific Editing & Pencocokan Jurnal Scopus Q1–Q4, DOAJ, hingga Web of Science.",
    description:
      "Manuskrip berbahasa Inggrismu disunting oleh editor ahli sesuai bidang, dengan pencocokan jurnal yang realistis berdasarkan peluang penerimaan — bukan sekadar tebakan.",
  },
  {
    headline: "Pendampingan dari Draf hingga Terbit.",
    headlineLines: ["Pendampingan dari Draf", "hingga Terbit."],
    subheading: "Bukan Sekadar Editing — Kami Dampingi Setiap Tahap Submisi & Revisi.",
    description:
      "Dari rekomendasi jurnal, penyuntingan bahasa, hingga penyusunan respons ke reviewer — tim editor ahli mendampingimu di setiap tahap, tanpa jalan pintas atau jurnal predator.",
  },
];

// Angka bersifat ilustratif — ganti dengan data riil sebelum go-live.
export const STATS = [
  { value: "300+", label: "Manuskrip terbit" },
  { value: "150+", label: "Institusi mitra" },
  { value: "6+", label: "Tahun pengalaman" },
  { value: "42", label: "Bidang riset dicakup" },
];

// Alur layanan riil (bertahap per termin pembayaran), mengikuti flowchart
// operasional referensi — bukan sekadar ringkasan marketing enam langkah.
export const ALUR_LAYANAN = [
  {
    termin: "Termin 1",
    note: "Pembayaran 30% di awal",
    steps: [
      {
        title: "Penulis Mengirimkan Manuskrip",
      },
      {
        title: "Filtrasi Kelayakan Manuskrip",
        detail: "Maks. similaritas 50% & deteksi AI 40%",
        branch: {
          pass: "Memenuhi Standar",
          fail: "Tidak Memenuhi Standar",
          failNote: "Manuskrip dikembalikan ke penulis.",
        },
      },
      {
        title: "Penulis Menandatangani SPK & PKS",
        detail: "Surat perjanjian kerja & kerja sama yang telah disepakati.",
      },
      {
        title: "Manuskrip Diskrining Tenaga Ahli",
        detail: "Oleh editor sesuai bidang disiplin ilmu.",
      },
      {
        title: "Terindeks Menerbitkan Hasil Skrining",
        branch: {
          pass: "Revisi Minor",
          fail: "Revisi Mayor",
          failNote: "Penulis merevisi & menambahkan data bersifat substansial, lalu diskrining ulang.",
        },
      },
    ],
  },
  {
    termin: "Termin 2",
    note: "Pembayaran 30% saat submisi",
    steps: [
      {
        title: "Proses Drafting Artikel oleh Tim Terindeks",
      },
      {
        title: "Submit ke Jurnal Tujuan",
        branch: {
          pass: "Revisi Feedback dari Penerbit",
          fail: "Ditolak Penerbit",
          failNote: "Penulis merevisi & menambahkan data bersifat substansial, lalu disubmit ulang.",
        },
      },
    ],
  },
  {
    termin: "Termin 3",
    note: "Pembayaran 40% setelah diterima",
    steps: [
      {
        title: "Penerbitan LoA oleh Penerbit",
        detail: "Letter of Acceptance — manuskrip resmi diterima.",
      },
    ],
  },
];

// Harga bersifat ilustratif (mulai dari) — sesuaikan dengan penawaran aktual
// sebelum go-live.
export const PRICING_TIERS = [
  {
    name: "Sinta Ready",
    tagline: "Untuk manuskrip berbahasa Indonesia menuju jurnal terakreditasi Sinta.",
    price: "Mulai dari",
    priceDetail: "Rp 3.500.000",
    priceNote: "per manuskrip",
    features: ["Editing bahasa & kejelasan akademik", "Rekomendasi jurnal Sinta (S1–S6) sesuai bidang", "Cek plagiarisme & referensi Mendeley", "Pemformatan sesuai template jurnal", "Satu putaran revisi"],
  },
  {
    name: "Scopus Ready",
    tagline: "Untuk manuskrip berbahasa Inggris menuju jurnal terindeks Scopus.",
    price: "Mulai dari",
    priceDetail: "Rp 8.500.000",
    priceNote: "tergantung kuartil jurnal (Q1–Q4)",
    features: ["Semua di Sinta Ready", "Scientific editing tingkat lanjut", "Pencocokan jurnal Scopus Q1–Q4", "Turut mencakup jurnal terindeks DOAJ, Web of Science & Copernicus", "Revisi tanpa batas"],
    highlighted: true,
  },
  {
    name: "Pendampingan Penuh",
    tagline: "Dukungan menyeluruh dari draf hingga artikel terindeks.",
    price: "Penawaran khusus",
    priceDetail: "Hubungi Kami",
    priceNote: "untuk laboratorium, institusi & enterprise",
    features: ["Semua di Scopus Ready", "Pendampingan submisi & korespondensi jurnal", "Dukungan respons reviewer", "Penerbitan buku ber-ISBN", "Pendaftaran HKI (Hak Cipta)", "Manajer publikasi khusus"],
  },
];

export const TESTIMONIALS = [
  {
    quote: "Terindeks membantu kami memilih jurnal Sinta 2 yang tepat sesuai topik riset, bukan sekadar merapikan bahasa. Manuskrip kami diterima pada revisi pertama.",
    name: "Dr. Anisa Rahman",
    role: "Profesor Kesehatan Masyarakat",
    institution: "Universitas Gadjah Mada",
  },
  {
    quote: "Tim Terindeks mendampingi kami dari pemilihan jurnal hingga menyusun respons untuk reviewer Scopus. Artikel kami akhirnya terindeks Scopus Q2 setelah dua kali revisi.",
    name: "Dr. Bimo Prakoso",
    role: "Dosen Teknik Elektro",
    institution: "Institut Teknologi Bandung",
  },
  {
    quote: "Layanan pendampingan respons reviewer saja sudah menyelamatkan paper kami menuju jurnal Scopus Q1. Tepat sasaran, persuasif, dan cepat.",
    name: "Priya Menon, MD",
    role: "Kandidat PhD, Kedokteran Klinis",
    institution: "NUS Singapore",
  },
  {
    quote: "Sebagai mahasiswa magister yang baru pertama kali submit ke jurnal Sinta, saya benar-benar terbantu dengan penjelasan tahap demi tahap dan template yang sudah disesuaikan bidang saya.",
    name: "Siti Nurhaliza, S.T.",
    role: "Mahasiswa Magister Teknik Industri",
    institution: "Universitas Indonesia",
  },
  {
    quote: "Respons tim cepat dan transparan di setiap tahap. Draf saya sempat ditolak jurnal pertama, tapi tim membantu menyusun ulang strategi submisi ke jurnal Scopus Q3 yang akhirnya menerima.",
    name: "Ahmad Fauzan, M.Kom.",
    role: "Kandidat Doktor Ilmu Komputer",
    institution: "Universitas Airlangga",
  },
  {
    quote: "Editor kami memahami betul istilah di bidang manajemen dan ekonomi, bukan sekadar memperbaiki tata bahasa. Naskah kami lebih tajam argumentasinya setelah proses penyuntingan.",
    name: "Dr. Farah Kusuma",
    role: "Dosen Manajemen",
    institution: "Universitas Padjadjaran",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Apa yang membedakan Terindeks dari jasa editing biasa?",
    a: "Proofreading biasa hanya memeriksa tata bahasa. Terindeks mendampingi peneliti secara menyeluruh — mulai dari rekomendasi jurnal Sinta atau Scopus yang sesuai bidang, penyuntingan bahasa dan argumentasi ilmiah, pemformatan sesuai template jurnal, hingga pendampingan submisi dan respons reviewer.",
  },
  {
    q: "Apa itu Sinta dan Scopus, dan bagaimana Terindeks membantu memilihnya?",
    a: "Sinta (Science and Technology Index) adalah sistem akreditasi jurnal ilmiah nasional dari Kemdikbudristek, sedangkan Scopus adalah basis data indeksasi jurnal internasional. Tim kami membantu memetakan bidang risetmu ke jurnal Sinta (S1–S6) atau Scopus (Q1–Q4) yang paling relevan dan realistis dari sisi peluang penerimaan.",
  },
  {
    q: "Siapa yang akan menyunting manuskrip saya?",
    a: "Setiap manuskrip dicocokkan dengan editor yang memiliki keahlian sesuai bidangnya, banyak di antaranya adalah mantan editor jurnal terakreditasi Sinta atau reviewer aktif jurnal terindeks Scopus.",
  },
  {
    q: "Berapa lama proses penyuntingan dan submisi?",
    a: "Waktu penyuntingan tergantung panjang manuskrip dan paket layanan, umumnya mulai dari 3 hari kerja, dengan opsi percepatan tersedia. Lama proses review di jurnal tujuan sendiri berada di luar kendali kami dan bervariasi antar jurnal.",
  },
  {
    q: "Apakah riset saya dijaga kerahasiaannya?",
    a: "Ya. Semua manuskrip diproses di bawah perjanjian kerahasiaan yang ketat, dan akses dibatasi hanya untuk tim editor yang ditugaskan.",
  },
  {
    q: "Apakah semua bidang riset didukung?",
    a: "Kami mencakup 42 bidang riset mulai dari kedokteran, teknik, bisnis, ilmu komputer, ilmu alam, dan lainnya — masing-masing dicocokkan dengan editor spesialis.",
  },
  {
    q: "Apakah Terindeks menjamin manuskrip saya diterima?",
    a: "Tidak. Keputusan akhir selalu ada di tangan editor dan reviewer jurnal, dan kami tidak bekerja sama dengan jurnal predator atau menawarkan jalan pintas. Yang kami jamin adalah manuskrip yang lebih kuat secara bahasa, struktur, dan kesesuaian dengan jurnal Sinta atau Scopus yang kamu tuju, serta pendampingan yang jujur di setiap tahap.",
  },
  {
    q: "Bagaimana skema pembayarannya?",
    a: "Pembayaran dilakukan bertahap: 30% di awal untuk memulai penyuntingan, 30% saat manuskrip disubmit ke jurnal tujuan, dan 40% sisanya setelah manuskrip dinyatakan diterima (accepted). Biaya publikasi jurnal (APC), jika ada, dibayarkan terpisah langsung ke jurnal.",
  },
  {
    q: "Apa perbedaan revisi minor dan major, dan apakah keduanya termasuk dalam layanan?",
    a: "Revisi minor umumnya berupa perbaikan bahasa, format, atau klarifikasi kecil, sementara revisi major melibatkan perubahan substansial pada metodologi atau analisis. Tim kami mendampingi penyusunan respons untuk kedua jenis revisi; untuk revisi major yang memerlukan pengumpulan data tambahan, kami membantu menyusun strategi respons namun pekerjaan riset tambahan tetap menjadi tanggung jawab penulis.",
  },
  {
    q: "Dokumen apa saja yang perlu saya siapkan?",
    a: "Minimal draf manuskrip lengkap (dalam format apa pun) dan informasi bidang risetmu. Untuk submisi, umumnya juga dibutuhkan halaman judul, abstrak, kata kunci, dan daftar penulis beserta afiliasinya — tim kami akan memberi tahu detail dokumen yang disyaratkan jurnal tujuan begitu jurnal dipilih.",
  },
];


