import React, {Component} from "react";
import './add-note.css';

export default class AddNote extends Component {

    state = {
        name: '',
        author: '',
        important: false,
        main: '',
        date: ''
    }




    render() {




        return (
            <form className="for-form">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Название</label>
                    <input type="text" name="name" className="form-control" id="exampleFormControlInput1"
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Имя</label>
                    <input type="text" name="author" className="form-control" id="exampleFormControlInput2"
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Выберите важность заметки</label>
                    <select name="important" className="form-control" id="exampleFormControlSelect1">
                        <option>Не важная</option>
                        <option>Важная</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Текст заметки</label>
                    <textarea name="text" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Дата</label>
                    <input type="date" name="date" className="form-control" id="exampleFormControlInput3"
                    ></input>
                </div>
                <button type="submit"
                        className="btn btn-primary"
                        onClick={()=>{console.log(1)}}>Создать</button>
            </form>
        )
    }


}


