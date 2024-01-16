<h1 align='center'>Lista de Tarefas Com React</h1>

Este é o meu primeiro projeto em React, desenvolvido como parte do meu aprendizado na construção de aplicações web. O projeto foi guiado pelas instruções e orientações do canal Programação Web, ministrado pelo professor Dimitri Teixeira.

## Sobre o Projeto

O objetivo deste projeto é criar uma lista de tarefas interativa usando React, aplicando os conceitos aprendidos durante o minicurso. A construção desta aplicação me proporcionou uma compreensão inicial e mais prática do desenvolvimento front-end com React. 

A orientação fornecida pelo canal Programação Web do professor Dimitri Teixeira foi fundamental para o desenvolvimento deste projeto. Os conceitos abordados no curso foram aplicados na prática, permitindo um aprendizado mais efetivo para quem está começando no React e suas funcionalidades.

## Entendendo a estrutura básica de código em React

### JSX
Em React, usamos uma extensão de sintaxe chamada JSX para criar interfaces de usuário de forma mais fácil. JSX é como uma mistura de JavaScript com HTML, permitindo que escrevamos código que parece HTML diretamente dentro do JavaScript. Isso deixa nosso código mais limpo e fácil de entender.

Quando você vê algo como &lt;h1&gt;Olá, mundo!&lt;/h1&gt; em um arquivo React, na verdade, é JSX, não HTML. Mas, quando o código é executado, o React converte o JSX em JavaScript puro.

### Nosso exemplo:
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
<p style="opacity: 0.5; font-size: 10px; text-align: center">Boa prática: Nome de componente começar sempre com letra maiúscula.</p>

Percebem que as tegs **HTML** estão entre parenteses, dentro do **return**?

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

### Componentes
No React, componentes são pedaços de códigos que representam partes de uma interface de usuário (UI) e podem ser reutilizados em várias partes da aplicação.

Durante os estudos, foram apresentados dois tipos de componentes em react:

### Componente de Classe
Onde uma classe **MeuComponente** extende um componente da biblioteca React (lembrando das importações logo acima da classe) que renderiza/apresenta no novegador um tipo de retorno HTML.
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
Atualmente, o mais usado. São basicamente funções JavaScript que retornam um HTML.
```jsx
function MeuComponente(){
  return <h1>Hello World!</h1>
}

export default MeuComponente;
```
<br>

#

### Hooks
Os hooks são funções que foram introduzidos na versão 16.8 do React para permitir que componentes funcionais (em oposição aos componentes de classe) tenham estado (state) e possam utilizar funcionalidades específicas do React, como efeitos colaterais, de uma maneira mais direta.

Trazendo um bônus aqui, porque vamos usar dois deles: 

**useState**:

O useState é utilizado para adicionar estado a componentes funcionais.
Ele retorna um array com dois elementos: o estado atual e uma função para atualizar esse estado, usando prefico 'set' juntamento do mesmo nome do estado atual: setEstadoAtual.

Ex:
```js
import React, { useState, useEffect } from 'react';
const [count, setCount] = useState(0);
```
Neste exemplo, count é o estado atual e setCount é uma função para atualizar esse estado. O useState aceita um argumento inicial, que é o valor inicial do estado.

**useEffect**:
O useEffect é utilizado para realizar efeitos colaterais em componentes funcionais, após alguma mudança no **estado** do componente. Efeitos colaterais incluem coisas como buscar dados, manipular o DOM, assinar eventos, etc.

Ex:
```js
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
Aqui, é para identificarmos qual estado que será monitorado:
```js
}, [count])
```

Neste exemplo todo acima, cada vez que o botão "Incrementar" é clicado, o estado count é atualizado usando a função setCount. Com essa mudança de estado de **count**, o useEffect é acionado, passando o valor atual de count a cada clique/mudança de estado..
#

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

*Continua..*