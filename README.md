# Portfólio Profissional | Davi Machado

Um portfólio web minimalista, responsivo. Desenvolvido para apresentar minha trajetória, habilidades e projetos como **Desenvolvedor Backend**, com foco em experiências **Cloud Computing (AWS)** e integração de **Agentes de Inteligência Artificial**.

## Visão Geral do Projeto

Este projeto foi construído priorizando a velocidade de carregamento, simplicidade de manutenção e escalabilidade estrutural. Para garantir a máxima performance e hospedagem facilitada, o portfólio atua como uma **Single Page Application (SPA)** totalmente estática, dispensando o consumo desnecessário de APIs externas ou bibliotecas pesadas de roteamento.

### Principais Features
* **Arquitetura Orientada a Dados:** Todo o conteúdo (projetos, biografia, links) é consumido de um mock local estático, facilitando atualizações.
* **UI/UX Focada:** Animações sutis de *scroll-reveal*, *smooth scroll* nativo e layout fluido que se adapta a qualquer tela (Mobile First).
* **Zero Dependências Pesadas:** Estilização feita inteiramente com CSS puro (Variáveis, Flexbox e Grid), garantindo um *bundle* minúsculo e carregamento instantâneo.

## Tecnologias Utilizadas

* **[React 19](https://react.dev/):** Biblioteca principal para construção da interface.
* **[Vite](https://vitejs.dev/):** Bundler super-rápido para otimização e ambiente de desenvolvimento.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para garantir segurança e previsibilidade do código.
* **CSS3:** Estilos globais e componentizados, com variáveis para fácil customização de temas.

## Estrutura de Diretórios

O projeto utiliza uma arquitetura baseada em features e isolamento de componentes visuais:

```text
├── public/                 # Assets públicos e favicons
├── src/
│   ├── components/         # Componentes isolados de UI (Header, ProjectCard)
│   ├── data/               # Mock de dados estáticos (portfolioData.ts)
│   ├── img/                # Imagens otimizadas dos projetos
│   ├── styles/             # CSS Global, variáveis, resets e animações
│   ├── App.tsx             # Agregador de seções (Hero, Sobre, Projetos, Contato)
│   └── main.tsx            # Ponto de entrada da aplicação
```
</br >
<p align="center">
Feito com dedicação para centralizar soluções em código limpo e arquitetura inteligente.

🔗 <a href="https://www.linkedin.com/in/davibmachado/">Conecte-se comigo no LinkedIn</a>
</p>