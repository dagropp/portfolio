class AdminService {

  public static get projectTypes(): string[] {
    return ["personal", "student", "job"];
  }

  public static get appSections(): AppSection[] {
    return ["dev", "design", "about", "misc"]
  };

  public static get devToolsList(): RestCollection<DevTool> {
    return {
      html: {display: "HTML", icon: ""},
      css: {display: "CSS", icon: ""},
      sass: {display: "Sass", icon: ""},
      less: {display: "Less", icon: ""},
      javascript: {display: "JavaScript", icon: ""},
      react: {display: "React", icon: ""},
      es6: {display: "ES6", icon: ""},
      angularjs: {display: "AngularJS", icon: ""},
      jquery: {display: "jQuery", icon: ""},
      php: {display: "PHP", icon: ""},
      mysql: {display: "MySQL", icon: ""},
      java: {display: "Java", icon: ""},
      python: {display: "Python", icon: ""},
      redux: {display: "Redux", icon: ""},
      ionic: {display: "Ionic", icon: ""},
    }
  }

  public static get devSkillsList(): RestCollection<DevTool> {
    return {
      frontend: {display: "Front End", icon: ""},
      full_stack: {display: "Full Stack", icon: ""},
      git: {display: "GIT", icon: ""},
      pwa: {display: "PWA", icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FProgressive_web_apps&psig=AOvVaw1OFyvUUxbqpwl3nd_wwgi_&ust=1628160902008000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCM3ZOal_ICFQAAAAAdAAAAABAD"},
      oop: {display: "OOP", icon: ""},
      algorithms: {display: "Algorithms", icon: ""},
      complexity: {display: "Complexity", icon: ""},
      design_patterns: {display: "Design Patterns", icon: ""},
      data_structures: {display: "Data Structures", icon: ""},
      modules: {display: "Modules", icon: ""},
      gui: {display: "GUI", icon: ""},
    }
  }
}

export default AdminService;