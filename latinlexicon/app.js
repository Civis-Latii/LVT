class Latinword {
    constructor(nom,gen,gender,english) {
        this.nom=nom;
        this.gen=gen;
        this.gender=gender;
        this.english=english;
        this.declension="";

        let stem = "";
        const iumwordslist = ["corporis","temporis","vulneris","itineris","artis","montis","noctis","partis","principis","urbis","civis","hostis","navis","maris"];
        if (gen.slice(-4)=="arum") { //1st plural only
          this.declension="1st";
          stem=gen.slice(0,-4);
          this.nomsg="-";
          this.vocsg="-";
          this.accsg="-";
          this.gensg="-";
          this.datsg="-";
          this.ablsg="-";
          //no 1st neuter
          this.nompl=nom;
          this.vocpl=nom;
          this.accpl=stem+"as";
          this.genpl=gen;
          this.datpl=stem+"is";
          this.ablpl=stem+"is";
        }
          else if (gen.slice(-4)=="orum") { //2nd plural only
          this.declension="2nd";
          stem=gen.slice(0,-4);
          this.nomsg="-";
          this.vocsg="-";
          this.accsg="-";
          this.gensg="-";
          this.datsg="-";
          this.ablsg="-";
          
          this.nompl=nom;
          this.vocpl=nom;
          if (gender=="n pl") {  //2nd plural only, neuter
            this.accpl=nom;
        }
          else {
            this.accpl=stem+"os";
        }
          this.genpl=gen;
          this.datpl=stem+"is";
          this.ablpl=stem+"is";
        }
          else if (gen.slice(-2)=="um" || gen.slice(-3)=="ium") { //3rd plural only
            this.declension="3rd";
            stem=gen.slice(0,-2);
            this.nomsg="-";
            this.vocsg="-";
            this.accsg="-";
            this.gensg="-";
            this.datsg="-";
            this.ablsg="-";
    
            this.nompl=nom;
            this.vocpl=nom;
            if (gender=="n pl") { //3rd plural only, neuter
              this.accpl=nom;
          }
            else {
              this.accpl=stem+"es";
          }
            this.genpl=gen;
            this.datpl=stem+"ibus";
            this.ablpl=stem+"ibus";
        }
          else if (gen.slice(-2)=="uum") { //4th plural only
            this.declension="4th";
            stem=gen.slice(0,-2);
            this.nomsg="-";
            this.vocsg="-";
            this.accsg="-";
            this.gensg="-";
            this.datsg="-";
            this.ablsg="-";
    
            this.nompl=nom; //4th dec. has nom and acc same, regardless of gender
            this.vocpl=nom;
            this.accpl=nom;
            this.genpl=gen;
            this.datpl=stem+"ibus";
            this.ablpl=stem+"ibus";
          }
            //no 5th plural only
        
          else if (gen.slice(-2)=="ae") { //1st singular
            this.declension="1st";
            stem=gen.slice(0,-2);
            this.nomsg=nom;
            this.vocsg=nom;
            this.accsg=stem+"am";
            this.gensg=gen;
            this.datsg=stem+"ae";
            this.ablsg=stem+"a";
            //no 1st neuter
            this.nompl=stem+"ae";
            this.vocpl=stem+"ae";
            this.accpl=stem+"as";
            this.genpl=stem+"arum";
            this.datpl=stem+"is";
            this.ablpl=stem+"is";
          }
          else if (gen.slice(-1)=="i" && !(gen.slice(-2)=="ei")) { //2nd singular, making sure does not apply to 5th dec. "ei"
            this.declension="2nd";
            stem=gen.slice(0,-1);
            this.nomsg=nom;
            if (gender=="n") { //2nd neuter
              this.vocsg=nom;
              this.accsg=nom;
              
              this.nompl=stem+"a";
              this.vocpl=stem+"a";
              this.accpl=stem+"a";
          }
            else {
              this.vocsg=stem+"e";
              this.accsg=stem+"um";
              
              this.nompl=stem+"i";
              this.vocpl=stem+"i";
              this.accpl=stem+"os";
          }
            this.gensg=gen;
            this.datsg=stem+"o";
            this.ablsg=stem+"o";
          
            this.genpl=stem+"orum";
            this.datpl=stem+"is";
            this.ablpl=stem+"is";
          }
          else if (gen.slice(-2)=="is") { //3rd singular
            this.declension="3rd";
            stem=gen.slice(0,-2);
            this.nomsg=nom;
            this.vocsg=nom;
            if (gender=="n") { //3rd neuter
              this.accsg=nom;
              if (nom=="mare") { //accounting for true perfect i stems
                this.nompl=stem+"ia";
                this.vocpl=stem+"ia";
                this.accpl=stem+"ia";  
              }
              else {
                this.nompl=stem+"a";
                this.vocpl=stem+"a";
                this.accpl=stem+"a";

              }
            }
            else {
              this.accsg=stem+"em";
              
              this.nompl=stem+"es";
              this.vocpl=stem+"es";
              this.accpl=stem+"es";
          }
            this.gensg=gen;
            this.datsg=stem+"i";
            this.ablsg=stem+"e";

            if (iumwordslist.includes(gen)) { //accounting for ium words
              this.genpl=stem+"ium";
            }
            else {
              this.genpl=stem+"um";
            }
            this.datpl=stem+"ibus";
            this.ablpl=stem+"ibus";
          }
          else if (gen.slice(-2)=="us") { //4th singular
            this.declension="4th";
            stem=gen.slice(0,-2);
            this.nomsg=nom;
            this.vocsg=nom;
            if (gender=="n") { //4th neuter
              this.accsg=nom;
              this.datsg=nom;
              this.ablsg=nom;
    
              this.nompl=stem+"ua";
              this.vocpl=stem+"ua";
              this.accpl=stem+"ua";
          }
            else {
              this.accsg=stem+"um";
              this.datsg=stem+"ui";
              this.ablsg=stem+"u";
    
              this.nompl=nom;
              this.vocpl=nom;
              this.accpl=nom;
          }
            this.gensg=gen;
    
            this.genpl=stem+"uum";
            this.datpl=stem+"ibus";
            this.ablpl=stem+"ibus";
          }
          else if (gen.slice(-2)=="ei") { //5th singular
            this.declension="5th";
            stem=gen.slice(0,-2);
            this.nomsg=nom;
            this.vocsg=nom;
            this.accsg=nom;
            this.gensg=gen;
            this.datsg=stem+"ei";
            this.ablsg=stem+"e";
            //no 5th neuter
            this.nompl=stem+"es";
            this.vocpl=stem+"es";
            this.accpl=stem+"es";
            this.genpl=stem+"erum";
            this.datpl=stem+"ebus";
            this.ablpl=stem+"ebus";
          }
        }
      }

