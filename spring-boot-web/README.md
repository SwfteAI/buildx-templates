# spring-boot-web

Spring Boot 3.4 + Java 21 + Maven scaffold.

## Pre-baked

- `pom.xml` inheriting `spring-boot-starter-parent:3.4.1`, Java 21 target
- `spring-boot-starter-web`, `spring-boot-starter-test`
- `src/main/java/com/example/app/Application.java` (entry point)
- `src/main/java/com/example/app/HelloController.java` (GET `/` returns JSON)
- `src/main/resources/application.yml` (server.port 8080, app name/description)
- `src/main/resources/static/index.html` (static landing page)

## Package naming

The Java package is fixed at `com.example.app`. `{{APP_NAME}}` is only substituted inside file contents (application.yml, index.html), never inside Java package paths, because placeholder substitution runs only on the text content of an allow-list of extensions.

## Commands

- `./mvnw spring-boot:run` -> dev on port 8080
- `./mvnw -B -DskipTests package` -> build executable jar
- `./mvnw -B -q -DskipTests compile` -> compile check
- `./mvnw test` -> run tests
