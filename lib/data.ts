export const TRUSTED_BY = [
  "University of Melbourne", "Seoul National University", "Kyoto University", "NUS Singapore",
  "Universitas Indonesia", "Mahidol University", "Tsinghua University", "IIT Bombay",
  "University of Cape Town", "Cairo University", "Universiti Malaya", "Chulalongkorn University",
  "King Abdulaziz University", "University of São Paulo", "Nanyang Technological University",
  "Universitas Gadjah Mada", "Peking University", "University of Hong Kong",
  "National Research Council", "WHO Collaborating Centre",
];

export const STATS = [
  { value: 15000, suffix: "+", label: "Manuskrip Diedit" },
  { value: 95, suffix: "%", label: "Kepuasan Klien" },
  { value: 120, suffix: "+", label: "Editor Bidang Keahlian" },
  { value: 42, suffix: "", label: "Bidang Riset" },
  { value: 65, suffix: "+", label: "Negara" },
];

export const SERVICES = [
  { icon: "PenLine", title: "Proofreading Akademik", description: "Tata bahasa, ejaan, dan tanda baca disempurnakan sesuai standar jurnal." },
  { icon: "FlaskConical", title: "Scientific Editing", description: "Penyuntingan mendalam untuk struktur, logika, dan argumentasi ilmiah." },
  { icon: "Globe2", title: "Native Editing", description: "Ditinjau oleh editor penutur asli bahasa Inggris sesuai bidang keahlian." },
  { icon: "LayoutTemplate", title: "Format Jurnal", description: "Diformat secara presisi sesuai panduan jurnal tujuanmu." },
  { icon: "MessageSquareReply", title: "Editing Respons Reviewer", description: "Respons yang rapi dan persuasif untuk komentar reviewer." },
  { icon: "Languages", title: "Terjemahan", description: "Terjemahan manuskrip lengkap dengan akurasi sesuai bidang keilmuan." },
  { icon: "Rocket", title: "Dukungan Publikasi", description: "Pendampingan menyeluruh dari submisi hingga diterima." },
  { icon: "BarChart3", title: "Tinjauan Statistik", description: "Verifikasi metode dan pelaporan statistik." },
];

export const WORKFLOW_STEPS = [
  { title: "Unggah Manuskrip", description: "Kirim draftmu dengan aman dalam format apa pun." },
  { title: "Analisis AI", description: "Pemindaian instan untuk kejelasan, gaya bahasa, dan struktur." },
  { title: "Penugasan Editor", description: "Dicocokkan dengan editor ahli di bidangmu." },
  { title: "Penyuntingan", description: "Penyempurnaan bahasa dan ilmiah secara menyeluruh." },
  { title: "Jaminan Kualitas", description: "Editor kedua meninjau setiap perubahan." },
  { title: "Pengiriman Akhir", description: "Manuskrip siap, siap untuk disubmisikan." },
];

export const WHY_CHOOSE_US = [
  { icon: "GraduationCap", title: "Ahli sesuai bidang keilmuan", description: "Editor bergelar PhD yang sesuai dengan bidangmu." },
  { icon: "Globe2", title: "Editor penutur asli Inggris", description: "Kefasihan dan nuansa yang sering terlewat oleh editor non-native." },
  { icon: "BookMarked", title: "Reviewer Scopus", description: "Editor yang pernah menjadi reviewer jurnal terindeks Scopus." },
  { icon: "Award", title: "Mantan editor jurnal", description: "Editor yang tahu persis apa yang dicari editor jurnal." },
  { icon: "Lock", title: "Proses yang rahasia", description: "Risetmu tetap sepenuhnya milikmu." },
  { icon: "Zap", title: "Pengerjaan cepat", description: "Jadwal pengiriman disesuaikan dengan tenggat waktumu." },
  { icon: "BadgeCheck", title: "Proses kualitas ISO", description: "Standar kualitas yang terdokumentasi dan konsisten." },
  { icon: "RefreshCw", title: "Revisi tanpa batas", description: "Kami sempurnakan hingga kamu siap submit." },
];

export const SUBJECT_AREAS = [
  "Kedokteran", "Teknik", "Bisnis", "Ilmu Komputer", "Hukum", "Pendidikan",
  "Ilmu Sosial", "Ekonomi", "Kimia", "Biologi", "Fisika", "Pertanian",
];

