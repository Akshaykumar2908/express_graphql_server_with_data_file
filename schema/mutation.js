const {coursesData} = require('../data/coursedata');

getCourse = function(args) {
  var id = args.id;
  return coursesData.filter(course => {
    return course.id == id;
  })[0];
},

getCourses = function(args) {
  if (args.topic) {
    var topic = args.topic;
    return coursesData.filter(course => course.topic === topic);
  } else {
    return coursesData;
  }
}

module.exports = {
  root:{
    course: getCourse,
    courses: getCourses
  }
}