let wordlist = [];
const words = ("ancilla	ancillae	f	slave-girl, maid	aqua	aquae	f	water	cena	cenae	f	dinner, meal	cura	curae	f	care, worry	dea	deae	f	goddess	domina	dominae	f	mistress	epistula	epistulae	f	letter	femina	feminae	f	woman	filia	filiae	f	daughter	hora	horae	f	hour	ianua	ianuae	f	door	insula	insulae	f	island, block of flats	ira	irae	f	anger	nauta	nautae	m	sailor	pecunia	pecuniae	f	money	poena	poenae	f	punishment	porta	portae	f	gate	puella	puellae	f	girl	regina	reginae	f	queen	Roma	Romae	f	Rome (Romae = at/in Rome)	silva	silvae	f	wood	taberna	tabernae	f	shop, inn	terra	terrae	f	land	turba	turbae	f	crowd	via	viae	f	street, road, way	villa	villae	f	house, country house	vita	vitae	f	life	amicus	amici	m	friend	animus	animi	m	spirit, soul, mind	annus	anni	m	year	bellum	belli	n	war	caelum	caeli	m	sky, heaven	cibus	cibi	m	food	consilium	consilii	n	plan, idea, advice	deus	dei	m	god	dominus	domini	m	master	donum	doni	n	gift, present	equus	equi	m	horse	filius	filii	m	son	forum	fori	n	forum, market-place, marketplace	gladius	gladii	m	sword	hortus	horti	m	garden	imperium	imperii	n	empire, power, command	legatus	legati	m	commander	liberi	liberorum	m pl	children	libertus	liberti	m	freedman, ex-slave	locus	loci	m	place	maritus	mariti	m	husband	modus	modi	m	manner, way, kind	murus	muri	m	wall	nuntius	nuntii	m	messenger, message, news	periculum	periculi	n	danger	praemium	praemii	n	prize, reward, profit	puer	pueri	m	boy	servus	servi	m	slave-girl, maid	signum	signi	n	sign, signal, seal	templum	templi	n	temple	verbum	verbi	n	word	vestimenta	vestimentorum	n pl	clothes	vinum	vini	n	wine	vir	viri	m	man	amor	amoris	m	love	canis	canis	m	dog	caput	capitis	n	head	civis	civis	m/f	citizen	clamor	clamoris	m	shout	comes	comitis	m/f	comrade, companion	corpus	corporis	n	body	custos	custodis	m/f	guard	dux	ducis	m	leader	flumen	fluminis	n	river	frater	fratris	m	brother	homo	hominis	m	man, human being, person	hostis	hostis	m	enemy	ignis	ignis	m	fire	imperator	imperatoris	m	emperor, commander, general	iter	itineris	n	journey, route, way	iuvenis	iuvenis	m	young man	labor	laboris	m	work	legio	legionis	f	legion	lux	lucis	f	light, daylight	mare	maris	n	sea	mater	matris	f	mother	miles	militis	m	soldier	mons	montis	m	mountain	mors	mortis	f	death	navis	navis	f	ship	nomen	nominis	n	name	nox	noctis	f	night	pars	partis	f	part	pater	patris	m	father	pax	pacis	f	peace	pes	pedis	m	foot, paw	princeps	principis	m	chief, chieftan, emperor	rex	regis	m	king	sanguis	sanguinis	m	blood	senator	senatoris	m	senator	senex	senis	m	old man	soror	sororis	f	sister	tempus	temporis	n	time	urbs	urbis	f	city	uxor	uxoris	f	wife	vox	vocis	f	voice	vulnus	vulneris	n	wound	domus	domus	f	home, house (domi = at home)	manus	manus	f	hand, group of people	vultus	vultus	m	expression, face	dies	diei	m	day	res	rei	f	thing, business, matter	spes	spei	f	hope"
).split(String.fromCharCode(9));

