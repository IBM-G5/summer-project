package com.summerproject.project.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Value;



@Getter
@Value
@Builder(toBuilder = true)
public class CourseDto {

    private Long id;

    private String name;

    private int yearOfStudy;

    private int semester;
}
