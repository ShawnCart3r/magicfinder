import React from 'react'

const card = props => (
    <div className="weather__info">
    { 
      props.name && <p className="weather__key">Name :
        <span className="weather__value"> { props.name }</span>
      </p> 
    }
    { 
      props.mana_cost && <p className="weather__key">Mana Cost: <span className="weather__value"> { props.mana_cost }</span>
      </p>
    }
    { props.oracle_text && <p className="weather__key">Oracle <span className="weather__value">Text { props.oracle_text}</span></p> 
    }
        { 
      props.image && <img className="card-image"src={ props.image}/>
    }
    { props.error && <p className="weather__error">{ props.error }</p> 
    }
  </div> 
);

export default card