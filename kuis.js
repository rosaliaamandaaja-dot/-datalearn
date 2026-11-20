const K=document.getElementById('kuis');let i=0,jw=[];
function mulai(){i=0;jw=[];K.innerHTML=`<div class="mulai"><div class="besar">🎯</div><h2>Siap menguji dirimu?</h2><div class="chips"><span>📝 ${SOAL.length} soal</span><span>⚡ Langsung ada pembahasan</span><span>🏆 Skor di akhir</span></div><button class="btn" id="go">Mulai Kuis 🚀</button></div>`;document.getElementById('go').onclick=tanya}
function tanya(){const s=SOAL[i];K.innerHTML=`<small>Soal ${i+1} dari ${SOAL.length}</small><div class="bar"><i style="width:${i/SOAL.length*100}%"></i></div><h3 style="margin-top:0">${s.q}</h3>${s.o.map((t,k)=>`<button class="opsi" data-k="${k}">${String.fromCharCode(65+k)}. ${t}</button>`).join('')}<div id="fb"></div>`;
K.querySelectorAll('.opsi').forEach(b=>b.onclick=()=>jawab(+b.dataset.k))}
function jawab(k){const s=SOAL[i];jw.push(k);const ok=k===s.a;
K.querySelectorAll('.opsi').forEach((b,x)=>{b.disabled=true;if(x===s.a)b.classList.add('benar');else if(x===k)b.classList.add('salah')});
document.getElementById('fb').innerHTML=`<div class="${ok?'tip':'awas'}"><b>${ok?'🎉 Benar!':'🤔 Belum tepat.'}</b> ${s.p}</div><button class="btn" id="nx">${i<SOAL.length-1?'Soal berikutnya →':'Lihat hasil'}</button>`;
document.getElementById('nx').onclick=()=>{i++;i<SOAL.length?tanya():hasil()}}
function hasil(){const b=jw.filter((k,x)=>k===SOAL[x].a).length,s=SOAL.length-b,skor=Math.round(b/SOAL.length*100);
K.innerHTML=`<h2>Hasil kuis</h2><div class="skor">${skor}</div><p>${skor>=80?'🏆 Keren, pemahamanmu sudah kuat!':skor>=60?'👍 Sudah bagus. Ulangi bagian yang masih salah ya.':'💪 Tenang, ulangi materinya pelan-pelan lalu coba lagi.'}</p><div class="stat"><div class="b">Benar: ${b}</div><div class="s">Salah: ${s}</div><div class="t">Skor: ${skor}/100</div></div>${s?'<h3>Soal yang salah</h3>'+SOAL.map((q,x)=>jw[x]===q.a?'':`<div class="awas"><b>${q.q}</b><br>Jawabanmu: ${q.o[jw[x]]}<br>Jawaban benar: ${q.o[q.a]}<br>${q.p}</div>`).join(''):''}<div class="navbtn"><button class="btn" id="ul">Ulangi kuis</button><a class="btn alt" href="materi.html">Kembali ke materi</a><a class="btn alt" href="beranda.html">Beranda</a></div>`;
document.getElementById('ul').onclick=mulai;if(skor>=80)konfeti()}
function konfeti(){for(let n=0;n<28;n++){const e=document.createElement('span');e.className='konfeti';e.textContent=['🎉','✨','⭐','🎊'][n%4];e.style.left=Math.random()*100+'vw';e.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),3800)}}
mulai();
