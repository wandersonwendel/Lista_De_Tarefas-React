import React, { useState } from "react";
import "./ToDoList.css";

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
                <div>
                    {
                        // Renderiza uma imagem se a lista estiver vazia; caso contrário, mapeia a lista renderizando os itens em 'span'
                        lista.length < 1
                        ?
                        <img />
                        :
                        lista.map((item, index)=>(
                            // Recebe classe "item completo" se 'isCompleted' for verdadeiro, caso contrário, renderiza com a classe "item".
                            <div className={item.isCompleted ? "item completo" : "item"}>
                                <span>{item.text}</span>
                                <button className="del">Deletar</button>
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