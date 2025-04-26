Checklist de Viagem Inteligente ✈️☀️🌧️

Este é um projeto pessoal desenvolvido com Next.js, que ajuda usuários a criarem checklists de viagem personalizados baseados nas condições climáticas da cidade pesquisada.


📋 Funcionalidades

Buscar a previsão do tempo de uma cidade usando a API do OpenWeatherMap.
Exibir informações detalhadas do clima (temperatura, vento, condição atual, etc.).
Gerar sugestões de itens para levar na viagem, com base no clima da cidade:
Itens para clima quente, frio, chuvoso, nublado ou ventando.
Permitir que o usuário:
Marque os itens sugeridos que deseja levar.
Adicione manualmente novos itens ao checklist.
Escreva observações adicionais.
Salve múltiplos checklists.
Exclua checklists criados.
Dados persistem no localStorage, mesmo após fechar ou atualizar a página.


🛠️ Tecnologias Utilizadas

Next.js (App Router)
React Hooks (useState, useEffect)
CSS Modules para estilização dos componentes
Lucide React e React Icons para ícones
OpenWeatherMap API para buscar dados climáticos em tempo real


🚀 Como Rodar o Projeto

Clone este repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

Navegue até a pasta do projeto:
cd nome-do-repositorio

Instale as dependências:
npm install

Inicie o servidor de desenvolvimento:
npm run dev

Acesse o projeto no navegador:
http://localhost:3000


⚙️ Estrutura de Pastas

/Components
  ├── Checklist.jsx
  ├── ChecklistItem.jsx
  ├── Footer.jsx
  ├── SearchBar.jsx
  ├── WeatherInfo.jsx
/pages
  ├── index.jsx (Home)
  ├── layout.jsx (Root Layout)
/styles
  ├── Checklist.module.css
  ├── ChecklistItem.module.css
  ├── Footer.module.css
  ├── SearchBar.module.css
  ├── WeatherInfo.module.css
/globals.css


🌐 API Utilizada
OpenWeatherMap API
Endpoint para clima atual
Endpoint para sugestões de cidades na busca
Observação: A chave da API está diretamente no código para fins de desenvolvimento. Em produção, recomenda-se proteger a chave usando variáveis de ambiente.


📈 Melhorias Futuras
Permitir edição dos checklists existentes.
Integrar previsão de clima para múltiplos dias.
Sincronizar dados com backend ou banco de dados.