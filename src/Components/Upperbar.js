import React, { Component } from 'react'
//import './Upperbar.css';
export default class Upperbar extends Component {
    constructor() {
        super();
        this.state = {
          addingNote: false,
          title: null
        };
      }
  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    if(notes){
    return (
      <div>
         <button className='newDocument'>{this.state.addingNote ? 'Cancel' : 'New Note'}</button>
         {
              this.state.addingNote ? 
              <div>
                <input type='text'
                  className={classes.newNoteInput}
                  placeholder='Enter note title'
                  onKeyUp={(e) => this.updateTitle(e.target.value)}>
                </input>
                
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote}Submit Note
              </div> :
              null
            }
            
              {
                notes.map((_note, _index) => {
                  return(
                    <div key={_index}>
                      
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}
                      
                    </div>
                  )
                })
              }
           
        </div>
      );
    } else {
      return(<div></div>);
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  }
  updateTitle = (txt) => {
    this.setState({ title: txt });
  }
  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);

     

  }


 

