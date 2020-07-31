package com.summerproject.project.mapper;

import com.summerproject.project.dto.TeacherDto;
import com.summerproject.project.entity.Teacher;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TeacherDtoEntityMapper {
    TeacherDto from (Teacher teacher);
    Teacher from (TeacherDto teacherDto);
}
