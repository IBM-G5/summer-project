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

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExamScheduleServiceImpl implements ExamScheduleService{

    private final ExamScheduleRepository examScheduleRepository;
    private final ExamScheduleDtoEntityMapper examScheduleDtoEntityMapper;
    private static final Logger logger = LoggerFactory.getLogger(ExamScheduleServiceImpl.class);

    @Override
    public void addExamSchedule(ExamScheduleDto examSchedule) {
        logger.info(examSchedule.toString() + " added");
        examScheduleRepository.save(examScheduleDtoEntityMapper.from(examSchedule));
    }

    @Override
    public void deleteExamSchedule(Long id) {
        //TODO
    }

    @Override
    public void updateExamSchedule(ExamScheduleDto examSchedule) {
        //TODO
    }

    @Override
    public List<ExamSchedule> getAllExamSchedules() {
        //TODO
        return null;
    }
}
