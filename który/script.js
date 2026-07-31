const forms = {
  który:["który","która","które","którego","której","któremu","której","którego","który","którą","które","którym","którą","którym","którym","której","którym","którzy","które","których","którym","których","które","którymi","których"],
  czyj:["czyj","czyja","czyje","czyjego","czyjej","czyjemu","czyjej","czyjego","czyj","czyją","czyje","czyim","czyją","czyim","czyim","czyjej","czyim","czyi","czyje","czyich","czyim","czyich","czyje","czyimi","czyich"],
  jaki:["jaki","jaka","jakie","jakiego","jakiej","jakiemu","jakiej","jakiego","jaki","jaką","jakie","jakim","jaką","jakim","jakim","jakiej","jakim","jacy","jakie","jakich","jakim","jakich","jakie","jakimi","jakich"],
  ten:["ten","ta","to","tego","tej","temu","tej","tego","ten","tę","to","tym","tą","tym","tym","tej","tym","ci","te","tych","tym","tych","te","tymi","tych"],
  mój:["mój","moja","moje","mojego","mojej","mojemu","mojej","mojego","mój","moją","moje","moim","moją","moim","moim","mojej","moim","moi","moje","moich","moim","moich","moje","moimi","moich"],
  twój:["twój","twoja","twoje","twojego","twojej","twojemu","twojej","twojego","twój","twoją","twoje","twoim","twoją","twoim","twoim","twojej","twoim","twoi","twoje","twoich","twoim","twoich","twoje","twoimi","twoich"],
  nasz:["nasz","nasza","nasze","naszego","naszej","naszemu","naszej","naszego","nasz","naszą","nasze","naszym","naszą","naszym","naszym","naszej","naszym","nasi","nasze","naszych","naszym","naszych","nasze","naszymi","naszych"],
  wasz:["wasz","wasza","wasze","waszego","waszej","waszemu","waszej","waszego","wasz","waszą","wasze","waszym","waszą","waszym","waszym","waszej","waszym","wasi","wasze","waszych","waszym","waszych","wasze","waszymi","waszych"]
};

const slots = [
  s("mianownik","kto? co?","liczba pojedyncza","rodzaj męski","lekarz","lekarz czeka przed gabinetem"),
  s("mianownik","kto? co?","liczba pojedyncza","rodzaj żeński","książka","książka leży przy lampie"),
  s("mianownik","kto? co?","liczba pojedyncza","rodzaj nijaki","dziecko","dziecko bawi się w ogrodzie"),
  s("dopełniacz","kogo? czego?","liczba pojedyncza","rodzaj męski","nauczyciel","Nie znam ___ nauczyciela z nowej szkoły"),
  s("dopełniacz","kogo? czego?","liczba pojedyncza","rodzaj żeński","torba","Nie ma tutaj ___ torby na zakupy"),
  s("celownik","komu? czemu?","liczba pojedyncza","rodzaj męski","kolega","Pomagam ___ koledze po lekcjach"),
  s("celownik","komu? czemu?","liczba pojedyncza","rodzaj żeński","dziewczyna","Przyglądam się ___ dziewczynie na scenie"),
  s("biernik","kogo? co?","liczba pojedyncza","rodzaj męski żywotny","pies","Widzę ___ psa przy bramie"),
  s("biernik","kogo? co?","liczba pojedyncza","rodzaj męski nieżywotny","telefon","Kupuję ___ telefon do pracy"),
  s("biernik","kogo? co?","liczba pojedyncza","rodzaj żeński","siostra","Znam ___ siostrę ze zdjęcia"),
  s("biernik","kogo? co?","liczba pojedyncza","rodzaj nijaki","zwierzę","Obserwuję ___ zwierzę w lesie"),
  s("narzędnik","z kim? z czym?","liczba pojedyncza","rodzaj męski","lekarz","Rozmawiam z ___ lekarzem po badaniu"),
  s("narzędnik","z kim? z czym?","liczba pojedyncza","rodzaj żeński","koleżanka","Idę z ___ koleżanką do kina"),
  s("narzędnik","z kim? z czym?","liczba pojedyncza","rodzaj nijaki","dziecko","Bawię się z ___ dzieckiem na podwórku"),
  s("miejscownik","o kim? o czym?","liczba pojedyncza","rodzaj męski","sąsiad","Myślę o ___ sąsiedzie z parteru"),
  s("miejscownik","o kim? o czym?","liczba pojedyncza","rodzaj żeński","praca","Rozmawiamy o ___ pracy w kawiarni"),
  s("miejscownik","o kim? o czym?","liczba pojedyncza","rodzaj nijaki","muzeum","Czytam o ___ muzeum w centrum"),
  s("mianownik","kto? co?","liczba mnoga","rodzaj męskoosobowy","nauczyciele","nauczyciele prowadzą dziś zajęcia"),
  s("mianownik","kto? co?","liczba mnoga","rodzaj niemęskoosobowy","psy","psy czekają na spacer"),
  s("dopełniacz","kogo? czego?","liczba mnoga","rodzaj niemęskoosobowy","klucze","Nie widzę ___ kluczy od mieszkania"),
  s("celownik","komu? czemu?","liczba mnoga","rodzaj niemęskoosobowy","koty","Daję jedzenie ___ kotom ze schroniska"),
  s("biernik","kogo? co?","liczba mnoga","rodzaj męskoosobowy","panowie","Spotykam ___ panów przed sklepem"),
  s("biernik","kogo? co?","liczba mnoga","rodzaj niemęskoosobowy","książki","Pakuję ___ książki do torby"),
  s("narzędnik","z kim? z czym?","liczba mnoga","rodzaj niemęskoosobowy","koleżanki","Jadę z ___ koleżankami nad morze"),
  s("miejscownik","o kim? o czym?","liczba mnoga","rodzaj niemęskoosobowy","plany","Rozmawiamy o ___ planach na weekend")
];
function s(caseName,caseQuestion,number,gender,noun,model){return{caseName,caseQuestion,number,gender,noun,model}}

