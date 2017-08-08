import { extendObservable } from '../libs/mobx'
import TodoItem from './todoItemStore'

const TodoStore = function c() {
  extendObservable(this, {
    todos: [new TodoItem('今天要早起')],
    filters: [{ key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }],
    filter: 'SHOW_ALL',
    get filterTodos() {
      switch (this.filter) {
        case 'SHOW_ALL':
          return this.todos
        case 'SHOW_COMPLETED':
          return this.todos.filter((t) => {
            return t.completed
          })
        case 'SHOW_ACTIVE':
          return this.todos.filter((t) => {
            return !t.completed
          })
        default:
          throw new Error(`Unknown filter: ${this.filter}`)
      }
    },

    get totalCount() {
      return this.todos.length
    },

    get currentCount() {
      return this.filterTodos.length
    },
  })


  this.addTodo = function b(title) {
    this.todos.push(new TodoItem(title))
  }

  this.findByTodoId = function d(id) {
    const item = this.todos.find((element) => {
      return element.id === id
    })
    return item
  }
}

const todoStore = new TodoStore()

export default todoStore