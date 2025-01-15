import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [
      { id: 1, title: 'Poskakujúc cez stôl, zhodila fľašu vína na zošit s domácimi úlohami z matematických princípov a na notebooku napísala "fyyyyyyyyyyyyyyyyyyyyyč".', content: 'Áno, zlatá, chápem ťa.' },
      { id: 2, title: 'V noci bol hurikan', content: 'Prečo, prečo, prečo musí radosť z toho, že vietor o štvrtej ráno vyrazil dvere do mojej spálne, nevyhnutne vyjadriť tancom na mojej hlave?!' },
      { id: 3, title: 'Problémy s písaním domácej úlohy', content: 'Ukradla mi gumu. Hovorí, že nie je chutná, ale nevráti ju.' },
    ],
    story: [
        { id: 1, title: 'Túlavá mačka', content: 'Keď mala mačka niekoľko mesiacov, majitelia ju vyhodili na ulicu. Túľavú mačku zobrali dobrovoľníci a odovzdali do mačacieho útulku. Tam ju sterilizovali. Z útulku ju vzal môj sused a pomenoval ju Musia. Chcel, aby mačka chytala myši v lese pri jeho vidieckom dome, priamo vedľa ktorého som práve bývala. Prichádzal do tohto domu cez víkendy a v pracovné dni sa vrátil do mesta. Mačka bežala za odchádzajúcim autom každý raz, ale sused nezastavoval.' },
        { id: 2, title: 'Mačka domáca', content: 'Na jeseň sa ochladilo, a mačka začala prichádzať ku mne, aby sa zohrievala a jedla. Bola veľmi láskavá a veľmi hladná, pretože sa živila myšami a nakazila sa červami. Raz prišla so zranenou tvárou. Ošetrila som ránku a napísala som susedovi, že môžem ošetriť ranu mačky, ak mu to nebude vadiť. Sused nechcel vziať mačku domov na zimu. Preto mi namiesto toho ponúkol, aby som si mačku zobrala k sebe. Súhlasila som, vzala mačku, pomenovala ju Dýma a vyliečila ju od všetkého, čím sa nakazila na ulici.' },
        { id: 3, title: 'Skrotenie', content: 'Najprv bola taká hladná, že po kŕmení liezla do odpadkového vedra alebo do kuchynskej umývadlovej misy lízať steny. Skočila na stôl, skákala z neho s kúskom syra v zuboch a utekala chodbou. Rozbila moj obľúbený tanier od majstrov zo Syserty a obľúbený tanier manžela od majstrov z Modry - kradla jedlo položené na tanieroch a zhodila ich zo stola. Ale postupne hlad prešiel a teraz len je svoje granule a žiada kyslú smotanu. Miluje sedieť niekomu na pleci alebo aspoň na kolenách. Môj manžel ju naučil dvom príkazom: "Ku mne!" a "Sedieť!". Jej je nuda hrať sa s mačacími hračkami, pretože je profesionálnou myšiarkou.' },
      ],
  }),
  actions: {
    addPost(post: { id: number; title: string; content: string }) {
      this.posts.push(post);
    },
  },
});
