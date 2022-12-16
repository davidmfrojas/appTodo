export class Todo{
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    //static ParseJSON(todoJSON){
    //utilizamos desestructuracion
    static fromJSON({id,tarea,completado,creado}){
        const todoTemp = new Todo(tarea);
        todoTemp.id=id;
        todoTemp.completado=completado;
        todoTemp.creado=creado;
        return todoTemp;
    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }

}