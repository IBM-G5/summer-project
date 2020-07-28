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

    //Sign Up
//    @PostMapping
//    public Teacher addTeacher(@RequestBody Teacher teacher){
//        return teacherService.addTeacher(teacher);
//    }

    //SignUp
    //@PostMapping


    //LogIn
//    @GetMapping(value = "/{teacherName}")
//    public Teacher findByName(@PathVariable("teacherName") String teacherName){
//        return teacherService.findByName(teacherName);
//    }


    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public void addTeacher(@RequestBody Teacher teacher){
       // teacherService.addTeacher(teacher);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public ResponseEntity<String> findTeacherForLogin(@RequestBody Teacher teacher){
        //return teacherService.findTeacher(teacher.email, info.password);
        boolean result;
        result= teacherService.checkLogin(teacher.email, teacher.password);
        if (result == true)
        {
            return new ResponseEntity<String>("Autentification succesfull",HttpStatus.OK);
        }
        else  return new ResponseEntity<String>("Autentification failed",HttpStatus.BAD_REQUEST);

    }

}
