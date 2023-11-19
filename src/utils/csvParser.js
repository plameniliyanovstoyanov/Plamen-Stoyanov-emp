import Papa from 'papaparse'

const parseCsv = (file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        complete: (results) => {
          resolve(results.data)
        },
        header: true,
        skipEmptyLines: true,
        error: (error) => reject(error),
      });
    });
  };

  export default parseCsv
