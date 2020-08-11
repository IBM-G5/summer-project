package com.summerproject.project.service;

import com.summerproject.project.entity.Course;
import com.summerproject.project.entity.Exam;
import com.summerproject.project.entity.Faculty;
import com.summerproject.project.entity.Teacher;
import com.summerproject.project.repository.CourseRepository;
import com.summerproject.project.repository.ExamRepository;
import com.summerproject.project.repository.FacultyRepository;
import com.summerproject.project.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {

    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    FacultyRepository facultyRepository;

    @Autowired
    ExamRepository examRepository;


    @Override
    public Exam addExam(Exam exam) {

        Teacher teacher = teacherRepository.save(exam.getTeacher());
        Course course = courseRepository.save(exam.getCourse());
        Faculty faculty = facultyRepository.save(exam.getFaculty());
        exam.setTeacher(teacher);
        exam.setCourse(course);
        exam.setFaculty(faculty);
        return examRepository.save(exam);
    }

    @Override
    public List<Course> getCourses() {
        return courseRepository.findAll();
    }

    @Override
    public List<Teacher> getTeachers() {
        return teacherRepository.findAll();
    }

    @Override
    public List<Faculty> getFaculties() {
        return facultyRepository.findAll();
    }


}
