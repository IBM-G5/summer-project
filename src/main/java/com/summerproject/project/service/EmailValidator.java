package com.summerproject.project.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidator {
    private Pattern pattern;
    private Matcher matcher;

    private static final String EMAIL_REGEX = "^[_A-Za-z0-9.]+@prof.com$";
     public EmailValidator(){
         pattern = Pattern.compile(EMAIL_REGEX);
     }

     public boolean validate(final String email){
         matcher = pattern.matcher(email);
         return matcher.matches();
     }

}
