package com.summerproject.project.service;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.Faculty;

import java.util.List;

public interface ExamScheduleService {
    ExamScheduleDto addExamSchedule(ExamScheduleDto examSchedule);
    ExamScheduleDto deleteExamSchedule(Long id) throws Exception;
    ExamScheduleDto updateExamSchedule(Long examId, ExamScheduleDto examSchedule) throws Exception;
    List<ExamScheduleDto> getAllExamSchedules();
    List<ExamScheduleDto> getAllExamSchedulesFilterByFaculty(String faculty);
    List<ExamScheduleDto> getAllExamSchedulesFilterByYearOfStudy(int yearOfStudy);
    List<ExamScheduleDto> getAllExamSchedulesFilterByYearOfStudyAndFaculty(int yearOfStudy, String faculty);
}
