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
  { name: string; type: "Sinta" | "Scopus"; tier: string; focus: string; url: string; cover: string | null }[]
> = {
  "Kedokteran & Kesehatan": [
    { name: "JKKI: Jurnal Kedokteran dan Kesehatan Indonesia", type: "Sinta", tier: "S1", focus: "Ilmu biomedis, kedokteran klinis, kesehatan masyarakat, dan pendidikan ilmu kedokteran.", url: "https://journal.uii.ac.id/JKKI", cover: "https://journal.uii.ac.id/public/journals/26/journalThumbnail_en_US.png" },
    { name: "KEMAS: Jurnal Kesehatan Masyarakat", type: "Sinta", tier: "S2", focus: "Epidemiologi, kebijakan kesehatan, gizi kesehatan masyarakat, kesehatan lingkungan dan kerja.", url: "https://journal.unnes.ac.id/journals/kemas", cover: "https://journal.unnes.ac.id/journals/public/journals/26/homepageImage_en.png" },
  ],
  "Teknik & Rekayasa": [
    { name: "ROTASI", type: "Sinta", tier: "S3", focus: "Penelitian ilmiah bidang teknik mesin.", url: "https://ejournal.undip.ac.id/index.php/rotasi", cover: null },
    { name: "JNTETI: Jurnal Nasional Teknik Elektro dan Teknologi Informasi", type: "Sinta", tier: "S2", focus: "Teknik elektro, sistem tenaga, sinyal & elektronika, sistem komunikasi.", url: "https://jurnal.ugm.ac.id/v3/JNTETI", cover: "https://jurnal.ugm.ac.id/v3/public/site/images/risanuri/halaman_depan_web_edit3.jpg" },
  ],
  "Ekonomi, Manajemen & Akuntansi": [
    { name: "JAEMB: Jurnal Akuntansi, Ekonomi dan Manajemen Bisnis", type: "Sinta", tier: "S3", focus: "Penelitian akuntansi, ekonomi, dan manajemen bisnis.", url: "https://jurnal.polibatam.ac.id/index.php/JAEMB", cover: "https://jurnal.polibatam.ac.id/public/journals/12/cover_issue_329_en_US.jpg" },
    { name: "Jurnal Dinamika Akuntansi", type: "Sinta", tier: "S2", focus: "Akuntansi keuangan, manajemen biaya, perpajakan, audit, sistem informasi akuntansi.", url: "https://journal.unnes.ac.id/journals/jda", cover: "https://journal.unnes.ac.id/nju/public/site/images/sutikno/Jurnal_Dinamika_Akuntansi_(1)_0011.jpg" },
  ],
  "Ilmu Komputer & Teknologi Informasi": [
    { name: "Jurnal RESTI (Rekayasa Sistem dan Teknologi Informasi)", type: "Sinta", tier: "S2", focus: "Rekayasa perangkat lunak, keamanan informasi, data mining, AI, jaringan komputer.", url: "https://resti.org/home/", cover: null },
    { name: "IJCCS: Indonesian Journal of Computing and Cybernetics Systems", type: "Sinta", tier: "S2", focus: "Kecerdasan komputasi, jaringan syaraf tiruan, fuzzy logic, algoritma genetika.", url: "https://journal.ugm.ac.id/ijccs", cover: "https://journal.ugm.ac.id/public/journals/2/cover_issue_604_en_US.png" },
  ],
  "Pendidikan": [
    { name: "Cakrawala Pendidikan", type: "Sinta", tier: "S1", focus: "Penelitian empiris berkualitas tinggi di bidang pendidikan.", url: "https://journal.uny.ac.id/index.php/cp", cover: "https://journal.uny.ac.id/public/journals/3/homepageImage_en_US.png" },
    { name: "PENDASI: Jurnal Pendidikan Dasar Indonesia", type: "Sinta", tier: "S4", focus: "Penelitian dan pengabdian masyarakat di bidang pendidikan Sekolah Dasar.", url: "https://ejournal2.undiksha.ac.id/index.php/jurnal_pendas", cover: "https://ejournal2.undiksha.ac.id/public/site/images/ernamuliastrini/Pendasi4.jpg" },
  ],
  "Hukum": [
    { name: "Mimbar Hukum", type: "Sinta", tier: "S2", focus: "Dialektika asas, teori, dan filsafat hukum.", url: "https://jurnal.ugm.ac.id/v3/MH", cover: "https://jurnal.ugm.ac.id/v3/public/journals/62/pageHeaderLogoImage_en_US.jpg" },
    { name: "Kertha Semaya: Journal Ilmu Hukum", type: "Sinta", tier: "S3", focus: "Ilmu hukum umum, diterbitkan Fakultas Hukum Universitas Udayana.", url: "https://ojs.unud.ac.id/index.php/kerthasemaya", cover: "https://ojs.unud.ac.id/public/journals/92/homepageImage_en_US.jpg" },
  ],
  "Pertanian & Lingkungan": [
    { name: "JIPI: Jurnal Ilmu Pertanian Indonesia", type: "Sinta", tier: "S2", focus: "Agronomi, ilmu tanah, teknologi pangan, peternakan, perikanan, kehutanan, sosial ekonomi pertanian.", url: "https://journal.ipb.ac.id/index.php/JIPI", cover: "https://journal.ipb.ac.id/public/journals/71/cover_issue_4071_en.png" },
    { name: "Jurnal Tanah dan Iklim", type: "Sinta", tier: "S2", focus: "Sumberdaya lahan pertanian, ilmu tanah, iklim pertanian, hidrologi pertanian.", url: "https://epublikasi.pertanian.go.id/berkala/jti", cover: "https://epublikasi.pertanian.go.id/berkala/public/journals/18/pageHeaderLogoImage_en_US.jpg" },
  ],
  "Ilmu Sosial & Politik": [
    { name: "JSP: Jurnal Ilmu Sosial dan Ilmu Politik", type: "Sinta", tier: "S1", focus: "Isu sosial-politik kontemporer (gender, masyarakat sipil, kebijakan publik, demokrasi).", url: "https://journal.ugm.ac.id/jsp", cover: "https://journal.ugm.ac.id/public/journals/84/homeHeaderTitleImage_en_US.png" },
    { name: "POLITIKA: Jurnal Ilmu Politik", type: "Sinta", tier: "S2", focus: "Ilmu politik, tata kelola, dan kebijakan publik Indonesia/Asia.", url: "https://ejournal.undip.ac.id/index.php/politika", cover: null },
  ],
  "Psikologi": [
    { name: "Psikologika: Jurnal Pemikiran dan Penelitian Psikologi", type: "Sinta", tier: "S2", focus: "Psikologi klinis, pendidikan, perkembangan, industri-organisasi, sosial, dan Islam.", url: "https://journal.uii.ac.id/Psikologika", cover: "https://journal.uii.ac.id/public/journals/18/journalThumbnail_en_US.jpg" },
    { name: "ANIMA Indonesian Psychological Journal", type: "Sinta", tier: "S2", focus: "Riset psikologi Indonesia, penekanan pada pendidikan, kesehatan, dan organisasi.", url: "https://journal.ubaya.ac.id/index.php/jpa", cover: null },
  ],
  "Sains & Matematika": [
    { name: "MIMS: Majalah Ilmiah Matematika dan Statistika", type: "Sinta", tier: "S3", focus: "Matematika dan statistika.", url: "https://mims.journal.unej.ac.id/", cover: null },
    { name: "JKSA: Jurnal Kimia Sains dan Aplikasi", type: "Sinta", tier: "S2", focus: "Penelitian dan review bidang kimia.", url: "https://ejournal.undip.ac.id/index.php/ksa", cover: "https://ejournal.undip.ac.id/public/site/images/adidarmawan/JKSA_cover_icon2.png" },
  ],
  "Sastra, Bahasa & Budaya": [
    { name: "Ilmu Budaya: Jurnal Bahasa, Sastra, Seni, dan Budaya", type: "Sinta", tier: "S4", focus: "Budaya, sastra, bahasa, dan seni.", url: "https://e-journals.unmul.ac.id/index.php/jbssb", cover: "https://e-journals.unmul.ac.id/public/journals/40/homeHeaderTitleImage_en_US.jpg" },
    { name: "LITERA", type: "Sinta", tier: "S2", focus: "Linguistik, sastra, dan pengajarannya.", url: "https://journal.uny.ac.id/index.php/litera", cover: "https://journal.uny.ac.id/public/journals/8/pageHeaderLogoImage_en_US.png" },
  ],
  "Energi, Migas & Pertambangan": [
    { name: "Jurnal Nasional Pengelolaan Energi Migas", type: "Sinta", tier: "S4", focus: "Manajemen energi, khususnya sektor migas.", url: "https://journal.esdm.go.id/", cover: "https://journal.esdm.go.id/public/journals/6/journalThumbnail_en.png" },
    { name: "JTP: Jurnal Teknologi Pertambangan", type: "Sinta", tier: "S5", focus: "Eksplorasi, eksploitasi tambang, pengolahan minerba, reklamasi pasca tambang.", url: "https://jurnal.upnyk.ac.id/index.php/jtp", cover: "https://jurnal.upnyk.ac.id/public/journals/32/cover_issue_948_en_US.png" },
  ],
};

