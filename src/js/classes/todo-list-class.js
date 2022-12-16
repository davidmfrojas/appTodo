import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter((t) => t.id !== parseInt(id));
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        const todo = this.todos.find((t) => t.id === parseInt(id) );
        if(todo){
            todo.completado = !todo.completado;       
            this.guardarLocalStorage();   
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter((t) => !t.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        const todos = localStorage.getItem('todo');
        const todosJSON = (todos)? this.todos = JSON.parse(todos) : [];
        //this.todos = todosJSON.map((t) => Todo.fromJSON(t));
        this.todos = todosJSON.map(Todo.fromJSON);
    }

}

/*
//localstorage y sessionstorage
//localstorage almacena información local para la app
//sessionstorage almacena información local en el session del app
//son accesibles desde el usuario final, no se debe guardar información sensible
//establacer key value pair
localStorage.setItem('mi-key', 'ABC123');

//borrar el key value pair
/*setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500);*-/


sessionStorage.setItem('mi-key', 'ABC1234');
*/