const categoryInfo={
  który:{title:"Który — zaimek względny",tag:"który",theme:"w zdaniu opisującym konkretną osobę lub rzecz"},
  czyj:{title:"Czyj — przynależność",tag:"czyj",theme:"w pytaniu o właściciela"},
  jaki:{title:"Jaki — cecha i rodzaj",tag:"jaki",theme:"w pytaniu o cechę lub typ"},
  ten:{title:"Ten, ta, to",tag:"ten",theme:"przy wskazywaniu konkretnej osoby lub rzeczy"},
  mój:{title:"Mój, moja, moje",tag:"mój",theme:"dla rzeczy należącej do mówiącego"},
  twój:{title:"Twój, twoja, twoje",tag:"twój",theme:"dla rzeczy należącej do rozmówcy"},
  nasz:{title:"Nasz, nasza, nasze",tag:"nasz",theme:"dla wspólnej rzeczy mówiących"},
  wasz:{title:"Wasz, wasza, wasze",tag:"wasz",theme:"dla rzeczy należącej do rozmówców"}
};
const sceneTails={ten:["dzisiaj","w tej chwili","przed południem","po prawej stronie"],mój:["z mojego osiedla","od wielu lat","po powrocie do domu","w czasie wolnym"],twój:["o którym wspominałeś","z twojej ulicy","przed wyjazdem","na jutrzejsze spotkanie"],nasz:["w naszej dzielnicy","podczas wspólnego projektu","na szkolnym festynie","po ostatnich zajęciach"],wasz:["podczas waszej wizyty","z waszego domu","przed wspólną podróżą","na rodzinnym spotkaniu"]};

