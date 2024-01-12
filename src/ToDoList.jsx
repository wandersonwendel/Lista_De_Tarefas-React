import React, { useState } from "react";
import "./ToDoList.css";
import icon from './assets/icon.webp'

function ToDoList(){

    // Estado para armazenar a lista de itens
    const[lista, setLista] = useState([]);

    // Estado para controlar a entrada de um novo item
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form){
        // Impede o comportamento padrão do navegador de recarregar a página quando o formulário é enviado
        form.preventDefault();

        if(!novoItem){ // Se 'novoItem' ainda estiver vazio ou nulo, não ocorra eventos
            return;
        }
        // Senão, atualiza valor de 'lista', atribuindo com 'novoItem' o que foi digitado no input e foca no campo vazio
        setLista([...lista, {text: novoItem, isCompleted: false }])
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    function clicou(index){
        // Cópia de 'lista'
        const listaAux = [...lista];

        // Altera o estado 'isCompleted' do item, no índice 'index' clicado
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        
        // Atualiza o estado 'lista' com a nova lista modificada
        setLista(listaAux);
    }

    function deletaItem(index){
        const listaAux = [...lista];

        // Remove 1 item, pegando pelo indice do item
        listaAux.splice(index, 1);

        // Atualiza o estado 'lista' com a nova lista após a exclusão
        setLista(listaAux);
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}> {/* Chama a função adicionaItem() quando o formulário for enviado. */}
                <input
                id="input-entrada"
                type="text"
                value={novoItem} // A propriedade 'value' é vinculada ao estado 'novoItem' para criar um input controlado
                onChange={(e)=>{setNovoItem(e.target.value)}} // Atualiza o estado novoItem com o valor atual do input.
                placeholder="Digite suas tarefas"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign: "center"}}>
                    {
                        // Renderiza uma imagem se a lista estiver vazia; caso contrário, mapeia a lista renderizando os itens em 'span'
                        lista.length < 1
                        ?
                        <img src={icon} />
                        :
                        lista.map((item, index)=>(
                            // Recebe classe "item completo" se 'isCompleted' for 'true'. Se 'false', recebe a classe "item" para os estilos css.
                            <div 
                                key={index}
                                className={item.isCompleted ? "item completo" : "item"}>
                                <span onClick={()=>{clicou(index)}}>{item.text}</span>
                                <button onClick={()=>{deletaItem(index)}} className="del">Deletar</button>
                            </div>
                        ))
                    }
                    <button className="deleteAll">Deletar Tudo</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoList