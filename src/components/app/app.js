import { Component } from 'react'

import Info from '../to-do-list-info/to-do-list-info'
import SearchPanel from '../search-panel/search-panel'
import Filter from '../filter/filter'
import ToDoList from '../to-do-list/to-do-list'
import ToDoListAddForm from '../to-do-list-add-form/to-do-list-add-form'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { caseText: "Справа 1", date: "2021.11.11 01:41", rise: false, id: 1 },
                { caseText: "Справа 2", date: "2022.11.01 23:00", rise: true, id: 2 },
                { caseText: "Справа 3", date: "2023.11.05 11:11", rise: false, id: 3 }
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (caseText, date) => {
        const newItem = {
            caseText,
            date,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }

    render() {
        const numberOfCases = this.state.data.length;
        const numberOfRise = this.state.data.filter(item => item.rise).length;

        return (
            <div id="toDoList">
                <Info  numberOfCases={numberOfCases} numberOfRise={numberOfRise}/>
                <ToDoListAddForm onAdd={this.addItem} />

                <div className="search-panel">
                    <SearchPanel />
                    <Filter />
                </div>

                <ToDoList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise} />
            </div>

        )
    }
}

export default App;