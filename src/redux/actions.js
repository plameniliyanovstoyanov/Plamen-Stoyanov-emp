import actionTypes from './action-types'
import processData  from '../utils/dataProcessor'
import parseCsv from '../utils/csvParser'

export const uploadCsv = (file) => async (dispatch) => {
  dispatch({
      type: actionTypes.PARSE_CSV_REQUEST, 
      resourceType: 'csv'
    });
  try {
    const csvData = await parseCsv(file)
    const processedData = processData(csvData)
    dispatch({ 
      type: actionTypes.PARSE_CSV_SUCCESS, 
      payload: processedData 
    })
  } catch (error) {
    dispatch({ 
      type: actionTypes.PARSE_CSV_FAILURE, 
      payload: error.message 
    })
  }
}