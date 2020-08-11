package com.summerproject.project.service;

import com.summerproject.project.entity.Course;
import com.summerproject.project.entity.Exam;
import com.summerproject.project.entity.Faculty;
import com.summerproject.project.entity.Teacher;

import java.util.List;
import java.util.Optional;

public interface ExamService {

    Exam addExam (Exam exam);

    List<Course> getCourses();

    List<Teacher> getTeachers();

    List<Faculty> getFaculties();
}
