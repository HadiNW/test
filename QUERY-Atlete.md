# Query Estimasi 30 menit ⏰

---

Buatlah sebuah query yang akan menghasilkan output sesuai dengan yang diinginkan oleh soal.

Illustrasi yang terdapat dalam soal ini hanya sebagai contoh bagaimana output akan terbentuk, bukan menjadi hasil utama yang akan dihasilkan dari query yang harus dibuat.

NOTE: JAWABAN YANG DIPERLUKAN HANYA QUERY SAJA!

## Release 1

Tampilkan cabang olahraga, nama dan umur terkecil/termuda yang diikuti oleh setiap Athlete yang mengikuti cabang olahraga gelaran asian games dikelompokkan berdasarkan Negara asal. Urutkan dari athlete yang paling muda hingga yang paling tua.

**Ilustrasi hasil data**

| Sport Name | Athletes Name       | Age |
| ---------- | ------------------- | --- |
| Badminton  | GAYATRI GOPICHAND   | 15  |
| Athletics  | MARSELINA TAMU APU  | 18  |
| Athletics  | DONGHWI CHOE        | 19  |
| Athletics  | PATSAPONG AMSAM ANG | 20  |
| Badminton  | ZII JIA LEE         | 20  |
| Athletics  | VERONICA SHANTI     | 21  |
| Badminton  | YONNY CHUNG         | 21  |
| Badminton  | TAKURO HOKI         | 23  |
| Athletics  | MEHBOOB ALI         | 25  |


## Release 2

Tampilkan region-region yang memiliki lebih dari 2 negara pada region tersebut yang mengikuti acara asian games tersebut.

**Ilustrasi hasil data**

| Country Count | Region Name    |
| ------------- | -------------- |
| 3             | East Asia      |
| 4             | Southeast Asia |

## Release 3

Tampilkan nama presiden dan para atlit di negara indonesia atau pada negara yang tidak berada dalam region `South Asia` dan `East Asia` ( Hanya boleh menggunakan dua kondisi where dan harus menampilkan semua negara walaupun tidak ada atlit yang ikut bertanding dari negara tersebut)

**Ilustrasi hasil data**

[ { president: 'Joko Widodo',
    region: 'Southeast Asia',
    name: 'FITRIANI' },
  { president: 'Joko Widodo',
    region: 'Southeast Asia',
    name: 'JONATAN CHRISTIE' },
  { president: 'Joko Widodo',
    region: 'Southeast Asia',
    name: 'MARSELINA TAMU APU' },
  { president: 'Joko Widodo',
    region: 'Southeast Asia',
    name: 'NADIA ANGGRAINI' },
  { president: 'Joko Widodo',
    region: 'Southeast Asia',
    name: 'TEUKU TEGAR ABADI' },
  { president: 'Lee Hsien Loong',
    region: 'Southeast Asia',
    name: 'VERONICA SHANTI' },
  { president: 'Lee Hsien Loong',
    region: 'Southeast Asia',
    name: 'ZUBIN PERCY MUNCHERJI' },
  { president: 'Maha Vajiralongkorn',
    region: 'Southeast Asia',
    name: 'INKARAT APISUK' },
  { president: 'Maha Vajiralongkorn',
    region: 'Southeast Asia',
    name: 'PATSAPONG AMSAM ANG' },
  { president: 'Maha Vajiralongkorn',
    region: 'Southeast Asia',
    name: 'SUPOT BOONNUN' },
  { president: 'Maha Vajiralongkorn',
    region: 'Southeast Asia',
    name: 'SUPPANYU AVIHINGSANON' },
  { president: 'Maha Vajiralongkorn',
    region: 'Southeast Asia',
    name: 'WANIDA BOONWAN' },
  { president: 'Mahathir Bin Mohamad ',
    region: 'Southeast Asia',
    name: 'LIU YING GOH' },
  { president: 'Mahathir Bin Mohamad ',
    region: 'Southeast Asia',
    name: 'SHEVON JEMIE LAI' },
  { president: 'Mahathir Bin Mohamad ',
    region: 'Southeast Asia',
    name: 'SOON HUAT' },
  { president: 'Mahathir Bin Mohamad ',
    region: 'Southeast Asia',
    name: 'ZII JIA LEE' },
  { president: 'Nursultan Nazarbayev',
    region: 'Mid Asia',
    name: null } ]
