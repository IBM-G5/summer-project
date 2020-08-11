package com.summerproject.project.service;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.Exam;
import com.summerproject.project.entity.ExamSchedule;
import com.summerproject.project.entity.Faculty;
import com.summerproject.project.mapper.ExamScheduleDtoEntityMapper;
import com.summerproject.project.repository.ExamRepository;
import com.summerproject.project.repository.ExamScheduleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ExamScheduleServiceImpl implements ExamScheduleService{

    @Autowired
    ExamRepository examRepository;

    @Autowired
    ExamScheduleRepository examScheduleRepository;

    @Autowired
    ExamScheduleDtoEntityMapper examScheduleDtoEntityMapper;

    private static final Logger logger = LoggerFactory.getLogger(ExamScheduleServiceImpl.class);

    @Override
    public ExamScheduleDto addExamSchedule(ExamScheduleDto examSchedule) {
        logger.info(examSchedule.toString() + " added");
      //  Exam exam = examRepository.save(examScheduleDtoEntityMapper.from(examSchedule).getExam());
      //  examSchedule.setExam(exam);
       return examScheduleDtoEntityMapper.from(examScheduleRepository.save(examScheduleDtoEntityMapper.from(examSchedule)));
    }

    @Override
    public ExamScheduleDto deleteExamSchedule(Long examId) throws Exception {
        logger.info(" Exam deleted by id = " + examId);
        Optional<ExamSchedule> examSchedule = examScheduleRepository.findById(examId);
         return examSchedule.map(examSchedule1 -> {
            examScheduleRepository.deleteById(examSchedule1.getId());
            return examScheduleDtoEntityMapper.from(examSchedule1);
        }).orElse(null);
    }



    @Override
    public ExamScheduleDto updateExamSchedule(Long examId, ExamScheduleDto examSchedule) throws Exception {
        logger.info(" Exam update" + examSchedule.toString());
        Optional<ExamSchedule> examScheduleOptional = examScheduleRepository.findById(examId);
        examScheduleOptional.ifPresent(examSchedule1 -> {
            examScheduleDtoEntityMapper.from(examScheduleRepository.save(examScheduleDtoEntityMapper.from(examSchedule)));
        });
        examScheduleOptional.orElseThrow(() ->
            new Exception(" Exam not found!")
        );
        return examScheduleDtoEntityMapper.from(examScheduleRepository.findById(examId).get());
    }

    @Override
    public List<ExamScheduleDto> getAllExamSchedules() {
        logger.info(" All scheduled exams returned.");
        return examScheduleRepository.findAll().stream().map(examScheduleDtoEntityMapper::from).collect(Collectors.toList());
    }

    @Override
    public List<ExamScheduleDto> getAllExamSchedulesFilterByFaculty(String faculty) {
        logger.info(" Exams filtered by Faculty = " + faculty.toString());
        return examScheduleRepository.filterByFaculty(faculty).stream().map(examScheduleDtoEntityMapper::from).collect(Collectors.toList());
    }

    @Override
    public List<ExamScheduleDto> getAllExamSchedulesFilterByYearOfStudy(int yearOfStudy) {
        logger.info(" Exams filtered by yearOfStudy = " +  yearOfStudy);
        return examScheduleRepository.filterByYearOfStudy(yearOfStudy).stream().map(examScheduleDtoEntityMapper::from).collect(Collectors.toList());
    }

    @Override
    public List<ExamScheduleDto> getAllExamSchedulesFilterByYearOfStudyAndFaculty(int yearOfStudy, String faculty) {
        logger.info(" Exams filtered by yearOfStudy  = " +  yearOfStudy + " and faculty = " + faculty);
        return examScheduleRepository.filterByYearOfStudyAndFaculty(yearOfStudy, faculty).stream().map(examScheduleDtoEntityMapper::from).collect(Collectors.toList());
    }



}
