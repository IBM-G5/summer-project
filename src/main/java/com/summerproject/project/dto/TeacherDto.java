package com.summerproject.project.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
//@Value
@Builder(toBuilder = true)
public class TeacherDto {
    private Long id;

    private String name;

    private String email;

    private String password;


}
