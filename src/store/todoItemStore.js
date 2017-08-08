import { extendObservable } from '../libs/mobx'

let nextTodoId = 0
const TodoItemStore = function c(title) {
  nextTodoId += 1

  extendObservable(this, {
    title,
    id: nextTodoId,
    completed: false,
    get ids() {
      return `${this.id}: ${this.title}`
    },
  })
}

export default TodoItemStore