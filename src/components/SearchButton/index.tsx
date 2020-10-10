import React from 'react'

interface SearchButtonProps {
  text?: string;
  onClick(): any;
}

export default function SearchButton(props: SearchButtonProps) {
  return (
    <button
    onClick={props.onClick}
    >
      {props.text || 'Search'}
    </button>
  )
}
