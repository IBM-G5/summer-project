package com.summerproject.project.service;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.ExamSchedule;

import java.util.List;

public interface ExamScheduleService {
    void addExamSchedule(ExamScheduleDto examSchedule);
    void deleteExamSchedule(Long id);
    void updateExamSchedule(ExamScheduleDto examSchedule);
    List<ExamSchedule> getAllExamSchedules();
}
