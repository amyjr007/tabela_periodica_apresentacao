/* ============================================================
   O SERVIÇO QUE GUARDA A AULA
   A apresentação é um arquivo só, mais os sons, as imagens e as
   fontes. Guardados aqui, ela abre sem internet — que é o que
   costuma faltar na sala de aula.

   A CHAVE DO CACHE LEVA A VERSÃO. Trocando a versão do app, o nome
   muda, o cache velho é apagado na ativação e o novo se enche do
   zero: é assim que uma aula atualizada chega ao aparelho já
   instalado, sem ninguém ter de limpar nada à mão.
   ============================================================ */
const VERSAO = 'v1.6';
const CACHE  = 'tabela-periodica-' + VERSAO;

/* o essencial, guardado na instalação */
const CASCA = [
  './',
  './index.html',
  './tabela-periodica.html',
  './manifest.webmanifest',
  './icones/icone-192.png',
  './icones/icone-512.png',
  './icones/icone-maskable-192.png',
  './icones/icone-maskable-512.png',
  './icones/icone.svg',
  './Imagens/amauri_jr.jpg',
  './Imagens/pauling.png',
  './Audios/right.mp3',
  './Audios/error.mp3',
  './Audios/funfare.mp3',
  './Audios/lowscore.mp3',
  './Audios/statistics.mp3',
  './Audios/flipcard.mp3',
  './Audios/exato!.mp3',
  './fontes/fontes.css',
  './fontes/space-grotesk-normal-latin.woff2',
  './fontes/space-grotesk-normal-latin-ext.woff2',
  './fontes/ibm-plex-sans-normal-latin.woff2',
  './fontes/ibm-plex-sans-normal-latin-ext.woff2',
  './fontes/ibm-plex-sans-400-italic-latin.woff2',
  './fontes/ibm-plex-sans-400-italic-latin-ext.woff2',
  './fontes/ibm-plex-mono-400-normal-latin.woff2',
  './fontes/ibm-plex-mono-400-normal-latin-ext.woff2',
  './fontes/ibm-plex-mono-500-normal-latin.woff2',
  './fontes/ibm-plex-mono-500-normal-latin-ext.woff2'
];

self.addEventListener('install', (ev) => {
  /* addAll é tudo-ou-nada: um arquivo que falte derruba a instalação
     inteira. Aqui cada um vai por si, e o que faltar simplesmente não
     entra — a aula abre na mesma, buscando esse pela rede. */
  ev.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(CASCA.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const daCasa = url.origin === self.location.origin;

  if (daCasa){
    /* PRIMEIRO O QUE ESTÁ GUARDADO, e a rede atrás para atualizar.
       Numa sala sem internet a aula abre na hora; havendo rede, a
       cópia guardada se renova para a próxima vez. */
    ev.respondWith(
      caches.match(req).then(guardado => {
        const daRede = fetch(req).then(resp => {
          if (resp && resp.ok) caches.open(CACHE).then(c => c.put(req, resp.clone()));
          return resp;
        }).catch(() => guardado);
        return guardado || daRede;
      })
    );
    return;
  }

  /* De fora não vem mais nada: desde a v1.4 as fontes moram no
     repositório e a aula inteira é da casa. Se algum dia voltar a
     haver um pedido externo, ele segue para a rede como sempre —
     este serviço não se mete. */
});
