import Stack from '../mwx/stack'
import Event from '../mwx/event'
import Print from '../util/print'

export default {
  handleCheck(e) {
    const vm = Stack.page()
    const todoId = parseInt(Event.dataset(e, 'id'), 10)
    const status = vm.props.todoStore.findByTodoId(todoId).completed
    vm.props.todoStore.findByTodoId(todoId).completed = !status
  },
  addTodo(e) {
    const vm = Stack.page()
    const title = e.detail.value.todo
    Print.Log(vm.props.todoStore)
    vm.props.todoStore.addTodo(title)
  },
}