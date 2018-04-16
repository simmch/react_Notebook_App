import React from 'react';

const NoteCard = props => {
      return (
            <div className="jumbotron">
                <div>
                {/* The children of the props are the notes in the App.js file
                Where this component is being used. */}
                {props.children}
                </div>
            </div>
       );
}

export default NoteCard;