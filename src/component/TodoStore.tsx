import { makeObservable, observable, action, computed } from "mobx"

interface Todoitems{
    id: number;
    title:string;
    completed:boolean;
}

export class TodoStoreImpl{
    todos:Todoitems[] = [];

    constructor(){
        makeObservable(this, {
            todos:observable,
            addtodo:action,
            toggletodo:action,
            status:computed
        })
    }
    // action is anything that mutate your state

    // The things like Redux and contextapi you are not allowed to update any of the props
    // mobx will take care of informing of that todos array has been updated 
    addtodo(title:string){
        const item: Todoitems ={
            id:+Math.random().toFixed(4),
            title,
            completed:false
        }
        this.todos.push(item);
    }

    toggletodo(id: number){
        const index = this.todos.findIndex(item=>item.id === id)
        if(index > -1){
            this.todos[index].completed = !this.todos[index].completed
        }
    }

    get status(){
        let completed = 0; 
        let remaining = 0;
        this.todos.forEach(todo=>{
            if(todo.completed){
                completed++
            }
            else{
                remaining++
            }
        })
        return{completed, remaining}
    }
}
export const TodoStore = new TodoStoreImpl();