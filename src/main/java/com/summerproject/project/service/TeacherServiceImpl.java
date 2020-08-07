package com.summerproject.project.service;

import com.summerproject.project.dto.TeacherDto;
import com.summerproject.project.mapper.TeacherDtoEntityMapper;
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

    @Autowired
    TeacherDtoEntityMapper teacherDtoEntityMapper;

    @Override
    public boolean checkLogin(String email, String password) {
        logger.info("check login with email = " + email + " password = " + password);
        return teacherRepository.existsTeachersByEmailAndPassword(email, password);
    }

    @Override
    public boolean addTeacher(TeacherDto teacherDto) {
        logger.info("trying to validate teacher = " + teacherDto.toString());
        EmailValidator emailValidator = new EmailValidator();
        if(emailValidator.validate(teacherDto.getEmail())){
            teacherDtoEntityMapper.from(teacherRepository.save(teacherDtoEntityMapper.from(teacherDto)));
            return true;
        } else {
            return false;
        }
    }


}
