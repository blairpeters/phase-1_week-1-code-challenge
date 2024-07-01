 
 function studentGrade(marks) {
    if (marks > 79) {
      return 'A';

    } else if (marks >= 60) {

      return 'B';

    } else if (marks >= 50) {

      return 'C';

    } else if (marks >= 40) {

      return 'D';

    } else {

      return 'E';
    }
  }
  //generating the prompt
  
  function studentGradeGenerator() {
    const marks = parseFloat(prompt('Enter the student marks (0-100):')); //floating point number
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return 'Invalid input. Please enter a valid marks between 0 and 100.';
    }
  


    const grade = studentGrade(marks)
    return `The students grade is: ${grade}`;
  }
  
  
  const result = studentGradeGenerator();
  alert(result);
  
