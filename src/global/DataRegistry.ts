class DataRegistry {

  private education: RestEducation[] = [];
  private experience: RestExperience[] = [];
  private projects: RestProject[] = [];
  private codeSnippets: RestCodeSnippet[] = [];

  public setAllFields({education, experience, projects, code_snippets}: RestDataResponse) {
    this.education = education;
    this.experience = experience;
    this.projects = projects;
    this.codeSnippets = code_snippets;
  }

  public setEducation(education: RestEducation[]) {
    this.education = education;
  }

  public setExperience(experience: RestExperience[]) {
    this.experience = experience;
  }

  public setProjects(projects: RestProject[]) {
    this.projects = projects;
  }

  public setCodeSnippets(codeSnippets: RestCodeSnippet[]) {
    this.codeSnippets = codeSnippets;
  }

  public getEducation(): RestEducation[] {
    return this.education;
  }

  public getExperience(): RestExperience[] {
    return this.experience;
  }

  public getProjects(): RestProject[] {
    return this.projects;
  }

  public getCodeSnippets(): RestCodeSnippet[] {
    return this.codeSnippets;
  }

}

export const dataRegistry = new DataRegistry();