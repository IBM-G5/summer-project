package com.summerproject.project.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.summerproject.project.dto.*;
import com.summerproject.project.entity.Course;
import com.summerproject.project.entity.Exam;
import com.summerproject.project.entity.Faculty;
import com.summerproject.project.entity.Teacher;
import com.summerproject.project.service.ExamScheduleService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrint;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.junit.*;

import java.awt.*;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@WebMvcTest(ExamScheduleController.class)
class ExamScheduleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ExamScheduleService examScheduleService;

    @Test
    @DisplayName("List of exam schedules is returned")
    void testListOfExamSchedulesIsSuccessfullyReturned() throws Exception {
        Faculty faculty = Faculty.builder().id(1L).name("FMI").build();
        Course course = Course.builder().id(1L).name("AI").semester(2).yearOfStudy(1).build();
        Teacher teacher = Teacher.builder().id(1L).email("a.b@prof.com").name("a b").password("pass123").build();
        Exam exam = Exam.builder().id(1L).academicYear(2020).course(course).faculty(faculty).teacher(teacher).build();

        ExamScheduleDto examScheduleDto1 = ExamScheduleDto.builder().id(1L).classroom("D100").date(new Date()).numberOfSeats(150).exam(exam).build();
        ExamScheduleDto examScheduleDto = ExamScheduleDto.builder().classroom("D100").date(null).numberOfSeats(110).exam(exam).build();

        List<ExamScheduleDto> examScheduleDtoList = Arrays.asList(examScheduleDto);
        ObjectMapper mapper = new ObjectMapper();

        Mockito.when(examScheduleService.getAllExamSchedules()).thenReturn(examScheduleDtoList);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/getall")).andDo(MockMvcResultHandlers.print()).andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().bytes(mapper.writeValueAsBytes(examScheduleDtoList)));
    }

    @Test
    @DisplayName("List of courses is returned")
    void testListOfCoursesIsSuccessfullyReturned() throws Exception {
        CourseDto courseDto = CourseDto.builder().name("AI").semester(2).yearOfStudy(1).build();
        List<CourseDto> courseDtoList = Arrays.asList(courseDto);
        ObjectMapper mapper = new ObjectMapper();

        Mockito.when(examScheduleService.getAllCourses()).thenReturn(courseDtoList);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/getAllCourses")).andDo(MockMvcResultHandlers.print()).andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().bytes(mapper.writeValueAsBytes(courseDtoList)));
    }

    @Test
    @DisplayName("List of faculties is returned")
    void testListOfFacultiesIsSuccessfullyReturned() throws Exception {
        FacultyDto facultyDto = FacultyDto.builder().name("Facultatea de Matematica si Informatica").build();
        List<FacultyDto> facultyDtoList = Arrays.asList(facultyDto);
        ObjectMapper mapper = new ObjectMapper();

        Mockito.when(examScheduleService.getAllFaculties()).thenReturn(facultyDtoList );
        this.mockMvc.perform(MockMvcRequestBuilders.get("/getAllFaculties")).andDo(MockMvcResultHandlers.print()).andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().bytes(mapper.writeValueAsBytes(facultyDtoList)));
    }


    @Test
    @DisplayName("List of teachers is returned")
    void testListOfTeachersIsSuccessfullyReturned() throws Exception {
        TeacherDto teacherDto = TeacherDto.builder().email("a.b@prof.com").name("a b").password("pass123").build();
        List<TeacherDto> teacherDtoList = Arrays.asList(teacherDto);
        ObjectMapper mapper = new ObjectMapper();
        Mockito.when(examScheduleService.getAllTeachers()).thenReturn(teacherDtoList );
        this.mockMvc.perform(MockMvcRequestBuilders.get("/getAllTeachers")).andDo(MockMvcResultHandlers.print()).andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().bytes(mapper.writeValueAsBytes(teacherDtoList)));
    }

