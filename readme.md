# ESTRUTURA DE CÓDIGO

https://www.youtube.com/watch?v=mjBsii0eiuI
Construindo APIs Node.js escaláveis com SOLID + TDD - Decode #010
Test-driven development

- SRC

    - core/
    - domains/
        - Entity.ts

    - Application/
        - useCases/
            - create-challange-submissions.ts

    - Domain/
        - Entities/ (define the app entities - Type/Class with the properties).
            - class Student extends Entity {}
            - class Challange extends Entity {}
            - class Submission extends Entity {}

    - Tests/
        - repositories/ (inMemoryRepository define the repositories with in memory saved values)