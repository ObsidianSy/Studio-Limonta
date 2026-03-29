import { Users, Trophy, Heart, Building2, Star } from "lucide-react";
import { ClassType, Testimonial } from "./types";

export const COMPANY_INFO = {
  name: "Studio Limontas",
  subtitle: "Natação Infantil",
  slogan: "Sistema de Aprendizado Limonta's",
  address: "Rua José Russo, 737 - Franca/SP",
  whatsapp: "5516982558594", 
  instagram: "@limontasnatacaoinfantil",
  googleMaps: "https://www.google.com/maps/place/Limonta's+Nata%C3%A7%C3%A3o+Infantil/@-20.5235767,-47.4010658,17z/data=!3m1!4b1!4m6!3m5!1s0x94b0a7540e821791:0xf84dbc4df8feff71!8m2!3d-20.5235767!4d-47.3984909!16s%2Fg%2F11s_x4mvyl?entry=ttu"
};

export const METHODOLOGY_INTRO = {
  title: "Turma Ocean's",
  text: "No Studio Limontas, a Turma Ocean's é uma verdadeira jornada de aventuras na água! Aqui, as crianças vão aprender de maneira divertida e segura, começando com as habilidades básicas de natação e evoluindo até dominar os nados mais incríveis. Cada aula é uma exploração aquática, onde as crianças ganham confiança e ficam mais fortes a cada desafio."
};

// Colors updated to match the flyers exactly
export const CLASSES: ClassType[] = [
  {
    id: "teteia",
    title: "TETÉIA",
    subtitle: "A Estrelinha do Mar",
    mascot: "⭐",
    ageRange: "6 meses a 1 ano e 6 meses",
    duration: "30 min",
    description: "Os pequenos exploradores começam sua jornada! De forma leve e divertida, aprendem a se sentir seguros na água ao lado de quem amam.",
    learnings: [
      "Adaptação ao meio líquido",
      "Vínculo afetivo com os pais",
      "Equilíbrio e sustentação",
      "Pequenos mergulhos"
    ],
    color: "bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E]" // Red/Pinkish for Starfish contrast
  },
  {
    id: "tico-tico",
    title: "TICO TICO",
    subtitle: "O Pequeno Caranguejo",
    mascot: "🦀",
    ageRange: "1 ano e 6 meses a 2 anos e 6 meses",
    duration: "30 min",
    description: "Hora de virar caranguejinho! Começam a se movimentar com mais liberdade e confiança, sempre acompanhados.",
    learnings: [
      "Flutuação dorsal e ventral",
      "Movimentação de pernas",
      "Deslocamento independente",
      "Socialização"
    ],
    color: "bg-gradient-to-br from-[#FF9F43] to-[#FFC076]" // Orange for Crab
  },
  {
    id: "coral",
    title: "CORAL",
    subtitle: "O Cavalo-Marinho",
    mascot: "🐠", 
    ageRange: "2 anos e 6 meses a 3 anos e 9 meses",
    duration: "45 min",
    description: "Como cavalos-marinhos, ganham equilíbrio e exploram a piscina como verdadeiros aventureiros.",
    learnings: [
      "Entrada e saída segura",
      "Nado cachorrinho",
      "Controle de respiração",
      "Saltos da borda"
    ],
    color: "bg-gradient-to-br from-[#5f27cd] to-[#9b59b6]" // Purple for Seahorse
  },
  {
    id: "pingo",
    title: "PINGO",
    subtitle: "O Polvo Explorador",
    mascot: "🐙",
    ageRange: "3 anos e 10 meses a 5 anos",
    duration: "45 min",
    description: "Polvinhos espertos! Muito mais autonomia para soltar bolhinhas e pegar tesouros no fundo da piscina.",
    learnings: [
      "Nadar sem flutuadores (curto)",
      "Mergulho de olhos abertos",
      "Saltos em pé",
      "Imersão completa"
    ],
    color: "bg-gradient-to-br from-[#ff5252] to-[#ff7979]" // Red/Pink for Octopus
  },
  {
    id: "guga",
    title: "GUGA",
    subtitle: "A Tartaruga Nadadora",
    mascot: "🐢",
    ageRange: "4 a 6 anos",
    duration: "45 min",
    description: "Tartarugas destemidas! O momento de nadar sem ajuda e aprender os estilos de nado dos campeões.",
    learnings: [
      "Introdução aos estilos",
      "Nado submerso",
      "Deslize na água",
      "Coordenação motora fina"
    ],
    color: "bg-gradient-to-br from-[#10ac84] to-[#1dd1a1]" // Green for Turtle
  },
  {
    id: "splash",
    title: "SPLASH",
    subtitle: "A Foca Mergulhadora",
    mascot: "🦭",
    ageRange: "7 anos em diante",
    duration: "45 min",
    description: "Dominando o crawl, costas e borboleta, deslizando na água como se estivessem surfando.",
    learnings: [
      "Técnica de Crawl e Costas",
      "Iniciação ao Borboleta",
      "Resistência respiratória",
      "Mergulhos profundos"
    ],
    color: "bg-gradient-to-br from-[#0abde3] to-[#48dbfb]" // Cyan for Seal
  },
  {
    id: "tritao",
    title: "TRITÃO",
    subtitle: "Como os Golfinhos",
    mascot: "🐬",
    ageRange: "A partir dos 7 anos",
    duration: "45 min",
    description: "Desafiando as águas! Aperfeiçoando movimentos e aprendendo habilidades de sobrevivência.",
    learnings: [
      "Crawl com respiração lateral",
      "Pernada de Peito",
      "Rolamentos e viradas",
      "Nado sobrevivência"
    ],
    color: "bg-gradient-to-br from-[#2e86de] to-[#54a0ff]" // Blue for Dolphin
  },
  {
    id: "tida",
    title: "TIDA",
    subtitle: "A Baleia Orca",
    mascot: "🐋",
    ageRange: "A partir dos 10 anos",
    duration: "45 min",
    description: "Nível avançado! Aprimorando cada movimento para nadar longas distâncias como uma Orca.",
    learnings: [
      "Refinamento dos 4 estilos",
      "Saídas de competição",
      "Resistência aeróbica",
      "Autossalvamento avançado"
    ],
    color: "bg-gradient-to-br from-[#222f3e] to-[#576574]" // Dark Grey/Black for Orca
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Paula",
    role: "Mãe do Pedro",
    text: "O método lúdico com os animais fez meu filho perder o medo de água em duas aulas!"
  },
  {
    name: "Carlos Eduardo",
    role: "Pai da Sofia",
    text: "Incrível ver a evolução técnica dela, já está nadando sozinha e mergulhando fundo."
  },
  {
    name: "Mariana Silva",
    role: "Mãe do Lucas",
    text: "A aula para bebês é apaixonante. Momentos únicos de conexão com meu filho."
  }
];