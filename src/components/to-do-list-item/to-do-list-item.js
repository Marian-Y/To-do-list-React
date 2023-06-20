import './to-do-list-item.css'

const ToDoListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         rise: false
    //     }
    // }

    // onRise = () => {
    //     this.setState(({ rise }) => ({
    //         rise: !rise
    //     }))
    // }

    // render() {
        const { caseText, date, onDelete, onToggleIncrease, onToggleRise, rise} = props;
        // const { rise } = this.state;

        let classNames = "listli";
        if (rise) {
            classNames += ' like';
        }
        return (
            <li
                onClick={onToggleRise}
                className={classNames}
                id="5276865">
                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className='fas fa-star'></i>
                {/* <i class="fa-solid fa-trash"></i> */}

                <div>
                    <p id="liCase">Справа: <span className="liCaseP">{caseText}</span></p>
                    <p id="liStartOfExecution">Початок виконання: <span className="liStartOfExecutionP">{date}</span></p>
                </div>
            </li>
        )
    // }
}

export default ToDoListItem;