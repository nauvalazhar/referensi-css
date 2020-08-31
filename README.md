# Referensi CSS

Jadi gini, Anda tau cssreference.io? Nah, situs itu dibuat oleh mas @jgthms, situs tersebut juga open source, ditulis dengan Jekyll (Ruby). Perlu Anda ketahui, Jekyll lumayan lambat pada saat build time, dan juga ditinggalkan oleh Bootstrap. Bootstrap awalnya pake Jekyll juga, terus malah migrasi ke Hugo. Awalnya saya juga mau pake Hugo, tapi, karena pengalaman di Go itu sedikit, jadi, saya milih [Next.js](https://nextjs.org) yang sudah saya gunakan selama 1+ tahun terakhir.

Terus? Sebenernya, saya ini mau menerjemahkan situs cssreference.io ke bahasa Indonesia, alih-alih ingin menerjemahkan bahasanya saja, eh malah satu proyek saya tulis ulang jadi Next.js. Sekarang pun belum ada konten yang saya terjemahkan ke dalam bahasa Indonesia, tapi, ini akan saya cicil di waktu luang saya. 

Secara UI dan fungsionalitas sudah bisa digunakan, sih. Karena di awal saya tulis ulang dulu semuanya dan saya buat semuanya bekerja, supaya setelah ini saya bisa fokus menerjemahkan kontennya saja.

Bila Anda ingin berkontribusi, silahkan saja, yang pasti saya akan mulai dari properti yang paling atas: align-content.

## Sebelum Menerjemahkan
Menerjemahkan hal di dalam ilmu komputer tidak semudah membalikan telapak tangan semut. Karena Anda harus memahami setiap kata, kalimat, paragraf hingga konteksnya. Terdapat beberapa istilah di CSS yang bila diterjemahkan akan membuat bingung dan malah menjadi salah paham, diantaranya:
- container
- cross/main axis
- inline/block
- keyframe
- tunggu, masih dicari lagi ...

## Done
Daftar properti yang sudah diterjemahkan:
- align-content
- align-items
- align-self
- animation-delay
- animation-direction
- animation-duration
- animation-fill-mode
- animation-iteration-count
- animation-name
- animation-play-state

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
