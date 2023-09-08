import React from 'react'
import style from './Form.module.css'


const FormPage = () => {
  return (
  //Falta agregar varios generos en simultaneo
  <section className={style.formsection}>
    <div className={style.formbox}>
      <div className={style.value}>
        <form>
          <div className={style.inputbox}>
           <label>Name</label>
           <input type='text' name="name"></input>
         </div>

         <div className={style.inputbox}>
           <label>Image</label>
           <input type='text' name="name"></input>
         </div>

         <div className={style.inputbox}>
           <label>Description</label>
           <input type='text' name="name"></input>
         </div>

         <div className={style.inputbox}>
           <label>Platform</label>
           <input type='text' name="name"></input>
         </div>

         <div className={style.inputbox}>
           <label>ReleaseDate</label>
           <input type='text' name="name"></input>
         </div>

         <div className={style.inputbox}>
           <label>Rating</label>
           <input type='text' name="name"></input>
         </div>
          
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default FormPage