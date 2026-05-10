
// ═══ STATE ═══
const S={
  page:'dashboard',key:localStorage.getItem('bpp_k')||'',gkey:localStorage.getItem('bpp_g')||'',nkey:localStorage.getItem('bpp_nk')||'',
  prog:JSON.parse(localStorage.getItem('bpp_p')||'[]'),str:JSON.parse(localStorage.getItem('bpp_s')||'{"c":0,"b":0,"d":null}'),
  wrong:JSON.parse(localStorage.getItem('bpp_w')||'{}'),bookmarks:JSON.parse(localStorage.getItem('bpp_bm')||'[]'),
  fcProg:JSON.parse(localStorage.getItem('bpp_fc')||'{}'),examDate:localStorage.getItem('bpp_ed')||'',
  dailyTarget:parseInt(localStorage.getItem('bpp_dt')||'50'),notes:JSON.parse(localStorage.getItem('bpp_notes')||'{}'),
  news:JSON.parse(localStorage.getItem('bpp_n')||'{}'),seenMock:JSON.parse(localStorage.getItem('bpp_sm')||'[]'),
  dark:localStorage.getItem('bpp_dark')==='1',
  studyProg:JSON.parse(localStorage.getItem('bpp_sp')||'{}'),
  dailyQuiz:JSON.parse(localStorage.getItem('bpp_dq')||'{"date":null,"done":false,"score":0,"ans":[]}'),
  examChecklist:JSON.parse(localStorage.getItem('bpp_ec')||'[]'),
  topicNotes:JSON.parse(localStorage.getItem('bpp_tn')||'{}'),
  quiz:null,mockActive:null,timer:null,chart:null,essayTimer:null
};
function save(){
  localStorage.setItem('bpp_p',JSON.stringify(S.prog));localStorage.setItem('bpp_s',JSON.stringify(S.str));
  localStorage.setItem('bpp_w',JSON.stringify(S.wrong));localStorage.setItem('bpp_bm',JSON.stringify(S.bookmarks));
  localStorage.setItem('bpp_fc',JSON.stringify(S.fcProg));localStorage.setItem('bpp_notes',JSON.stringify(S.notes));
  localStorage.setItem('bpp_n',JSON.stringify(S.news));if(S.key)localStorage.setItem('bpp_k',S.key);
  if(S.gkey)localStorage.setItem('bpp_g',S.gkey);if(S.nkey)localStorage.setItem('bpp_nk',S.nkey);
  if(S.examDate)localStorage.setItem('bpp_ed',S.examDate);localStorage.setItem('bpp_dt',String(S.dailyTarget));
  localStorage.setItem('bpp_sm',JSON.stringify(S.seenMock.slice(-3000)));
  localStorage.setItem('bpp_dark',S.dark?'1':'0');
  localStorage.setItem('bpp_sp',JSON.stringify(S.studyProg));
  localStorage.setItem('bpp_dq',JSON.stringify(S.dailyQuiz));
  localStorage.setItem('bpp_ec',JSON.stringify(S.examChecklist));
  localStorage.setItem('bpp_tn',JSON.stringify(S.topicNotes));
}

// ═══ DARK MODE ═══
function applyDark(){
  document.body.classList.toggle('dark',S.dark);
  const btn=document.getElementById('darkBtn');
  if(btn)btn.textContent=S.dark?'☀️ Light Mode':'🌙 Dark Mode';
}
window.toggleDark=function(){S.dark=!S.dark;save();applyDark();};

// ═══ FORMULA PANEL ═══
const FORMULAS=[
  {cat:'Percentage',items:['P% of X = (P×X)/100','% increase = (New−Old)/Old × 100','% decrease = (Old−New)/Old × 100','If A is x% more than B → B is x/(100+x)×100% less than A','Successive % change: A then B → net = A+B+AB/100']},
  {cat:'Simple Interest',items:['SI = P×R×T/100','Amount = P + SI','P = SI×100/(R×T)','R = SI×100/(P×T)','T = SI×100/(P×R)']},
  {cat:'Compound Interest',items:['A = P(1+R/100)ⁿ','CI = A − P','Half-yearly: A = P(1+R/200)²ⁿ','Quarterly: A = P(1+R/400)⁴ⁿ','CI−SI (2yr) = P(R/100)²','CI−SI (3yr) = P(R/100)²(3+R/100)']},
  {cat:'Profit & Loss',items:['Profit = SP − CP','Loss = CP − SP','Profit% = (P/CP)×100','Loss% = (L/CP)×100','SP = CP×(100+P%)/100','CP = SP×100/(100+P%)','Dishonest gain% = (Error/(True weight−Error))×100']},
  {cat:'Ratio & Proportion',items:['a:b = c:d → ad = bc (cross multiply)','If a:b = c:d, then (a+b):(a−b) = (c+d):(c−d)','Compound ratio of a:b and c:d = ac:bd','Mean proportion of a,b = √(ab)','Third proportion of a,b = b²/a']},
  {cat:'Time & Work',items:['If A does in n days → 1 day work = 1/n','A+B together: 1/A + 1/B = 1/T','Efficiency ∝ 1/Time','Pipes: Fill − Drain = Net per hour','If A is x times faster than B → A takes T/x time']},
  {cat:'Speed, Distance & Time',items:['S = D/T · D = S×T · T = D/S','Avg speed = 2xy/(x+y) (same distance)','Relative speed (opp): u+v; (same): u−v','Train crossing pole: T = length/speed','Train crossing platform: T = (L₁+L₂)/speed','Boat upstream: S−u; downstream: S+u']},
  {cat:'Averages & Mixtures',items:['Average = Sum/Count','If avg changes by x when one item replaced → new−old = n×x','Alligation: (C₂−Mean)/(Mean−C₁) = qty1/qty2','Mixture after n withdrawals: pure/total = (1−w/V)ⁿ']},
  {cat:'Number Series Tricks',items:['Check: +n, ×n, n², n³ patterns first','Difference of differences for 2nd order','Prime series: 2,3,5,7,11,13...','Fibonacci-type: each = sum of prev two','Square root series: 1,4,9,16,25...']},
  {cat:'Banking & Economy',items:['GDP growth = (Current−Previous)/Previous × 100','Inflation = (CPI_new−CPI_old)/CPI_old × 100','Repo Rate → cost of borrowing for banks','Reverse Repo → rate RBI pays to banks','CRR = % of deposits banks must hold with RBI','SLR = % of deposits in govt securities','WPI → wholesale prices; CPI → consumer prices','Fiscal Deficit = Total Expenditure − Revenue Receipts − Capital Receipts (excl borrowings)']},
];
const FP_HTML=FORMULAS.map(f=>`<div style="margin-bottom:18px"><div style="font-size:11px;font-weight:800;color:#7c3aed;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">${f.cat}</div>${f.items.map(i=>`<div style="font-size:12px;padding:5px 0;border-bottom:1px solid #f1f5f9;line-height:1.5">${i}</div>`).join('')}</div>`).join('');
function initFP(){const el=document.getElementById('fp-body');if(el)el.innerHTML=FP_HTML;}
window.toggleFP=function(){const p=document.getElementById('formula-panel');if(p)p.classList.toggle('open');};

