import { Users, Trophy, Heart, Building2, Star } from "lucide-react";
import { ClassType, Testimonial } from "./types";

export const COMPANY_INFO = {
  name: "Tio Matheus",
  subtitle: "Personal Aquático",
  slogan: "Natação Infantil com Técnica e Diversão",
  address: "Atendimento Exclusivo - Franca/SP",
  phone: "(16) 99300-8381",
  whatsapp: "5516993008381",
  instagram: "@tiomatheus.natacao",
  instagramUrl: "https://www.instagram.com/tiomatheus.natacao?igsh=MWE0MmlucmF5cHV0Mg%3D%3D",
};

export const METHODOLOGY_INTRO = {
  title: "Método Tio Matheus",
  text: "Com o Tio Matheus, cada aula é uma verdadeira jornada de aventuras na água! As crianças aprendem de maneira divertida e segura, começando com as habilidades básicas e evoluindo até dominar os nados mais incríveis. Uma exploração aquática onde ganham confiança e ficam mais fortes a cada desafio."
};

// Colors updated to match the flyers exactly
export const CLASSES: ClassType[] = [
  {
    id: "ondinha",
    title: "ONDINHA",
    subtitle: "Primeiros Passinhos na Água",
    mascot: "ondinha",
    ageRange: "6 meses a 1 ano e 6 meses",
    duration: "30 min",
    description: "Os pequenos exploradores começam sua jornada! De forma leve e divertida, aprendem a se sentir seguros na água ao lado de quem amam.",
    learnings: [
      "Adaptação ao meio líquido",
      "Vínculo afetivo com os pais",
      "Equilíbrio e sustentação",
      "Pequenos mergulhos"
    ],
    color: "bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E]"
  },
  {
    id: "bolhinha",
    title: "BOLHINHA",
    subtitle: "Descobrindo a Água",
    mascot: "bolhinha",
    ageRange: "1 ano e 6 meses a 2 anos e 6 meses",
    duration: "30 min",
    description: "Hora de soltar as primeiras bolhinhas! Começam a se movimentar com mais liberdade e confiança, sempre acompanhados.",
    learnings: [
      "Flutuação dorsal e ventral",
      "Movimentação de pernas",
      "Deslocamento independente",
      "Socialização"
    ],
    color: "bg-gradient-to-br from-[#FF9F43] to-[#FFC076]"
  },
  {
    id: "correnteza",
    title: "CORRENTEZA",
    subtitle: "Ganhando Confiança",
    mascot: "correnteza",
    ageRange: "2 anos e 6 meses a 3 anos e 9 meses",
    duration: "45 min",
    description: "Ganhando equilíbrio e explorando a piscina como verdadeiros aventureiros aquáticos.",
    learnings: [
      "Entrada e saída segura",
      "Nado cachorrinho",
      "Controle de respiração",
      "Saltos da borda"
    ],
    color: "bg-gradient-to-br from-[#5f27cd] to-[#9b59b6]"
  },
  {
    id: "mare",
    title: "MARÉ",
    subtitle: "Explorando o Fundo",
    mascot: "mare",
    ageRange: "3 anos e 10 meses a 5 anos",
    duration: "45 min",
    description: "Muito mais autonomia para soltar bolhinhas e pegar tesouros no fundo da piscina!",
    learnings: [
      "Nadar sem flutuadores (curto)",
      "Mergulho de olhos abertos",
      "Saltos em pé",
      "Imersão completa"
    ],
    color: "bg-gradient-to-br from-[#ff5252] to-[#ff7979]"
  },
  {
    id: "rio",
    title: "RIO",
    subtitle: "Nadando Sozinho",
    mascot: "rio",
    ageRange: "4 a 6 anos",
    duration: "45 min",
    description: "O momento de nadar sem ajuda e aprender os estilos de nado dos campeões!",
    learnings: [
      "Introdução aos estilos",
      "Nado submerso",
      "Deslize na água",
      "Coordenação motora fina"
    ],
    color: "bg-gradient-to-br from-[#10ac84] to-[#1dd1a1]"
  },
  {
    id: "cachoeira",
    title: "CACHOEIRA",
    subtitle: "Dominando os Estilos",
    mascot: "cachoeira",
    ageRange: "7 anos em diante",
    duration: "45 min",
    description: "Dominando o crawl, costas e borboleta, deslizando na água com técnica e confiança.",
    learnings: [
      "Técnica de Crawl e Costas",
      "Iniciação ao Borboleta",
      "Resistência respiratória",
      "Mergulhos profundos"
    ],
    color: "bg-gradient-to-br from-[#0abde3] to-[#48dbfb]"
  },
  {
    id: "tsunami",
    title: "TSUNAMI",
    subtitle: "Velocidade e Técnica",
    mascot: "tsunami",
    ageRange: "A partir dos 7 anos",
    duration: "45 min",
    description: "Aperfeiçoando movimentos e aprendendo habilidades avançadas de natação e sobrevivência.",
    learnings: [
      "Crawl com respiração lateral",
      "Pernada de Peito",
      "Rolamentos e viradas",
      "Nado sobrevivência"
    ],
    color: "bg-gradient-to-br from-[#2e86de] to-[#54a0ff]"
  },
  {
    id: "oceano",
    title: "OCEANO",
    subtitle: "Nível Avançado",
    mascot: "oceano",
    ageRange: "A partir dos 10 anos",
    duration: "45 min",
    description: "Nível máximo! Aprimorando cada movimento para nadar longas distâncias com excelência.",
    learnings: [
      "Refinamento dos 4 estilos",
      "Saídas de competição",
      "Resistência aeróbica",
      "Autossalvamento avançado"
    ],
    color: "bg-gradient-to-br from-[#222f3e] to-[#576574]"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Paula",
    role: "Mãe do Pedro",
    text: "Gente, meu filho tinha PAVOR de água e em duas aulas já tava pulando na piscina! O jeito com os bichinhos ganhou ele demais.",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg"
  },
  {
    name: "Carlos Eduardo",
    role: "Pai da Sofia",
    text: "Cara, a Sofia tá nadando sozinha já! Não acreditei quando vi ela mergulhando no fundo sem medo nenhum. Super recomendo!",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Mariana Silva",
    role: "Mãe do Lucas",
    text: "A aula de bebê é a melhor coisa! Eu e meu filho curtimos demais juntos, aquele momento não tem preço.",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg"
  }
];