function buildTask(lemma,slot,i){
  const form=forms[lemma][i],info=categoryInfo[lemma];
  let sentence=makeSentence(lemma,slot,form,i),answer=form,kind=i%5===0?"choice":"input",options=null,taskNoun=slot.noun;
  if(kind==="choice") options=choicesFor(lemma,form,i);
  if(i===1){kind="phrase";sentence=`(${lemma} + ${slot.noun}, ${slot.caseName})`;answer=`${form} ${slot.noun}`;}
  if(i===17){kind="plural";sentence=`Zmień na liczbę mnogą: ${forms[lemma][0]} lekarz`;answer=`${form} lekarze`;taskNoun="lekarz → lekarze";}
  if(i===22){kind="gender";sentence=`Forma „${form}” w zdaniu: „${slot.model.replace("___",form)}”. Określ liczbę i grupę.`;answer=`${slot.number}, ${slot.gender}`;options=[answer,"liczba pojedyncza, rodzaj żeński","liczba mnoga, rodzaj męskoosobowy"].filter((v,n,a)=>a.indexOf(v)===n);}
  if(i===23){kind="case";sentence=`${slot.model.replace("___",form)}. Jaki to przypadek?`;answer=slot.caseName;options=["dopełniacz","celownik","narzędnik","miejscownik"].filter((v,n,a)=>a.indexOf(v)===n);}
  if(i===24){kind="transform";sentence=`${forms[lemma][0]} plan → miejscownik liczby mnogiej`;answer=`o ${form} planach`;}
  const rule=ruleFor(slot); return {sentence:sentence+(/[?.!]$/.test(sentence)?"":"."),answer,lemma,noun:taskNoun,caseName:slot.caseName,caseQuestion:slot.caseQuestion,number:slot.number,gender:slot.gender,rule,category:lemma,kind,options,title:info.title,tag:kindLabel(kind),exercise:Object.keys(forms).indexOf(lemma)};
}
function makeSentence(lemma,slot,form,i){
  if(lemma==="który"){
    const relative=[`To lekarz, ___ czeka przed gabinetem`,`To książka, ___ leży przy lampie`,`To dziecko, ___ bawi się w ogrodzie`,`To nauczyciel, ___ dziś nie ma`,`To torba, ___ szukamy od rana`,`To kolega, ___ pomagam po lekcjach`,`To dziewczyna, ___ się przyglądam`,`To pies, ___ widzę przy bramie`,`To telefon, ___ kupuję do pracy`,`To siostra, ___ znam ze zdjęcia`,`To zwierzę, ___ obserwuję w lesie`,`To lekarz, z ___ rozmawiam po badaniu`,`To koleżanka, z ___ idę do kina`,`To dziecko, z ___ bawię się na podwórku`,`To sąsiad, o ___ myślę`,`To praca, o ___ rozmawiamy`,`To muzeum, o ___ czytam`,`To nauczyciele, ___ prowadzą zajęcia`,`To psy, ___ czekają na spacer`,`To klucze, ___ nie widzę`,`To koty, ___ daję jedzenie`,`To panowie, ___ spotykam przed sklepem`,`To książki, ___ pakuję do torby`,`To koleżanki, z ___ jadę nad morze`,`To plany, o ___ rozmawiamy`];return relative[i];
  }
  if(lemma==="czyj"){
    const ownership=[`___ to lekarz?`,`___ to książka?`,`___ to dziecko?`,`___ nauczyciela nie znasz?`,`___ torby tutaj nie ma?`,`___ koledze pomagasz po lekcjach?`,`___ dziewczynie się przyglądasz?`,`___ psa widzisz przy bramie?`,`___ telefon kupujesz do pracy?`,`___ siostrę znasz ze zdjęcia?`,`___ zwierzę obserwujesz w lesie?`,`Z ___ lekarzem rozmawiasz po badaniu?`,`Z ___ koleżanką idziesz do kina?`,`Z ___ dzieckiem bawisz się na podwórku?`,`O ___ sąsiedzie myślisz?`,`O ___ pracy rozmawiacie?`,`O ___ muzeum czytasz?`,`___ to nauczyciele?`,`___ to psy?`,`___ kluczy nie widzisz?`,`___ kotom dajesz jedzenie?`,`___ panów spotykasz przed sklepem?`,`___ książki pakujesz do torby?`,`Z ___ koleżankami jedziesz nad morze?`,`O ___ planach rozmawiacie?`];
    return ownership[i]+" (czyj)";
  }
  if(lemma==="jaki") return (slot.model.includes("___")?slot.model:`___ ${slot.model}`)+" — pytamy o cechę lub typ (jaki)";
  const tail=sceneTails[lemma][i%4]; return slot.model.includes("___")?`${slot.model} ${tail} (${lemma})`:`___ ${slot.model} ${tail} (${lemma})`;
}
function choicesFor(lemma,answer,i){const pool=[...new Set(forms[lemma])].filter(x=>x!==answer),wrong=[];for(let n=0;n<3;n++)wrong.push(pool[(i+n)%pool.length]);return shuffle([answer,...wrong])}
function ruleFor(s){if(s.caseName==="biernik"&&s.number==="liczba mnoga"&&s.gender.includes("męskoosobowy")&&!s.gender.includes("nie"))return"Biernik rodzaju męskoosobowego ma formę taką jak dopełniacz.";if(s.caseName==="biernik"&&s.number==="liczba mnoga")return"Biernik niemęskoosobowy ma formę taką jak mianownik.";if(s.caseName==="biernik"&&s.gender==="rodzaj męski żywotny")return"W rodzaju męskim żywotnym biernik ma formę taką jak dopełniacz.";if(s.caseName==="biernik"&&s.gender==="rodzaj męski nieżywotny")return"W rodzaju męskim nieżywotnym biernik ma formę taką jak mianownik.";return`Końcówkę wybieramy według pytania „${s.caseQuestion}”, rodzaju i liczby.`}
function kindLabel(k){return({input:"Wpisz formę",choice:"Wybierz formę",gender:"Rodzaj i liczba",case:"Rozpoznaj przypadek",phrase:"Zbuduj wyrażenie",plural:"Zmień liczbę",transform:"Zmień przypadek"})[k]}
const database=Object.keys(forms).flatMap(lemma=>slots.map((slot,i)=>buildTask(lemma,slot,i)));

