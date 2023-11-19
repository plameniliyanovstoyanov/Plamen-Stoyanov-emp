import React from 'react'
import { useDispatch } from 'react-redux'
import { uploadCsv } from '../redux/actions'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

const CvsReader = () => {
  const dispatch = useDispatch()
  const inputRef = React.useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    dispatch(uploadCsv(file))
  };

  const handleClick = () => {
    inputRef.current.click()
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={inputRef}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Upload CSV
      </Button>
    </div>
  );
};

export default CvsReader