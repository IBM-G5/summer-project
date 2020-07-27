package com.summerproject.project.controller;

import com.summerproject.project.entity.Teacher;
import com.summerproject.project.service.TeacherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/login")
public class LoginControl(){

    @Autowired
    private TeacherService teacherService;

    //Sign Up
    @PostMapping
    public Teacher addTeacher(@RequestBody Teacher teacher){
        return teacherService.addTeacher(teacher);
    }

    //LogIn
    @GetMapping(value = "/{teacherName}")
    public Teacher findByName(@PathVariable("teacherName") String teacherName){
        return teacherService.findByName(teacherName);
    }

}