import React from 'react'

const Form = props => (
    <form onSubmit={props.getCard}>
    <input type="text" name="cardName" placeholder="card name.."/>
    <button>Get Card</button>
  </form>
  )

export default Form