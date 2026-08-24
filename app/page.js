'use client';

const wa="6283193865078";

const packages=[
 {title:"LEGAL PUBLIK",items:["RAM 1 GB - Rp500","RAM 2 GB - Rp1.000","RAM 4 GB - Rp2.000","UNLIMITED - Rp5.000"]},
 {title:"LEGAL PRIVATE",items:["RAM 1GB - Rp4.000","RAM 4GB - Rp11.000","RAM 8GB - Rp19.000","Unlimited - Rp25.000"]},
 {title:"ILEGAL",items:["RAM 1GB - Rp1.000","RAM 4GB - Rp1.000","Unlimited - Rp2.000"]}
];

export default function Home(){
 function buy(pkg){
  const id="ARMUFA-"+Date.now();
  const text=`Halo DARK ARMUFA

Saya ingin transaksi.

ID: ${id}
Website: DARK ARMUFA
Paket: ${pkg}

Bukti pembayaran saya kirim.`;
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(text)}`);
 }

 return <main className="p-6 max-w-5xl mx-auto">
  <h1 className="text-5xl font-bold text-red-500">DARK ARMUFA</h1>
  <p className="mt-2">King Armufa Digital & Kreatif</p>

  <div className="mt-8 bg-zinc-900 p-6 rounded-xl">
   <h2 className="text-2xl font-bold">🔥 READY PANEL STORE</h2>
   <p>Panel publik, private dan kebutuhan digital.</p>
  </div>

  {packages.map(p=>
   <section key={p.title} className="mt-6">
    <h2 className="text-xl font-bold text-red-400">{p.title}</h2>
    <div className="grid gap-3 mt-3">
     {p.items.map(i=>
      <button key={i} onClick={()=>buy(i)} className="bg-zinc-900 p-4 rounded-lg text-left hover:bg-red-900">
       {i}
      </button>
     )}
    </div>
   </section>
  )}

  <section className="mt-8 bg-zinc-900 p-5 rounded-xl">
   <h2 className="font-bold">Pembayaran QRIS</h2>
   <p>Scan QRIS lalu kirim bukti melalui WhatsApp.</p>
   <img src="/qris.png" className="mt-4 w-72"/>
  </section>
 </main>
}