// ═══ DAILY QUIZ (offline) ═══
const DQ_POOL=[
  {q:'The headquarters of Reserve Bank of India (RBI) is located in',o:['New Delhi','Mumbai','Kolkata','Chennai'],c:1,e:'RBI HQ is in Mumbai. Established in 1935, nationalized in 1949.'},
  {q:'Repo Rate is the rate at which',o:['Banks lend to RBI','RBI lends to banks','Banks lend to public','RBI pays on deposits'],c:1,e:'Repo rate = rate at which RBI lends short-term funds to commercial banks.'},
  {q:'Which of the following is NOT a function of commercial banks?',o:['Accepting deposits','Printing currency notes','Lending loans','Providing locker facilities'],c:1,e:'Printing currency is the exclusive function of the central bank (RBI).'},
  {q:'NABARD stands for',o:['National Bank for Agriculture and Rural Development','National Bureau of Agriculture and Rural Districts','National Banking and Rural Development','None of these'],c:0,e:'NABARD – National Bank for Agriculture and Rural Development, estd 1982.'},
  {q:'What is the full form of SWIFT in banking?',o:['Society for Worldwide Interbank Financial Telecommunication','System for Wire Interbank Financial Transfer','Secure Worldwide Interbank Finance Technology','None of these'],c:0,e:'SWIFT enables secure international money and security transfers between banks.'},
  {q:'The minimum capital adequacy ratio (CAR) for Indian banks as per Basel III norms is',o:['8%','9%','10%','12%'],c:1,e:'RBI mandates CAR of 9% for Indian banks (higher than Basel III norm of 8%).'},
  {q:'Which index measures inflation at the consumer level in India?',o:['WPI','CPI','BSE Sensex','GDP Deflator'],c:1,e:'CPI (Consumer Price Index) measures price changes at the retail/consumer level.'},
  {q:'NEFT transactions are settled in',o:['Real time','Batches throughout the day','Once a day','Twice a day'],c:1,e:'NEFT settles in half-hourly batches. RTGS settles in real time.'},
  {q:'The Statutory Liquidity Ratio (SLR) requires banks to maintain liquid assets as a percentage of their',o:['Net demand and time liabilities (NDTL)','Total assets','Total deposits','Capital funds'],c:0,e:'SLR is a % of NDTL that banks must maintain in govt securities/gold/cash.'},
  {q:'Which of the following is a Capital Market instrument?',o:['Treasury Bill','Certificate of Deposit','Equity Share','Commercial Paper'],c:2,e:'Equity shares are long-term capital market instruments. T-Bills, CDs, CPs are money market instruments.'},
  {q:'The headquarters of SEBI is in',o:['New Delhi','Mumbai','Hyderabad','Bengaluru'],c:1,e:'SEBI (Securities and Exchange Board of India) HQ is in Mumbai (Bandra Kurla Complex).'},
  {q:'What does NPA stand for in banking?',o:['Net Profit Account','Non-Performing Asset','New Profit Analysis','National Payment Authority'],c:1,e:'NPA: a loan where borrower has not made interest or principal payments for 90+ days.'},
  {q:'The term "Fiscal Policy" refers to',o:["RBI monetary decisions",'Government tax and expenditure decisions','Exchange rate management','Foreign trade policy'],c:1,e:'Fiscal policy refers to government decisions on taxation and public expenditure.'},
  {q:'Pradhan Mantri Jan Dhan Yojana (PMJDY) was launched in the year',o:['2012','2013','2014','2015'],c:2,e:'PMJDY launched on 28 August 2014 to ensure financial inclusion for all households.'},
  {q:'Which of the following is the regulator of insurance sector in India?',o:['RBI','SEBI','IRDAI','PFRDA'],c:2,e:'IRDAI – Insurance Regulatory and Development Authority of India regulates insurance.'},
  {q:'The concept of "Priority Sector Lending" mandates banks to lend what % of ANBC to priority sectors?',o:['30%','35%','40%','45%'],c:2,e:'Banks must lend 40% of Adjusted Net Bank Credit to priority sectors (agriculture, MSME, etc.).'},
  {q:'What is the current GST rate on banking services?',o:['12%','15%','18%','28%'],c:2,e:'Banking and financial services attract 18% GST in India.'},
  {q:'Which organization publishes the Human Development Index (HDI)?',o:['World Bank','IMF','UNDP','WEF'],c:2,e:'HDI is published annually by the United Nations Development Programme (UNDP).'},
  {q:'The term "Bear Market" refers to a market where prices are',o:['Rising','Falling','Stable','Highly volatile'],c:1,e:'Bear market = prices falling 20%+ from recent highs. Bull market = prices rising.'},
  {q:'"CAMELS" rating framework for banks evaluates',o:['Capital, Assets, Management, Earnings, Liquidity, Sensitivity','Cash, Advances, Margin, Equity, Loans, Stability','Credit, Assets, Market, Equity, Leverage, Savings','None of these'],c:0,e:'CAMELS: Capital adequacy, Asset quality, Management, Earnings, Liquidity, Sensitivity to market risk.'},
];
function getDailyQs(){
  const seed=new Date().toISOString().slice(0,10).replace(/-/g,'');
  let n=parseInt(seed)%100;
  const pool=[...DQ_POOL];const out=[];
  for(let i=0;i<10;i++){out.push(pool[(n+i*7)%pool.length]);}
  return out;
}
window.renderDailyQuiz=function(){
  const t=today();
  if(S.dailyQuiz.date!==t){S.dailyQuiz={date:t,done:false,score:0,ans:new Array(10).fill(-1)};save();}
  const qs=getDailyQs();const dq=S.dailyQuiz;
  const el=document.getElementById('daily-quiz-box');if(!el)return;
  if(dq.done){
    el.innerHTML=`<div style="text-align:center;padding:16px"><div style="font-size:32px;font-weight:800;color:${clr(dq.score*10)}">${dq.score}/10</div><div style="font-size:13px;color:#64748b;margin-top:4px">${dq.score>=8?'Excellent!':dq.score>=6?'Good job!':'Keep practicing!'} Come back tomorrow for new questions.</div></div>
    ${qs.map((q,i)=>`<div style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:12px"><b>Q${i+1}.</b> ${q.q}<br><span style="color:${dq.ans[i]===q.c?'#059669':'#dc2626'}">${dq.ans[i]===q.c?'✅':'❌'} ${q.o[q.c]}</span></div>`).join('')}`;
    return;
  }
  const unanswered=dq.ans.indexOf(-1);const qi=unanswered===-1?9:unanswered;
  const answered=dq.ans.filter(a=>a!==-1).length;
  el.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><span style="font-size:12px;color:#64748b;font-weight:600">Q${qi+1}/10 · ${answered} answered</span><div class="pbar" style="width:120px;height:6px"><div class="pfill" style="width:${answered*10}%"></div></div></div>
  <p style="font-size:14px;font-weight:600;margin-bottom:10px;line-height:1.5">${qs[qi].q}</p>
  ${qs[qi].o.map((op,j)=>`<button onclick="dqAnswer(${qi},${j})" style="display:block;width:100%;text-align:left;border:1.5px solid ${dq.ans[qi]===j?'#2563eb':'#e2e8f0'};border-radius:8px;padding:8px 12px;margin-bottom:6px;cursor:pointer;font-size:13px;background:${dq.ans[qi]===j?'#eff6ff':'#fff'}">${String.fromCharCode(65+j)}. ${op}</button>`).join('')}
  ${answered>0?`<button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="dqSubmit()">Submit All (${answered}/10 answered)</button>`:''}`;
};
window.dqAnswer=function(qi,j){if(S.dailyQuiz.done)return;S.dailyQuiz.ans[qi]=j;save();renderDailyQuiz();};
window.dqSubmit=function(){const qs=getDailyQs();const dq=S.dailyQuiz;let score=0;qs.forEach((q,i)=>{if(dq.ans[i]===q.c)score++;});dq.score=score;dq.done=true;save();renderDailyQuiz();};

// ═══ NAV ═══
const NAV_ITEMS=[['dashboard','📊','Dashboard'],['study','📚','Study Hub'],['practice','✏️','Practice'],
  ['flashcards','🃏','Flashcards'],['mock','📝','Mock Tests'],['news','📰','Current Affairs'],
  ['interview','💼','Interview Prep'],['descriptive','✍️','Descriptive Writing'],
  ['progress','📈','Progress'],['planner','🎯','Exam Planner'],['settings','⚙️','Settings']];
const ALL_PAGES=NAV_ITEMS.map(n=>n[0]);

function go(p){
  if(S.timer&&p!=='mock'){clearInterval(S.timer);S.timer=null;}
  ALL_PAGES.forEach(x=>{const el=document.getElementById('p-'+x);if(el)el.classList.toggle('hidden',x!==p);});
  document.querySelectorAll('.nl').forEach(a=>a.classList.toggle('active',a.dataset.p===p));
  S.page=p;closeSB();const sc=document.getElementById('scrl');if(sc)sc.scrollTop=0;
  upStreak();
  const fns={dashboard:rDash,study:rStudy,practice:rPractice,flashcards:rFlash,mock:rMock,
    news:rNews,interview:rInterview,descriptive:rDesc,progress:rProgress,planner:rPlanner,settings:rSettings};
  try{if(fns[p])fns[p]();}catch(err){console.error('Page render error:',err);document.getElementById('p-'+p).innerHTML=`<div class="card" style="background:#fef2f2"><p style="color:#dc2626;font-weight:600">Error loading page</p><pre style="font-size:11px;color:#64748b;margin-top:8px">${err.message}</pre></div>`;}
}
function openSB(){document.getElementById('sidebar').classList.add('on');document.getElementById('overlay').classList.add('on');}
function closeSB(){document.getElementById('sidebar').classList.remove('on');document.getElementById('overlay').classList.remove('on');}

// ═══ UTILS ═══
const SM={quantitative_aptitude:'Quant',reasoning:'Reasoning',english:'English',banking_awareness:'Banking',computer:'Computer',economics:'Economics',general_knowledge:'General GK'};
function fSub(s){return SM[s]||s;}
function fTopic(t){return(t||'').replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase());}
function clr(n){return n>=70?'#059669':n>=50?'#d97706':'#dc2626';}
function clrBg(n){return n>=70?'#d1fae5':n>=50?'#ffedd5':'#fee2e2';}
function shuffle(a){let b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function today(){return new Date().toISOString().slice(0,10);}
function daysLeft(){if(!S.examDate)return null;const d=Math.ceil((new Date(S.examDate)-new Date())/86400000);return d>0?d:0;}
function todayDone(){const t=today();return S.prog.filter(r=>r.ts&&new Date(r.ts).toISOString().slice(0,10)===t).reduce((s,r)=>s+r.total,0);}
function getStats(){
  const by={};
  S.prog.forEach(r=>{
    const sub=r.sub||'mixed';
    if(!by[sub])by[sub]={a:0,c:0,t:0,topics:{}};
    by[sub].a++;by[sub].c+=r.score;by[sub].t+=r.total;
    const top=r.topic||'general';
    if(!by[sub].topics[top])by[sub].topics[top]={c:0,t:0};
    by[sub].topics[top].c+=r.score;by[sub].topics[top].t+=r.total;
  });
  const tot=S.prog.reduce((s,r)=>s+r.total,0),cor=S.prog.reduce((s,r)=>s+r.score,0);
  return{by,overall:tot?Math.round(cor/tot*100):0,sessions:S.prog.length,questions:tot,correct:cor};
}
function getWeakAreas(){
  const st=getStats();const weak=[];
  Object.entries(st.by).forEach(([sub,d])=>{
    Object.entries(d.topics||{}).forEach(([top,td])=>{
      if(td.t>=3){const acc=Math.round(td.c/td.t*100);if(acc<60)weak.push({sub,top,acc,t:td.t});}
    });
  });
  return weak.sort((a,b)=>a.acc-b.acc);
}
function upStreak(){
  const t=today();if(S.str.d===t){refStreak();return;}
  const yest=new Date(Date.now()-86400000).toISOString().slice(0,10);
  S.str.c=S.str.d===yest?S.str.c+1:1;S.str.b=Math.max(S.str.c,S.str.b);S.str.d=t;save();refStreak();
}
function refStreak(){
  const el=document.getElementById('snum');if(el)el.textContent=S.str.c;
  const m=document.getElementById('mstr');if(m)m.textContent=S.str.c+'🔥';
}
function toggleBM(qid){const i=S.bookmarks.indexOf(qid);if(i>-1)S.bookmarks.splice(i,1);else S.bookmarks.push(qid);save();}
function recordWrong(qid){S.wrong[qid]=(S.wrong[qid]||0)+1;save();}
const IS_ONLINE=window.location.protocol!=='file:';
function hasAI(){return IS_ONLINE||!!(S.gkey||S.key);}
async function callAI(prompt){
  // Server proxy — works online without user needing any API key
  if(IS_ONLINE){
    try{
      const r=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt})});
      const d=await r.json();if(d.text)return d.text;if(d.error)throw new Error(d.error);
    }catch(err){if(!S.gkey&&!S.key)throw err;}
  }
  // Fallback: user's own Groq key
  if(S.gkey){
    const r=await fetch('https://api.groq.com/openai/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+S.gkey},body:JSON.stringify({model:'llama-3.3-70b-versatile',messages:[{role:'user',content:prompt}],temperature:0.7,max_tokens:4096})});
    const d=await r.json();if(d.error)throw new Error('Groq: '+d.error.message);return d.choices[0].message.content;
  }
  // Fallback: user's own Gemini key
  if(S.key){
    const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key='+S.key,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})});
    const d=await r.json();if(d.error)throw new Error('Gemini: '+d.error.message);return d.candidates[0].content.parts[0].text;
  }
  throw new Error('No API key. Go to Settings → add Groq key (free).');
}
function parseJSON(text,arr){const s=arr?'[':'{',e=arr?']':'}';return JSON.parse(text.slice(text.indexOf(s),text.lastIndexOf(e)+1));}
function icon(s){return{quantitative_aptitude:'🔢',reasoning:'🧩',english:'📖',banking_awareness:'🏦',computer:'💻',economics:'📊',general_knowledge:'🌍'}[s]||'📌';}

// ═══ QUIZ ENGINE ═══
function startQuiz(qs,cfg){
  S.quiz={qs,i:0,ans:new Array(qs.length).fill(-1),score:0,start:Date.now(),cfg};
  renderQ(cfg.pageId||'practice');
}
function renderQ(pid){
  if(!S.quiz)return;
  const{qs,i,ans}=S.quiz;const q=qs[i];const answered=ans[i]!==-1;
  const pct=Math.round((i+1)/qs.length*100);const isBM=S.bookmarks.includes(q.id);
  document.getElementById('p-'+(pid||'practice')).innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn btn-secondary btn-sm" onclick="quitQuiz('${pid||'practice'}')">← Exit</button>
        <span style="font-size:13px;font-weight:600;color:#64748b">Q ${i+1} / ${qs.length}</span>
        ${S.quiz.cfg.mode?`<span class="badge badge-${S.quiz.cfg.mode==='revision'?'orange':S.quiz.cfg.mode==='weak-drill'?'red':S.quiz.cfg.mode==='ai-practice'?'purple':'gray'}">${fTopic(S.quiz.cfg.mode)}</span>`:''}
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <button onclick="toggleBM('${q.id}');renderQ('${pid||'practice'}')" style="background:none;border:none;cursor:pointer;font-size:20px" title="Bookmark">${isBM?'🔖':'🔲'}</button>
        <span class="badge badge-${q.d==='easy'?'green':q.d==='medium'?'orange':'red'}">${q.d}</span>
        ${S.quiz.cfg.timed?`<span id="qtimer" style="font-weight:800;font-size:16px;min-width:45px;text-align:center">--</span>`:''}
      </div>
    </div>
    <div class="pbar" style="margin-bottom:16px"><div class="pfill" style="width:${pct}%"></div></div>
    <div class="card">
      <p style="font-size:11px;font-weight:700;color:#94a3b8;margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">${fSub(q.s)} · ${fTopic(q.t)}</p>
      <p style="font-weight:600;font-size:15px;line-height:1.7;margin-bottom:20px">${q.q}</p>
      <div>
        ${q.o.map((opt,j)=>{
          let cls='opt';
          if(answered){if(j===q.c)cls+=' ok';else if(j===ans[i])cls+=' bad';}
          else if(j===ans[i])cls+=' sel';
          return`<button class="${cls}" onclick="selAns(${j},'${pid||'practice'}')" ${answered?'disabled':''}><b>${String.fromCharCode(65+j)}.</b> ${opt}</button>`;
        }).join('')}
      </div>
      ${answered?`<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:14px;margin-top:4px">
        <p style="font-size:12px;font-weight:700;color:#059669;margin-bottom:6px">💡 EXPLANATION</p>
        <p style="font-size:13px;color:#374151;line-height:1.7">${q.e}</p>
      </div>`:''}
    </div>
    ${answered?`<div style="display:flex;justify-content:space-between;margin-top:12px;align-items:center">
      <span style="font-size:13px;color:#64748b">Score: <b style="color:#2563eb">${S.quiz.score}/${i+1}</b></span>
      ${i<qs.length-1?`<button class="btn btn-primary" onclick="nextQ('${pid||'practice'}')">Next →</button>`:
        `<button class="btn btn-green" onclick="showResults('${pid||'practice'}')">📊 Results</button>`}
    </div>`:''}`;
}
window.selAns=function(j,pid){
  if(!S.quiz||S.quiz.ans[S.quiz.i]!==-1)return;
  if(S.timer){clearInterval(S.timer);S.timer=null;}
  const q=S.quiz.qs[S.quiz.i];
  S.quiz.ans[S.quiz.i]=j;
  if(j===q.c)S.quiz.score++;else recordWrong(q.id);
  renderQ(pid||'practice');
};
window.nextQ=function(pid){
  S.quiz.i++;
  if(S.quiz.cfg.timed)startQTimer(pid||'practice',S.quiz.cfg.secPerQ||45);
  renderQ(pid||'practice');
};
window.quitQuiz=function(pid){
  if(S.quiz&&S.quiz.score>0)saveQProg();S.quiz=null;
  ({practice:rPractice,mock:rMock}[pid]||rPractice)();
};
function saveQProg(){
  if(!S.quiz)return;
  const{qs,score,start,cfg}=S.quiz;
  const total=qs.length,acc=Math.round(score/total*100),mins=Math.round((Date.now()-start)/60000);
  S.prog.push({sub:cfg.sub||'mixed',topic:cfg.topic||'',score,total,acc,mins,ts:Date.now(),mode:cfg.mode||'practice'});
  save();upStreak();
}
function showResults(pid){
  saveQProg();
  const{qs,ans,score,start,cfg}=S.quiz;
  const total=qs.length,acc=Math.round(score/total*100),mins=Math.round((Date.now()-start)/60000);
  const wrongOnes=qs.filter((_,i)=>ans[i]!==qs[i].c);
  document.getElementById('p-'+(pid||'practice')).innerHTML=`
    <div class="card" style="text-align:center;padding:40px;margin-bottom:16px">
      <div style="font-size:56px;margin-bottom:12px">${acc>=80?'🏆':acc>=60?'🎉':acc>=40?'👍':'📚'}</div>
      <h2 style="font-size:28px;font-weight:800;margin-bottom:4px">${score} / ${total}</h2>
      <p style="font-size:40px;font-weight:800;color:${clr(acc)};margin-bottom:8px">${acc}%</p>
      <p style="color:#64748b;font-size:13px">Completed in ${mins} min · ${fTopic(cfg.mode||'practice')}</p>
      <div style="margin-top:14px;padding:12px 20px;background:${clrBg(acc)};border-radius:10px;font-size:14px;font-weight:600;color:${clr(acc)};display:inline-block">
        ${acc>=80?'Outstanding! Exam-ready on this topic!':acc>=60?'Good! A bit more practice needed.':acc>=40?'Keep going! Review explanations carefully.':'Focus on fundamentals first — open Study Hub.'}
      </div>
    </div>
    <div class="card" style="margin-bottom:14px">
      <h3 style="font-weight:700;margin-bottom:14px">Complete Review</h3>
      ${qs.map((q,i)=>`
        <div style="padding:12px 0;border-bottom:1px solid #f1f5f9">
          <div style="display:flex;gap:8px;margin-bottom:6px"><span style="font-size:18px;flex-shrink:0">${ans[i]===q.c?'✅':'❌'}</span>
            <p style="font-size:13px;font-weight:600;flex:1;line-height:1.5">${q.q}</p></div>
          <p style="font-size:12px;color:#059669;margin-left:26px">✓ ${q.o[q.c]}</p>
          ${ans[i]!==q.c?`<p style="font-size:12px;color:#dc2626;margin-left:26px">✗ You: ${ans[i]===-1?'Not answered':q.o[ans[i]]}</p>`:''}
          <p style="font-size:12px;color:#64748b;margin-left:26px;margin-top:4px;line-height:1.5">${q.e}</p>
        </div>`).join('')}
    </div>
    ${wrongOnes.length?`<div class="card" style="background:#fff7ed;border:1.5px solid #fed7aa;margin-bottom:14px">
      <p style="font-weight:700;color:#9a3412">⚠️ ${wrongOnes.length} questions added to Revision Queue</p>
    </div>`:''}
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="S.quiz=null;${pid==='practice'?'rPractice':'rMock'}()">New Session</button>
      <button class="btn btn-secondary" onclick="go('progress')">📈 Progress</button>
      ${wrongOnes.length?`<button class="btn btn-orange" onclick="startRevision()">🔄 Revise Wrong (${wrongOnes.length})</button>`:''}
    </div>`;
  S.quiz=null;
}
function startQTimer(pid,sec){
  let left=sec;
  if(S.timer)clearInterval(S.timer);
  S.timer=setInterval(()=>{
    left--;const el=document.getElementById('qtimer');
    if(el){el.textContent=left+'s';el.className=left<=10?'timer-danger':left<=20?'timer-warn':'';}
    if(left<=0){clearInterval(S.timer);S.timer=null;if(S.quiz&&S.quiz.ans[S.quiz.i]===-1){window.selAns(-99,pid);}}
  },1000);
}

