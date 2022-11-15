const Person = require('./person');

class Teacher extends Person {

  constructor(firstName, lastName, subject, yearsOfExperience ){
    super(firstName, lastName)
    this.subject = subject
    this.yearsOfExperience = yearsOfExperience
  }

  static combinedYearsOfExperience(teachers){
    return teachers.reduce(function(acc, current){
      return acc.yearsOfExperience + current.yearsOfExperience
    })
  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
