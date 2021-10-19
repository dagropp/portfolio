class AdminService {

  public static get projectTypes(): string[] {
    return ["personal", "student", "job"];
  }

  public static get toolsList(): RestCollection<DevTool, AppDevToolKey> {
    return {
      html: {display: "HTML"},
      css: {display: "CSS"},
      sass: {display: "Sass"},
      less: {display: "Less"},
      javascript: {display: "JavaScript"},
      react: {display: "React"},
      angularjs: {display: "AngularJS"},
      jquery: {display: "jQuery"},
      php: {display: "PHP"},
      mysql: {display: "MySQL"},
      java: {display: "Java"},
      python: {display: "Python"},
      typescript: {display: "TypeScript"},
      redux: {display: "Redux"},
      ionic: {display: "Ionic"},
      git: {display: "Git"}
    }
  }

  public static get devSkillsList(): RestCollection<DevTool> {
    return {
      frontend: {display: "Front End"},
      full_stack: {display: "Full Stack"},
      oop: {display: "OOP"},
      algorithms: {display: "Algorithms"},
      complexity: {display: "Complexity"},
      design_patterns: {display: "Design Patterns"},
      data_structures: {display: "Data Structures"},
      modules: {display: "Modules"},
      gui: {display: "GUI"},
      ui_ux: {display: "UI/UX"},
      responsive: {display: "Responsive"}
    }
  }
}

export default AdminService;