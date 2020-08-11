package com.summerproject.project.controller;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.Faculty;
import com.summerproject.project.excel.ExcelGenerator;
import com.summerproject.project.mapper.ExamScheduleDtoEntityMapper;
import com.summerproject.project.service.ExamScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@RestController
public class ExamScheduleController {

    @Autowired
    ExamScheduleService examScheduleService;

    @GetMapping("/download/exam-schedules.xlsx")
    public ResponseEntity<InputStreamResource> excelExamSchedulesReport() throws IOException {
        List<ExamScheduleDto> examScheduleDtos = examScheduleService.getAllExamSchedules();

        ByteArrayInputStream inputStream = ExcelGenerator.examSchedulesToExcel(examScheduleDtos);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=exam-schedules.xlsx");

        return ResponseEntity
                .ok()
                .headers(headers)
                .body(new InputStreamResource(inputStream));
    }

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

    @GetMapping(value = "/filterByYearOfStudy/{yearOfStudy}")
    public ResponseEntity<List<ExamScheduleDto>> filterByYearOfStudy(@PathVariable int yearOfStudy){
        List<ExamScheduleDto> listExamScheduleDto = examScheduleService.getAllExamSchedulesFilterByYearOfStudy(yearOfStudy);
        if (listExamScheduleDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(listExamScheduleDto, HttpStatus.OK);
        }
    }

    @GetMapping(value = "/filterByYearOfStudyAndFaculty/{yearOfStudy}&{faculty}")
    public ResponseEntity<List<ExamScheduleDto>> filterByYearOfStudyAndFaculty(@PathVariable ("yearOfStudy") int yearOfStudy, @PathVariable("faculty") String faculty){
        List<ExamScheduleDto> listExamScheduleDto = examScheduleService.getAllExamSchedulesFilterByYearOfStudyAndFaculty(yearOfStudy, faculty);
        if (listExamScheduleDto.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(listExamScheduleDto, HttpStatus.OK);
        }
    }


}