// ═══ DASHBOARD ═══
function rDash(){
  const st=getStats();const dl=daysLeft();const done=todayDone();const pct=Math.min(100,Math.round(done/S.dailyTarget*100));
  const weak=getWeakAreas().slice(0,3);const wrongCount=Object.keys(S.wrong).length;const subs=Object.keys(SM);
  document.getElementById('p-dashboard').innerHTML=`
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-bottom:20px">
      <div><h1 style="font-size:24px;font-weight:800">Good ${new Date().getHours()<12?'Morning':'Afternoon'} 👋</h1>
        <p style="color:#64748b;font-size:13px">BankPrep Pro · SBI PO & RBI Grade B Complete Platform</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="go('practice')">✏️ Practice</button>
        <button class="btn btn-secondary" onclick="go('mock')">📝 Mock Test</button>
        ${wrongCount>0?`<button class="btn btn-orange btn-sm" onclick="startRevision()">🔄 Revise (${wrongCount})</button>`:''}
      </div>
    </div>
    <!-- Stats row -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:20px">
      <div class="card" style="text-align:center;padding:18px"><div style="font-size:30px;font-weight:800;color:#ea580c">${S.str.c}</div><div style="font-size:12px;color:#f97316;font-weight:600">Day Streak 🔥</div><div style="font-size:11px;color:#94a3b8">Best: ${S.str.b}</div></div>
      <div class="card" style="text-align:center;padding:18px"><div style="font-size:30px;font-weight:800;color:#2563eb">${st.overall}%</div><div style="font-size:12px;color:#3b82f6;font-weight:600">Overall Accuracy</div><div style="font-size:11px;color:#94a3b8">${st.questions} questions</div></div>
      <div class="card" style="text-align:center;padding:18px"><div style="font-size:30px;font-weight:800;color:#7c3aed">${st.sessions}</div><div style="font-size:12px;color:#8b5cf6;font-weight:600">Sessions</div><div style="font-size:11px;color:#94a3b8">${st.correct} correct</div></div>
      ${dl!==null?`<div class="card" style="text-align:center;padding:18px;background:${dl<30?'#fef2f2':'#f0fdf4'}">
        <div style="font-size:30px;font-weight:800;color:${dl<30?'#dc2626':'#059669'}">${dl}</div>
        <div style="font-size:12px;font-weight:600;color:${dl<30?'#dc2626':'#059669'}">Days Left</div>
        <div style="font-size:11px;color:#94a3b8">${new Date(S.examDate).toLocaleDateString('en-IN',{month:'short',day:'numeric'})}</div>
      </div>`:`<div class="card" style="text-align:center;padding:18px;cursor:pointer" onclick="go('planner')">
        <div style="font-size:24px">📅</div><div style="font-size:12px;color:#64748b;font-weight:600">Set Exam Date</div></div>`}
    </div>
    <!-- Daily target -->
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px">
        <div><b style="font-size:14px">Today's Target</b> <span style="font-size:13px;color:#64748b">${done}/${S.dailyTarget} questions</span></div>
        <span style="font-weight:700;color:${pct>=100?'#059669':'#2563eb'}">${pct}%${pct>=100?' ✅':''}</span>
      </div>
      <div class="pbar"><div class="pfill" style="width:${pct}%;background:${pct>=100?'#059669':'#2563eb'}"></div></div>
    </div>
    <div class="grid2">
      <div class="card">
        <h3 style="font-weight:700;margin-bottom:12px;font-size:14px">📊 Subject Performance</h3>
        ${subs.map(s=>{const d=st.by[s];const acc=d&&d.t?Math.round(d.c/d.t*100):null;return`
          <div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #f8fafc">
            <span>${icon(s)}</span>
            <div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600">${fSub(s)}</div>
              ${acc!==null?`<div class="pbar" style="height:5px;margin-top:3px"><div class="pfill" style="width:${acc}%;background:${clr(acc)}"></div></div>`:
              `<div style="font-size:11px;color:#94a3b8">Not started</div>`}</div>
            ${acc!==null?`<span style="font-size:12px;font-weight:700;color:${clr(acc)};flex-shrink:0">${acc}%</span>`:''}
          </div>`;}).join('')}
      </div>
      <div>
        ${weak.length?`<div class="card" style="margin-bottom:10px">
          <h3 style="font-weight:700;margin-bottom:10px;font-size:14px">⚠️ Weak Areas</h3>
          ${weak.map(w=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f8fafc;font-size:13px">
            <span>${fSub(w.sub)} · ${fTopic(w.top)}</span>
            <div style="display:flex;gap:6px">
              <b style="color:${clr(w.acc)}">${w.acc}%</b>
              <button class="btn btn-xs btn-orange" onclick="drillTopic('${w.sub}','${w.top}')">Drill</button>
            </div>
          </div>`).join('')}
          <button class="btn btn-orange btn-sm" style="margin-top:10px;width:100%" onclick="startWeakDrill()">🎯 Full Weak Drill</button>
        </div>`:''}
        <div class="card">
          <h3 style="font-weight:700;margin-bottom:10px;font-size:14px">Recent Sessions</h3>
          ${[...S.prog].reverse().slice(0,5).map(r=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f8fafc;font-size:13px">
            <span><b>${fSub(r.sub)}</b>${r.topic?` <span style="color:#94a3b8">· ${fTopic(r.topic)}</span>`:''}</span>
            <b style="color:${clr(r.acc||0)}">${r.score}/${r.total}</b>
          </div>`).join('')||'<p style="color:#94a3b8;font-size:13px">Start practicing!</p>'}
        </div>
      </div>
    </div>
    <div class="card">
      <h3 style="font-weight:700;margin-bottom:12px;font-size:14px">Quick Actions</h3>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <button class="btn btn-primary btn-sm" onclick="go('practice')">✏️ Practice</button>
        <button class="btn btn-purple btn-sm" onclick="go('flashcards')">🃏 Flashcards</button>
        <button class="btn btn-secondary btn-sm" onclick="go('mock')">📝 Mock Test</button>
        <button class="btn btn-secondary btn-sm" onclick="go('news')">📰 Current Affairs</button>
        <button class="btn btn-secondary btn-sm" onclick="go('study')">📚 Study Hub</button>
        <button class="btn btn-secondary btn-sm" onclick="go('interview')">💼 Interview</button>
        <button class="btn btn-secondary btn-sm" onclick="go('descriptive')">✍️ Descriptive</button>
        ${wrongCount>0?`<button class="btn btn-orange btn-sm" onclick="startRevision()">🔄 Revision (${wrongCount})</button>`:''}
        ${S.bookmarks.length>0?`<button class="btn btn-secondary btn-sm" onclick="startBookmarkPractice()">🔖 Bookmarks (${S.bookmarks.length})</button>`:''}
      </div>
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;cursor:pointer" onclick="const b=document.getElementById('dq-body');if(b)b.classList.toggle('hidden');setTimeout(renderDailyQuiz,50)">
        <div><b style="font-size:14px">🧠 Daily Quiz</b> <span class="badge badge-${S.dailyQuiz.done?'green':'orange'}" style="margin-left:6px">${S.dailyQuiz.date===today()&&S.dailyQuiz.done?'Done ✅':'10 Qs · Today'}</span></div>
        <span style="font-size:12px;color:#64748b">Tap to expand ▼</span>
      </div>
      <div id="dq-body" class="hidden">
        <div id="daily-quiz-box"><p style="text-align:center;color:#94a3b8;font-size:13px;padding:12px">Loading...</p></div>
      </div>
    </div>`;
}

// ═══ STUDY HUB ═══
function rStudy(){
  const studyData=typeof STUDY!=='undefined'?STUDY:{};
  const subs=Object.keys(studyData);
  if(!subs.length){document.getElementById('p-study').innerHTML='<div class="card"><p>Study data loading...</p></div>';return;}
  let activeSub=subs[0];let openIdx=null;
  function getTopics(sub){
    const d=studyData[sub];
    if(Array.isArray(d))return d;
    if(typeof d==='object'&&d)return Object.entries(d).filter(([k])=>k!=='label').map(([,v])=>typeof v==='object'&&v?v:null).filter(Boolean);
    return[];
  }
  function render(){
    const topics=getTopics(activeSub);
    const subIcons={quantitative_aptitude:'🔢',reasoning:'🧩',english:'📖',banking_awareness:'🏦',economics:'📊',computer:'💻'};
    document.getElementById('p-study').innerHTML=`
      <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">📚 Study Hub</h1>
      <p style="color:#64748b;font-size:13px;margin-bottom:16px">Complete theory · Formulas · Examples · Tips — zero external resources needed</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px">
        ${subs.map(s=>`<button class="tab${s===activeSub?' active':''}" onclick="studySetSub('${s}')">${subIcons[s]||'📌'} ${fSub(s)}</button>`).join('')}
      </div>
      <div id="study-topics">
        ${topics.length?topics.map((tp,ti)=>`
          <div class="card" style="padding:0;overflow:hidden">
            <button class="acc-btn" onclick="studyToggle(${ti})">
              <span style="display:flex;align-items:center;gap:8px;font-size:15px">${S.studyProg[activeSub+'_'+ti]?'<span class="topic-done-badge">✓ Done</span>':'📌'} ${tp.title||fTopic(Object.keys(tp)[0])}</span>
              <span id="st-arr-${ti}" style="font-size:18px;color:#94a3b8;flex-shrink:0">▼</span>
            </button>
            <div class="acc-body" id="st-body-${ti}">
              <div style="padding:16px 20px;border-top:1px solid #f1f5f9">
                ${tp.intro?`<p style="font-size:13px;line-height:1.7;background:#f8fafc;padding:12px;border-radius:10px;margin-bottom:16px">${tp.intro}</p>`:''}
                ${tp.formulas&&tp.formulas.length?`<div style="margin-bottom:16px"><h4 style="font-size:13px;font-weight:700;color:#2563eb;margin-bottom:8px;text-transform:uppercase">📐 Formulas</h4>
                  <div style="background:#eff6ff;border-radius:12px;padding:14px">
                    ${tp.formulas.map(f=>`<div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid rgba(37,99,235,.1);font-size:13px"><span style="color:#2563eb;font-weight:700">▸</span><span>${f}</span></div>`).join('')}
                  </div></div>`:''}
                ${tp.examples&&tp.examples.length?`<div style="margin-bottom:16px"><h4 style="font-size:13px;font-weight:700;color:#059669;margin-bottom:8px;text-transform:uppercase">✏️ Solved Examples</h4>
                  ${tp.examples.map((ex,ei)=>`<div style="background:#f0fdf4;border-radius:12px;padding:14px;margin-bottom:10px">
                    <p style="font-weight:600;font-size:13px;margin-bottom:8px">Q${ei+1}. ${ex.q}</p>
                    ${ex.steps?ex.steps.map(st=>`<p style="font-size:12px;padding:2px 0 2px 12px;color:#374151">→ ${st}</p>`).join(''):''}
                    <p style="font-weight:700;font-size:13px;color:#059669;margin-top:6px">∴ ${ex.ans}</p>
                  </div>`).join('')}</div>`:''}
                ${tp.tips&&tp.tips.length?`<div style="margin-bottom:16px"><h4 style="font-size:13px;font-weight:700;color:#ea580c;margin-bottom:8px;text-transform:uppercase">💡 Tips & Tricks</h4>
                  <ul style="list-style:none;padding:0">${tp.tips.map(t=>`<li style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid #fff7ed;font-size:13px"><span style="color:#ea580c;font-weight:700">✓</span>${t}</li>`).join('')}</ul></div>`:''}
                ${tp.mistakes&&tp.mistakes.length?`<div><h4 style="font-size:13px;font-weight:700;color:#dc2626;margin-bottom:8px;text-transform:uppercase">⚠️ Common Mistakes</h4>
                  <ul style="list-style:none;padding:0">${tp.mistakes.map(m=>`<li style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid #fef2f2;font-size:13px"><span style="color:#dc2626;font-weight:700">✗</span>${m}</li>`).join('')}</ul></div>`:''}
                <div style="margin-top:14px">
                  <div style="margin-bottom:10px"><label style="font-size:11px;font-weight:700;color:#64748b;display:block;margin-bottom:4px">📝 MY NOTES</label><textarea class="input" style="min-height:70px;font-size:13px" placeholder="Add your notes for this topic..." id="tn-${ti}" onchange="saveTopicNote('${activeSub}',${ti},this.value)">${(S.topicNotes[activeSub+'_'+ti]||'')}</textarea></div>
                  <div style="display:flex;gap:8px;flex-wrap:wrap">
                    <button class="btn btn-primary btn-sm" onclick="go('practice');setTimeout(()=>{const s=document.getElementById('pSub');if(s)s.value='${activeSub}';updTopics();setTimeout(startStdPractice,200)},100)">Practice this topic →</button>
                    <button class="btn btn-secondary btn-sm" onclick="go('flashcards')">🃏 Related Flashcards</button>
                    <button class="btn btn-sm ${(S.studyProg[activeSub+'_'+ti])? 'btn-green':'btn-secondary'}" onclick="markStudyDone('${activeSub}',${ti})">${(S.studyProg[activeSub+'_'+ti])?'✅ Done':'Mark Done'}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`).join(''):'<div class="card"><p style="color:#94a3b8">No content for this subject yet.</p></div>'}
      </div>`;
  }
  window.studySetSub=function(sub){activeSub=sub;openIdx=null;render();};
  window.studyToggle=function(ti){
    const bd=document.getElementById('st-body-'+ti);const arr=document.getElementById('st-arr-'+ti);
    if(!bd)return;const open=bd.classList.contains('open');bd.classList.toggle('open',!open);if(arr)arr.textContent=open?'▼':'▲';
  };
  window.saveTopicNote=function(sub,ti,val){S.topicNotes[sub+'_'+ti]=val;save();};
  window.markStudyDone=function(sub,ti){S.studyProg[sub+'_'+ti]=!S.studyProg[sub+'_'+ti];save();render();};
  render();
}

// ═══ PRACTICE ═══
function rPractice(){
  if(S.quiz){renderQ('practice');return;}
  const subs=[...new Set((typeof Q!=='undefined'?Q:[]).map(q=>q.s))];
  const wrongCount=Object.keys(S.wrong).length;
  document.getElementById('p-practice').innerHTML=`
    <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">✏️ Practice</h1>
    <p style="color:#64748b;font-size:13px;margin-bottom:16px">Choose your mode — ${typeof Q!=='undefined'?Q.length:0}+ questions + unlimited AI</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
      <button class="tab active" id="tab-std" onclick="switchPTab('std')">📚 Standard</button>
      <button class="tab" id="tab-timed" onclick="switchPTab('timed')">⏱️ Timed Speed</button>
      <button class="tab" id="tab-ai" onclick="switchPTab('ai')">✨ AI Questions</button>
      <button class="tab" id="tab-weak" onclick="startWeakDrill()">⚠️ Weak Drill</button>
      ${wrongCount?`<button class="tab" id="tab-rev" onclick="startRevision()">🔄 Revision (${wrongCount})</button>`:''}
      ${S.bookmarks.length?`<button class="tab" onclick="startBookmarkPractice()">🔖 Bookmarks (${S.bookmarks.length})</button>`:''}
    </div>
    <div id="pm-std">
      <div class="card">
        <h3 style="font-weight:700;margin-bottom:14px">📚 Standard Practice</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:16px">
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">SUBJECT</label>
            <select class="input" id="pSub" onchange="updTopics()"><option value="">All Subjects</option>${subs.map(s=>`<option value="${s}">${fSub(s)}</option>`).join('')}</select></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">TOPIC</label>
            <select class="input" id="pTopic"><option value="">All Topics</option></select></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">DIFFICULTY</label>
            <select class="input" id="pDiff"><option value="">All</option><option>easy</option><option>medium</option><option>hard</option></select></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">COUNT</label>
            <select class="input" id="pCount"><option>10</option><option selected>20</option><option>30</option><option>50</option><option>100</option></select></div>
        </div>
        <button class="btn btn-primary" onclick="startStdPractice()">▶ Start Quiz</button>
      </div>
    </div>
    <div id="pm-timed" class="hidden">
      <div class="card">
        <h3 style="font-weight:700;margin-bottom:4px">⏱️ Timed Speed Practice</h3>
        <p style="font-size:13px;color:#64748b;margin-bottom:14px">SBI PO Prelims gives ~48 sec/question. Train your speed.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:16px">
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">SUBJECT</label>
            <select class="input" id="tSub"><option value="">All</option>${subs.map(s=>`<option value="${s}">${fSub(s)}</option>`).join('')}</select></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">QUESTIONS</label>
            <select class="input" id="tCount"><option>10</option><option selected>20</option><option>30</option></select></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">TIME/QUESTION</label>
            <select class="input" id="tSec"><option value="30">30 sec</option><option value="45" selected>45 sec</option><option value="60">60 sec</option><option value="90">90 sec</option></select></div>
        </div>
        <button class="btn btn-orange" onclick="startTimedPractice()">⏱️ Start Timed Quiz</button>
      </div>
    </div>
    <div id="pm-ai" class="hidden">
      <div class="card">
        <h3 style="font-weight:700;margin-bottom:4px">✨ AI-Generated Questions</h3>
        <p style="font-size:13px;color:#64748b;margin-bottom:14px">${hasAI()?'AI creates fresh unique questions every time — unlimited variety.':'<span style="color:#dc2626">Add Groq or Gemini key in Settings to use AI generation.</span>'}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:16px">
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">SUBJECT</label>
            <select class="input" id="aSub"><option value="banking_awareness">Banking</option><option value="quantitative_aptitude">Quant</option><option value="reasoning">Reasoning</option><option value="english">English</option><option value="economics">Economics</option></select></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">TOPIC</label>
            <input type="text" class="input" id="aTopic" placeholder="e.g. monetary policy" value="monetary policy"></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">DIFFICULTY</label>
            <select class="input" id="aDiff"><option>easy</option><option selected>medium</option><option>hard</option></select></div>
          <div><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">COUNT</label>
            <select class="input" id="aCount"><option>5</option><option selected>10</option><option>15</option><option>20</option></select></div>
        </div>
        <button class="btn btn-purple" id="aiBtn" onclick="startAIPractice()" ${!hasAI()?'disabled':''}>✨ Generate & Start</button>
      </div>
    </div>
    <div class="card" style="background:#f8fafc">
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        <span style="font-size:13px;color:#64748b;font-weight:600;margin-right:4px">Bank:</span>
        ${subs.map(s=>`<span class="badge badge-blue">${fSub(s)}: ${(typeof Q!=='undefined'?Q:[]).filter(q=>q.s===s).length}</span>`).join('')}
        <span class="badge badge-purple">+ Unlimited AI</span>
      </div>
    </div>`;
}
window.switchPTab=function(m){['std','timed','ai'].forEach(x=>{document.getElementById('pm-'+x)?.classList.toggle('hidden',x!==m);document.getElementById('tab-'+x)?.classList.toggle('active',x===m);});};
window.updTopics=function(){
  const sub=document.getElementById('pSub')?.value;
  const tops=[...new Set((typeof Q!=='undefined'?Q:[]).filter(q=>!sub||q.s===sub).map(q=>q.t))];
  const el=document.getElementById('pTopic');if(el)el.innerHTML='<option value="">All Topics</option>'+tops.map(t=>`<option value="${t}">${fTopic(t)}</option>`).join('');
};
function startStdPractice(){
  const sub=document.getElementById('pSub')?.value,top=document.getElementById('pTopic')?.value,
    diff=document.getElementById('pDiff')?.value,cnt=parseInt(document.getElementById('pCount')?.value||'20');
  let qs=(typeof Q!=='undefined'?Q:[]).filter(q=>(!sub||q.s===sub)&&(!top||q.t===top)&&(!diff||q.d===diff));
  if(!qs.length){alert('No questions match. Try different filters.');return;}
  startQuiz(shuffle(qs).slice(0,cnt),{sub:sub||'mixed',topic:top,mode:'practice',pageId:'practice'});
}
function startTimedPractice(){
  const sub=document.getElementById('tSub')?.value,cnt=parseInt(document.getElementById('tCount')?.value||'20'),sec=parseInt(document.getElementById('tSec')?.value||'45');
  let qs=(typeof Q!=='undefined'?Q:[]).filter(q=>!sub||q.s===sub);if(!qs.length){alert('No questions.');return;}
  startQuiz(shuffle(qs).slice(0,cnt),{sub:sub||'mixed',mode:'timed',timed:true,secPerQ:sec,pageId:'practice'});
  setTimeout(()=>startQTimer('practice',sec),200);
}
async function startAIPractice(){
  if(!hasAI()){go('settings');return;}
  const sub=document.getElementById('aSub')?.value||'banking_awareness',top=document.getElementById('aTopic')?.value||'general',
    diff=document.getElementById('aDiff')?.value||'medium',cnt=parseInt(document.getElementById('aCount')?.value||'10');
  const btn=document.getElementById('aiBtn');if(btn){btn.textContent='⏳ Generating...';btn.disabled=true;}
  try{
    const text=await callAI(`Generate ${cnt} unique MCQs for Indian banking exam (SBI PO / RBI Grade B). Subject: ${sub}. Topic: ${top}. Difficulty: ${diff}. Make them challenging and exam-pattern based. Return ONLY JSON array (no markdown): [{"q":"question","o":["A","B","C","D"],"c":0,"e":"explanation with key concept"}]`);
    const raw=parseJSON(text,true);
    const qs=raw.map((r,i)=>({id:'ai_'+Date.now()+'_'+i,s:sub,t:top.replace(/\s+/g,'_'),d:diff,q:r.q,o:r.o,c:r.c,e:r.e,x:[]}));
    startQuiz(qs,{sub,topic:top,mode:'ai-practice',pageId:'practice'});
  }catch(err){alert('AI failed: '+err.message);if(btn){btn.textContent='✨ Generate & Start';btn.disabled=false;}}
}
function startWeakDrill(){
  const weak=getWeakAreas();if(!weak.length){alert('No weak areas! All accuracy ≥60%. Great work!');return;}
  let qs=[];weak.slice(0,5).forEach(w=>{qs.push(...shuffle((typeof Q!=='undefined'?Q:[]).filter(q=>q.s===w.sub&&q.t===w.top)).slice(0,8));});
  if(!qs.length){alert('Not enough questions for weak areas.');return;}
  go('practice');setTimeout(()=>startQuiz(shuffle(qs).slice(0,40),{sub:'mixed',topic:'weak_areas',mode:'weak-drill',pageId:'practice'}),100);
}
window.drillTopic=function(sub,top){
  const qs=(typeof Q!=='undefined'?Q:[]).filter(q=>q.s===sub&&q.t===top);
  if(!qs.length){alert('No questions for this topic yet.');return;}
  go('practice');setTimeout(()=>startQuiz(shuffle(qs).slice(0,20),{sub,topic:top,mode:'weak-drill',pageId:'practice'}),100);
};
function startRevision(){
  const ids=Object.keys(S.wrong);if(!ids.length){alert('Revision queue empty! Great job!');return;}
  const qs=(typeof Q!=='undefined'?Q:[]).filter(q=>ids.includes(q.id));
  if(!qs.length){S.wrong={};save();alert('Queue cleared.');return;}
  go('practice');setTimeout(()=>startQuiz(shuffle(qs),{sub:'mixed',topic:'revision',mode:'revision',pageId:'practice'}),100);
}
function startBookmarkPractice(){
  const qs=(typeof Q!=='undefined'?Q:[]).filter(q=>S.bookmarks.includes(q.id));
  if(!qs.length){alert('No bookmarks. Click 🔲 while practicing to bookmark questions.');return;}
  go('practice');setTimeout(()=>startQuiz(shuffle(qs),{sub:'mixed',topic:'bookmarks',mode:'bookmarks',pageId:'practice'}),100);
}

// ═══ FLASHCARDS ═══
function rFlash(){
  const cards=typeof FC!=='undefined'?FC:[];
  const cats=[...new Set(cards.map(f=>f.cat))];
  let activeCat=cats[0];let idx=0;let flipped=false;
  function filtered(){
    if(activeCat==='__due__')return cards.filter(f=>{const p=S.fcProg[f.id];return !p||!p.due||p.due<=today();});
    return activeCat?cards.filter(f=>f.cat===activeCat):shuffle([...cards]);
  }
  function masteredInCat(){return filtered().filter(f=>(S.fcProg[f.id]||{}).mastered).length;}
  function render(){
    const fc=filtered();const card=fc[idx];const prog=S.fcProg[card?.id]||{};
    const totalMastered=Object.values(S.fcProg).filter(p=>p.mastered).length;
    document.getElementById('p-flashcards').innerHTML=`
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div><h1 style="font-size:22px;font-weight:800">🃏 Flashcards</h1>
          <p style="color:#64748b;font-size:13px">${totalMastered}/${cards.length} mastered</p></div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-secondary btn-sm" onclick="fcDue()">📅 Due (${cards.filter(f=>{const p=S.fcProg[f.id];return !p||!p.due||p.due<=today();}).length})</button>
          <button class="btn btn-secondary btn-sm" onclick="fcShuffle()">🔀 Shuffle</button>
          <button class="btn btn-secondary btn-sm" onclick="fcAll()">All</button>
        </div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:16px">
        ${cats.map(c=>`<button class="tab${c===activeCat?' active':''}" onclick="fcCat('${c.replace(/'/g,"\\'")}')">${c}</button>`).join('')}
      </div>
      ${card?`
      <div class="fc-scene" onclick="fcFlip()">
        <div class="fc-card${flipped?' flipped':''}">
          <div class="fc-front"><div style="font-size:11px;opacity:.7;margin-bottom:10px;text-transform:uppercase;letter-spacing:1px">${card.cat}</div>
            <div style="font-size:20px;font-weight:800;line-height:1.4">${card.front}</div>
            <div style="font-size:12px;opacity:.65;margin-top:14px">👆 Tap to flip</div></div>
          <div class="fc-back"><div style="font-size:11px;color:#94a3b8;margin-bottom:8px">ANSWER</div>
            <div style="font-size:14px;line-height:1.7;color:#1e293b">${card.back}</div></div>
        </div>
      </div>
      <div style="display:flex;gap:10px;justify-content:center;margin-bottom:16px">
        <button class="btn btn-secondary btn-sm" onclick="fcPrev()" ${idx===0?'disabled':''}>← Prev</button>
        <span style="display:flex;align-items:center;font-size:13px;font-weight:600;color:#64748b">${idx+1}/${fc.length}</span>
        <button class="btn btn-secondary btn-sm" onclick="fcNext()" ${idx===fc.length-1?'disabled':''}>Next →</button>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:16px">
        <button class="btn btn-red btn-sm" onclick="fcMark(false)">❌ Need Practice</button>
        <button class="btn btn-green btn-sm" onclick="fcMark(true)">✅ Got It!</button>
        ${prog.mastered?'<span class="badge badge-green">✓ Mastered</span>':''}
      </div>
      <div><div style="display:flex;justify-content:space-between;font-size:12px;color:#64748b;margin-bottom:4px">
        <span>${card.cat} progress</span><span>${masteredInCat()}/${fc.length} mastered</span></div>
        <div class="pbar"><div class="pfill" style="width:${fc.length?Math.round(masteredInCat()/fc.length*100):0}%;background:#059669"></div></div>
      </div>`:'<div class="card" style="text-align:center;padding:40px"><p style="color:#94a3b8">No cards in this category.</p></div>'}`;
  }
  window.fcFlip=function(){flipped=!flipped;const c=document.querySelector('.fc-card');if(c)c.classList.toggle('flipped',flipped);};
  window.fcNext=function(){const fc=filtered();if(idx<fc.length-1){idx++;flipped=false;render();}};
  window.fcPrev=function(){if(idx>0){idx--;flipped=false;render();}};
  window.fcMark=function(m){
    const fc=filtered();const card=fc[idx];if(!card)return;
    const p=S.fcProg[card.id]||{seen:0,mastered:false,ease:2.5,interval:1,due:today()};
    p.seen=(p.seen||0)+1;p.mastered=m;
    if(m){p.ease=Math.max(1.3,(p.ease||2.5)+0.1);p.interval=Math.round((p.interval||1)*(p.ease||2.5));}
    else{p.ease=Math.max(1.3,(p.ease||2.5)-0.2);p.interval=1;}
    const d=new Date();d.setDate(d.getDate()+p.interval);p.due=d.toISOString().slice(0,10);
    S.fcProg[card.id]=p;save();if(idx<fc.length-1){idx++;flipped=false;}render();
  };
  window.fcShuffle=function(){const fc=filtered().sort(()=>Math.random()-.5);idx=0;flipped=false;render();};
  window.fcAll=function(){activeCat=null;idx=0;flipped=false;render();};
  window.fcDue=function(){activeCat='__due__';idx=0;flipped=false;render();};
  window.fcCat=function(c){activeCat=c;idx=0;flipped=false;render();};
  render();
}

// ═══ MOCK TESTS ═══
const MOCKS={
  sbi_prelims:{name:'SBI PO Prelims',icon:'🏦',time:60,total:100,subs:{quantitative_aptitude:35,reasoning:35,english:30},ex:'sbi_prelims',desc:'100Q · 60 min · Quant+Reasoning+English'},
  sbi_mains:{name:'SBI PO Mains',icon:'📋',time:180,total:155,subs:{quantitative_aptitude:35,reasoning:45,english:35,banking_awareness:40},ex:'sbi_mains',desc:'155Q · 180 min · All sections'},
  rbi_phase1:{name:'RBI Grade B Phase 1',icon:'🏛️',time:120,total:100,subs:{quantitative_aptitude:30,reasoning:30,english:20,banking_awareness:20},ex:'rbi_phase1',desc:'100Q · 120 min'},
  rbi_phase2:{name:'RBI Grade B Phase 2',icon:'📈',time:120,total:100,subs:{economics:40,banking_awareness:30,english:30},ex:'rbi_phase2',desc:'100Q · 120 min · Economics focus'},
  sec_quant:{name:'Quant Sectional',icon:'🔢',time:20,total:35,subs:{quantitative_aptitude:35},ex:'sbi_prelims',desc:'35Q · 20 min · Speed test'},
  sec_reasoning:{name:'Reasoning Sectional',icon:'🧩',time:20,total:35,subs:{reasoning:35},ex:'sbi_prelims',desc:'35Q · 20 min · Speed test'},
  sec_english:{name:'English Sectional',icon:'📖',time:20,total:30,subs:{english:30},ex:'sbi_prelims',desc:'30Q · 20 min · Speed test'},
  sec_banking:{name:'Banking Awareness Sectional',icon:'🏦',time:15,total:25,subs:{banking_awareness:25},ex:'sbi_mains',desc:'25Q · 15 min · Speed test'}
};
function getMockFreshStats(){
  const all=typeof Q!=='undefined'?Q:[];
  const seenSet=new Set(S.seenMock);
  const fresh=all.filter(q=>!seenSet.has(q.id)&&!q.id.startsWith('aim_')).length;
  const total=all.filter(q=>!q.id.startsWith('aim_')).length;
  return{fresh,total,seen:total-fresh,pct:total?Math.round((total-fresh)/total*100):0};
}
window.resetMockPool=function(){
  if(confirm('Reset question pool? All questions will be treated as fresh again.')){
    S.seenMock=[];save();rMock();
  }
};
function rMock(){
  if(S.mockActive){renderMT();return;}
  const fs=getMockFreshStats();
  const poolBar=fs.total?`<div style="margin-bottom:20px"><div class="card" style="background:${fs.fresh>50?'#f0fdf4':fs.fresh>0?'#fff7ed':'#fef2f2'};border:1.5px solid ${fs.fresh>50?'#bbf7d0':fs.fresh>0?'#fed7aa':'#fecaca'}">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-weight:700;font-size:14px">🔄 Question Pool Rotation</div>
        <div style="font-size:12px;color:#64748b;margin-top:2px">${fs.fresh} fresh · ${fs.seen} seen · ${fs.total} total · ${100-fs.pct}% remaining</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:120px"><div class="pbar" style="height:8px"><div class="pfill" style="width:${100-fs.pct}%;background:${fs.fresh>50?'#059669':fs.fresh>0?'#d97706':'#dc2626'}"></div></div></div>
        ${fs.fresh===0?`<button class="btn btn-sm btn-secondary" onclick="resetMockPool()">↺ Reset Pool</button>`:`<button class="btn btn-xs btn-secondary" onclick="resetMockPool()">↺ Reset</button>`}
      </div>
    </div>
    ${fs.fresh===0?`<p style="font-size:12px;color:#dc2626;margin-top:6px;font-weight:600">All questions seen! Click Reset to cycle again, or use ✨ AI mode for unlimited fresh questions.</p>`:fs.fresh<100?`<p style="font-size:12px;color:#d97706;margin-top:4px">Running low on fresh questions — AI mode guarantees unique questions every time.</p>`:''}
  </div></div>`:'';
  document.getElementById('p-mock').innerHTML=`
    <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">📝 Mock Tests</h1>
    <p style="color:#64748b;font-size:13px;margin-bottom:16px">${hasAI()?'✨ AI mode = unique questions every attempt · Static mode = smart rotation (fresh first)':'Smart rotation active — unseen questions load first'}</p>
    ${poolBar}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:20px">
      ${Object.entries(MOCKS).map(([key,m])=>{
        const hist=S.prog.filter(p=>p.sub===key);const last=hist.length?hist[hist.length-1].acc:null;
        const attempts=hist.length;
        return`<div class="card">
          <div style="font-size:36px;margin-bottom:8px">${m.icon}</div>
          <h3 style="font-weight:700;font-size:16px;margin-bottom:6px">${m.name}</h3>
          <p style="font-size:12px;color:#64748b;margin-bottom:12px">${m.desc}</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
            <span class="badge badge-blue">${m.total}Q</span><span class="badge badge-orange">${m.time}min</span>
            ${last!==null?`<span class="badge" style="background:${clrBg(last)};color:${clr(last)}">Last: ${last}%</span>`:''}
            ${attempts>0?`<span class="badge badge-gray">${attempts} attempt${attempts>1?'s':''}</span>`:''}
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-primary" style="flex:1" onclick="startMock('${key}',false)">▶ Start${fs.fresh>0?' (fresh)':' (rotation)'}</button>
            ${hasAI()?`<button class="btn btn-purple btn-sm" onclick="startMock('${key}',true)" title="AI generates completely unique questions every attempt">✨ AI</button>`:''}
          </div>
        </div>`;}).join('')}
    </div>
    <div class="card" style="background:#eff6ff;border:1.5px solid #bfdbfe">
      <h3 style="font-weight:700;margin-bottom:12px;font-size:14px">📌 Exam Strategy</h3>
      <div class="grid2">
        ${[['Attempt easy first','Save hard questions for last round'],['Manage time strictly','Set a per-section time limit'],['SBI Prelims cutoff','Aim for 70%+ in each section'],['Negative marking','0.25 marks deducted per wrong answer'],['RBI Grade B: Economics','~40% of Phase 2 — prepare thoroughly'],['Skip & revisit','Mark uncertain questions and return']].map(([h,d])=>`<div style="background:#fff;border-radius:8px;padding:10px"><b style="font-size:13px">${h}</b><br><span style="font-size:12px;color:#64748b">${d}</span></div>`).join('')}
      </div>
    </div>`;
}
async function startMock(key,aiMode){
  const cfg=MOCKS[key];let qs=[];
  if(aiMode&&hasAI()){
    document.getElementById('p-mock').innerHTML=`<div class="card" style="text-align:center;padding:48px"><div style="font-size:48px;margin-bottom:16px">✨</div><h2 style="font-weight:700">Generating AI Mock...</h2><p style="color:#64748b">Creating unique questions for ${cfg.name}</p></div>`;
    try{
      const allQs=await Promise.all(Object.entries(cfg.subs).map(async([sub,count])=>{
        const text=await callAI(`Generate ${Math.min(count,25)} MCQs for ${cfg.name} exam, subject: ${sub}. Mix easy/medium/hard. Return ONLY JSON: [{"q":"question","o":["A","B","C","D"],"c":0,"e":"explanation","t":"topic","d":"medium"}]`);
        const raw=parseJSON(text,true);
        return raw.map((r,i)=>({id:'aim_'+sub+'_'+Date.now()+'_'+i,s:sub,t:r.t||sub,d:r.d||'medium',q:r.q,o:r.o,c:r.c,e:r.e,x:[cfg.ex]}));
      }));
      qs=shuffle(allQs.flat()).slice(0,cfg.total);
    }catch(err){document.getElementById('p-mock').innerHTML=`<div class="card" style="background:#fef2f2"><p style="color:#dc2626;font-weight:700">AI failed: ${err.message}</p><button class="btn btn-primary" style="margin-top:12px" onclick="startMock('${key}',false)">Use Static Questions</button><button class="btn btn-secondary" style="margin-top:12px;margin-left:8px" onclick="rMock()">← Back</button></div>`;return;}
  }else{
    const seenSet=new Set(S.seenMock);
    Object.entries(cfg.subs).forEach(([sub,count])=>{
      const allSub=(typeof Q!=='undefined'?Q:[]).filter(q=>q.s===sub);
      // Primary pool: tagged for this exam + unseen first
      const taggedUnseen=shuffle(allSub.filter(q=>(q.x||[]).includes(cfg.ex)&&!seenSet.has(q.id)));
      const taggedSeen=shuffle(allSub.filter(q=>(q.x||[]).includes(cfg.ex)&&seenSet.has(q.id)));
      // Fallback pool: any question for this subject (unseen first)
      const anyUnseen=shuffle(allSub.filter(q=>!(q.x||[]).includes(cfg.ex)&&!seenSet.has(q.id)));
      const anySeen=shuffle(allSub.filter(q=>!(q.x||[]).includes(cfg.ex)&&seenSet.has(q.id)));
      // Pick: unseen-tagged → seen-tagged → unseen-any → seen-any
      const ordered=[...taggedUnseen,...taggedSeen,...anyUnseen,...anySeen];
      qs.push(...ordered.slice(0,count));
    });
    qs=shuffle(qs).slice(0,cfg.total);
  }
  if(!qs.length){alert('Not enough questions. Try AI mode.');return;}
  S.mockActive={qs,ans:new Array(qs.length).fill(-1),flagged:new Array(qs.length).fill(false),i:0,secsLeft:cfg.time*60,cfg,key,start:Date.now()};
  S.timer=setInterval(()=>{
    if(!S.mockActive)return;S.mockActive.secsLeft--;
    const el=document.getElementById('mtimer');
    if(el){const m=Math.floor(S.mockActive.secsLeft/60),s=S.mockActive.secsLeft%60;el.textContent=`${m}:${String(s).padStart(2,'0')}`;el.className=S.mockActive.secsLeft<300?S.mockActive.secsLeft<60?'timer-danger':'timer-warn':'';}
    if(S.mockActive.secsLeft<=0)submitMock();
  },1000);
  renderMT();
}
function renderMT(){
  const{qs,ans,flagged,i,secsLeft,cfg}=S.mockActive;
  const m=Math.floor(secsLeft/60),s=secsLeft%60;
  const answered=ans.filter(a=>a!==-1).length;const q=qs[i];
  const subSecs=[...new Set(qs.map(q=>q.s))];
  document.getElementById('p-mock').innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:12px 16px;margin-bottom:14px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;box-shadow:0 1px 3px rgba(0,0,0,.08)">
      <div><b style="font-size:14px">${cfg.name}</b><span style="font-size:12px;color:#64748b;margin-left:10px">${answered}/${qs.length} answered · ${flagged.filter(Boolean).length} flagged</span></div>
      <div style="display:flex;gap:12px;align-items:center">
        <span style="font-size:20px;font-weight:800;min-width:60px;text-align:center" id="mtimer">${m}:${String(s).padStart(2,'0')}</span>
        <button class="btn btn-red btn-sm" onclick="if(confirm('Submit test?'))submitMock()">Submit</button>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:190px 1fr;gap:14px;align-items:start">
      <div style="background:#fff;border-radius:14px;padding:12px;box-shadow:0 1px 3px rgba(0,0,0,.07);position:sticky;top:10px">
        ${subSecs.map(sub=>{
          const idxs=qs.map((q,j)=>q.s===sub?j:-1).filter(j=>j!==-1);
          return`<div style="margin-bottom:10px"><div style="font-size:10px;font-weight:700;color:#94a3b8;margin-bottom:6px;text-transform:uppercase">${fSub(sub)}</div>
            <div style="display:flex;flex-wrap:wrap;gap:3px">${idxs.map(j=>`<button onclick="S.mockActive.i=${j};renderMT()" style="width:28px;height:28px;border-radius:5px;border:none;cursor:pointer;font-size:11px;font-weight:600;background:${j===i?'#2563eb':flagged[j]?'#fef3c7':ans[j]!==-1?'#dbeafe':'#f1f5f9'};color:${j===i?'#fff':ans[j]!==-1?'#1d4ed8':'#64748b'}">${j+1}</button>`).join('')}</div>
          </div>`;}).join('')}
      </div>
      <div class="card">
        <div style="display:flex;justify-content:space-between;margin-bottom:12px">
          <p style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase">${fSub(q.s)} · Q${i+1}</p>
          <button onclick="S.mockActive.flagged[${i}]=!S.mockActive.flagged[${i}];renderMT()" style="background:none;border:none;cursor:pointer;font-size:18px">${flagged[i]?'🚩':'⚑'}</button>
        </div>
        <p style="font-weight:600;font-size:15px;line-height:1.7;margin-bottom:18px">${q.q}</p>
        ${q.o.map((opt,j)=>`<button class="opt${ans[i]===j?' sel':''}" onclick="S.mockActive.ans[${i}]=${j};renderMT()">${String.fromCharCode(65+j)}. ${opt}</button>`).join('')}
        <div style="display:flex;justify-content:space-between;margin-top:12px">
          ${i>0?`<button class="btn btn-secondary btn-sm" onclick="S.mockActive.i--;renderMT()">← Prev</button>`:'<span></span>'}
          ${i<qs.length-1?`<button class="btn btn-primary btn-sm" onclick="S.mockActive.i++;renderMT()">Next →</button>`:`<button class="btn btn-green btn-sm" onclick="if(confirm('Submit?'))submitMock()">Submit ✓</button>`}
        </div>
      </div>
    </div>`;
}
function submitMock(){
  if(S.timer){clearInterval(S.timer);S.timer=null;}
  const{qs,ans,cfg,key,start}=S.mockActive;
  let score=0;const byS={};
  qs.forEach((q,i)=>{if(!byS[q.s])byS[q.s]={c:0,t:0};byS[q.s].t++;if(ans[i]===q.c){score++;byS[q.s].c++;}else recordWrong(q.id);});
  // Mark all questions as seen for smart rotation
  const seenSet=new Set(S.seenMock);
  qs.forEach(q=>{if(q.id&&!q.id.startsWith('aim_'))seenSet.add(q.id);});
  S.seenMock=[...seenSet];
  const total=qs.length,acc=Math.round(score/total*100),mins=Math.round((Date.now()-start)/60000);
  S.prog.push({sub:key,topic:'',score,total,acc,mins,ts:Date.now(),mode:'mock'});
  save();upStreak();
  const fs=getMockFreshStats();
  S.mockActive=null;
  document.getElementById('p-mock').innerHTML=`
    <div class="card" style="text-align:center;padding:40px;margin-bottom:16px">
      <div style="font-size:56px;margin-bottom:12px">${acc>=70?'🏆':acc>=50?'🎉':'📚'}</div>
      <h2 style="font-size:32px;font-weight:800">${score}/${total}</h2>
      <p style="font-size:44px;font-weight:800;color:${clr(acc)};margin-bottom:8px">${acc}%</p>
      <p style="color:#64748b;font-size:13px">${cfg.name} · ${mins} minutes</p>
      <div style="margin-top:12px;padding:8px 16px;background:#f1f5f9;border-radius:10px;display:inline-block;font-size:12px;color:#64748b">
        🔄 ${fs.fresh} fresh questions remaining in pool
        ${fs.fresh===0?'· <button class="btn btn-xs btn-secondary" onclick="resetMockPool()">Reset Pool</button>':''}
      </div>
    </div>
    <div class="card" style="margin-bottom:14px"><h3 style="font-weight:700;margin-bottom:16px">Section Breakdown</h3>
      ${Object.entries(byS).map(([sub,d])=>{const a=Math.round(d.c/d.t*100);return`<div style="margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px"><b style="font-size:13px">${fSub(sub)}</b><span style="font-size:13px;font-weight:700;color:${clr(a)}">${d.c}/${d.t} · ${a}%</span></div>
        <div class="pbar"><div class="pfill" style="width:${a}%;background:${clr(a)}"></div></div>
      </div>`;}).join('')}
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="rMock()">Take Another</button>
      <button class="btn btn-orange" onclick="startRevision()">🔄 Revise Wrong</button>
      <button class="btn btn-secondary" onclick="go('progress')">📈 Progress</button>
    </div>`;
}

// ═══ CURRENT AFFAIRS ═══
function rNews(){
  const t=today();const cached=S.news[t];
  document.getElementById('p-news').innerHTML=`
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div><h1 style="font-size:22px;font-weight:800">📰 Current Affairs</h1>
        <p style="color:#64748b;font-size:13px">${S.nkey?'📡 Live Indian news + AI exam formatting':'🤖 AI-generated · <a href="#" onclick="go(\'settings\')" style="color:#2563eb">Add GNews key for live news</a>'}</p></div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-secondary btn-sm" id="rfBtn" onclick="fetchNews()">🔄 Refresh</button>
      </div>
    </div>
    ${!hasAI()?`<div class="card" style="background:#fef2f2;border:1.5px solid #fecaca"><p style="color:#dc2626;font-weight:600">⚠️ API key needed.</p><p style="font-size:13px;color:#64748b;margin-top:4px">Go to <a href="#" onclick="go('settings')" style="color:#2563eb">Settings</a> → add free Groq key.</p></div>`:''}
    <div id="nc">${cached?renderNewsHTML(cached):`<div class="card" style="text-align:center;padding:48px"><div style="font-size:48px;margin-bottom:16px">📰</div><p style="color:#64748b;font-size:15px;margin-bottom:16px">No digest for today yet.</p><button class="btn btn-primary" onclick="fetchNews()">Fetch Today's Digest</button></div>`}`;
}
function renderNewsHTML(n){
  return`<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
    ${n.source==='live'?'<span class="badge badge-green">📡 LIVE NEWS</span>':'<span class="badge badge-gray">🤖 AI GENERATED</span>'}
    <span style="font-size:12px;color:#64748b;display:flex;align-items:center">${new Date(n.date||today()).toLocaleDateString('en-IN',{weekday:'long',month:'long',day:'numeric'})}</span>
  </div>
  <div class="card"><h3 style="font-weight:700;margin-bottom:14px">🔥 Top Stories</h3>${(n.headline_topics||[]).map(t=>`<div style="padding:12px 0;border-bottom:1px solid #f1f5f9"><p style="font-weight:700;font-size:14px;margin-bottom:6px">${t.title}</p><p style="font-size:13px;color:#64748b;line-height:1.7">${t.summary}</p><div style="margin-top:6px">${(t.tags||[]).slice(0,3).map(tg=>`<span class="badge badge-blue" style="margin-right:4px">${tg}</span>`).join('')}</div></div>`).join('')}</div>
  <div class="card"><h3 style="font-weight:700;margin-bottom:14px">🏦 Banking Updates</h3><ul style="list-style:none">${(n.banking_updates||[]).map((u,i)=>`<li style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:13px"><span style="width:22px;height:22px;background:#dbeafe;color:#1d4ed8;border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">${i+1}</span>${u.item}</li>`).join('')}</ul></div>
  <div class="card"><h3 style="font-weight:700;margin-bottom:14px">📊 Economic Indicators</h3><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px">${(n.economy_indicators||[]).map(e=>`<div style="background:#eff6ff;border-radius:12px;padding:12px"><div style="font-size:11px;font-weight:700;color:#1d4ed8">${e.indicator}</div><div style="font-size:20px;font-weight:800;color:#1e40af">${e.value||'—'}</div>${e.note?`<div style="font-size:11px;color:#3b82f6">${e.note}</div>`:''}</div>`).join('')}</div></div>
  ${(n.quiz&&n.quiz.length)?`<div class="card" style="border:2px solid #fde68a;background:#fffbeb"><h3 style="font-weight:700;color:#92400e;margin-bottom:14px">🧠 News Quiz</h3>${n.quiz.map((qz,qi)=>`<div style="margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid #fef3c7"><p style="font-weight:600;font-size:14px;margin-bottom:8px">Q${qi+1}. ${qz.question}</p>${qz.options.map((op,j)=>`<div id="nqo-${qi}-${j}" onclick="revNQ(${qi},${j},${qz.correct})" style="cursor:pointer;border:1.5px solid #e2e8f0;border-radius:8px;padding:8px 12px;margin-bottom:6px;font-size:13px;background:#fff">${String.fromCharCode(65+j)}. ${op}</div>`).join('')}<div id="nqe-${qi}" style="display:none;background:#f0fdf4;border-radius:8px;padding:10px;font-size:12px;color:#166534;margin-top:6px">${qz.explanation}</div></div>`).join('')}</div>`:''}
  <div class="card" style="background:#0f172a;color:#fff"><h3 style="font-weight:700;color:#fff;margin-bottom:14px">⚡ One-Liners</h3><ul style="list-style:none">${(n.one_liners||[]).map(l=>`<li style="display:flex;gap:8px;padding:7px 0;font-size:13px;border-bottom:1px solid rgba(255,255,255,.08);color:#e2e8f0"><span style="color:#fbbf24;font-weight:700;flex-shrink:0">→</span>${l}</li>`).join('')}</ul></div>`;
}
window.revNQ=function(qi,sel,correct){for(let j=0;j<4;j++){const el=document.getElementById(`nqo-${qi}-${j}`);if(!el)continue;el.onclick=null;el.style.cursor='default';if(j===correct)el.style.cssText+=';border-color:#059669!important;background:#d1fae5!important;font-weight:600';else if(j===sel&&sel!==correct)el.style.cssText+=';border-color:#dc2626!important;background:#fee2e2!important';}const e=document.getElementById(`nqe-${qi}`);if(e)e.style.display='block';};
async function fetchNews(){
  if(!hasAI()){go('settings');return;}
  const btn=document.getElementById('rfBtn');const nc=document.getElementById('nc');
  if(btn){btn.textContent='⏳';btn.disabled=true;}
  // Try server news endpoint first (online mode — no user key needed)
  if(IS_ONLINE){
    try{
      if(nc)nc.innerHTML='<div class="card" style="text-align:center;padding:32px"><div style="font-size:28px">📰</div><p style="margin-top:8px;font-weight:600;color:#64748b">Fetching today\'s digest...</p></div>';
      const r=await fetch('/api/news');
      if(r.ok){
        const news=await r.json();const t=today();
        S.news[t]=news;save();
        const nc2=document.getElementById('nc');if(nc2)nc2.innerHTML=renderNewsHTML(news);
        if(btn){btn.textContent='🔄 Refresh';btn.disabled=false;}return;
      }
    }catch(e){}
  }
  const t=today();let realHeadlines='';let src='ai';
  if(S.nkey){if(nc)nc.innerHTML='<div class="card" style="text-align:center;padding:32px"><div style="font-size:28px">📡</div><p style="margin-top:8px;font-weight:600;color:#64748b">Fetching live news...</p></div>';
    try{const rs=await Promise.all(['business','nation'].map(tp=>fetch(`https://gnews.io/api/v4/top-headlines?country=in&topic=${tp}&max=6&lang=en&apikey=${S.nkey}`).then(r=>r.json()).catch(()=>({articles:[]}))));const arts=rs.flatMap(r=>r.articles||[]).filter(a=>a.title&&a.description);if(arts.length){realHeadlines=arts.slice(0,12).map(a=>`• ${a.title} — ${a.description}`).join('\n');src='live';}}catch(e){}}
  if(nc)nc.innerHTML='<div class="card" style="text-align:center;padding:32px"><div style="font-size:28px">🤖</div><p style="margin-top:8px;font-weight:600;color:#64748b">'+(src==='live'?'AI formatting real headlines...':'AI generating exam digest...')+'</p></div>';
  const prompt=src==='live'?`Today ${t}. REAL Indian news:\n${realHeadlines}\n\nCreate banking exam digest from these REAL headlines. JSON only:\n{"date":"${t}","source":"live","headline_topics":[{"title":"...","summary":"exam relevance","tags":["tag"]}],"banking_updates":[{"item":"update"}],"economy_indicators":[{"indicator":"name","value":"val","note":"ctx"}],"one_liners":["fact"],"quiz":[{"question":"MCQ","options":["A","B","C","D"],"correct":0,"explanation":"why"}]}\n6+ topics, 5+ banking, 5+ indicators, 10+ one-liners, 5 quiz.`:`Today ${t}. Create current affairs digest for SBI PO/RBI Grade B. JSON only:\n{"date":"${t}","source":"ai","headline_topics":[{"title":"...","summary":"2-3 sentences exam-relevant","tags":["tag"]}],"banking_updates":[{"item":"RBI/banking update with facts"}],"economy_indicators":[{"indicator":"Repo Rate","value":"6.50%","note":"context"}],"one_liners":["exam fact"],"quiz":[{"question":"MCQ","options":["A","B","C","D"],"correct":0,"explanation":"why"}]}\n6 topics, 6 banking, 6 indicators, 12 one-liners, 5 quiz.`;
  try{const text=await callAI(prompt);const news=parseJSON(text,false);news.source=src;S.news[t]=news;const keys=Object.keys(S.news).sort().reverse();if(keys.length>7)keys.slice(7).forEach(k=>delete S.news[k]);save();if(nc)nc.innerHTML=renderNewsHTML(news);}
  catch(err){if(nc)nc.innerHTML=`<div class="card" style="background:#fef2f2;border:1.5px solid #fecaca"><p style="color:#dc2626;font-weight:700">❌ ${err.message}</p><p style="font-size:12px;color:#94a3b8;margin-top:8px">Quota error? Get free Groq key at console.groq.com</p><button class="btn btn-primary btn-sm" style="margin-top:10px" onclick="go('settings')">⚙️ Settings</button></div>`;}
  if(btn){btn.textContent='🔄 Refresh';btn.disabled=false;}
}

// ═══ INTERVIEW PREP ═══
function rInterview(){
  const data=typeof INTERVIEW_DATA!=='undefined'?INTERVIEW_DATA:{sections:[]};
  const sections=data.sections||[];
  let activeSection=0;
  function render(){
    const sec=sections[activeSection]||{title:'',questions:[]};
    document.getElementById('p-interview').innerHTML=`
      <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">💼 Interview & GD Prep</h1>
      <p style="color:#64748b;font-size:13px;margin-bottom:16px">Complete GD/PI preparation with model answers, frameworks, and tips</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">
        ${sections.map((s,i)=>`<button class="tab${i===activeSection?' active':''}" onclick="ivSec(${i})">${s.title}</button>`).join('')}
      </div>
      <div id="iv-content">
        ${sec.questions.map((item,qi)=>`
          <div class="card" style="padding:0;overflow:hidden;margin-bottom:10px">
            <button class="acc-btn" onclick="ivToggle(${qi})">
              <span style="text-align:left;line-height:1.4;font-size:14px">Q${qi+1}. ${item.q}</span>
              <span id="iv-arr-${qi}" style="font-size:18px;color:#94a3b8;flex-shrink:0">▼</span>
            </button>
            <div class="acc-body" id="iv-bd-${qi}">
              <div style="padding:16px 20px;border-top:1px solid #f1f5f9">
                ${item.framework?`<div style="background:#eff6ff;border-radius:10px;padding:10px;margin-bottom:12px;font-size:12px;color:#1d4ed8"><b>📋 Framework:</b> ${item.framework}</div>`:''}
                <div style="font-size:13px;line-height:1.9;color:#374151;white-space:pre-line;margin-bottom:12px">${item.answer}</div>
                ${item.dos&&item.dos.length?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
                  <div style="background:#f0fdf4;border-radius:10px;padding:12px"><b style="font-size:12px;color:#059669">✅ DO:</b>${item.dos.map(d=>`<div style="font-size:12px;margin-top:4px">• ${d}</div>`).join('')}</div>
                  ${item.donts&&item.donts.length?`<div style="background:#fef2f2;border-radius:10px;padding:12px"><b style="font-size:12px;color:#dc2626">❌ DON'T:</b>${item.donts.map(d=>`<div style="font-size:12px;margin-top:4px">• ${d}</div>`).join('')}</div>`:''}
                </div>`:''}
              </div>
            </div>
          </div>`).join('')||'<div class="card"><p style="color:#94a3b8">No questions in this section.</p></div>'}
      </div>`;
  }
  window.ivSec=function(i){activeSection=i;render();};
  window.ivToggle=function(qi){const bd=document.getElementById(`iv-bd-${qi}`);const arr=document.getElementById(`iv-arr-${qi}`);if(!bd)return;const open=bd.classList.contains('open');bd.classList.toggle('open',!open);if(arr)arr.textContent=open?'▼':'▲';};
  render();
}

// ═══ DESCRIPTIVE WRITING ═══
function rDesc(){
  const data=typeof DESC_DATA!=='undefined'?DESC_DATA:{essays:[],letters:[],precis:[]};
  let activeType='essays';
  function getContent(type){
    if(type==='essays'){
      const essays=data.essays||data.essay_topics||[];
      return essays.map((e,i)=>{
        const outline=Array.isArray(e.outline)?e.outline:(e.outline&&typeof e.outline==='object'?[e.outline.introduction,...(e.outline.body||[]),e.outline.conclusion].filter(Boolean):[]);
        const facts=e.key_facts||e.key_points||[];
        const intro=e.sample_intro||(e.sample_paragraphs&&e.sample_paragraphs.introduction)||'';
        const tips=Array.isArray(e.tips)?e.tips.join(' | '):e.tips||'';
        return`<div class="card" style="padding:0;overflow:hidden">
          <button class="acc-btn" onclick="dToggle(${i})">
            <div style="text-align:left"><div style="font-weight:700">${e.topic}</div><div style="font-size:12px;color:#64748b;margin-top:2px">${e.word_limit||'200-250 words (SBI PO) · 600-800 words (RBI Grade B)'}</div></div>
            <span id="d-arr-${i}" style="font-size:18px;color:#94a3b8;flex-shrink:0">▼</span>
          </button>
          <div class="acc-body" id="d-bd-${i}">
            <div style="padding:16px 20px;border-top:1px solid #f1f5f9">
              ${outline.length?`<div style="margin-bottom:14px"><h4 style="font-size:13px;font-weight:700;color:#2563eb;margin-bottom:8px">📋 OUTLINE</h4>${outline.map(o=>`<div style="display:flex;gap:8px;padding:5px 0;font-size:13px"><span style="color:#2563eb;font-weight:700;flex-shrink:0">→</span>${o}</div>`).join('')}</div>`:''}
              ${facts.length?`<div style="margin-bottom:14px"><h4 style="font-size:13px;font-weight:700;color:#059669;margin-bottom:8px">📌 KEY FACTS</h4><div style="background:#f0fdf4;border-radius:10px;padding:12px">${facts.map(f=>`<div style="font-size:13px;padding:3px 0">• ${f}</div>`).join('')}</div></div>`:''}
              ${intro?`<div style="margin-bottom:14px"><h4 style="font-size:13px;font-weight:700;color:#7c3aed;margin-bottom:8px">✍️ SAMPLE INTRO</h4><div style="background:#ede9fe;border-radius:10px;padding:14px;font-size:13px;line-height:1.8;font-style:italic">"${intro}"</div></div>`:''}
              ${tips?`<div style="background:#fff7ed;border-radius:10px;padding:12px;font-size:12px;color:#9a3412"><b>💡 Tips:</b> ${tips}</div>`:''}
            </div>
          </div>
        </div>`;}).join('');
    }
    if(type==='letters'){
      const letters=data.letters||data.letter_formats||[];
      return letters.map((l,i)=>`<div class="card" style="padding:0;overflow:hidden">
        <button class="acc-btn" onclick="dToggle('l'+${i})"><span>${l.type}</span><span id="d-arr-l${i}" style="font-size:18px;color:#94a3b8">▼</span></button>
        <div class="acc-body" id="d-bd-l${i}"><div style="padding:16px 20px;border-top:1px solid #f1f5f9">
          <div style="background:#f8fafc;border-radius:10px;padding:16px;font-family:monospace;font-size:12px;line-height:2;white-space:pre-wrap;margin-bottom:12px">${l.format}</div>
          <div style="font-size:12px;color:#64748b"><b>Tips:</b> ${l.tips||''}</div>
        </div></div>
      </div>`).join('');
    }
    if(type==='precis'){
      const tips=data.precis||data.precis_tips||[];
      return`<div class="card"><h3 style="font-weight:700;margin-bottom:14px">✂️ Précis Writing — Complete Guide</h3>${(Array.isArray(tips)?tips:[]).map((p,i)=>`<div style="display:flex;gap:8px;padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:13px"><span style="color:#2563eb;font-weight:700;flex-shrink:0;min-width:22px">${i+1}.</span>${typeof p==='string'?p:(p.rule||p)}</div>`).join('')}</div>`;
    }
    if(type==='tips') return`<div class="card"><h3 style="font-weight:700;margin-bottom:14px">💡 Descriptive Writing Strategy</h3>
      ${[{t:'SBI PO Mains',p:['30 minutes for 2 questions','Essay: 200-250 words in 15 min','Letter: 150-200 words in 12 min','3 min for proofreading','Topics: Banking, economy, social issues']},{t:'RBI Grade B Phase 2',p:['English Descriptive: 100 marks','Essay: 600-800 words (40-50 min)','Précis: Condense to 1/3rd original','Letter/Report: 15-20 min','Key areas: Monetary policy, NPA, digital banking']},{t:'Essay Writing Framework',p:['PEEL: Point → Evidence → Explain → Link','Start with statistic or quote','Include RBI data, Budget figures','Avoid first person — write formally','Balanced conclusion — no extreme views']},{t:'Common Mistakes',p:['Going off-topic (re-read question!)','Exceeding word limit strictly','No paragraph breaks','Opinion without evidence','Not proofreading for grammar']},].map(s=>`<div style="background:#f8fafc;border-radius:12px;padding:16px;margin-bottom:12px"><h4 style="font-weight:700;font-size:14px;margin-bottom:10px;color:#2563eb">${s.t}</h4>${s.p.map(p=>`<div style="display:flex;gap:8px;font-size:13px;padding:4px 0"><span style="color:#059669;font-weight:700">✓</span>${p}</div>`).join('')}</div>`).join('')}</div>`;
    if(type==='ai') return`<div class="card"><h3 style="font-weight:700;margin-bottom:4px">✨ AI Essay Feedback + Timer</h3><p style="font-size:13px;color:#64748b;margin-bottom:12px">Write your essay, get instant AI feedback on structure, content, and language.</p>
      <div class="essay-stats">
        <div class="essay-stat">⏱️ Timer: <b id="essay-time">25:00</b></div>
        <div class="essay-stat">📝 Words: <b id="essay-wc">0</b></div>
        <div class="essay-stat">🎯 Target: <b id="essay-tgt">200–250</b></div>
      </div>
      <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
        <select class="input" id="essay-mode" style="width:auto" onchange="setEssayMode()"><option value="sbi">SBI PO (200-250 words · 15 min)</option><option value="rbi">RBI Grade B (600-800 words · 45 min)</option><option value="letter">Letter (150-200 words · 12 min)</option></select>
        <button class="btn btn-primary btn-sm" onclick="startEssayTimer()">▶ Start Timer</button>
        <button class="btn btn-secondary btn-sm" onclick="stopEssayTimer()">⏹ Stop</button>
      </div>
      <div style="margin-bottom:12px"><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">TOPIC</label><input type="text" class="input" id="dTopic" placeholder="e.g. Financial Inclusion in India" value="Financial Inclusion in India"></div>
      <div style="margin-bottom:12px"><label style="font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px">YOUR ESSAY</label><textarea class="input" id="dEssay" placeholder="Write your essay here..." oninput="updWC()"></textarea></div>
      <button class="btn btn-purple" id="dBtn" onclick="getDescFB()" ${!hasAI()?'disabled':''}>✨ Get AI Feedback</button>
      <div id="dFB" style="margin-top:16px"></div></div>`;
    return '';
  }
  function render(){
    document.getElementById('p-descriptive').innerHTML=`
      <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">✍️ Descriptive Writing</h1>
      <p style="color:#64748b;font-size:13px;margin-bottom:16px">Essays · Letters · Précis · AI Feedback — for SBI PO Mains & RBI Grade B</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">
        ${['essays','letters','precis','tips','ai'].map(t=>`<button class="tab${t===activeType?' active':''}" onclick="dType('${t}')">${{essays:'📝 Essays',letters:'📧 Letters',precis:'✂️ Précis',tips:'💡 Tips',ai:'✨ AI Feedback'}[t]}</button>`).join('')}
      </div>
      <div id="desc-body">${getContent(activeType)}</div>`;
  }
  window.dType=function(t){activeType=t;document.getElementById('desc-body').innerHTML=getContent(t);document.querySelectorAll('#p-descriptive .tab').forEach((b,i)=>b.classList.toggle('active',['essays','letters','precis','tips','ai'][i]===t));};
  window.dToggle=function(i){const bd=document.getElementById(`d-bd-${i}`);const arr=document.getElementById(`d-arr-${i}`);if(!bd)return;const o=bd.classList.contains('open');bd.classList.toggle('open',!o);if(arr)arr.textContent=o?'▼':'▲';};
  window.getDescFB=async function(){
    if(!hasAI()){alert('Need API key in Settings.');return;}
    const topic=document.getElementById('dTopic')?.value,essay=document.getElementById('dEssay')?.value;
    if(!essay||essay.length<50){alert('Write at least 50 words.');return;}
    const btn=document.getElementById('dBtn');const out=document.getElementById('dFB');
    if(btn){btn.textContent='⏳ Analyzing...';btn.disabled=true;}
    try{const text=await callAI(`You are an SBI PO/RBI Grade B exam evaluator. Rate this essay on "${topic}" out of 10. Give structured feedback:\n\nSCORE: X/10\nWORD COUNT: X words\nSTRUCTURE: feedback\nCONTENT: banking knowledge, facts used\nLANGUAGE: grammar, vocabulary\nSTRENGTHS: 2-3 specific things\nIMPROVEMENTS: 2-3 suggestions\nBETTER INTRO: suggest improved opening\n\nEssay:\n"${essay}"\n\nBe specific and encouraging.`);
      if(out)out.innerHTML=`<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:16px;font-size:13px;line-height:1.8;white-space:pre-wrap">${text}</div>`;
    }catch(err){if(out)out.innerHTML=`<div style="color:#dc2626;font-size:13px">${err.message}</div>`;}
    if(btn){btn.textContent='✨ Get AI Feedback';btn.disabled=false;}
  };
  window.updWC=function(){const el=document.getElementById('dEssay');const wc=document.getElementById('essay-wc');if(el&&wc){const w=el.value.trim().split(/\s+/).filter(Boolean).length;wc.textContent=w;wc.style.color=w>=200&&w<=250?'#059669':w>250?'#dc2626':'#d97706';}};
  window.setEssayMode=function(){const mode=document.getElementById('essay-mode')?.value;const tgt=document.getElementById('essay-tgt');if(tgt)tgt.textContent={sbi:'200–250',rbi:'600–800',letter:'150–200'}[mode]||'200–250';};
  window.startEssayTimer=function(){
    if(S.essayTimer)clearInterval(S.essayTimer);
    const mode=document.getElementById('essay-mode')?.value||'sbi';
    let secs={sbi:15*60,rbi:45*60,letter:12*60}[mode]||900;
    S.essayTimer=setInterval(()=>{secs--;const el=document.getElementById('essay-time');if(el){const m=Math.floor(secs/60),s=secs%60;el.textContent=`${m}:${String(s).padStart(2,'0')}`;el.className=secs<120?'timer-danger':secs<300?'timer-warn':'';}if(secs<=0){clearInterval(S.essayTimer);S.essayTimer=null;alert('Time is up! Submit your essay now.');}},1000);
  };
  window.stopEssayTimer=function(){if(S.essayTimer){clearInterval(S.essayTimer);S.essayTimer=null;}};
  render();
}

// ═══ PROGRESS ═══
function rProgress(){
  const st=getStats();const subs=Object.keys(st.by);const wrongCount=Object.keys(S.wrong).length;const weak=getWeakAreas();
  document.getElementById('p-progress').innerHTML=`
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div><h1 style="font-size:22px;font-weight:800">📈 Progress</h1><p style="color:#64748b;font-size:13px">Your performance analytics</p></div>
      <button class="btn btn-secondary btn-sm" onclick="if(confirm('Clear ALL progress?')){S.prog=[];S.str={c:0,b:0,d:null};S.wrong={};save();rProgress();}">🗑 Clear All</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-bottom:16px">
      ${[['🔥',S.str.c,'Streak','Best: '+S.str.b,'#ea580c'],['%',st.overall+'%','Accuracy',st.questions+' Qs','#2563eb'],['📚',st.sessions,'Sessions',st.correct+' correct','#7c3aed'],['❌',wrongCount,'Revision Queue','To revisit','#dc2626'],['🔖',S.bookmarks.length,'Bookmarks','Saved','#059669']].map(([ic,v,l,s,c])=>`<div class="card" style="text-align:center;padding:16px"><div style="font-size:26px;font-weight:800;color:${c}">${v}</div><div style="font-size:12px;font-weight:600;color:${c}">${l}</div><div style="font-size:11px;color:#94a3b8">${s}</div></div>`).join('')}
    </div>
    ${subs.length?`<div class="card" style="margin-bottom:14px"><h3 style="font-weight:700;margin-bottom:14px">Subject Accuracy</h3><canvas id="pchart" style="max-height:250px"></canvas></div>`:''}
    ${weak.length?`<div class="card" style="margin-bottom:14px"><h3 style="font-weight:700;margin-bottom:12px">⚠️ Weak Areas (< 60%)</h3>${weak.map(w=>`<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:13px;font-weight:600">${fSub(w.sub)} · ${fTopic(w.top)}</span><div style="display:flex;gap:8px"><b style="color:${clr(w.acc)}">${w.acc}%</b><button class="btn btn-xs btn-orange" onclick="drillTopic('${w.sub}','${w.top}')">Drill</button></div></div><div class="pbar"><div class="pfill" style="width:${w.acc}%;background:${clr(w.acc)}"></div></div></div>`).join('')}<button class="btn btn-orange btn-sm" style="margin-top:8px" onclick="startWeakDrill()">🎯 Full Weak Drill</button></div>`:''}
    <div class="card"><h3 style="font-weight:700;margin-bottom:12px">Recent Sessions</h3>
      ${[...S.prog].reverse().slice(0,15).map(r=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:13px"><div><b>${fSub(r.sub)}</b>${r.topic?` <span style="color:#94a3b8">· ${fTopic(r.topic)}</span>`:''}</div><div style="display:flex;gap:10px"><span style="color:#64748b">${r.score}/${r.total}</span><b style="color:${clr(r.acc||0)}">${r.acc||0}%</b></div></div>`).join('')||'<p style="color:#94a3b8;font-size:13px">No sessions yet.</p>'}
    </div>`;
  if(subs.length&&typeof Chart!=='undefined'){
    const labels=subs.map(fSub);const data=subs.map(s=>st.by[s]&&st.by[s].t?Math.round(st.by[s].c/st.by[s].t*100):0);const colors=data.map(clr);
    if(S.chart){S.chart.destroy();S.chart=null;}
    const ctx=document.getElementById('pchart')?.getContext('2d');
    if(ctx)S.chart=new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Accuracy %',data,backgroundColor:colors.map(c=>c+'22'),borderColor:colors,borderWidth:2,borderRadius:8}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{min:0,max:100,ticks:{callback:v=>v+'%'},grid:{color:'#f1f5f9'}},x:{grid:{display:false}}}}});
  }
}

// ═══ EXAM PLANNER ═══
function rPlanner(){
  const dl=daysLeft();const done=todayDone();const pct=Math.min(100,Math.round(done/S.dailyTarget*100));
  document.getElementById('p-planner').innerHTML=`
    <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">🎯 Exam Planner</h1>
    <p style="color:#64748b;font-size:13px;margin-bottom:16px">Set your exam date, daily targets, and track your study plan</p>
    <div class="grid2">
      <div class="card"><h3 style="font-weight:700;margin-bottom:12px">📅 Your Exam Date</h3>
        <input type="date" class="input" id="examIn" value="${S.examDate}" style="margin-bottom:12px">
        <button class="btn btn-primary" onclick="setExamDate()">Save Date</button>
        ${dl!==null?`<div style="margin-top:14px;text-align:center;padding:16px;background:${dl<30?'#fef2f2':dl<60?'#fff7ed':'#f0fdf4'};border-radius:12px">
          <div style="font-size:40px;font-weight:800;color:${dl<30?'#dc2626':dl<60?'#d97706':'#059669'}">${dl}</div>
          <div style="font-weight:600;color:${dl<30?'#dc2626':dl<60?'#d97706':'#059669'}">Days Remaining</div>
          <p style="font-size:12px;color:${dl<30?'#dc2626':dl<60?'#d97706':'#059669'};margin-top:4px">${dl<30?'⚠️ Final sprint! Full mocks daily!':dl<60?'⏰ Intensify practice now!':'✅ Good time to build foundations'}</p>
        </div>`:''}
      </div>
      <div class="card"><h3 style="font-weight:700;margin-bottom:12px">🎯 Daily Question Target</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
          ${[30,50,100,150].map(n=>`<button class="btn btn-sm ${S.dailyTarget===n?'btn-primary':'btn-secondary'}" onclick="setTarget(${n})">${n}Q</button>`).join('')}
        </div>
        <input type="number" class="input" id="custTarget" placeholder="Custom number" style="margin-bottom:12px">
        <button class="btn btn-green" onclick="setTarget(parseInt(document.getElementById('custTarget').value)||50)">Set Custom</button>
        <div style="margin-top:14px;padding:14px;background:#f0fdf4;border-radius:12px">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:13px;font-weight:600">Today: ${done}/${S.dailyTarget}</span><b style="color:${pct>=100?'#059669':'#2563eb'}">${pct}%</b></div>
          <div class="pbar"><div class="pfill" style="width:${pct}%;background:${pct>=100?'#059669':'#2563eb'}"></div></div>
        </div>
      </div>
    </div>
    <div class="card">
      <h3 style="font-weight:700;margin-bottom:14px">📋 Personalized Study Plan</h3>
      ${dl===null?'<p style="color:#64748b;font-size:13px">Set your exam date above to get a personalized study plan.</p>':
      dl>90?`<div style="font-size:13px"><div style="font-weight:700;color:#059669;margin-bottom:12px">Phase 1: Foundation (${dl} days left)</div>${[['Month 1','Quant fundamentals — Percentage, Profit/Loss, SI/CI, Ratio, Averages (20Q/day)'],['Month 2','Reasoning — Syllogisms, Blood Relations, Seating, Puzzles (25Q/day)'],['Month 3','English — Grammar, Vocabulary, RC + Banking Awareness basics (30Q/day)'],['Month 4','Banking Awareness + Economics — RBI, Schemes, GDP, Inflation (35Q/day)'],['Month 5+','Full Mocks + Current Affairs + Weak Areas (50Q/day + 1 mock/week)'],['Daily','10 flashcards + 1 current affairs article + Practice weak topics']].map(([t,d])=>`<div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid #f1f5f9"><b style="color:#2563eb;min-width:90px;flex-shrink:0">${t}</b><span>${d}</span></div>`).join('')}</div>`:
      `<div style="font-size:13px"><div style="font-weight:700;color:${dl<30?'#dc2626':'#d97706'};margin-bottom:12px">${dl<30?'🚨 Final Sprint':'⚡ Revision Phase'} (${dl} days left)</div>${(dl<30?[['Daily','2 full-length mock tests'],['Daily','100+ questions — only weak areas'],['Daily','Current Affairs mandatory'],['Weekly','Complete banking awareness revision'],['Focus','Attempt 70+ questions in first 45 min of exam']]:[ ['Daily','1 full mock + detailed analysis'],['Daily','50Q practice (70% weak areas)'],['Daily','Current Affairs reading'],['Weekly','Subject-wise full revision'],['Weekly','2 mocks on weekends']]).map(([t,d])=>`<div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid #f1f5f9"><b style="color:#2563eb;min-width:90px;flex-shrink:0">${t}</b><span>${d}</span></div>`).join('')}</div>`}
    </div>
    <div class="card" style="background:#eff6ff;border:1.5px solid #bfdbfe;margin-bottom:16px">
      <h3 style="font-weight:700;margin-bottom:12px;font-size:14px">📌 Exam Pattern Quick Reference</h3>
      <div class="grid2">
        ${[['SBI PO Prelims','100Q · 60min · Quant(35)+Reasoning(35)+English(30) · Sectional cutoff'],['SBI PO Mains','155Q+Descriptive · 180+30min · Quant+Reasoning+English+GA+Computer'],['RBI Grade B Phase 1','100Q · 120min · GA+Reasoning+English+Quant · 65%+ cutoff'],['RBI Grade B Phase 2','ESI+Finance+English Desc · 90-120min each · High difficulty']].map(([e,d])=>`<div style="background:#fff;border-radius:10px;padding:12px"><b style="color:#1d4ed8;display:block;margin-bottom:4px;font-size:13px">${e}</b><span style="font-size:12px;color:#64748b;line-height:1.6">${d}</span></div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h3 style="font-weight:700;margin-bottom:14px;font-size:14px">✅ Exam Day Checklist</h3>
      <p style="font-size:12px;color:#64748b;margin-bottom:12px">Check off each item the day before your exam</p>
      ${[['admit','Print Admit Card (2 copies)'],['id','Keep original photo ID (Aadhar/PAN/Passport)'],['photo','Carry passport-size photographs (4 extra)'],['stationery','HB pencil, black/blue pen, eraser, sharpener'],['route','Check exam center location + travel route'],['time','Plan to arrive 45 minutes early'],['sleep','Sleep by 10 PM — get 7–8 hours rest'],['breakfast','Light breakfast — avoid heavy/oily food'],['water','Carry water bottle (plain, no label)'],['phone','Keep phone on silent, submit at gate if required'],['strategy','Review your exam strategy — section order, time split'],['calm','Stay calm — deep breaths before entering hall']].map(([id,label])=>{const checked=S.examChecklist.includes(id);return`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f1f5f9;cursor:pointer" onclick="toggleChecklist('${id}')"><div style="width:20px;height:20px;border-radius:4px;border:2px solid ${checked?'#059669':'#cbd5e1'};background:${checked?'#059669':'transparent'};flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff">${checked?'✓':''}</div><span style="font-size:13px;${checked?'text-decoration:line-through;color:#94a3b8':''}">${label}</span></div>`;}).join('')}
      <div style="margin-top:12px;display:flex;gap:10px">
        <span style="font-size:12px;color:#64748b;display:flex;align-items:center">${S.examChecklist.length}/12 completed</span>
        ${S.examChecklist.length>0?`<button class="btn btn-xs btn-secondary" onclick="S.examChecklist=[];save();rPlanner()">Reset</button>`:''}
      </div>
    </div>`;
}
window.setExamDate=function(){const v=document.getElementById('examIn')?.value;if(v){S.examDate=v;save();rPlanner();}};
window.setTarget=function(n){if(!n||n<5)return;S.dailyTarget=n;save();rPlanner();};
window.toggleChecklist=function(id){const i=S.examChecklist.indexOf(id);if(i>-1)S.examChecklist.splice(i,1);else S.examChecklist.push(id);save();rPlanner();};

// ═══ SETTINGS ═══
function rSettings(){
  document.getElementById('p-settings').innerHTML=`
    <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">⚙️ Settings</h1>
    <p style="color:#64748b;font-size:13px;margin-bottom:16px">Configure your free API keys for AI-powered features</p>
    ${IS_ONLINE?`<div class="card" style="background:#f0fdf4;border:2px solid #059669;margin-bottom:14px">
      <h3 style="color:#059669;font-weight:700;margin-bottom:4px">✅ Online Mode — AI Active, No Key Needed!</h3>
      <p style="font-size:13px;color:#166534">You're using the online version. AI question generation, current affairs, and essay feedback all work automatically — no API key required from you.</p>
    </div>`:`<div class="card" style="background:#f0fdf4;border:1.5px solid #bbf7d0;margin-bottom:14px">
      <h3 style="color:#059669;font-weight:700;margin-bottom:4px">🆓 All APIs are FREE — no credit card needed</h3>
      <p style="font-size:13px;color:#166534">Groq: 14,400 requests/day · GNews: 100 news requests/day · Gemini: 1,500 requests/day</p>
    </div>`}
    <div class="card" style="border:2px solid #7c3aed;margin-bottom:14px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <span style="background:#7c3aed;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:6px">RECOMMENDED</span>
        <h3 style="font-weight:700">Groq API Key <span style="font-size:12px;color:#059669;font-weight:400">(AI questions + Current Affairs, 14,400 free/day)</span></h3>
      </div>
      <p style="font-size:12px;color:#64748b;margin-bottom:10px">Get free key → <b>console.groq.com</b> → Sign in → API Keys → Create key</p>
      <div style="display:flex;gap:8px;margin-bottom:10px"><input type="password" id="gkIn" class="input" placeholder="gsk_..." value="${S.gkey}" style="flex:1"><button onclick="document.getElementById('gkIn').type=document.getElementById('gkIn').type==='password'?'text':'password'" class="btn btn-secondary btn-sm">👁</button></div>
      <button class="btn btn-purple" onclick="saveGK()">Save Groq Key</button>${S.gkey?'<span style="margin-left:10px;font-size:13px;color:#059669;font-weight:600">✅ Active</span>':''}
    </div>
    <div class="card" style="border:2px solid #059669;margin-bottom:14px">
      <h3 style="font-weight:700;margin-bottom:6px">GNews API Key <span style="font-size:12px;color:#059669;font-weight:400">(real live Indian news, 100 free/day)</span></h3>
      <p style="font-size:12px;color:#64748b;margin-bottom:10px">Get free key → <b>gnews.io</b> → Sign up → My Account → API Key</p>
      <div style="display:flex;gap:8px;margin-bottom:10px"><input type="text" id="nkIn" class="input" placeholder="gnews_key" value="${S.nkey}" style="flex:1"></div>
      <button class="btn btn-green" onclick="saveNK()">Save GNews Key</button>${S.nkey?'<span style="margin-left:10px;font-size:13px;color:#059669;font-weight:600">✅ Live news active</span>':'<span style="margin-left:10px;font-size:12px;color:#94a3b8">Without this, AI generates content (not real news)</span>'}
    </div>
    <div class="card" style="margin-bottom:14px">
      <h3 style="font-weight:700;margin-bottom:6px">Gemini API Key <span style="font-size:12px;color:#64748b;font-weight:400">(backup AI — create a NEW project for fresh quota)</span></h3>
      <p style="font-size:12px;color:#64748b;margin-bottom:10px">Get free key → <b>aistudio.google.com</b> → "Get API Key" → "Create API key in NEW project"</p>
      <div style="display:flex;gap:8px;margin-bottom:10px"><input type="password" id="kIn" class="input" placeholder="AIzaSy..." value="${S.key}" style="flex:1"><button onclick="document.getElementById('kIn').type=document.getElementById('kIn').type==='password'?'text':'password'" class="btn btn-secondary btn-sm">👁</button></div>
      <button class="btn btn-primary" onclick="saveK()">Save Gemini Key</button>${S.key?'<span style="margin-left:10px;font-size:13px;color:#059669;font-weight:600">✅ Active</span>':''}
    </div>
    <div class="card" style="margin-bottom:14px">
      <h3 style="font-weight:700;margin-bottom:12px">What Needs API Key</h3>
      ${[['Study Hub, All Practice (static), Mock Tests, Flashcards','✅ Works without any key'],['Interview Prep, Descriptive templates, Exam Planner','✅ Works without any key'],['AI Question Generation (unlimited fresh questions)','🔑 Groq or Gemini'],['AI Mock Test Mode (fresh unique questions)','🔑 Groq or Gemini'],['Essay AI Feedback','🔑 Groq or Gemini'],['Current Affairs AI Digest','🔑 Groq or Gemini'],['Current Affairs LIVE News','📡 GNews key + AI key']].map(([f,s])=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:13px"><span>${f}</span><span style="font-weight:600;color:${s.includes('✅')?'#059669':s.includes('📡')?'#2563eb':'#d97706'};flex-shrink:0;margin-left:12px">${s}</span></div>`).join('')}
    </div>
    <div class="card" style="background:#fef2f2;border:1.5px solid #fecaca">
      <h3 style="color:#991b1b;font-weight:700;margin-bottom:8px">⚠️ Reset All Data</h3>
      <p style="font-size:13px;color:#64748b;margin-bottom:12px">Clears all progress, streaks, bookmarks, and API keys from this browser.</p>
      <button class="btn btn-red btn-sm" onclick="if(confirm('Reset EVERYTHING? This cannot be undone!')){localStorage.clear();location.reload();}">🗑 Reset Everything</button>
    </div>`;
}
window.saveGK=function(){S.gkey=document.getElementById('gkIn').value.trim();save();alert(S.gkey?'✅ Groq key saved!':'Key cleared.');rSettings();};
window.saveNK=function(){S.nkey=document.getElementById('nkIn').value.trim();save();alert(S.nkey?'✅ GNews key saved! Current Affairs will now use live news.':'Key cleared.');rSettings();};
window.saveK=function(){S.key=document.getElementById('kIn').value.trim();save();alert(S.key?'✅ Gemini key saved!':'Key cleared.');rSettings();};

// ═══ INIT ═══
function init(){
  document.getElementById('nav').innerHTML=NAV_ITEMS.map(([p,ic,lb])=>`<a class="nl" data-p="${p}" onclick="go('${p}')">${ic} <span>${lb}</span></a>`).join('');
  applyDark();initFP();upStreak();go('dashboard');

  // Keyboard shortcuts
  let kbdTimeout;
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')return;
    const key=e.key;
    // 1-4: select answer option in practice quiz
    if(['1','2','3','4'].includes(key)&&S.quiz&&S.quiz.ans[S.quiz.i]===-1){
      e.preventDefault();window.selAns(parseInt(key)-1,S.page==='mock'?'mock':'practice');
      showKbdHint();return;
    }
    // Enter/Space: next question
    if((key==='Enter'||key===' ')&&S.quiz&&S.quiz.ans[S.quiz.i]!==-1){
      e.preventDefault();
      if(S.quiz.i<S.quiz.qs.length-1)window.nextQ(S.page==='mock'?'mock':'practice');
      else window.showResults?showResults(S.page==='mock'?'mock':'practice'):null;
      showKbdHint();return;
    }
    // Arrow keys: flashcards
    if(key==='ArrowRight'&&S.page==='flashcards'){e.preventDefault();window.fcNext&&window.fcNext();showKbdHint();}
    if(key==='ArrowLeft'&&S.page==='flashcards'){e.preventDefault();window.fcPrev&&window.fcPrev();showKbdHint();}
    if(key===' '&&S.page==='flashcards'){e.preventDefault();window.fcFlip&&window.fcFlip();showKbdHint();}
    // f: toggle formula panel
    if(key==='f'&&!e.ctrlKey&&!e.metaKey){window.toggleFP();showKbdHint();}
    // d: toggle dark mode
    if(key==='d'&&!e.ctrlKey&&!e.metaKey){window.toggleDark();showKbdHint();}
  });

  function showKbdHint(){
    const el=document.getElementById('kbd-hint');if(!el)return;
    el.classList.add('show');clearTimeout(kbdTimeout);
    kbdTimeout=setTimeout(()=>el.classList.remove('show'),2000);
  }
}
init();
</script>
</body>
</html>


