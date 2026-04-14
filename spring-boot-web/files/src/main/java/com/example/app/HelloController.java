package com.example.app;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Value("${app.name:app}")
    private String appName;

    @Value("${app.description:}")
    private String appDescription;

    @GetMapping("/api/hello")
    public Map<String, String> hello() {
        return Map.of(
            "message", "Hello " + appName,
            "description", appDescription
        );
    }
}
