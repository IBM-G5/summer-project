package com.summerproject.project.entity;

import lombok.*;

import javax.persistence.*;

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
    private int id;

    @Column
    private int academicYear;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Faculty faculty;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Course course;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Teacher teacher;
}
