package com.summerproject.project.service;
import com.summerproject.project.dto.TeacherDto;
import com.summerproject.project.entity.Teacher;

public interface TeacherService {

    boolean checkLogin (String email, String password);
    boolean addTeacher(TeacherDto teacherDto);
}
