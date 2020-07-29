package com.summerproject.project.controller;

import com.summerproject.project.entity.Teacher;
import com.summerproject.project.service.TeacherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @Autowired
    private TeacherService teacherService;

    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public void addTeacher(@RequestBody Teacher teacher){
       // teacherService.addTeacher(teacher);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public ResponseEntity<String> findTeacherForLogin(@RequestBody Teacher teacher){
        boolean result;
        result= teacherService.checkLogin(teacher.getEmail(), teacher.getPassword());
        if (result) {
            return new ResponseEntity<String>("Autentification succesfull",HttpStatus.OK);
        }
        else  return new ResponseEntity<String>("Autentification failed",HttpStatus.BAD_REQUEST);
    }
}