for (let i=0;i<words.length;i+=4) {
  let word = new Latinword(words[i],words[i+1],words[i+2],words[i+3]);
  wordlist.push(word);
}

wordlist[wordlist.findIndex(obj => obj.nomsg === "domus")].ablsg="domo";
wordlist[wordlist.findIndex(obj => obj.nomsg === "domus")].accpl="domos";
wordlist[wordlist.findIndex(obj => obj.nomsg === "filius")].vocsg="fili";

function random(list) {
  return list[Math.floor(Math.random() * list.length)]; //returns random word
}

const display = {
  nom: {sg: false, pl: false},
  voc: {sg: false, pl: false},
  acc: {sg: false, pl: false},
  gen: {sg: false, pl: false},
  dat: {sg: false, pl: false},
  abl: {sg: false, pl: false}
} //This makes decent sense to me

const cng = {
  Case: "",
  Num: "",
  Gender: "",
}

const casecheckboxes = document.querySelectorAll(".casecheckboxes");

casecheckboxes.forEach(box => { // => is shortform for function i.e., function(x) is just x =>; function(x) return y is x => y
  box.addEventListener("click", () => {
    const casename = box.id;
    display[casename].sg = !display[casename].sg;
    display[casename].pl = !display[casename].pl;
  })
})

let currentword = null;
let currentform = "";

