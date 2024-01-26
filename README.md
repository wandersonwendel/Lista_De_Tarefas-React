<h1 align='center'>Lista de Tarefas Com React</h1>

Este é o meu primeiro projeto em React, desenvolvido como parte do meu aprendizado na construção de aplicações web. O projeto foi guiado pelas instruções e orientações do canal Programação Web, ministrado pelo professor Dimitri Teixeira.

<h2>Sobre o Projeto</h2>

O objetivo deste projeto é criar uma lista de tarefas interativa usando React, aplicando os conceitos aprendidos durante o minicurso. A construção desta aplicação me proporcionou uma compreensão inicial e mais prática do desenvolvimento front-end com React. 

A orientação fornecida pelo canal Programação Web do professor Dimitri Teixeira foi fundamental para o desenvolvimento deste projeto. Os conceitos abordados no curso foram aplicados na prática, permitindo um aprendizado mais efetivo para quem está começando no React e suas funcionalidades.

#

Antes de apresentarmos a estrutura básica de trabalhar com react, vamos falar um pouco sobre o Vite, uma ferramenta de desenvolvimento rápida para criação de aplicativos web modernos, especificamente, para projetos baseados em React, Vue.js e outros.

Vite se destaca por sua capacidade de iniciar o servidor de desenvolvimento e construir os arquivos rapidamente, o que é crucial para a produtividade do desenvolvedor durante o ciclo de desenvolvimento. Proporcionando uma instalação mais rápida de tudo o que iremos precisar no ambiente React.

Diferente dos modelos antidos como o 'npx creat react app' para constuir um ambiente react que tinham recursos mais lentos.

