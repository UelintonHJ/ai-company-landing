import {
    FaAws,
    FaBolt,
    FaBrain,
    FaChartLine,
    FaCloud,
    FaHubspot,
    FaLock,
    FaMicrosoft,
    FaRegFileAlt,
    FaRobot,
    FaSalesforce,
    FaSlack,
    FaSnowflake,
    FaStripe,
} from 'react-icons/fa'

export const stats = [
    { label: 'Models Deployed', value: '280+' },
    { label: 'Avg. Automation Gain', value: '127%' },
    { label: 'Enterprise Uptime', value: '99.99%' },
    { label: 'Global Clients', value: '42' },
]

export const features = [
    {
        icon: FaBolt,
        title: 'Automação com IA',
        description:
            'Automatize fluxos de trabalho repetitivos com agentes inteligentes que reduzem o trabalho manual e aceleram as operações do negócio.',
    },
    {
        icon: FaChartLine,
        title: 'Análise em Tempo Real',
        description:
            'Transforme dados complexos em insights acionáveis com dashboards em tempo real e análise preditiva de tendências.',
    },
    {
        icon: FaLock,
        title: 'Segurança de nível empresarial',
        description:
            'Proteja seus dados com pipelines criptografados, controles de acesso robustos e uma infraestrutura preparada para conformidade.',
    },
]

export const service = [
    {
        icon: FaRobot,
        name: 'API de Assistente Inteligente',
        summary: 'Conecte uma IA conversacional para apoiar as equipes e as experiências com clientes.',
    },
    {
        icon: FaBrain,
        name: 'Copiloto para o Fluxo de Trabalho',
        summary: 'Aumente operações com sugestões conscientes do contexto e automação com um clique.'
    },
    {
        icon: FaChartLine,
        name: 'Inteligência Preditiva',
        summary: 'Preveja a demanda, detecte riscos e otimize decisões com modelos de aprendizado de máquina.'
    },
]

export const showcase = [
    {
        icon: FaCloud,
        title: 'Centro de Comando',
        description: 'Monitore todos os fluxos de trabalho de IA, alertas e a saúde do sistema em um único painel em tempo real.',
        metric: '98.2% de precisão',
    },
    {
        icon: FaRobot,
        title: 'Estúdio de Automação',
        description: 'Crie automações de IA sem código com gatilhos, roteamento e ciclos de aprovação.',
        metric: 'Configuração 3.4x mais rápida',
    },
    {
        icon: FaChartLine,
        title: 'Motor de Insights',
        description: 'Revele as tendências de demanda, risco de cancelamento e oportunidades de conversão antes que aconteçam.',
        metric: '+31% de aumento na conversão',
    },
]

export const workflowSteps = [
    {
        step: '01',
        title: 'Descoberta & Mapeamento de Dados',
        detail: 'Identificamos seus fluxos de trabalho de maior impacto e mapeamos fontes de dados, KPIs e restrições.',
    },
    {
        step: '02',
        title: 'Plano Piloto em 14 Dias',
        detail: 'Nosso time entrega um projeto de nível de produção com desempenho mensurável e metas claras de ROI.',
    },
    {
        step: '03',
        title: 'Escala & Otimização',
        detail: 'Nós ajustamos continuamente os modelos, monitoramos desvios e expandimos automações por todos os departamentos.'
    },
]

export const integrations = [
    { name: 'Slack', icon: FaSlack },
    { name: 'HubSpot', icon: FaHubspot },
    { name: 'Salesforce', icon: FaSalesforce },
    { name: 'Notion', icon: FaRegFileAlt },
    { name: 'AWS', icon: FaAws },
    { name: 'Azure', icon: FaMicrosoft },
    { name: 'Stripe', icon: FaStripe },
    { name: 'Snowflake', icon: FaSnowflake },
]

export const testimonials = [
    {
        quote:
            'Synapse nos ajudou a lançar um assistente de suporte de IA em duas semanas e reduziu o tempo de resposta em 63%.',
        author: 'Mariana Albuquerque',
        role: 'VP Product, Atlas Group',
    },
    {
        quote:
            'O motor preditivo mostrou oportunidades de receita que nunca tínhamos capturado com nossa stack anterior.',
        author: 'Fernando Azevedo',
        role: 'COO, Nexora',
    },
    {
        quote:
            'O time deles parece uma extensão do nosso - estratégico, ágil e muito técnico.',
        author: 'Renata Duarte',
        role: 'Head of Ops, Vertex',
    },
]

export const pricing = [
    {
        tier: 'Starter',
        monthly: 'R$ 500',
        annual: 'R$ 4.800',
        description: 'Para equipes em estágio inicial validando fluxos de trabalho de IA.',
        features: ['1 fluxo de trabalho com IA', 'Análises básicas', 'Suporte por e-mail'],
    },
    {
        tier: 'Growth',
        monthly: 'R$ 1.500',
        annual: 'R$ 14.400',
        description: 'Para escalar equipes que entregam produtos com inteligência artificial.',
        features: ['Fluxos de trabalho ilimitadas', 'Análises avançadas', 'Suporte prioritário'],
        popular: true,
    },
    {
        tier: 'Enterprise',
        monthly: 'Sob consulta',
        annual: 'Sob consulta',
        description: 'IA essencial para escala corporativa.',
        features: ['Implantação privada', 'SSO + compliance', 'Arquiteto de IA dedicado'],
    },
]

export const faqs = [
    {
        q: 'Quanto tempo leva para implementar meu primeiro fluxo de automação com IA?',
        a: 'A maioria das equipes implementa seu primeiro fluxo de trabalho com IA em 7 a 14 dias utilizando nosso onboarding guiado, templates prontos e suporte especializado.',
    },
    {
        q: 'A plataforma oferece suporte para implantação em infraestrutura privada ou local?',
        a: 'Sim. Os planos Professional e Enterprise oferecem suporte para implantação em nuvem privada, VPCs e ambientes híbridos, atendendo aos requisitos de segurança, conformidade e governança da sua organização.',
    },
    {
        q: 'Podemos conectar nossas ferramentas e fontes de dados existentes?',
        a: 'Sim. Oferecemos integrações nativas com CRMs, data warehouses, ferramentas de atendimento e APIs personalizadas, permitindo conectar seus sistemas existentes de forma rápida e segura.',
    }
]

export const team = [
    { name: 'Uelinton Janke', role: 'CEO & AI Strategy Lead' },
    { name: 'Renata Oliveira', role: 'CTO & ML Architect' },
    { name: 'Daniel Vasconcelos', role: 'Head of Product' },
]