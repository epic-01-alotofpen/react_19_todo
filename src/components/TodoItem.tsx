export interface Todo {
    id: number
    text: string
}

export function TodoItem({
    todo,
    onDelete,
}: {
    todo: Todo
    onDelete: (id: number) => void
}) {
    console.log(`Rendering TodoItem: ${todo.id}`)

    return (
        <li className="flex items-center justify-between px-2 py-1 border rounded">
            <span>{todo.text}</span>
            <button
                onClick={() => onDelete(todo.id)}
                className="text-red-500 font-bold"
            >
                ×
            </button>
        </li>
    )
}