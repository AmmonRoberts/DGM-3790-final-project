import React from 'react';

const Translations = (props) => {
    const translationsArray = Object.keys(props.translations).map((key) => [key, props.translations[key]]);
    let i = 0;
    return (

        translationsArray.map((element) => {
            return <span key={`translation${i += 1}`}><strong>{element[0].toUpperCase()}</strong> {element[1]}<br /></span>
        })
    );

};

export default Translations;