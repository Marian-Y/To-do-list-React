import ToDoListItem from "../to-do-list-item/to-do-list-item"
import './to-do-list.css'

const ToDoList = ({ data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <ToDoListItem
                key={id}
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)} />
        )
    })

    return (
        <div className="list" id="list">
            {elements}
        </div>
    )
}

export default ToDoList;