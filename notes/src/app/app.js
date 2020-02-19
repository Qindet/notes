import React, {Component} from 'react';
import './app.css';
import Header from "../header/header";
import Note from "../note/note";
import AddNote from "../add-note/add-note";

export default class App extends Component {

    state = {
        notes: []
    }


    render() {
        return (
            <div className="App">
                <Header />
                <div className="row row-cols-1 row-cols-md-4">
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />

                </div>
                <AddNote />
            </div>
        );
    }


}


