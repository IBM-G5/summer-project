package com.summerproject.project.controller;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.mapper.ExamScheduleDtoEntityMapper;
import com.summerproject.project.service.ExamScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExamScheduleController {

    @Autowired
    ExamScheduleService examScheduleService;

    @PostMapping("/create")
    ExamScheduleDto createExamSchedule(@RequestBody ExamScheduleDto examScheduleDto) {
        return examScheduleService.addExamSchedule(examScheduleDto);
    }

}
