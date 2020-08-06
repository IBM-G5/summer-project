package com.summerproject.project.repository;

import com.summerproject.project.entity.ExamSchedule;
import com.summerproject.project.entity.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExamScheduleRepository extends JpaRepository<ExamSchedule, Long> {
    @Query(value = "SELECT *\n" +
            "FROM exam_schedule\n" +
            "WHERE exam_schedule.exam_id IN\n" +
            "    (SELECT id\n" +
            "    FROM exam\n" +
            "    WHERE faculty_id IN\n" +
            "        (SELECT id\n" +
            "        FROM faculty\n" +
            "        WHERE faculty.name = :faculty))", nativeQuery = true)
    List<ExamSchedule> filterByFaculty(@Param("faculty") String faculty);
}
