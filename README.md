# 🧳 Checklist de Viagem Inteligente ✈️☀️🌧️  

Um projeto pessoal desenvolvido com **Next.js** que ajuda usuários a criar **checklists de viagem personalizados** com base nas condições climáticas da cidade pesquisada.  

---

## 📋 Funcionalidades  

- 🔍 **Buscar previsão do tempo** de uma cidade usando a [OpenWeatherMap API](https://openweathermap.org/).  
- 🌡️ **Exibir informações detalhadas do clima**: temperatura, vento, condição atual e mais.  
- 📝 **Gerar sugestões de itens** para levar na viagem, com base no clima:  
  - ☀️ Clima quente  
  - ❄️ Clima frio  
  - 🌧️ Chuvoso  
  - ☁️ Nublado  
  - 💨 Ventando  
- ✅ **Interatividade do checklist**:  
  - Marcar/desmarcar itens sugeridos.  
  - Adicionar manualmente novos itens.  
  - Escrever observações adicionais.  
  - Criar e salvar múltiplos checklists.  
  - Excluir checklists criados.  
- 💾 **Persistência de dados** com `localStorage` (mesmo após fechar ou atualizar a página).  

---

## 🛠️ Tecnologias Utilizadas  

- **Next.js (App Router)**  
- **React Hooks** (`useState`, `useEffect`)  
- **CSS Modules** para estilização  
- **Lucide React** e **React Icons** para ícones  
- **OpenWeatherMap API** para dados climáticos em tempo real  

---

## 🚀 Como Rodar o Projeto  

```bash
# Clone este repositório
git clone github.com/RoberthVieira/Checklist-Viagem-Inteligente

# Acesse a pasta do projeto
cd Checklist-Viagem-Inteligente

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev


🌐 API Utilizada

OpenWeatherMap API
Endpoint para clima atual
Endpoint para sugestões de cidades na busca
Observação: A chave da API está diretamente no código para fins de desenvolvimento. Em produção, recomenda-se proteger a chave usando variáveis de ambiente.


📈 Melhorias Futuras

Permitir edição dos checklists existentes.
Integrar previsão de clima para múltiplos dias.
Sincronizar dados com backend ou banco de dados.


LINK PARA ACESSO 
https://checklist-viagem-inteligente-tc94.vercel.app

## 🖼️ Preview do Projeto

<p align="center">
  <img src="./public/preview.png" alt="Preview do Checklist de Viagem Inteligente" width="800">
</p>
