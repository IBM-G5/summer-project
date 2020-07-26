package com.summerproject.project.service;
import com.summerproject.project.entity;
public interface TeacherService {
    void save(Teacher teacher);

    Teacher findByName(String name);
    // Teacher findByName(String name);
}
