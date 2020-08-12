package com.summerproject.project.service;

import com.summerproject.project.ProjectApplication;
import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.*;
import com.summerproject.project.mapper.ExamScheduleDtoEntityMapper;
import com.summerproject.project.repository.ExamScheduleRepository;
import org.junit.Ignore;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;


@SpringBootTest(classes = ProjectApplication.class)
@RunWith(SpringRunner.class)
class ExamScheduleServiceImplTest {

    @TestConfiguration
    static class ExamScheduleServiceImplTestContextConfiguration {

        @Bean
        public ExamScheduleService examScheduleService() {
            return new ExamScheduleServiceImpl();
        }
    }

    @Autowired
    private ExamScheduleDtoEntityMapper mapper;
    @Autowired
    private ExamScheduleService examScheduleService;
    @MockBean
    private ExamScheduleRepository examScheduleRepository;

    @Test
    public void addSuccessful() {
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

        final ExamSchedule examSchedule = mapper.from(examScheduleDto);

        Mockito.when(examScheduleService.addExamSchedule(examScheduleDto))
                .thenReturn(examScheduleDto);
    }

}
