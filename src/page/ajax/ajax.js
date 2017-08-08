import TodoStore from '../../store/todoStore'
import { observer } from '../../libs/observer'

const comment = {
  data: {},
  props: {
    todoStore: TodoStore,
  },
}

Page(observer(comment))