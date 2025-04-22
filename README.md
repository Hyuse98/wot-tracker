# Qualy

Um aplicativo para gerenciamento e visualização de dados de clãs e tanques.

## Visão Geral

Este projeto é uma aplicação web desenvolvida em Angular 19 para gerenciar e visualizar informações sobre membros de clãs e seus tanques. Inclui recursos como:

- Dashboard para visualização de estatísticas
- Gestão de membros de clãs
- Visualização e acompanhamento de dados de tanques
- Interface responsiva com suporte a tema claro/escuro

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/       # Componentes reutilizáveis da UI
│   │   ├── clan-header/
│   │   ├── clan-member-card/
│   │   ├── member-clan-list/
│   │   ├── member-panel/
│   │   ├── navbar/
│   │   └── tank-card/
│   ├── pages/            # Componentes de página
│   │   ├── dashboard/
│   │   └── home/
│   └── service/          # Serviços da aplicação
│       ├── member-list/
│       ├── shared/
│       ├── tank-list/
│       └── theme/
├── assets/               # Recursos estáticos
└── styles/               # Estilos globais
```

## Recursos Principais

### Gerenciamento de Clãs
- Visualização de informações do clã
- Lista de membros com estatísticas
- Filtros e ordenação de membros

### Sistema de Tanques
- Catálogo de tanques de tier 10
- Estatísticas e informações detalhadas
- Visualização por tipo de tanque

### Interface Adaptativa
- Suporte completo a dispositivos móveis e desktop
- Tema claro/escuro personalizável
- Layout responsivo usando Bootstrap 5

## Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- Angular CLI (v19.2+)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/qualy.git
cd qualy
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

## Comandos Úteis

### Desenvolvimento
```bash
ng serve
```

### Build
```bash
ng build
```

### Testes
```bash
ng test
```

### Deployment
```bash
ng build --configuration production --base-href="/qualy/"
npx angular-cli-ghpages --dir=dist/qualy/browser
```

## Tecnologias Utilizadas

- Angular 19
- TypeScript
- RxJS
- Express (SSR - Server-Side Rendering)
- Bootstrap 5
- Angular CLI

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