const $=id=>document.getElementById(id); const categories=Object.values(categoryInfo);
categories.forEach((e,i)=>$("syllabus").insertAdjacentHTML("beforeend",`<div class="syllabus-item"><b>${String(i+1).padStart(2,"0")}</b><span>${e.title}</span></div>`));
[10,20,30,50,"all"].forEach((n,i)=>$("lengthOptions").insertAdjacentHTML("beforeend",`<label class="length-option"><input type="radio" name="length" value="${n}" ${i===1?"checked":""}><span>${n==="all"?`Wszystkie (${database.length})`:n}</span></label>`));
let round=[],index=0,score=0,mistakes=[],selected="",checked=false,hintLevel=0,retryMode=false;
const normalize=s=>s.trim().replace(/\s+/g," ").toLocaleLowerCase("pl-PL");
$("startBtn").onclick=()=>{retryMode=false;const value=document.querySelector('[name="length"]:checked').value;start(balancedRound(value==="all"?database.length:Number(value)));};
$("restartBtn").onclick=()=>{retryMode=false;const value=document.querySelector('[name="length"]:checked').value;start(balancedRound(value==="all"?database.length:Number(value)));};
$("retryBtn").onclick=()=>{const failed=mistakes.map(m=>m.item);retryMode=true;start(shuffle(failed));};
function balancedRound(size){if(size>=database.length)return shuffle([...database]);const pool=shuffle([...database]),chosen=[],seen={category:new Map(),caseName:new Map(),kind:new Map(),number:new Map(),gender:new Map()};while(chosen.length<size){let best=0,bestScore=-Infinity;pool.forEach((item,i)=>{let score=0;for(const key of Object.keys(seen))score+=1/(1+(seen[key].get(item[key])||0));score+=Math.random()*.08;if(score>bestScore){bestScore=score;best=i}});const pick=pool.splice(best,1)[0];chosen.push(pick);for(const key of Object.keys(seen))seen[key].set(pick[key],(seen[key].get(pick[key])||0)+1);}return shuffle(chosen);}
function start(items){round=items;index=score=0;mistakes=[];selected="";checked=false;$("startView").classList.add("hidden");$("resultView").classList.add("hidden");$("quizView").classList.remove("hidden");render();$("trainer").scrollIntoView({behavior:"smooth",block:"start"});}
function render(){const item=round[index];checked=false;selected="";hintLevel=0;$("exerciseKicker").textContent=retryMode?"Powtórka błędów":`${item.category} · ${item.caseName}`;$("exerciseTitle").textContent=item.title;$("questionTag").textContent=item.tag;$("sentence").textContent=item.sentence;$("scoreText").textContent=score;$("progressText").textContent=`Zadanie ${index+1} z ${round.length}`;$("progressBar").style.width=`${index/round.length*100}%`;$("feedback").className="feedback hidden";$("hints").className="hints hidden";$("hints").innerHTML="";$("checkBtn").classList.remove("hidden");$("nextBtn").classList.add("hidden");const choice=!!item.options;$("hintBtn").classList.toggle("hidden",choice);$("hintBtn").textContent="＋ Podpowiedź";
  if(choice){$("answerArea").innerHTML=`<div class="options">${item.options.map(o=>`<button class="option" data-value="${escapeHtml(o)}">${o}</button>`).join("")}</div>`;document.querySelectorAll(".option").forEach(b=>b.onclick=()=>{if(checked)return;document.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selected=b.dataset.value;});}else{$("answerArea").innerHTML='<input class="answer-input" id="answerInput" autocomplete="off" placeholder="Wpisz odpowiedź…" aria-label="Twoja odpowiedź">';$("answerInput").addEventListener("keydown",e=>{if(e.key==="Enter")$(checked?"nextBtn":"checkBtn").click();});setTimeout(()=>$("answerInput").focus(),0);}}