function quiz() {
  if (document.getElementById("table").style.display=="block") {
    document.getElementById("table").style.display="none";
  }
  cases.forEach(btn => {
    btn.classList.remove("selected")
  })
  numbers.forEach(btn => {
    btn.classList.remove("selected")
  })
  genders.forEach(btn => {
    btn.classList.remove("selected")
  })
  document.getElementById("displaystatus").innerHTML=""
  const randword = random(wordlist);
  let quizwords = [];

  const Cases = ["nom","voc","acc","gen","dat","abl"];
  const Numbers = ["sg","pl"]

  Cases.forEach(c => {
    Numbers.forEach(n => {
      if (display[c][n] && randword[c + n] !== "-") {
        quizwords.push(randword[c + n])
      }
    })
  })


  if (quizwords.length == 0) {
    document.getElementById("displaystatus").innerHTML="Please select case before quizzing!";
    return;
  }

  const word = random(quizwords);

  currentword = randword;
  currentform = word;

  document.getElementById("quizword").innerHTML=word;
}

function checkans(randomword,randomform) {
    
    if (randomword.gender !== cng.Gender || randomform !== randomword[cng.Case+cng.Num]){
      document.getElementById("displaystatus").innerHTML="Incorrect!";
    }
    else {
      document.getElementById("displaystatus").innerHTML="Correct!";
    }
  }

document.getElementById("quiz").addEventListener("click",function(){
  quiz()
});

document.getElementById("checkans").addEventListener("click",function(){
  this.classList.add("flash");
  setTimeout(() => {
    this.classList.remove("flash");
  }, 100);
  if (!currentword) {
    document.getElementById("displaystatus").innerHTML="Please select case(s) before quizzing!";
    return; //if you click this before next it returns above. fix.
  }
  checkans(currentword,currentform);
});

//Top
const cases = document.querySelectorAll(".cases");

cases.forEach(btn => {
  btn.addEventListener("click", function() {
    cng.Case=this.id.replace("set","");
    cases.forEach(b => b.classList.remove("selected"));
    this.classList.add("selected");
  })
})

const numbers = document.querySelectorAll(".numbers");

numbers.forEach(btn => {
  btn.addEventListener("click", function() {
    cng.Num=this.id.replace("set","");
    numbers.forEach(b => b.classList.remove("selected"));
    this.classList.add("selected");
  })
})

const genders = document.querySelectorAll(".genders");

genders.forEach(btn => {
  btn.addEventListener("click", function() {
    cng.Gender=this.id.replace("set","");
    genders.forEach(b => b.classList.remove("selected"));
    this.classList.add("selected");
  })
})
//Bottom of selection logic

document.getElementById("revealdeclensions").addEventListener("click", function() {
  table()
})

function table() {
  const CASES = ["nom","voc","acc","gen","dat","abl"]
  const NUMBERS = ["sg","pl"]
  CASES.forEach(c => {
    NUMBERS.forEach(n => {
      document.getElementById(`${c}${n}`).innerHTML=currentword[c + n]
    })
  })
  CASES.forEach(c => {
    NUMBERS.forEach(n => {
      document.getElementById(`${c}.${n}`).innerHTML=currentword[c + n]
    })
  })
  document.getElementById("dec").innerHTML=`${currentword.declension} dec.`;
  document.getElementById("currentword").innerHTML=`${currentword.nom}, ${currentword.gen}, ${currentword.gender}`;
  if (document.getElementById("table").style.display=="none") {
    document.getElementById("table").style.display="block";
  }
  else {
    document.getElementById("table").style.display="none";
  }
}

document.getElementById("table").style.display="none";

//Add a score/progress counter for users
//This should have Correct: x/y; Streak: ; Accuracy: z%;
