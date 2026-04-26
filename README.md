# IESGestão - Capacitação Integrada em Gestão Pública

![React](https://img.shields.io/badge/React-18.0-blue?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)

**IESGestão** é uma plataforma educacional e gamificada voltada para servidores, gestores e discentes de Instituições de Ensino Superior (IES) públicas brasileiras. O projeto tem como objetivo traduzir o jargão burocrático e a complexidade administrativa (como leis de licitações, matrizes orçamentárias e conceitos de auditoria) em conhecimento prático, acessível e engajador.

---

## 🎯 Objetivo e Funcionalidades

A administração de uma faculdade pública esbarra em diversos desafios legais e orçamentários. O IESGestão entrega um **Ecossistema de Aprendizagem** composto por:

### 1. 📚 Trilhas de Capacitação (Wiki)
Uma wiki inteligente embutida na plataforma, categorizada pelos principais pilares da administração acadêmica:
*   **Estratégia:** Indissociabilidade do Tripé (Ensino, Pesquisa e Extensão), PDI e o uso de BSC no setor público.
*   **Orçamento e Finanças:** Fases da despesa (Empenho, Liquidação, Pagamento), Leis orçamentárias (PPA, LDO, LOA), contingenciamento e Matriz OCC.
*   **Licitações e Contratos:** O impacto da Nova Lei de Licitações (14.133/2021), do ETP ao pregão e à fiscalização contratual.
*   **Custos:** Classificação entre despesas diretas, indiretas e as variáveis na tomada de decisão gerencial.
*   **Auditoria e Controle:** Prestação de contas (TCU, TCE), Accountability e governança nos programas de fomento.

### 2. 📖 Glossário Interativo In-Text (Tooltips)
Os conceitos chave descritos no site são interativos. Ao passar o mouse sobre siglas como **PDI**, **SIAFI** ou **LOA**, a plataforma exibe uma explicação rápida (modal/tooltip) com a definição exata e links para detalhamento completo, sem a necessidade de sair da tela de leitura principal.

### 3. 🎮 Goyases: O RPG da Gestão Universitária
O grande diferencial da plataforma. O Goyases é um *Serious Game* no estilo roguelike/management onde o usuário assume a cadeira de Diretor(a) do campus num cenário de crise (início de pandemia). 
* Você deve tomar decisões rápidas lidando com contingenciamento de bolsas, greves invisíveis, invasão de laboratórios e cortes nos contratos de limpeza.
* Mostra a "dor e a delícia" da caneta do Reitor/Diretor. O jogo utiliza do humor corporativo acadêmico e das duras realidades do balanço fiscal (com métricas de **Academia**, **Cofre** e **Infra**).

### 4. 🔍 Busca Global Dinâmica (`Cmd+K`)
Atalho para abrir a barra de pesquisa onipresente capaz de varrer simultaneamente links externos de apoio da Transparência, páginas internas e todos os termos técnicos do Glossário Institucional.

---

## 📦 Stack Tecnológica (Frontend)

*   **React 18** (Functional Components + Hooks)
*   **TypeScript** (Para tipagem das estruturas de dados do glossário, eventos do jogo e metadados de busca)
*   **Tailwind CSS** (Estilização responsiva, customização de scrollbars e micro-interações)
*   **Framer Motion** (Utilizado na animação de Tooltips flutuantes nos links de glossário in-line e modais)
*   **Lucide React** (Pacote rico de iconografia)
*   **Vite** (Build tool e ambiente de dev ultrarrápido)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* Node.js (Versão 18 ou superior)
* NPM ou Yarn

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/ies-gestao-educacional.git
   cd ies-gestao-educacional
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Gere as rotas e rode o servidor local:**
   ```bash
   npm run dev
   ```

4. **Acesse via web:**
   O terminal ira devolver a porta rodando (normalmente `http://localhost:5173` ou `http://localhost:3000`).
   Use o atalho `Cmd+K` para já testar o sistema de busca!

---

## 🛣️ Roadmap e Futuro do Projeto

Para próximas versões de aprimoramento contínuo:

- [ ] **Integração com Backend e Progressão:** Sistema de login para armazenar pontuação máxima no jogo Goyases (Rankings de campus e leaderboards).
- [ ] **Acesso e Inclusão:** Suporte completo de acessibilidade (+ Contraste, Leitor de voz, Libras) para a zona de conteúdos da Wiki.
- [ ] **Expansão de Lore (Goyases):** Adição de novos arcos narrativos no RPG, como "Período de Reformas Elétricas" e "Greve do Transporte Metropolitano".
- [ ] **Dashboard de Custos Reais:** Importação de datasets abertos do Portal da Transparência para exibir exemplos práticos locais reais aos usuários.
- [ ] **PWA (Progressive Web App):** Manifest file e service workers para permitir offline tracking de estudos, fundamental para discentes e servidores em locomoção.

---

## 🤝 Como Contribuir

1. Faça o Fork do projeto.
2. Crie uma Branch para a sua Feature (`git checkout -b feature/NovaAulaAuditoria`).
3. Adicione as mudanças (`git commit -m 'feat: Add conteúdo novo ao glossário'`).
4. Faça o Push para a Branch (`git push origin feature/NovaAulaAuditoria`).
5. Solicite um **Pull Request**.

---

<div align="center">
  Feito para transformar o serviço público através de conhecimento e empatia acadêmica. 🏛️💡
</div>
