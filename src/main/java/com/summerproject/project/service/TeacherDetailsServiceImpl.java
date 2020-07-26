package com.summerproject.project.service;

import com.summerproject.project.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
@Service
public class TeacherDetailsServiceImpl implements  UserDetailsService{
    @Autowired
    private TeacherRepository teacherRepository;

    @Transactional(readOnly = true)
    public UserDetails loadUserByName(String name) {
        Teacher teacher = teacherRepository.findByName(name);
        if (teacher == null) throw new UsernameNotFoundException(name);

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

        }

       return new org.springframework.security.core.userdetails.Teacher(teacher.getName(), teacher.getPassword(), grantedAuthorities);
    }
}
}
