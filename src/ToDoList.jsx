import React from "react";
import "./ToDoList.css";

function ToDoList(){
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form>
                <input 
                type="text"
                placeholder="Digite suas tarefas"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>

                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>
                <button className="deleteAll">Deletar Tudo</button>
            </div>
        </div>
    )
}

export default ToDoList