Para acessar o site: https://vitejs.dev/

 Além disso, tivemos um passo importante, na aula, sobre organização das pastas onde estará o projeto completo. Então, antes de usarmos o comando para a criação do App, vamos seguir:
  - Copie o caminho da pasta onde estará seu projeto (Seria legal uma pasta com o prórpio nome 'react' ou 'projetos react'; e
  - No prompt de comando, acesse esta pasta com o comando: cd (cole o caminho da pasta aqui).

#

### Utilizando o Vite

Pronto! Agora, após ir em 'Get Started', no site do Vite, e descer até o processo de instalação de um projeto react, você irá se deparar com este comando do Vite de exemplo:

```bash
npm create vite@latest my-vue-app -- --template vue
```

Só que é um exemplo para projeto Vue.js. Então vamos usá-lo para projeto react, alterando desta forma:

```bash
npm create vite@latest nome_do_seu_projeto -- --template react
```

**npm**:gerenciador de pacotes padrão para o Node.js. Ele é usado para instalar, compartilhar e gerenciar pacotes ou módulos de JavaScript, que podem ser utilizados em projetos. Esse comando instalará as dependências necessárias e configurará o ambiente de desenvolvimento para você começar a trabalhar em seu projeto React rapidamente.

**npm create**: Este é o comando do npm que permite criar um novo projeto a partir de um template.

**vite@latest**: Aqui, você está especificando o pacote Vite e solicitando a instalação da versão mais recente disponível.

**nome_do_seu_projeto**: Este é o nome que você dá ao seu projeto. Ele criará um diretório com esse nome e configurará o projeto dentro dele.

**--template react**: Este é um argumento passado para o Vite, indicando que você deseja criar um novo projeto React com o Vite.

Após executar o comando, irá aparecer na tela do prompt uma sequencia de passos pra você entrar no diretório do seu projeto: "cd nome_do_seu_projeto", e enter.

Para avançarmos com os outros passos, seria melhor irmos executá-los no VsCode logo ou alguma outra IDE da sua preferência. Então usamos o comando: "code ." (não esqueça o "." kk)

Os outros 2 passos a seguirmos, já dentro do terminal do VsCode, são:
```bash
npm install  // Que irá instalar todas as dependências do vite

npm run dev  // Para rodarmos este ambiente e nosso projeto incial, abrindo o servidor
```

 ### Nesta parte de rodar o projeto e acessar o servidor, estava aparecendo um erro para mim. Uma dependência faltando chamada "@rollup/rollup-win32-x64-msvc", do Vite. Parece ser um problema já conhecido e associado a uma falha na instalação de dependências opcionais no npm.

Após umas pesquisas, me recomendaram instalar uma versão específica do Vite que pode estar compatível com as dependências necessárias, utilizando o comando: "npm install vite@4.4.0". Reseolveu o meu problema, só que é uma versão anterior.. o que não é muito legal. Talvez surja outros problemas na frente em outros projeto? Talvez..

Podemos voltar a construção do projeto, agora...

<br>

<h1>Entendendo a estrutura básica de código em React</h1>

<p style='font-size:25px; font-weight:bold;'>Componentes</p>

No React, componentes são pedaços de códigos que representam partes de uma interface de usuário (UI) e podem ser reutilizados em várias partes da aplicação.

Durante os estudos, foram apresentados dois tipos de componentes em react:

### Componente de Classe
Onde uma classe **MeuComponente** extende um componente da biblioteca React (lembrando das importações logo acima da classe) que renderiza/apresenta no novegador um tipo de retorno HTML(no caso, chamamos de **jsx**).
```jsx
import React, { Component } from 'react';

class MeuComponente extends Component {
  render(){
    return <h1>Hello World!</h1>
  }
}

export default MeuComponente;
```

### Componenete Funcional
Atualmente, o mais usado. São basicamente funções JavaScript que renderizam/apresentam no novegador um tipo de retorno HTML(no caso, chamamos **jsx**).
```jsx
function MeuComponente(){
  return <h1>Hello World!</h1>
}

export default MeuComponente;
```

#

<br>
<p style='font-size:25px; font-weight:bold;'>JSX</p>
Em React, usamos uma extensão de sintaxe chamada JSX para criar interfaces de usuário de forma mais fácil. JSX é como uma mistura de JavaScript com HTML, permitindo que escrevamos código que parece HTML diretamente dentro do JavaScript. Isso deixa nosso código mais limpo e fácil de entender.

Quando você vê algo como &lt;h1&gt;Olá, mundo!&lt;/h1&gt; em um arquivo React, na verdade, é JSX, não HTML. Mas, quando o código é executado, o React converte o JSX em JavaScript puro.

### Exemplo:
```jsx
function ToDoList(){
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDoList
```

Percebem que as **tags HTML** estão entre parenteses e envoltos de uma &lt;div&gt;, dentro do **return**?

```jsx
return(*
    <div>
      <h1>Lista de Tarefas</h1>
      <form>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  )*
```
Em JSX, ao renderizar múltiplos elementos (h1, form, input e button) em um componente React, é necessário envolvê-los em um único elemento pai, frequentemente utilizando uma &lt;div&gt; como contêiner. Isso resolve questões de sintaxe e cria uma estrutura organizada, pois JSX exige que apenas **um** elemento seja retornado do componente. O contêiner (nesse caso, &lt;div&gt;) age como um nó pai, permitindo a criação de uma estrutura de árvore de elementos coesa ao renderizar o componente.

#

<br>

<p style='font-size:25px; font-weight:bold;'>Hooks</p>

Os hooks são funções especiais que te permitem utilizar recusos do React. Permitindo, por exemplo, que componentes funcionais (em oposição aos componentes de classe) tenham estado **(state)** e possam utilizar funcionalidades específicas do React, como efeitos colaterais **(useEffect)**, de uma maneira mais direta. 

### useState:

O **useState** retorna um **array** com dois elementos: o **estado atual** e uma **função para atualizar** esse estado, usando o prefixo **'set'**, juntamento do mesmo nome do estado atual **(setEstadoAtual)**.

Ex:
```jsx
import React, { useState, useEffect } from 'react';
const [count, setCount] = useState(0);
```
Neste exemplo, **count** é o estado atual e **setCount** é uma função para atualizar esse estado. O useState aceita um argumento inicial, que é o valor inicial do estado.

### useEffect:
O **useEffect** realiza efeitos colaterais, após alguma mudança no **estado** do componente. Efeitos colaterais incluem buscar dados, manipular o DOM manualmente dentro dos componentes, assinar eventos, etc.

Ex:
```jsx
import React, { useState, useEffect } from 'react';
const [count, setCount] = useState(0);

 useEffect(() => {
    console.log(`O valor atual de count é: ${count}`);
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
.
.
```
#
Aqui, é para identificarmos qual elemento será monitorado:
```js
}, [count])
```
No exemplo acima, cada vez que o botão "Incrementar" é clicado, o estado de **count** é atualizado usando a função **setCount**. Com essa mudança do estado de **count**, o useEffect é acionado, passando o valor atual de count a cada clique/mudança de estado..

<br>
<br>


<h1 align='center'>Estrutura do nosso código</h1>

Bom, depois de uma apresentação básica (que modestia parte ainda serve para mim, também rsrs), vamos lá para o nosso projeto **Lista de Tarefas com React**.

### index.html
```html
<!doctype html>
:
  <body>
    <div id="root"></div>
    <script type="module" src="/src/App.jsx"></script>
  </body>
:
```
Podemos ver que no corpo do nosso **index.html**, há apenas uma &lt;div&gt; com um identificador "root", onde será injetados os nossos componentes, ou seja, onde o JavaScript irá construir toda a nossa página.

E um &lt;script&gt; com uma chamada para o nosso **App.jsx** :
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './ToDoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
)
```
### Aqui, temos algumas importações necessárias da biblioteca React:
  - O prório **React**, por padrão;
  
  - O **ReactDOM** (ou **Virtual DOM**):
    - Uma representação em memória da estrutura da árvore do Document Object Model (DOM), que é uma representação do conteúdo e estrutura de uma página web.
    
    - Quando você cria um aplicativo React, as mudanças na interface do usuário são geralmente feitas atualizando o estado do componente. Cada vez que o estado de um componente muda, o React recria a representação do DOM em memória, chamada de Virtual DOM. Em vez de atualizar diretamente o DOM real na página web, o React compara o novo Virtual DOM com a versão anterior, identifica as diferenças (ou "diffs"), e depois atualiza apenas as partes do DOM real que foram alteradas. Isso é conhecido como reconciliação; e
  
  -  Nosso componente principal, chamado **ToDoList** (será melhor explicado mais para a frente..)

### Agora, entramos com um método do React:
```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
```

Usamos o método **createRoot** para criarmos uma rota de onde será renderizado nossos componentes, pegando um elemento com o id 'root', ou seja, nossa &lt;div&gt; no index.html.

### Adiante, temos o método <React.StrictMode>:
Um componente nativo do react só para fazer testes de processo de renderização, ele renderiza duas vezes, mostrando se está tudo certo ou se há algum erro, que será mostrado na tela da aplicação no navegador..

```jsx
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
```

E dentro dele, indicamos qual componente será renderizado, apresentadoo na tela do nossa aplicação no navegador. O nosso ToDoList, contendo toda a estrutura do nosso projeto.
#

### ToDoList.jsx

Vamos contruir o componente funcional do nosso projeto e toda a parte lógica.

Sempre começamos um componente, fazendo a importação padrão do **React**:
```js
import React, { useState, useEffect } from 'react';
import icon from './assets/icon.webp';

