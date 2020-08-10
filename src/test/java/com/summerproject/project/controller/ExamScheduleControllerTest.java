package com.summerproject.project.controller;

import com.summerproject.project.repository.ExamScheduleRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureWebMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(ExamScheduleController.class)
@AutoConfigureWebMvc
class ExamScheduleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void createExamSchedule() {
    }

    @Test
    void removeExamSchedule() {
    }

    @Test
    void getAllExamSchedules() {
    }

    @Test
    void updateExamSchedule() {
    }

    @Test
    void filterByFaculty() {
    }

    @Test
    void filterByYearOfStudy() {
    }

    @Test
    void filterByYearOfStudyAndFaculty() {
    }
}
