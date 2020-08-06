package com.summerproject.project.controller;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.Faculty;
import com.summerproject.project.mapper.ExamScheduleDtoEntityMapper;
import com.summerproject.project.service.ExamScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExamScheduleController {

    @Autowired
    ExamScheduleService examScheduleService;

    @PostMapping("/create")
    ExamScheduleDto createExamSchedule(@RequestBody ExamScheduleDto examScheduleDto) {
        return examScheduleService.addExamSchedule(examScheduleDto);
    }

    @DeleteMapping("/delete/{id}")
    List<ExamScheduleDto> removeExamSchedule (@PathVariable Long id) throws Exception {
        return examScheduleService.deleteExamSchedule(id);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<ExamScheduleDto>> getAllExamSchedules() {
        List<ExamScheduleDto> listExamScheduleDto = examScheduleService.getAllExamSchedules();
        if (listExamScheduleDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(listExamScheduleDto, HttpStatus.OK);
        }
    }

    @PutMapping(value = "/update/{examId}")
    public ResponseEntity<ExamScheduleDto> updateExamSchedule(@PathVariable Long examId, @RequestBody ExamScheduleDto examSchedule) throws Exception {
        ExamScheduleDto examScheduleDto = examScheduleService.updateExamSchedule(examId, examSchedule);
        if(examScheduleDto == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(examScheduleDto, HttpStatus.OK);
        }
    }

    @GetMapping(value = "/filterByFaculty/{faculty}")
    public ResponseEntity<List<ExamScheduleDto>> filterByFaculty(@PathVariable String faculty){
        List<ExamScheduleDto> listExamScheduleDto = examScheduleService.getAllExamSchedulesFilterByFaculty(faculty);
        if (listExamScheduleDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(listExamScheduleDto, HttpStatus.OK);
        }
    }
}
