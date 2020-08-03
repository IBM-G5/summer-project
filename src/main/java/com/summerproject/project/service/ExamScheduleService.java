package com.summerproject.project.service;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.ExamSchedule;

import java.util.List;

public interface ExamScheduleService {
    ExamScheduleDto addExamSchedule(ExamScheduleDto examSchedule);
    ExamScheduleDto deleteExamSchedule(Long id);
    ExamScheduleDto updateExamSchedule(Long examId, ExamScheduleDto examSchedule) throws Exception;
    List<ExamScheduleDto> getAllExamSchedules();
}