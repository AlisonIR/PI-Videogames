import React from 'react'
import style from './Loading.module.css'

const Loading = () => {
  return (
    <div class={style.container}>
    <div class={style.space}>
      <div class={style.loading}></div>
    </div>
  </div>
  )
}

export default Loading