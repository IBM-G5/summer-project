package com.summerproject.project.dto;


import com.summerproject.project.entity.Course;
import com.summerproject.project.entity.Faculty;
import com.summerproject.project.entity.Teacher;
import lombok.Builder;
import lombok.Getter;
import lombok.Value;


@Getter
@Value
@Builder(toBuilder = true)
public class ExamDto {


    private int id;

    private int academicYear;

    private Faculty faculty;

    private Course course;

    private Teacher teacher;
}


