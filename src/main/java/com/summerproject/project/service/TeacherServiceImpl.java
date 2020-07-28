package com.summerproject.project.service;

import com.summerproject.project.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService{

    @Autowired
    private TeacherRepository teacherRepository;


    @Override
    public boolean checkLogin(String email, String password) {
        return teacherRepository.existsTeachersByEmailAndPassword(email, password);
    }


}
