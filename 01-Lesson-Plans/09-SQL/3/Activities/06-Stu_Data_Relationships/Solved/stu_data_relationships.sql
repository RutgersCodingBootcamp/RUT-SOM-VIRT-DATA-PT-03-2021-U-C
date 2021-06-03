-- Query Tables
SELECT * FROM students;

SELECT * FROM courses;

SELECT * FROM student_courses_junction;

-- A join statement to query all courses taken by students
SELECT s.id, s.last_name, s.first_name, c.id, c.course_name, j.course_term
FROM students s
LEFT JOIN student_courses_junction j
ON s.id = j.student_id
LEFT JOIN courses c
ON c.id = j.course_id;
