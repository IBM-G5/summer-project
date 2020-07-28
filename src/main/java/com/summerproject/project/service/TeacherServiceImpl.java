package com.summerproject.project.service;

import com.summerproject.project.repository.TeacherRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService{

    @Autowired
    private TeacherRepository teacherRepository;

    static final Logger logger = LoggerFactory.getLogger(TeacherServiceImpl.class);

    @Override
    public boolean checkLogin(String email, String password) {
        logger.info("check login with email = " + email + " password = " + password);
        return teacherRepository.existsTeachersByEmailAndPassword(email, password);
    }


}
