import React from "react";


function ToDoList(){
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form>
                <input 
                type="text"
                placeholder="Digite suas tarefas"
                />
                <button type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>

                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
                <button>Deletar Tudo</button>
            </div>
        </div>
    )
}

export default ToDoList