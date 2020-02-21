import React, {Component} from "react";
import './add-note.css';
import {Link} from "react-router-dom";

export default class AddNote extends Component {

    state = {
        name: '',
        author: '',
        important: 'Не важная',
        main: '',
        date: '',
        id: Date.now()
    }

    onSubmit = (e) => {
        this.props.onAdd(this.state)
        e.preventDefault()
        this.setState({
            name: '',
            author: '',
            important: '',
            main: '',
            date: '',
            id: ''
        })
    }

    inputChange = (e) => {
        const target = e.target
        let value = target.value
        const name = target.name
        if (value.length > 10 && name === 'main') {
           value = value.slice(0,50)
        }
        this.setState({
            [name]: value
        })
    }


    render() {
        return (

            <form className="for-form"
                  onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Название</label>
                    <input type="text" name="name" className="form-control" id="exampleFormControlInput1"
                            onChange={this.inputChange} value={this.state.name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Имя</label>
                    <input type="text" name="author" className="form-control" id="exampleFormControlInput2"
                           onChange={this.inputChange} value={this.state.author}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Выберите важность заметки</label>
                    <select name="important" className="form-control" id="exampleFormControlSelect1"
                            onChange={this.inputChange} value={this.state.important}>
                        <option>Не важная</option>
                        <option>Важная</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Текст заметки</label>
                    <textarea name="main" className="form-control" id="exampleFormControlTextarea1" rows="3"
                              onChange={this.inputChange} value={this.state.main}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Дата</label>
                    <input type="date" name="date" className="form-control" id="exampleFormControlInput3"
                           onChange={this.inputChange} value={this.state.date}></input>
                </div>
                <button type="submit"
                        className="btn btn-primary"
                        >Создать</button>
                <Link to="/">
                <button type="button"
                        className="btn btn-secondary back"
                        >Вернуться к заметкам
                </button>
                </Link>

            </form>
        )
    }


}


