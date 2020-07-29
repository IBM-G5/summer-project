package com.summerproject.project.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Value;


@Getter
@Value
@Builder(toBuilder = true)
public class TeacherDto {
    private int id;

    private String name;

    private String email;

    private String password;


}
