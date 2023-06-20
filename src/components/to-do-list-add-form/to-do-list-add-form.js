import { Component } from 'react'

import './to-do-list-add-form.css'

class ToDoListAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseText: '',
            date: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.caseText, this.state.date);
        this.setState({
            caseText: '',
            date: ''
        })
        console.log(`Я нічого не розумію`)
    }

    render() {
        const { caseText, date } = this.state;

        return (
            <div id="wrapper" >

                <form onSubmit={this.onSubmit}>
                    <div className="form__group field">
                        <input
                            name="caseText"
                            value={caseText}
                            onChange={this.onValueChange}
                            type="input"
                            className="form__field"
                            placeholder="case"
                            id='case'
                            required />
                        <label
                            htmlFor="case"
                            className="form__label">Справа
                        </label>
                        <div id="errorCase"></div>
                    </div>

                    <div className="form__group field">
                        <input
                            name="date"
                            value={date}
                            onChange={this.onValueChange}
                            type="datetime-local"
                            className="form__field"
                            placeholder="startOfExecution"
                            id='startOfExecution'
                            min="2023-04-13T00:00"
                            max="9999-06-14T00:00"
                            required />
                        <label
                            htmlFor="startOfExecution"
                            className="form__label">Початок виконання
                        </label>
                        <div id="errorTime"></div>
                    </div>

                    <div className='потім'>
                        {/* <div className="form__group field">
<input
type="input"
className="form__field"
placeholder="notes"
name="notes"
id='notes' />
<label
htmlFor="notes"
className="form__label">Примітки (He обов'язкове поле)</label>
</div> */}
                        {/* <div className="form__group field">
<input
style={{display: "none"}}
type="file"
className="form__field"
placeholder="image"
name="image"
id='image'
accept="image/*" />
<label
style={{cursor: "pointer"}}
htmlFor="image"
className="form__label">Виберіть Зображення (He обов'язкове поле)</label>
<button
id="fileButton"
// onclick="document.getElementById('image').click();"
>Натисніть, щоб вибрати
зобреження</button>
</div> */}

                        {/* <button
// onclick="console.save(localStorage.getItem(`toDoList`))"
className="custom-btn btn-7"

id="btn"><span>Експортувати список</span></button> */}
                        {/* <input
style={{display: "none"}}
type="file"
className="importFile"
placeholder="importFile"
name="importFile"

id='importFile'
accept="application/JSON" />
<button
className="custom-btn btn-7"
// onclick="document.getElementById('importFile').click();"
>Імпортувати
список</button> */}
                        {/* <br/> */}
                    </div>

                    <button
                        type="submit"
                        // onClick={() => validation(this.state.caseText, this.state.date)}
                        className="custom-btn btn-7"
                        id="btn"><span>Додати</span></button>
                </form>
            </div>
        )
    }
}

export default ToDoListAddForm;