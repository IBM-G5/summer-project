package com.summerproject.project.mapper;

import com.summerproject.project.dto.FacultyDto;
import com.summerproject.project.entity.Faculty;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FacultyDtoEntityMapper {
    FacultyDto from (Faculty faculty);
    Faculty from (FacultyDto facultyDto);
}
