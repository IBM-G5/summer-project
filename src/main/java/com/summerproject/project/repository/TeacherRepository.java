package com.summerproject.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    Teacher findById(String id);
    Teacher findByName(String name);
}