$("hintBtn").onclick=()=>{const item=round[index],hints=[item.caseQuestion,item.caseName,`${item.gender}, ${item.number}`];if(hintLevel<hints.length){$("hints").classList.remove("hidden");$("hints").insertAdjacentHTML("beforeend",`<span class="hint-chip">${hints[hintLevel++]}</span>`);if(hintLevel===hints.length)$("hintBtn").classList.add("hidden");}};
$("checkBtn").onclick=()=>{const item=round[index];const raw=item.options?selected:$("answerInput").value;if(!raw.trim()){const box=$("feedback");box.className="feedback bad";box.textContent="Wybierz lub wpisz odpowiedź.";return;}checked=true;const ok=normalize(raw)===normalize(item.answer);if(ok)score++;else mistakes.push({item,user:raw});$("scoreText").textContent=score;$("feedback").className=`feedback ${ok?"good":"bad"}`;$("feedback").innerHTML=`<b>${ok?"Dobrze!":"Jeszcze nie. Poprawna odpowiedź: "+item.answer}</b>${explain(item)}`;
  if(item.options)document.querySelectorAll(".option").forEach(b=>{if(normalize(b.dataset.value)===normalize(item.answer))b.classList.add("correct");else if(b.classList.contains("selected"))b.classList.add("wrong");b.disabled=true;});else{$("answerInput").classList.add(ok?"correct":"wrong");$("answerInput").disabled=true;}$("hintBtn").classList.add("hidden");$("checkBtn").classList.add("hidden");$("nextBtn").classList.remove("hidden");};
function explain(x){return`<ul class="reasoning"><li>forma podstawowa: <b>${x.lemma}</b>${x.noun?` + ${x.noun}`:""}</li><li>${x.number}; ${x.gender}</li><li>pytanie: ${x.caseQuestion}</li><li>przypadek: <b>${x.caseName}</b></li><li>${x.rule}</li><li>poprawna forma: <b>${x.answer}</b></li></ul>`}
$("nextBtn").onclick=()=>{if(++index<round.length)render();else finish();};
function finish(){$("quizView").classList.add("hidden");$("resultView").classList.remove("hidden");const pct=Math.round(score/round.length*100);$("resultScore").textContent=`${score} / ${round.length} · ${pct}%`;$("resultCopy").textContent=pct===100?"Świetnie! Wszystkie odpowiedzi są poprawne.":pct>=75?"Bardzo dobrze. Zostało tylko kilka form do utrwalenia.":"Dobra próba. Sprawdź wyjaśnienia i powtórz błędne formy.";$("mistakesSection").classList.toggle("hidden",!mistakes.length);$("retryBtn").classList.toggle("hidden",!mistakes.length);$("mistakesList").innerHTML=mistakes.map(m=>`<article class="mistake"><p>${m.item.sentence}</p><small class="bad-answer">Twoja odpowiedź: ${escapeHtml(m.user)}</small><small class="right-answer">Poprawna odpowiedź: ${m.item.answer}</small><small>${m.item.caseName} · ${m.item.caseQuestion} · ${m.item.rule}</small></article>`).join("");$("progressBar").style.width="100%";$("trainer").scrollIntoView({behavior:"smooth",block:"start"});}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}
