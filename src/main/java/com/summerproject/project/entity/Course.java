package com.summerproject.project.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    @NotNull
    private String name;

    @Column
    @Min(1)
    @Max(6)
    @NotNull(message = "Year of study should not be empty")
    private int yearOfStudy;

    @Column
    @Min(1)
    @Max(2)
    @NotNull(message = "Semester should not be empty")
    private int semester;
}