// Slide pertama adalah headline utama (dirender sebagai satu-satunya <h1> di
// DOM demi SEO) — teksnya tidak diubah. Slide berikutnya melengkapi pesan
// utama dengan sudut pandang lain dari layanan yang sama.
export const HERO_SLIDES = [
  {
    headline: "Jasa Publikasi Jurnal Terpercaya.",
    subheading: "Pendampingan Publikasi Ilmiah untuk Jurnal Terakreditasi Sinta & Terindeks Scopus.",
    description:
      "Dari pemilihan jurnal yang sesuai bidang risetmu, penyempurnaan bahasa dan struktur, hingga pendampingan submisi dan respons reviewer — kami membantu peneliti Indonesia menembus jurnal Sinta dan Scopus tanpa jalan pintas.",
  },
  {
    headline: "Menembus Jurnal Bereputasi Internasional.",
    subheading: "Scientific Editing & Pencocokan Jurnal Scopus Q1–Q4, DOAJ, hingga Web of Science.",
    description:
      "Manuskrip berbahasa Inggrismu disunting oleh editor ahli sesuai bidang, dengan pencocokan jurnal yang realistis berdasarkan peluang penerimaan — bukan sekadar tebakan.",
  },
  {
    headline: "Pendampingan dari Draf hingga Terbit.",
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

// Contoh manuskrip berikut sengaja tetap dalam bahasa Inggris karena
// mendemonstrasikan penyuntingan naskah akademik berbahasa Inggris untuk jurnal internasional.
export const BEFORE_AFTER = {
  before:
    "This study is investigate the effect of temperature on the growth of bacteria in controlled environment, and result show that higher temperature is increasing the growth rate significantly compare to lower temperature groups.",
  after:
    "This study investigates the effect of temperature on bacterial growth under controlled conditions. Results indicate that higher temperatures significantly increase growth rate compared to lower-temperature groups.",
};

export const SAMPLE_MANUSCRIPT = [
  {
    id: "p1",
    original: "The result of this experiment shows that the proposed method are effective in reducing error rate on the dataset.",
    edited: "The results of this experiment demonstrate that the proposed method effectively reduces the error rate on the dataset.",
    comment: "Kesesuaian subjek-predikat diperbaiki; kalimat dipadatkan agar lebih sesuai gaya bahasa akademik.",
  },
  {
    id: "p2",
    original: "In order to test the hypothesis, we was collect data from 240 participant over six month period.",
    edited: "To test the hypothesis, we collected data from 240 participants over a six-month period.",
    comment: "Bentuk kata kerja dan bentuk jamak diperbaiki; klausa pembuka disederhanakan.",
  },
  {
    id: "p3",
    original: "It can be concluded that the findings of this research is significant contribution to the field.",
    edited: "These findings represent a significant contribution to the field.",
    comment: "Kalimat pasif yang bertele-tele dihapus; kesesuaian subjek-predikat diperbaiki agar lebih ringkas.",
  },
];
