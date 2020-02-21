import React, {Component} from 'react';
import './app.css';
import Header from "../header/header";
import Note from "../note/note";
import AddNote from "../add-note/add-note";
import { BrowserRouter as Router, Route} from "react-router-dom";


export default class App extends Component {

    state = {
        notes: [],
        key: 0
    }



    onAdd = (noteSt) => {
       //придумать валидатор добавления в state
        if (noteSt.name === '') {
            return
        }
        this.setState(({notes}) => {
            const newAr = [
                ...notes
            ]
            newAr.push(noteSt)
            return {
                notes: newAr
            }
        })
    }

    onDelete = (id) => {
        this.setState(({notes}) => {
            const idx = notes.findIndex((el) => el.id ===id)
            const newAr = [
                ...notes.slice(0,idx),
                ...notes.slice(idx+1)
            ]
                return {
                    notes: newAr
                }
        })
    }

    content = ''

    render() {



    let res = this.state.notes.map((item) => {
            return <Note note={item} key={item.id++} onDelete={this.onDelete}/>
        })

        if (res.length === 0) {
            res = <h2 style={{marginLeft: "50px", marginTop: "50px"}}>Заметок нет</h2>
        }

        return (
        <Router>
                    <div className="App">

                        <Header />

                        <Route exact path="/" render={() => (<div className="row row-cols-1 row-cols-md-4" style={{marginRight:"50px"}}>
                            {res}
                        </div>
                       )}/>

                        <Route path="/note" render={() =>(
                            <AddNote onAdd={this.onAdd}/>
                        )}/>



                    </div>
            </Router>
            );
    }


}


