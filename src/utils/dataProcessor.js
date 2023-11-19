import moment from 'moment'

const parseDate = (dateString, formats, dateType) => {
  if (dateString === 'NULL' || dateString === '') {
    return moment()
  }

  for (const format of formats) {
    if (moment(dateString, format, true).isValid()) {
      return moment(dateString, format)
    }
  }

  // if the given date is invalid tell the user where to look to correct it
  throw new Error(`Invalid date format for ${dateType}: "${dateString}".}`)
};

const calculateDaysBetweenDates = (dateFrom, dateTo) => {
  const formats = [
    'YYYY-MM-DD', 'MM/DD/YYYY', 'DD-MM-YYYY', 'DD/MM/YYYY', // Add more formats here
    'YYYY-MM-DD HH:mm:ss', 'MM/DD/YYYY HH:mm:ss', 'DD-MM-YYYY HH:mm:ss', 'DD/MM/YYYY HH:mm:ss' 
  ];

  const startDate = parseDate(dateFrom, formats, 'start date')
  const endDate = parseDate(dateTo, formats, 'end-date')

  return endDate.diff(startDate, 'days')
};

const calculateCommonProjectsDuration = (csvData) => {
  let projectPairs = {} // store the pairs

  for (let i = 0; i < csvData.length; i++) { // loop trough the {} comparing the first with every other
    for (let j = i + 1; j < csvData.length; j++) {
      const employee1 = csvData[i]
      const employee2 = csvData[j]

      if (employee1.ProjectID === employee2.ProjectID) { // find common projects and sum the working days
        const duration = calculateDaysBetweenDates(employee1.DateFrom, employee1.DateTo) +
         calculateDaysBetweenDates(employee2.DateFrom, employee2.DateTo);

        const projectKey = `Project_${employee1.ProjectID}`;
        if (!projectPairs[projectKey] || projectPairs[projectKey].DaysWorked < duration) { // compare pairs if more than one are found
          projectPairs[projectKey] = {
            "EmpID_1": employee1.EmpID,
            "EmpID_2": employee2.EmpID,
            "ProjectID": employee1.ProjectID,
            "DaysWorked": duration
          };
        } 
    }
  }
}
  return Object.values(projectPairs).sort((a, b) => b.DaysWorked - a.DaysWorked) // sort data by most days
};

export default calculateCommonProjectsDuration
