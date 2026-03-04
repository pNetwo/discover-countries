# Discover Countries

Um aplicativo web para jogo de adivinhação de países online e gratuito.

![Preview do Projeto](public/screenshot.png)

📋 Descrição
O Discover Countries é um jogo simples e intuitivo que permite aos usuários descobrir o nome de países secretos através de dicas e tentativas de letras. Ideal para aprender geografia, testar conhecimentos sobre países do mundo e se divertir.

🚀 Funcionalidades
Jogo de adivinhação de países (estilo Forca)
50 países de todo o mundo
Dicas visuais com bandeiras e textos informativos
Sistema de tentativas baseado no tamanho do nome do país
Feedback visual para letras corretas/incorretas
Animações suaves na exibição dos resultados
Design responsivo e moderno
Interface em português brasileiro
Reinício do jogo a qualquer momento

🛠️ Tecnologias Utilizadas
Frontend
React - Biblioteca de interface de usuário
TypeScript - Superset JavaScript com tipagem estática
Vite - Build tool rápido e moderno
CSS Modules - Estilização modular e organizada
Lucide React - Ícones vetoriais

Recursos Adicionais
Flagpedia API - Bandeiras dos países
Google Fonts - Tipografia

📁 Estrutura do Projeto
discover-countries/
├── src/
│ ├── assets/ # Arquivos estáticos (imagens, logos)
│ ├── components/ # Componentes React
│ │ ├── Button/ # Botão de confirmação
│ │ ├── Header/ # Cabeçalho com logo e tentativas
│ │ ├── Input/ # Campo de entrada de letras
│ │ ├── Letter/ # Letra revelada
│ │ ├── LettersUsed/ # Lista de letras usadas
│ │ └── Tip/ # Dica com bandeira
│ ├── hooks/ # Custom hooks
│ │ └── useStartGame # Lógica principal do jogo
│ ├── utils/ # Utilitários e dados
│ │ └── countries.ts # Dados dos países
│ ├── App.tsx # Componente principal
│ └── main.tsx # Entry point
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json

🎯 Como Funciona
Um país aleatório é selecionado
O usuário vê a bandeira e a dica do país
Digita letras para adivinhar o nome do país
Cada letra correta revela todas as ocorrências no nome
O usuário ganha se descobrir todas as letras antes de esgotar as tentativas

✨ Validações
Impede letras duplicadas
Controle de tentativas (tamanho do nome + 5 extras)
Mensagens de erro e sucesso claras
Neto em estudo da rocketseat
