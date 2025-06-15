import { TodoItem } from './TodoItem'
import type { Todo } from './TodoItem'

export function TodoList({
    todos,
    onDelete,
}: {
    todos: Todo[]
    onDelete: (id: number) => void
}) {
    console.log('Rendering TodoList')

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </ul>
    )
}