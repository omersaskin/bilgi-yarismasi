import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

let ad = "Ahmet"
let soyad = "Yılmaz"
let saat = (new Date()).getHours()

const oyunBaslat = olay=>{ 
  alert("Oyun başladı") 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 className='text-warning p-3' style={ {backgroundColor: "red"} }>Merhaba!</h1>
    <p>Bilgi yarışmasına hoş geldiniz..  {ad + " " + soyad} {2*8} yaşında. </p>
    { saat > 17 ? <p>İyi akşamlar</p> : <p>İyi günler</p> }
    <button onClick={ oyunBaslat }>Oyuna Başla</button>
  </>
);


/*
const paragraf = document.createElement("p")
paragraf.textContent = "Merhaba!"
document.getElementById('root').append(paragraf)
*/