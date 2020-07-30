package com.summerproject.project.entity;

import lombok.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class ExamSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne(cascade = CascadeType.ALL)
    private Exam exam;

    @Column
    @Min(20)
    @Max(300)
    private int numberOfSeats;

    @Column
    private Date date;

    @Column
    @NotNull(message = "Classroom should not be empty")
    private String classroom;
}
