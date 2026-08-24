use client';

import {useState} from "react";

const wa="6283193865078";

const products=[
{cat:"LEGAL PUBLIK",items:[["RAM 1 GB",500],["RAM 2 GB",1000],["RAM 3 GB",1500],["RAM 4 GB",2000],["RAM 5 GB",2500],["UNLIMITED",5000]]},
{cat:"LEGAL PRIVATE",items:[["RAM 1GB",4000],["RAM 2GB",7000],["RAM 4GB",11000],["RAM 8GB",19000],["RAM Unlimited",25000]]},
{cat:"ILEGAL",items:[["RAM 1 GB",1000],["RAM 4 GB",1000],["RAM Unlimited",2000]]}
];

export default function Home(){
 const [pack,setPack]=useState("");
 const [price,setPrice]=useState(0);
 const id="ARMUFA-"+Math.random().toString(36).slice(2,8).toUpperCase();

 function order(){
 const msg=`Halo DARK ARMUFA

Saya ingin melakukan transaksi.

ID Transaksi: ${id}
Website: DARK ARMUFA
Paket: ${pack}
Harga: Rp ${price.toLocaleString("id-ID")}

Bukti pembayaran sudah saya kirim.`;
 window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`,"_blank");
 }

 return <main className="min-h-screen bg-black text-white p-6">
 <h1 className="text-4xl font-bold text-red-500">DARK ARMUFA</h1>
 <p className="mt-2">King Armufa Digital & Kreatif</p>

 <section className="mt-8 rounded-xl bg-zinc-900 p-5">
 <h2 className="text-2xl font-bold">🔥 READY PANEL STORE</h2>
 <p>Panel publik, private dan pilihan lainnya dengan proses cepat.</p>
 </section>

 {products.map(p=><section key={p.cat} className="mt-6">
 <h2 className="text-xl font-bold text-red-400">{p.cat}</h2>
 <div className="grid gap-3 mt-3">
 {p.items.map(i=><button key={i[0]} onClick={()=>{setPack(i[0]);setPrice(i[1])}}
 className="bg-zinc-900 rounded-lg p-4 text-left hover:bg-red-900">
 {i[0]} - Rp {i[1].toLocaleString("id-ID")}
 </button>)}
 </div>
 </section>)}

 <section className="mt-8 bg-zinc-900 p-5 rounded-xl">
 <h2 className="font-bold">Pembayaran QRIS</h2>
 <p>Scan QRIS lalu kirim bukti pembayaran.</p>
 <img src="/qris.png" className="w-72 mt-4 rounded"/>
 </section>

 <button onClick={order} className="mt-8 w-full bg-red-600 p-4 rounded-xl font-bold">
 BUY NOW {pack && `- ${pack}`}
 </button>

 <a className="block mt-6 text-center text-red-400" href="https://chat.whatsapp.com/FbarNmW1lDgBlrrTWjdjOB?s=cl&p=a&mlu=4">
 Group Informasi WhatsApp
 </a>
 </main>
}