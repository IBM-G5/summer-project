package com.summerproject.project.service;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.*;
import com.summerproject.project.repository.ExamScheduleRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;

import javax.xml.crypto.Data;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
class ExamScheduleServiceTest {



    @Mock
    private TestEntityManager entityManager;

    @Mock
    private ExamScheduleRepository examScheduleRepository;

    @InjectMocks
    private ExamScheduleService examScheduleService =  new ExamScheduleServiceImpl();

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
        examScheduleRepository = null;
        examScheduleService = null;
    }


    @Test
    void addExamSchedule() {
        final Faculty faculty = Faculty.builder()
                .name("Computer Science")
                .build();
        final Course course = Course.builder()
                .name("Functional Programming")
                .semester(1)
                .yearOfStudy(2)
                .build();
        final Teacher teacher = Teacher.builder()
                .email("ian.popescu@prof.com")
                .password("admin")
                .name("Ian Popescu")
                .build();
        final Exam exam = Exam.builder()
                .academicYear(2019)
                .faculty(faculty)
                .course(course)
                .teacher(teacher)
                .build();
        final ExamScheduleDto examScheduleDto = ExamScheduleDto.builder()
                .date(new Date())
                .classroom("D100")
                .numberOfSeats(150)
                .exam(exam)
                .build();

        entityManager.persist(examScheduleDto);
        entityManager.flush();

        ExamSchedule examSchedule = examScheduleRepository.findById(examScheduleDto.getId()).get();

//        assertEquals(examSchedule.getExam(), examScheduleDto.getExam());

    }

    @Test
    void deleteExamSchedule() {
    }

    @Test
    void updateExamSchedule() {
    }

    @Test
    void getAllExamSchedules() {
    }

    @Test
    void getAllExamSchedulesFilterByFaculty() {
    }

    @Test
    void getAllExamSchedulesFilterByYearOfStudy() {
    }

    @Test
    void getAllExamSchedulesFilterByYearOfStudyAndFaculty() {
    }
}
