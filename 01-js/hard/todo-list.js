/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.stack = [];
  }
  add(str){this.stack.push(str)}
  remove(index){this.stack.splice(index,1)}
  update(index,updatedToDo){
    if(index < this.stack.length )
    {
      this.stack.splice(index,1);
      this.stack.splice(index,0,updatedToDo);
    }
  }
  getAll(){return this.stack;}
  get(index){
    if (index < this.stack.length){
      return this.stack[index]
    }
    return null;
  }    
  clear(){this.stack.length = 0}
}


module.exports = Todo;
