package com.summerproject.project.excel;

import com.summerproject.project.dto.ExamScheduleDto;
import com.summerproject.project.entity.ExamSchedule;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

public class ExcelGenerator {

    public static ByteArrayInputStream examSchedulesToExcel(List<ExamScheduleDto> examSchedules) throws IOException {

        String[] columns = {"id", "classroom", "date", "numberOfSeats", "exam_id"};

        XSSFWorkbook workbook = new XSSFWorkbook();
        //Workbook workbook = new XSSFWorkbook();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

        CreationHelper creationHelper = workbook.getCreationHelper();

        //Sheet sheet = workbook.createSheet("ExamSchedules");
        XSSFSheet sheet = workbook.createSheet("Exam Schedules");

        Font headerFont = workbook.createFont();
        headerFont.setColor(IndexedColors.DARK_BLUE.getIndex());

        CellStyle headerCellStyle = workbook.createCellStyle();
        headerCellStyle.setFont(headerFont);

        //row for header
        Row headerRow = sheet.createRow(0);

        //header
        for (int column = 0; column < columns.length; column++) {
            Cell cell = headerRow.createCell(column);
            cell.setCellValue(columns[column]);
            cell.setCellStyle(headerCellStyle);
        }

        //cellstyle for date
        CellStyle dateCellStyle = workbook.createCellStyle();
        dateCellStyle.setDataFormat(creationHelper.createDataFormat().getFormat("mm-dd-yyyy"));

        int rowIndex = 1;
        for (ExamScheduleDto examSchedule :
                examSchedules) {
            Row row = sheet.createRow(rowIndex++);

            row.createCell(0).setCellValue(examSchedule.getId());
            row.createCell(1).setCellValue(examSchedule.getClassroom());

            Cell dateCell = row.createCell(2);
            dateCell.setCellValue(examSchedule.getDate());
            dateCell.setCellStyle(dateCellStyle);

            row.createCell(3).setCellValue(examSchedule.getNumberOfSeats());
            row.createCell(4).setCellValue(examSchedule.getExam().getId());
        }

        workbook.write(outputStream);
        return new ByteArrayInputStream(outputStream.toByteArray());
    }

}



