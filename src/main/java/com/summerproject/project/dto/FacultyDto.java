package com.summerproject.project.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Value;


@Getter
@Value
@Builder(toBuilder = true)
public class FacultyDto {

    private int id;

    private String name;

}