//    "{\"id\":1,\"exam\":{\"id\":1,\"academicYear\":2019,\"faculty\":{\"id\":1,\"name\":\"Computer Science\"},\"course\":{\"id\":1,\"name\":\"AI\",\"yearOfStudy\":2,\"semester\":2},\"teacher\":{\"id\":1,\"name\":\"Ion Popescu\",\"email\":\"ion.popescu@prof.com\",\"password\":\"admin\"}},\"numberOfSeats\":150,\"date\":1597006800000,\"classroom\":\"A2\"}"

    @Test
    @DisplayName("Add an exam schedule successfully")
    void testAddExamScheduleSuccessfully() throws Exception {
        final Faculty faculty = Faculty.builder().name("Computer Science").build();
        final Course course = Course.builder().name("Functional Programming").semester(1).yearOfStudy(2).build();
        final Teacher teacher = Teacher.builder().email("ian.popescu@prof.com").password("admin").name("Ian Popescu").build();
        final Exam exam = Exam.builder().academicYear(2019).faculty(faculty).course(course).teacher(teacher).build();
        final ExamScheduleDto examScheduleDto = ExamScheduleDto.builder().date(new Date()).classroom("D100").numberOfSeats(150).exam(exam).build();

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter objectWriter = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = objectWriter.writeValueAsString(examScheduleDto);

        mockMvc.perform(MockMvcRequestBuilders.post("/create").contentType(MediaType.APPLICATION_JSON).content(requestJson))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

//    @Test
//    @DisplayName("Adding an exam schedule failed")
//    @Ignore
//    void testAddExamScheduleFailed() throws Exception {
//        final Faculty faculty = Faculty.builder().name("").build();
//        final Course course = Course.builder().name("").semester(0).yearOfStudy(10).build();
//        final Teacher teacher = Teacher.builder().email("ian.popescu@proff.com").password("admin").name("Ian Popescu").build();
//        final Exam exam = Exam.builder().academicYear(2006).faculty(faculty).course(course).teacher(teacher).build();
//        final ExamScheduleDto examScheduleDto = ExamScheduleDto.builder().date(new Date()).classroom("").numberOfSeats(450).exam(exam).build();
//
//        ObjectMapper mapper = new ObjectMapper();
//        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
//        ObjectWriter objectWriter = mapper.writer().withDefaultPrettyPrinter();
//        String requestJson = objectWriter.writeValueAsString(examScheduleDto);
//
//        mockMvc.perform(MockMvcRequestBuilders.post("/create").contentType(MediaType.APPLICATION_JSON).content(requestJson))
//                .andExpect(MockMvcResultMatchers.status().isBadRequest());
//    }

    @Test
    @DisplayName("Delete an exam schedule successfully")
    void testDeleteExamScheduleSuccessfully() throws Exception {

    }

    @Test
    @DisplayName("Delete an exam schedule failed")
    void testDeleteExamScheduleFailed() throws Exception {

    }

    @Test
    @DisplayName("Update an exam schedule successfully")
    void testUpdateExamScheduleSuccessfully() throws Exception {

    }

    @Test
    @DisplayName("Update an exam schedule failed")
    void testUpdateExamScheduleFailed() throws Exception {

    }

    @Test
    @DisplayName("Filter exam schedules by faculty successfully")
    void testFilterExamSchedulesByFacultySuccessfully() throws Exception {

    }

    @Test
    @DisplayName("Filter exam schedules by faculty failed")
    void testFilterExamSchedulesByFacultyFailed() throws Exception {

    }

    @Test
    @DisplayName("Filter exam schedules by year of study succesfully")
    void testFilterExamSchedulesByYearOfStudySuccessfully() throws Exception {

    }

    @Test
    @DisplayName("Filter exam schedules by year of study failed")
    void testFilterExamSchedulesByYearOfStudyFailed() throws Exception {

    }

    @Test
    @DisplayName("Filter exam schedules by faculty and year of study successfully")
    void testFilterExamSchedulesByFacultyAndYearOfStudySuccessfully() throws Exception {

    }

    @Test
    @DisplayName("Filter exam schedules by faculty and year of study failed")
    void testFilterExamSchedulesByFacultyAndYearOfStudyFailed() throws Exception {

    }
}
