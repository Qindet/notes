import React, {Component} from "react";
import './note.css'

export default class Note extends Component {

    state = {
        name: '',
        author: '',
        important: false,
        main: '',
        date: ''
    }

    render() {



        return (
                <div className="col mb-4">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNfwFoLQX_As6Km0agAKjxSjF3XihMFHEfX0fVMxUSzsSBXdrx" className="card-img-top image" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Название заметки</h5>
                                <h6 className="card-title">Имя</h6>
                                <p className="card-text">This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
        )
    }

}