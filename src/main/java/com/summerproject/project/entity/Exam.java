package com.summerproject.project.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    @Min(2015)
    @Max(2020)
    private int academicYear;

    @ManyToOne
    private Faculty faculty;

    @ManyToOne
    private Course course;

    @ManyToOne
    private Teacher teacher;
}
