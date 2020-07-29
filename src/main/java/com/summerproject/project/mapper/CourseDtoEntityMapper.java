package com.summerproject.project.mapper;

import com.summerproject.project.dto.CourseDto;
import com.summerproject.project.entity.Course;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring")

public interface CourseDtoEntityMapper {
    CourseDto from (Course course);
    Course from (CourseDto courseDto);
}
