package com.summerproject.project.repository;

import com.summerproject.project.entity.ExamSchedule;
import com.summerproject.project.entity.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ExamScheduleRepository extends JpaRepository<ExamSchedule, Long> {
    @Query(value = "SELECT * FROM exam_schedule WHERE exam_schedule.exam_id IN (SELECT id FROM exam WHERE faculty_id IN (SELECT id FROM faculty WHERE faculty.name = :faculty))", nativeQuery = true)
    List<ExamSchedule> filterByFaculty(@Param("faculty") String faculty);

    @Query("SELECT es FROM ExamSchedule es JOIN Exam e ON es.exam=e JOIN Course c ON e.course=c WHERE c.yearOfStudy=:yearOfStudy")
    List<ExamSchedule> filterByYearOfStudy(@Param("yearOfStudy") int yearOfStudy);

    //@Query("SELECT es FROM ExamSchedule es JOIN Exam e ON es.exam=e JOIN Course c ON e.course  JOIN Faculty f ON e.faculty=f WHERE c.yearOfStudy=:yearOfStudy and f.name=:faculty ")
   //@Query(value="SELECT * FROM exam_schedule WHERE exam_schedule.exam_id IN  (SELECT e.id FROM exam e JOIN faculty f ON e.faculty_id=f.id JOIN course c ON c.id=e.course_id WHERE f.name=:faculty and c.year_of_study=:yearOfStudy)" ,nativeQuery = true)
    @Query("SELECT es FROM ExamSchedule es WHERE es.exam IN (SELECT e FROM Exam e JOIN Faculty f ON e.faculty=f JOIN Course c ON e.course=c WHERE f.name=:faculty and c.yearOfStudy=:yearOfStudy)")
    List<ExamSchedule> filterByYearOfStudyAndFaculty(@Param("yearOfStudy") int yearOfStudy, @Param("faculty") String faculty);
}
