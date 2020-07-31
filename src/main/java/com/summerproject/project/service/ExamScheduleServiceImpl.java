package com.summerproject.project.service;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.ExamSchedule;
import com.summerproject.project.mapper.ExamScheduleDtoEntityMapper;
import com.summerproject.project.repository.ExamScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.List;

@Service
public class ExamScheduleServiceImpl implements ExamScheduleService{

    @Autowired
    ExamScheduleRepository examScheduleRepository;

    @Autowired
    ExamScheduleDtoEntityMapper examScheduleDtoEntityMapper;

    private static final Logger logger = LoggerFactory.getLogger(ExamScheduleServiceImpl.class);

    @Override
    public ExamScheduleDto addExamSchedule(ExamScheduleDto examSchedule) {
        logger.info(examSchedule.toString() + " added");
        return examScheduleDtoEntityMapper.from(examScheduleRepository.save(examScheduleDtoEntityMapper.from(examSchedule)));
    }

    @Override
    public ExamScheduleDto deleteExamSchedule(Long id) {
        //TODO
        return null;
    }

    @Override
    public ExamScheduleDto updateExamSchedule(ExamScheduleDto examSchedule) {
        //TODO
        return null;
    }

    @Override
    public List<ExamScheduleDto> getAllExamSchedules() {
        //TODO
        return null;
    }
}
