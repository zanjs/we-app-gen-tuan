import { observer } from '../../libs/observer'
import TodoController from '../../controller/todo'

import on from './on'
import data from './data'
import props from './props'

const bind = {
  handleCheck(e) {
    TodoController.handleCheck(e)
  },
  applyFilter(e) {
    this.props.todoStore.filter = e.target.dataset.key
  },
  todosFiltered() {
    return this.props.todoStore.filterBy()
  },
  formReset() {},
  addTodo(e) {
    TodoController.addTodo(e)
  },
}

const Component = Object.assign(on, data, props, bind)
Page(observer(Component))