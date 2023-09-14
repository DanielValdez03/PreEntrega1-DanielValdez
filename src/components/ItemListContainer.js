import React from 'react'

export default function ItemListContainer(props) {
  return (
    <h1 className='inline-block rounded-2xl bg-gray-800 text-white p-2 m-10 font-serif fs-10 text-[30px]'>{props.greeting}</h1>
  )
}