function ToDoList(){
:
```

**useState** e **useEffect**, são os hook que iremos utlizar para a lógica no projeto.

Por último, temos a importação de uma imagem da pasta assets, para usarmos na aplicação. E a criação do componente funcional.

#

### Persistência de dados com o localSotrage
```js
:
  const listaStorage = localStorage.getItem('Lista');
```
O localStorage é uma API do navegador que oferece uma maneira simples de armazenar dados **chave-valor** de forma persistente entre sessões do usuário, onde ambos chave e valor são **strings**.

Em **localStorage.getItem('Lista')**, estamos obtendo o valor armazenado no localStorage, associado à chave **'Lista'**. O valor obtido é atribuído à variável **listaStorage**.

#

### Hook useState()
```js
  const[lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
```
Usamos o **useState** para inicializarmos um estado para **lista**.

Com o operador ternário, verificarmos se listaStorage existe (ou seja, se há um valor associado à chave 'Lista' no armazenamento local), então é convertido de volta de string JSON para um objeto JavaScript usando JSON.parse. Caso contrário ( : ), uma lista vazia é usada como valor inicial.

A conversão é porque quando você recupera um valor do localStorage usando **localStorage.getItem('Lista')**, lá em cima, o valor é retornado como uma string.

Então, JSON.parse(listaStorage) está convertendo a string armazenada no localStorage de volta para um objeto JavaScript, o qual iremos trabalhar.

Adiante:
```js
const [novoItem, setNovoItem] = useState("");
```
Aqui, um segundo estado é criado chamado **novoItem**.

Ele será utilizado para armazenar o valor do novo item que o usuário irá adicionar à lista.

**setNovoItem** é a função usada para atualizar o estado de novoItem.
Inicialmente, novoItem é definido como uma string vazia "".
#

### Hook useEffect()
```js

  useEffect(()=>{
    localStorage.setItem('Lista', JSON.stringify(lista));
  }, [lista])
```
Um efeito colateral (**useEffect**) é utilizado para monitorar alterações no estado **[lista]**. Sempre que a lista é modificada, seja a adição ou remoção de itens, o código dentro do useEffect é executado.

Quando você deseja armazenar um objeto JavaScript no localStorage, você precisa convertê-lo para uma string, porque o localStorage só pode armazenar strings.
Portanto, **'JSON.stringify(lista)'** está convertendo o objeto JavaScript (representado pela variável lista) em uma string JSON. Essa string JSON é então armazenada no localStorage.

#

### Função Para Adicionar os Itens

```js
  function adicionaItem(form){
    form.preventDefault();

    if(!novoItem){
      return;
    }
          
    setLista([...lista, {text: novoItem, isCompleted: false }])
    setNovoItem("");
    document.getElementById('input-entrada').focus();
  }
```
**form** é o evento de submissão do formulário passado como argumento para a função. 

O método **preventDefault()** é chamado para evitar que o formulário envie uma requisição HTTP e recarregue a página, que é o comportamento padrão quando um formulário é submetido.

*Se não tivessemos o localStorage, lá em cima, o disparo de submissão do formulário e recarregamento da página, levando a perda dos dados/itens adicionados.*

<br>

```js
setLista([...lista, {text: novoItem, isCompleted: false }])
```
**setLista** atualiza o estado da lista, adicionando um novo item ao final.

Criando uma nova lista incluindo todos os itens existentes e adiciona um novo item como um objeto com propriedades **text** definida como o **valor de novoItem** e **isCompleted** definida como false.

<br>

```js
setNovoItem("");
```
**setNovoItem** limpa o estado de novoItem, preparando para um novo item.

<br>

```js
document.getElementById('input-entrada').focus();
```
Só uma técnica de dar foco ao elemento com o ID 'input-entrada', nosso **input** do formulário. 

Facilita para o usuário continuar adicionando itens sem a necessidade de clicar manualmente no campo após cada adição.

#

### Clique/Marcação de Itens Como Concluídos
```js
  function clicou(index){
    const listaAux = [...lista];

    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    
    setLista(listaAux);
  }
```
Cria uma cópia da lista atual utilizando o operador **spread** ([...lista]).

```js
const listaAux = [...lista];
```
Isso é feito para garantir que o estado original **(lista)** não seja modificado diretamente. Manipular o estado diretamente pode levar a comportamentos indesejados no React.

<br>

```js
listaAux[index].isCompleted = !listaAux[index].isCompleted;
```
Aqui, estamos acessando um item na posição index da cópia da lista (listaAux).
Invertendo o valor da propriedade isCompleted desse item. Se isCompleted for true, torna-se false, e vice-versa, usando o **'!'**.

<br>

```js
setLista(listaAux);
```
Atualiza o estado da lista com a cópia modificada (listaAux).
Ao chamar setLista, o React re-renderiza o componente com o novo estado, refletindo a marcação/desmarcação do item como concluído. 

Causando alterações no CSS, deixando aquele item mais transparente e riscado.

#

### Deleta os Itens Individualmente 
```js
  function deletaItem(index){
    const listaAux = [...lista];

    listaAux.splice(index, 1);

    setLista(listaAux);
  }
```
Aqui, também iremos criar uma cópia da lista atual utilizando o operador **spread** ([...lista]).

```js
const listaAux = [...lista];
```
Da mesma forma como no exemplo anterior, isso é feito para evitar a modificação direta do estado.

<br>

```js
listaAux.splice(index, 1);
```
Usamos o método splice para remover um elemento da cópia da lista (listaAux) com base no índice fornecido (index).

O segundo argumento (1) indica que apenas um elemento deve ser removido a partir do índice fornecido.

<br>

```js
setLista(listaAux);
```
Atualizando o estado da lista com a cópia modificada (listaAux). Fazendo uma re-renderização do componente com o novo estado, refletindo a remoção do item.

#

### Deletar Todos os Itens
```js
  function deletaTudo(){
    setLista([]);
  }
}
```
Aqui, vamos atualizar o estado da lista, porém como um estado vazio, ou seja, removendo todos os itens existentes.

#

### Vamos constuir nossos jsx, agora!

Se preciso, revisite os conceitos na sessão => [JSX](#jsx)..

A princípio, nossa estrutura ficaria assim:
```jsx
return (
  <div>
    :
  </div>
)
```

Envoltos de um **return()**, onde o restante do nosso código deve estar dentro do componente pai, nossa &lt;div&gt;. Visto que há muitos outros elementos para serem renderizados.

#

### Agora, vamos por partes..

```jsx
<h1>Lista de Tarefas</h1>
<form onSubmit={adicionaItem}>
  <input
    id="input-entrada"
    type="text"
    value={novoItem}
    onChange={(e)=>{setNovoItem(e.target.value)}}
    placeholder="Digite suas tarefas"
  />
  <button className="add" type="submit">Add</button>
</form>
```
Criamos um formulário com o tipo 'onSubmit' que recebe uma função **adicionaItem** e um input do tipo "texto" onde iremos informar os itens a serem adicionados na lista. Ambos trabalhados na sessão [**Função Para Adicionar Os Itens**](#função-para-adicionar-os-itens).

O identificador **input-entrada**, foi tratado na função como um mecanismo de "foco", quando a página fosse recarregada, para evitar precisar clicar manualmente no input, a cada adição dos itens.

A propriedade **value={novoItem}** está **associando** o valor do campo de entrada (&lt;input&gt;) ao estado novoItem. Isso significa que o valor exibido no campo de entrada será sempre o valor atual de novoItem. A alteração desse valor é controlada pela função onChange, que atualiza o estado novoItem sempre que o usuário digita algo no campo do input.

**(e) => { ... }**: Esta é uma função de seta (arrow function) que recebe um argumento **(e)**, que representa o evento. No caso, o evento onChange.

**e.target.value**: Se refere ao elemento que acionou o evento, e **.value** representa o valor atual desse elemento. Ou seja, **e.target.value** é o texto atualmente presente no campo de entrada do input.

**setNovoItem(e.target.value)**: É uma função usada para atualizar o estado novoItem. Essencialmente, ela está atualizando o valor de novoItem para ser igual ao valor atual do campo de entrada sempre que o usuário digita algo.

#

<br>

```jsx
<div className="listaTarefas">
  <div style={{textAlign: "center"}}>
    {
      lista.length < 1
      ?
      <img src={icon} />
      :
      lista.map((item, index)=>(
        <div 
          key={index}
          className={item.isCompleted ? "item completo" : "item"}>
          <span onClick={()=>{clicou(index)}}>{item.text}</span>
          <button onClick={()=>{deletaItem(index)}} className="del">Deletar</button>
        </div>
      ))
    }
```

Aqui, utilizamos um estilo CSS **inline** ou estilo embutido, na nossa primeira &lt;div&gt;... Mas, percebram que diferente do HTML, aqui o estilo teve que ficar dentro de dois colchetes **{ { .. } }**?

No JSX, as chaves duplas (**{ { } }**) são usadas para incorporar expressões JavaScript. Quando você vê **{{** textAlign: "center" **}}**, a primeira chave dupla indica que você está inserindo uma expressão JavaScript dentro do JSX e a segunda chave dupla é usada para criar um objeto JavaScript, o qual recebe propriedades de estilo CSS.

Adiante, vamos fazer uma validação por **condição ternária (? :)**:

```jsx
{
  lista.length < 1
  ?
  <img src={icon} />
  :
  lista.map((item, index)=>(
    .
    .
  ))
}
```
*Eles estão entre as **{ }** porque esse é um padrão comum em JSX/React para renderização condicional.*

A expressão **length** está sendo usada para verificar o comprimento (número de elementos) do array lista.

( **?** ) avalia se a **operação à esquerda** ( lista.length < 1 ) é **verdadeira**. Caso o tamanho da lista seja menor que 1, renderiza a **operação à direita**, que é a nossa **imagem** que foi importada ainda na sessão [ToDoList.jsx](#todolistjsx), como "icon".

( **:** ) já seria a validação contrária, ou seja, se aquela operação deu como **falsa**. Neste caso, o tamanho da lista sendo maior que 1, ou seja, já existem itens na lista, será renderizado os meus itens existentes.

```jsx
lista.map((item, index)=>(
  <div 
    key={index}
    className={item.isCompleted ? "item completo" : "item"}
  >
    <span onClick={()=>{clicou(index)}}>{item.text}</span>
    
    <button onClick={()=>{deletaItem(index)}} className="del">Deletar</button>
  </div>
))
```

Utilizamos a função de array **map** para percorrer (iterar) cada elemento do array lista.
Ou seja, para cada elemento no array lista, a função de mapeamento é chamada. 

Essa função recebe dois parâmetros:
- **item**: O valor do elemento atual no array.
- **index**: A posição do elemento no array.

Com isso, para cada item, ele renderiza uma div com um key único "**index**" (usado para identificar exclusivamente cada elemento durante as atualizações de renderização).

<br>

Aqui, confesso que no início até eu buguei um pouco, pela interligação dessas duas partes:
```javascript
className={item.isCompleted ? "item completo" : "item"}
>
  <span onClick={()=>{clicou(index)}}>{item.text}</span>
``` 

Mas, vamos lá.... 

#

Lá na [função para adicionar itens](#função-para-adicionar-os-itens), espeficicamente nesta parte:

```javascript
setLista([...lista, {text: novoItem, isCompleted: false }])
```

Vemos que uma propriedade chamada **isCompleted** foi criada para cada novo item adicionado, após a atualização do estado da lista, com o **setLista...**

#

Agora podemos voltar...

```javascript
className={item.isCompleted ? "item completo" : "item"}
>
  <span onClick={()=>{clicou(index)}}>{item.text}</span>
```

A operação condicional ternária irá atribuir à nossa &lt;div&gt;, a classe **completo** ou a classe **item**, baseando-se no **estado booleano atual** da propriedade **isComleted** (que, como vimos, é **false**).

Ou seja, a condção ternária dará **item**, pois **isCompleted** está como **false**. Contendo estes estilos CSS:

```css
.item{
  display: flex;
  justify-content: space-between;
  border: 1px solid #363b65;
  margin-bottom: 10px;
  cursor: pointer;
}
```

<br>

Acontece que, a mudança dessa operação condicional, também irá depender do nosso segundo elemento, o &lt;span&gt;, o qual exibe o texto da tarefa, atravéz do **{item.text}**.

*A propriedade **text**, presente na [função de adicionar os itens](#função-para-adicionar-os-itens), onde **text** recebe o valor de **novoItem**. Ou seja, o texto do input vinculado a essa propriedad **text**.* 

O evento de clique, **onClick()**, traz uma arrow funtion que aciona nossa [função de clique],(#cliquemarcação-de-itens-como-concluídos) no &lt;span&gt;.

```jsx
function clicou(index){
.
.
  listaAux[index].isCompleted = !listaAux[index].isCompleted;
.
.
}
```
Com isso, isCompleted, que era **false**, passa para **true**. Nisso o react re-renderiza e a condição ternária da **true**, passando a className para **item.completo**. Recebendo estes estilos CSS:

```css
.item.completo{
  display: flex;
  text-align: start;
  justify-content: space-between;
  background: #1e1f2e;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  opacity: 0.4;
}
```
Essas mudanças, juntamente com o propósito da **função clicou**,  é para "marcarmos" algum determinado item da lista como **concluído**, deixando aquele item riscado e meio transparente.

#

<br>

Concluindo, temos mais uma operação ternária em jsx que usamos só para ocultar o botão **Deletar Tudo**.

```js
        {
          lista.length > 0 &&
          <button onClick={()=>{deletaTudo()}} className="deleteAll">Deletar Tudo</button>
        }
      </div>
    </div>
  </div>
)
```
Caso o tamanho de lista seja maior que zero (ou seja, há itens na lista), será renderizado o nosso botão na tela, abaixo dos itens.

Caso não tenha itens, o botão não será renderizado, pois o lado direito da expressão não será avaliado. Levando para aquela condição ternária de renderizar uma imagem, já que não tem itens .

Além disso, a arrow funtion no evento de clique chama a [função para deletar todos os itens](#deletar-todos-os-itens) da lista, ao clicarmos no botão.

#

<br>
<br>

<p align='center' style='font-weight:bold; font-size:20px'>Muito obrigado, por me acompanhar até aqui!</p>

<br>
<br>

Construir este projeto e todo este passo a passo, foi muito gratificante para mim. Poder repassar todo o conhecimento desta aula, que apesar de ser básica, eu reconheço como um progresso, por ser uma nova tecnologia que estou aprendendo e que me encanta. Espero que gostem, pois fiz com imenso carinho rsrs.. 

Mas, calma ai!  Tá achando que já acabou?...

Ainda, teremos muitos outros projetos por aqui!  
