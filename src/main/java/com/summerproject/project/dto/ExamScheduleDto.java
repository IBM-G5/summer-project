package com.summerproject.project.dto;


import com.summerproject.project.entity.Exam;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
//@Value
@ToString
@Builder(toBuilder = true)
public class ExamScheduleDto {


    private Long id;

    private Exam exam;

    private int numberOfSeats;

    private Date date;

    private String classroom;


}


