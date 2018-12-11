import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import { NoteListContainer, NoteListTitle} from '../../styles';

import Note from './Note';
import NoteSelect from './NoteSelect'
import Loading from '../Loading';


class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state={};
    }

    noteClicked = (ev, id) => {
        ev.preventDefault();
        this.props.history.push(`/note/${id}`)
    }


    filterdNotes = () => {
        const filterdNotes = this.props.notes.filter(note => 
        note.title.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
        ||
        note.textBody.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1
        );

        if (this.props.sortMode === 'default') {
        return filterdNotes;
        }
        if (this.props.sortMode === 'alpha') {
        return filterdNotes.sort((a, b) => {
            var nameA = a.title.toLowerCase(); // ignore upper and lowercase
            var nameB = b.title.toLowerCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
            });
        }
        if (this.props.sortMode === 'reverse-alpha') {
        return filterdNotes.sort((a, b) => {
            var nameA = a.title.toLowerCase(); // ignore upper and lowercase
            var nameB = b.title.toLowerCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            // names must be equal
            return 0;
        }).reverse();
        }
    }

    render() {

        const {
            noteChecked, 
            noteUnChecked,
            fetchingNote,
            fetchingNotes,
            addingNote,
            updatingNote,
            deletingNote,
        } = this.props;

        if(
            fetchingNotes
            || fetchingNote
            || addingNote
            || updatingNote
            || deletingNote
        ) return <Loading />
        return (
            <NoteListContainer>
                <NoteListTitle>NOTES</NoteListTitle>
                <Route
                    path="/"
                    exact
                    render={props => 
                    this.filterdNotes().map(note => 
                        <Note note={note} key={note.id} noteClicked={e => this.noteClicked(e, note.id)} />)
                    }
                />
                <Route
                    path="/select"
                    exact
                    render={props => 
                        this.filterdNotes().map(note => 
                            <NoteSelect
                                note={note} 
                                key={note.id} 
                                noteChecked={noteChecked}
                                noteUnChecked={noteUnChecked}
                        />)
                    }
                />
            </NoteListContainer>
    );
    }
}


export default NoteList;
