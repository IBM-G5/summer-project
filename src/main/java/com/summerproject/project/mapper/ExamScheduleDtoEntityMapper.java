package com.summerproject.project.mapper;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.ExamSchedule;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ExamScheduleDtoEntityMapper {
    ExamScheduleDto from (ExamSchedule examSchedule);
    ExamSchedule from (ExamScheduleDto examScheduleDto);
}
