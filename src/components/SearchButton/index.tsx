import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

interface SearchButtonProps {
  text: string;
  onClick(): any;
  loading: boolean;
  color: string;
}


export default function SearchButton(props: SearchButtonProps) {
  return (
    <Button 
        style={{minWidth: '80px', minHeight: '36px'}}
        onClick={props.onClick} 
        variant="contained" 
        color="primary"
        disabled={props.loading}
        >
      {
        props.loading ? 
        <CircularProgress 
          style={{marginLeft: '8px', color: '#fff'}}
          size={14} 
        /> : 
        props.text
      }
    </Button>
  );
}
