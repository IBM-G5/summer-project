package com.summerproject.project.repository;

import com.summerproject.project.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    boolean existsTeachersByEmailAndPassword (String email, String password);
    boolean existsTeacherByEmail(String email);
}
