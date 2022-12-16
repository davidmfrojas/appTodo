import './styles.css';

//en lugar de importar uno por uno
/*
import {Todo} from './js/classes/todo.class';
import { TodoList } from './js/classes/todo-list-class';
*/

//importamos todos mediante el index.js que se carga por defecto
/*import {Todo, TodoList} from './js/classes/index';*/
import {Todo, TodoList} from './js/classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//el llamado solo tiene un argumento, y el foreach recibe uno
/*todoList.todos.forEach(todo =>  crearTodoHtml(todo) );*/
//se puede simplificar cuando eso ocurre, pasandi unicamente el nombre de la funcion destino
todoList.todos.forEach(crearTodoHtml);