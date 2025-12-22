
import { Target, Zap, Shield, Activity } from "lucide-react";
import { ClassType, Testimonial } from "./types";

export const COMPANY_INFO = {
  name: "MATHEUS MOREIRA",
  subtitle: "PERSONAL AQUÁTICO",
  slogan: "TREINAMENTO TÉCNICO. PERFORMANCE REAL.",
  address: "Atendimento Exclusive - Franca/SP",
  whatsapp: "5516999999999",
  instagram: "@matheusmoreira.personal",
  googleMaps: "https://www.google.com/maps"
};

export const METHODOLOGY_INTRO = {
  title: "MÉTODO MM PERFORMANCE",
  text: "Esqueça as aulas convencionais. Minha abordagem une fisiologia aplicada e biomecânica para entregar resultados em tempo recorde. Cada movimento é analisado, cada treino é único."
};

export const CLASSES: ClassType[] = [
  {
    id: "performance",
    title: "PERFORMANCE",
    subtitle: "ALTA INTENSIDADE",
    mascot: "⚡",
    ageRange: "Foco em Resultados",
    duration: "60 min",
    description: "Análise biomecânica completa e periodização de treinos para atletas e amadores que buscam o topo.",
    learnings: ["Eficiência de nado", "Ganho de potência", "Redução de tempos", "Preparação para provas"],
    color: "bg-slate-900"
  },
  {
    id: "zero-medo",
    title: "SUPERAÇÃO",
    subtitle: "CONTROLE TOTAL",
    mascot: "🌊",
    ageRange: "Adultos",
    duration: "45 min",
    description: "Metodologia específica para desbloqueio psicológico e domínio absoluto do meio líquido.",
    learnings: ["Respiratórios", "Segurança em profundidade", "Flutuação técnica", "Autonomia real"],
    color: "bg-brand-blue"
  },
  {
    id: "kids-exclusive",
    title: "KIDS VIP",
    subtitle: "DESENVOLVIMENTO",
    mascot: "🛡️",
    ageRange: "A partir de 3 anos",
    duration: "45 min",
    description: "Acompanhamento individual para crianças, focado em segurança extrema e técnica refinada desde cedo.",
    learnings: ["Sobrevivência", "Estilos básicos", "Coordenação motora", "Vínculo técnico"],
    color: "bg-brand-cyan"
  },
  {
    id: "reab",
    title: "SAÚDE/REAB",
    subtitle: "QUALIDADE VIDA",
    mascot: "🧬",
    ageRange: "Específico",
    duration: "50 min",
    description: "Recuperação de lesões e fortalecimento muscular com baixo impacto e alta precisão técnica.",
    learnings: ["Alívio de dores", "Fortalecimento", "Mobilidade", "Condicionamento"],
    color: "bg-teal-600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "RICARDO MENDES",
    role: "ATLETA AMADOR",
    text: "Em 3 meses de personal com o Matheus, baixei meu tempo nos 100m em 12 segundos. O foco técnico é outro nível."
  },
  {
    name: "JULIANA COSTA",
    role: "ALUNA ZERO MEDO",
    text: "Tinha trauma de infância. Com a metodologia dele, hoje nado em águas abertas com segurança."
  },
  {
    name: "ROBERTO ALVES",
    role: "REABILITAÇÃO",
    text: "Minha hérnia de disco parou de incomodar. O treino é cirúrgico e adaptado perfeitamente."
  }
];
