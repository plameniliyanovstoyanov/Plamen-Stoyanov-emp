# Plamen-Stoyanov-employees

An application that identifies the pair of employees who have worked together on common projects for the longest period of time. It reads data from a CSV file uploaded by the user, loops through the data, calculates the pair of employees who worked most days on a common project and displays them in a table.

## Usage
In the project directory, you have to run:

To install all the dependencies:
### `npm i`

to start the project
### `npm start`

## Sample data: 
It's given a text file in the format ```EmpID, ProjectID, DateFrom, DateTo```

Example: 
   ```
      143, 12, 2013-11-01, 2014-01-05
      218, 10, 2012-05-16, NULL
      143, 10, 2009-01-01, 2011-04-27
      ...
   ```

I also created sample mock-up files that you can download or read data from. They are placed in the files folder ```./files/```.

## Specific requirements 
* DateTo can be NULL, equivalent to today.
* The input data must be loaded to the program from a CSV file.
* Create a UI: The user picks up a file from the file system and, after selecting it, all common projects of the pair are displayed in a datagrid with the following columns: Employee ID #1, Employee ID #2, Project ID, Days worke
* The task solution needs to be uploaded to github.com, repository name must be in format: `{FirstName}-{LastName}-employees`.

## Technologies
* React.js
* Redux
* Material UI
* Moment.js
* Papa Parse

## Author

**Plamen Stoyanov** 

## License
[MIT](https://choosealicense.com/licenses/mit/)
