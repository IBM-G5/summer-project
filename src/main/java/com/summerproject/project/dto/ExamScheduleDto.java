package com.summerproject.project.dto;


import com.summerproject.project.entity.Exam;
import lombok.Builder;
import lombok.Getter;
import lombok.Value;

import java.util.Date;


@Getter
@Value
@Builder(toBuilder = true)
public class ExamScheduleDto {


    private int id;

    private Exam exam;

    private int numberOfSeats;

    private Date date;

    private String classroom;


}


