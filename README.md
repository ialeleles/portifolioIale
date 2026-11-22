# Portfólio — Iale Leles

Website de portfólio profissional com estética inspirada em Gotham: apresenta minha trajetória, projetos, experiências e formas de contato. O site é **bilíngue (português e inglês)** e responsivo.

🔗 **Site publicado:** [ADICIONAR_LINK_DA_VERCEL_AQUI]
🎨 **Wireframes (Figma):** [ADICIONAR_LINK_DO_FIGMA_AQUI]

## Funcionalidades

- **Perfil / Sobre mim**: crachá de identificação e apresentação, com troca de idioma PT/EN (preferência salva no navegador).
- **Projetos**: linha do tempo dos projetos do mais antigo ao mais recente, com imagem, descrição, tecnologias e link para o repositório (ou aviso de projeto privado), além de uma seção com projetos UEFN (Fortnite).
- **Arsenal**: tecnologias que utilizo, em formato de hexágonos.
- **Experiências**: instituição, cargo/atividade, período e descrição.
- **Contato**: links para LinkedIn, GitHub, WhatsApp e e-mail.
- Navegação por menu, cabeçalho e rodapé em todas as páginas.
- Layout responsivo (desktop, tablet e celular).

## Tecnologias utilizadas

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) (build e servidor de desenvolvimento)
- [React Router](https://reactrouter.com/) (navegação entre páginas)
- CSS puro (sem biblioteca de componentes)
- [Devicon](https://devicon.dev/) e [React Icons](https://react-icons.github.io/react-icons/) (ícones)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) (lint)
- Hospedagem: [Vercel](https://vercel.com/)

## Dependências

| Pacote | Versão | Uso |
|---|---|---|
| `react` / `react-dom` | ^19.3.1 | Interface |
| `react-router-dom` | ^7.18.6 | Rotas |
| `react-icons` | ^5.7.0 | Ícone do WhatsApp |
| `lucide-react` | ^1.77.0 | Biblioteca de ícones (instalada) |
| `vite` | ^8.3.6 | Build e dev server |
| `@vitejs/plugin-react` | ^6.1.2 | Plugin React para o Vite |
| `oxlint` | ^1.90.0 | Lint |
| `@types/react` / `@types/react-dom` | ^19.3.0 | Tipos (apoio do editor) |

## Estrutura de diretórios

```
portifolioIale/                 # raiz do repositório
├── README.md
└── portifolioIale/             # projeto React + Vite
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── vercel.json             # reescrita de rotas para a SPA
    ├── public/                 # imagens dos projetos, foto e favicon
    └── src/
        ├── main.jsx            # ponto de entrada (Router + idioma)
        ├── App.jsx             # rotas e layout principal
        ├── index.css / App.css # estilos
        ├── components/         # Header, Footer, Cracha, CardProjeto,
        │                       # TimelineProjeto, CardExperiencia, ...
        ├── pages/              # Home, Projetos, Arsenal, Experiencias, Contato
        ├── data/               # projetos.js e experiencias.js (conteúdo)
        └── i18n/               # textos PT/EN e contexto de idioma
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
# 1. clonar o repositório
git clone https://github.com/ialeleles/portifolioIale.git
cd portifolioIale/portifolioIale

# 2. instalar as dependências
npm install

# 3. iniciar o servidor de desenvolvimento
npm run dev
```

O site abre em `http://localhost:5173`.

Outros comandos:

```bash
npm run build     # gera a versão de produção em dist/
npm run preview   # testa a versão de produção localmente
npm run lint      # roda o Oxlint
```

## Como editar o conteúdo

- **Projetos:** `src/data/projetos.js` (ordem cronológica; sem `link` o botão aparece como "Projeto privado").
- **Experiências:** `src/data/experiencias.js`.
- **Textos da interface (PT/EN):** `src/i18n/textos.js`.

## Deploy

O deploy é feito na Vercel a partir deste repositório, com as configurações:

- **Root Directory:** `portifolioIale`
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Cada `git push` na branch `main` gera um novo deploy automaticamente.

## Autor

**Iale Leles de Almeida** — Engenharia de Software, PUC Minas
[LinkedIn](https://www.linkedin.com/in/iale-leles-4b5949357/) · [GitHub](https://github.com/ialeleles) · [E-mail](mailto:ialeleles@proton.me)
