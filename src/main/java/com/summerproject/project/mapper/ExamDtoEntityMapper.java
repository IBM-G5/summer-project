package com.summerproject.project.mapper;

import com.summerproject.project.dto.ExamDto;
import com.summerproject.project.entity.Exam;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ExamDtoEntityMapper {
    ExamDto from (Exam exam);
    Exam from (ExamDto examDto);
}
