# Tabela Periódica Interativa e Moderna

Apresentação interativa de Química para o Ensino Médio — **Prof. Amauri Junior**.

Um arquivo só, sem instalação: abra `tabela-periodica.html` no navegador
(Chromebook, PC ou projetor). O palco é fixo em 1280×720 e a tela apenas dá
zoom nele, então a aula fica idêntica em qualquer lugar.

## Sem internet

A aula também se instala. Aberta pelo endereço publicado, o navegador oferece
instalá-la; a partir daí abre em tela cheia, com ícone próprio, e **sem
depender da rede da escola** — os slides, os sons, as imagens e as fontes ficam
guardados no aparelho.

Nada é pedido para fora: desde a v1.4 as fontes moram em `fontes/`, servidas
do próprio repositório. Antes vinham do Google Fonts, e numa primeira abertura
sem rede a aula recuava para as fontes do sistema.

Para atualizar a aula num aparelho já instalado, basta subir a versão em
`sw.js`: o cache velho é apagado sozinho.

## As 3 cores do tema

papel-lavanda (fundo) · índigo (estrutura) · âmbar (destaque). As famílias da
tabela têm paleta própria, declarada como `--cat-*` no topo do CSS.

## Os slides

1. Capa
2. Os critérios de Organização — *A lei periódica*
3. As Coordenadas Periódicas — *O grupo e a família*
4. Os Tipos de Elementos — *Metais, Ametais e Gases Nobres*
5. As principais famílias — *Alcalinos, Alcalinos-terrosos, Calcogênios e Halogênios*
6. Os Grupos A e B — *Os elementos principais*
7. Os Lantanídeos e os Actinídeos
8. A Natureza dos Elementos
9. A Tabela e os Elétrons de Valência
10. A Tabela e o Diagrama de Pauling
11. A Tabela e a Distribuição Eletrônica

## Na aula

| tecla | o que faz |
|---|---|
| ← → | slide anterior / próximo (o clique na tela adianta a cena, nunca o slide) |
| Espaço | avança |
| 1…9 | vai direto ao slide |
| O | vê todos os slides |
| A | notas de aula deste slide |
| P | caneta · L laser · Q quadro branco |
| F | tela cheia |
| H | atalhos |

## Na montagem

**G** abre o modo montagem: um dedo arrasta qualquer peça, dois dedos em pinça
mudam o tamanho (a roda do mouse faz o mesmo), **R** devolve o slide ao lugar.
**Ctrl+C** copia as posições e os tamanhos de tudo o que está na tela;
**Ctrl+Shift+C**, os da apresentação inteira.

## Os cubos e a tabela viva

Cada carta é um **cubo de seis faces iguais** — o número, o símbolo e a
massa em todas —, o mesmo do app do aluno: gire para onde girar, a carta
não perde a cara, e cai sempre de pé (`correcaoDeLeitura`). Como a carta
daqui é 58 × 48, o cubo é um bloco com a profundidade da largura: no giro
de lado a face que chega é igual à que sai.

Parada, a carta é plana e leve: as outras cinco faces só existem enquanto
ela gira, e a troca de volta pela carta de frente não se vê. A passagem
de slide continua a virar a carta plana — são as 118 de uma vez.

**A tabela viva.** Com a mesa pronta e ninguém mexendo há 7 segundos
(`VIDA.OCIO`), a tabela respira sozinha: um cubo de cada vez gira, salta
ou pula girando, e as famílias sobem e descem numa onda. Qualquer tecla,
clique ou toque a cala na hora. Não entra na capa, no quiz, nos jogos, no
mundo quântico nem na montagem.

Para coreografias: `TP.gira(26, {eixo:'y', graus:90})`, `TP.salta(...)` e
`TP.pulaGirando(...)`, os mesmos do app do aluno.
