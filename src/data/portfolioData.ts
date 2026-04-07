import ibdnImg    from '../img/logo-ibdn.png';
import lunnaImg   from '../img/lunna-logo.png'; 
import pilatesImg from '../img/logo_define_pilates.jpg'; 
import loginImg   from '../img/device_login.png';
import iotImg     from '../img/iot.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  image: string;
  placeholderColor: string; 
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IBDN — Gestão de Selos",
    description:
      "Sistema web para gerenciamento e emissão de selos certificadores do IBDN, com controle de estoque, rastreabilidade e painel administrativo completo.",
    tags: ["Web", "Gestão", "Backend", "Python", "FastAPI", "MySQL"],
    githubUrl: "https://github.com/DSM2SEM2025/IBDN",
    image: ibdnImg,
    placeholderColor: "#EFF6FF",
  },
  {
    id: 2,
    title: "Lunna — Comunicação Escolar",
    description:
      "Plataforma de comunicação entre escola, pais e alunos com notificações em tempo real, agenda integrada e relatórios pedagógicos.",
    tags: ["SaaS", "Educação", "Mobile"],
    githubUrl: "https://github.com/LunnaCompany",
    image: lunnaImg,
    placeholderColor: "#F0FDF4",
  },
  {
    id: 3,
    title: "Define Pilates — Gestão de Aulas",
    description:
      "Aplicação para estúdio de Pilates com agendamento online, controle de clientes, histórico de aulas e integração com pagamentos.",
    tags: ["React", "Agendamento", "Fintech"],
    githubUrl: "https://github.com/PI-3-Semestre/projeto-estudio-pilates",
    image: pilatesImg,
    placeholderColor: "#FFF7ED",
  },
  {
    id: 4,
    title: "Device Login — Fundamentos Java",
    description:
      "Implementação de sistema de autenticação multi-dispositivo com Java, explorando OOP, padrões de projeto e estruturas de dados.",
    tags: ["Java", "Auth", "OOP"],
    githubUrl: "https://github.com/DaviBMachado/device_login",
    image: loginImg,
    placeholderColor: "#FFF1F2",
  },
  {
    id: 5,
    title: "Automação IoT — Controle de Acesso",
    description:
      "Sistema embarcado de controle de acesso via senha física, utilizando microcontroladores, sensores e lógica de automação residencial.",
    tags: ["IoT", "Embarcado", "Automação"],
    githubUrl: "https://github.com/DaviBMachado/IOT-P1-Senha_porta",
    image: iotImg,
    placeholderColor: "#F5F3FF",
  },
];

export const personalInfo = {
  name: "Davi Machado",
  role: "Desenvolvedor Backend & Cloud",
  headline: "Transformo desafios complexos em arquiteturas escaláveis e inteligentes com Python e AWS.",
  bio: "Sou um Desenvolvedor Backend com foco em Python, especializado na construção de infraestruturas em nuvem e na implementação prática de agentes de Inteligência Artificial. \n\nMinha abordagem une a velocidade exigida por projetos inovadores à robustez técnica necessária para sistemas corporativos, entregando soluções que otimizam processos e geram valor real.",
  skills: [
    "Python", "AWS", "Node.js", "Docker",
    "DynamoDB", "Machine Learning", "REST APIs", "TypeScript",
  ],
  social: {
    github: "https://github.com/DaviBMachado",
    linkedin: "https://www.linkedin.com/in/davibmachado/",
    email: "davibernardes021@gmail.com",
  },
};