export const PUBLICATION_JOURNEY = [
  { title: "Riset", helped: false },
  { title: "Penulisan", helped: false },
  { title: "Penyuntingan", helped: true },
  { title: "Pencocokan Jurnal", helped: true },
  { title: "Submisi", helped: true },
  { title: "Peer Review", helped: true },
  { title: "Penerimaan", helped: false },
];

export const PRICING_TIERS = [
  {
    name: "Academic Editing",
    tagline: "Untuk manuskrip yang siap disempurnakan bahasanya.",
    price: "Mulai dari",
    priceDetail: "Penawaran khusus per manuskrip",
    features: ["Editing tata bahasa & kejelasan", "Tinjauan gaya bahasa akademik", "Pengerjaan mulai 3 hari", "Satu putaran revisi"],
  },
  {
    name: "Scientific Editing",
    tagline: "Untuk manuskrip yang butuh kedalaman struktur dan ilmiah.",
    price: "Konsultasi Premium",
    priceDetail: "Disesuaikan bersama editor ahli",
    features: ["Semua di Academic Editing", "Tinjauan struktur & argumentasi", "Editor sesuai bidang keilmuan", "Revisi tanpa batas"],
    highlighted: true,
  },
  {
    name: "Publication Concierge",
    tagline: "Dukungan menyeluruh dari draft hingga diterima.",
    price: "Paket Khusus",
    priceDetail: "Untuk laboratorium, institusi & enterprise",
    features: ["Semua di Scientific Editing", "Pencocokan & format jurnal", "Dukungan respons reviewer", "Manajer publikasi khusus"],
  },
];

export const TESTIMONIALS = [
  {
    quote: "Editor Publiora memahami nuansa bagian metodologi kami lebih baik dari yang saya duga. Manuskrip kami diterima pada revisi pertama.",
    name: "Dr. Anisa Rahman",
    role: "Profesor Kesehatan Masyarakat",
    institution: "Universitas Gadjah Mada",
  },
  {
    quote: "Sebagai penutur non-native, mendapat masukan dari reviewer Scopus memberi saya keyakinan nyata sebelum submisi.",
    name: "Dr. Hiroshi Tanaka",
    role: "Peneliti Senior",
    institution: "Kyoto University",
  },
  {
    quote: "Layanan editing respons reviewer saja sudah menyelamatkan paper kami. Tepat sasaran, persuasif, dan cepat.",
    name: "Priya Menon, MD",
    role: "Kandidat PhD, Kedokteran Klinis",
    institution: "NUS Singapore",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Apa bedanya Publiora dengan jasa proofreading biasa?",
    a: "Proofreading hanya memeriksa tata bahasa. Publiora memadukan editor ahli sesuai bidang keilmuan dengan proses kualitas terstruktur yang mencakup bahasa, argumentasi ilmiah, format jurnal, hingga dukungan submisi — secara menyeluruh.",
  },
  {
    q: "Siapa yang akan menyunting manuskrip saya?",
    a: "Setiap manuskrip dicocokkan dengan editor yang memiliki keahlian sesuai bidangnya, banyak di antaranya adalah mantan editor jurnal atau reviewer Scopus aktif di bidang tersebut.",
  },
  {
    q: "Berapa lama proses penyuntingan?",
    a: "Waktu pengerjaan tergantung panjang manuskrip dan paket layanan, umumnya mulai dari 3 hari kerja untuk editing standar, dengan opsi percepatan tersedia.",
  },
  {
    q: "Apakah riset saya dijaga kerahasiaannya?",
    a: "Ya. Semua manuskrip diproses di bawah perjanjian kerahasiaan yang ketat, dan akses dibatasi hanya untuk tim editor yang ditugaskan.",
  },
  {
    q: "Apakah semua bidang riset didukung?",
    a: "Kami mencakup 42 bidang riset mulai dari kedokteran, teknik, bisnis, ilmu komputer, ilmu alam, dan lainnya — masing-masing dicocokkan dengan editor spesialis.",
  },
];

export const ANALYZER_RESULT = {
  wordCount: "6.842 kata",
  estimatedDelivery: "4 hari kerja",
  recommendedEditor: "Dr. Farah Al-Sayed, PhD (Teknik Biomedis)",
  journalDifficulty: "Tinggi — target jurnal Q1 terindeks Scopus",
  publicationReadiness: 72,
  estimatedPrice: "Penawaran khusus setelah ditinjau editor",
};

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
