const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const csvReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PARSE_CSV_REQUEST':
        return { ...state, loading: true }
      case 'PARSE_CSV_SUCCESS':
        return { ...state, loading: false, data: action.payload }
      case 'PARSE_CSV_FAILURE':
        return { ...state, loading: false, error: action.payload }
      default:
        return state
    }
  };

  export default csvReducer