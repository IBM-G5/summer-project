package com.summerproject.project.service;
import com.summerproject.project.entity.Teacher;

public interface TeacherService {

    void save(Teacher teacher);
    Teacher findByName(String name);

}
