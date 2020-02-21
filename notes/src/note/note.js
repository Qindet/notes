import React, {Component} from "react";
import './note.css'

export default class Note extends Component {


    render() {

        //{ name, author, important, text, date } = this.props.note

        return (
                <div className="col mb-4">
                    <div className="card">
                        <img className="del" src="./images/del.png" alt="sf"
                             onClick={() => this.props.onDelete(this.props.note.id)}>
                            </img>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNfwFoLQX_As6Km0agAKjxSjF3XihMFHEfX0fVMxUSzsSBXdrx" className="card-img-top image" alt="sf"></img>
                            <div className="card-body">
                                {this.props.note.important === 'Важная'  ?
                                    <span className="badge badge-danger">Важная заметка</span>
                                    : < span className = "badge badge-success"> Не важная заметка </span>}
                                <h5 className="card-title">{this.props.note.name}</h5>
                                <h6 className="card-title">{this.props.note.author}</h6>
                                <p className="card-text">{this.props.note.main}</p>
                                <p>{this.props.note.date}</p>
                            </div>
                    </div>
                </div>
        )
    }

}