import React, {ChangeEvent, EventHandler, FormEvent, useEffect, useState} from "react";
import ServerService from "../../global/ServerService";
import UiService from "../../global/UiService";
import FormSelect from "../../components/form/FormSelect";
import FormInput from "../../components/form/FormInput";
import FormTextarea from "../../components/form/FormTextarea";
import TypeUtils from "../../global/TypeUtils";
import AdminService from "../../global/AdminService";
import FormSelectButton from "../../components/form/FormSelectButton";
import TagInput from "../../components/admin/TagInput";

const newProject: RestProject = {
  app_section: "",
  date_end: null,
  date_start: UiService.getFullDateString(new Date()),
  description: null,
  download_link: null,
  github: null,
  id: "proj_",
  npm: null,
  relation: null,
  site_link: null,
  tags: null,
  title: "",
  tools: null,
  type: ""
}

const EditProject: React.FC = () => {

  const [projects, setProjects] = useState<RestProject[]>([]);
  const [dataList, setDataList] = useState<RestDataListResponse[]>([]);
  const [current, setCurrent] = useState<RestProject>(newProject);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      ServerService.getRelationDataList(),
      ServerService.getTable<RestProject>("projects")
    ]).then(([dataList, projects]) => {
      if (dataList.status === "fulfilled") setDataList(dataList.value);
      if (projects.status === "fulfilled") setProjects(projects.value);
    })
  }, [])

  const switchProject: EventHandler<ChangeEvent<HTMLSelectElement>> = (event) => {
    const project = projects.find((entry) => entry.id === event.target.value);
    setIsNew(!project);
    setCurrent(project || newProject);
  }

  const handleTitleChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
    const update = {...current};
    update.title = event.target.value;
    if (isNew) {
      let id = "proj_" + TypeUtils.strToUnderscore(event.target.value);
      while (projects.find((entry) => entry.id === id)) id += Math.floor(Math.random() * 10);
      update.id = id;
    }
    setCurrent(update);
  }

  const handleMonthChange: EventHandler<ChangeEvent<HTMLInputElement>> = (event) => {
    const dateEnd = document.getElementById("date_end") as HTMLInputElement;
    if (dateEnd.value < event.target.value) {
      dateEnd.value = event.target.value;
    }
  }

  const handleSubmit: EventHandler<FormEvent> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: any = {is_new: isNew};

    for (const key of formData.keys()) {
      data[key] = formData.getAll(key).join();
    }

    ServerService.post("update_project", data)
      .then(console.log);
  }

  interface TextInputProps {
    id: keyof RestProject;
    component?: React.FC<any>;
    onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
    readOnly?: boolean;
    required?: boolean;
    type?: string;
  }

  const textInputs: TextInputProps[] = [
    {id: "id", readOnly: true, required: true},
    {id: "title", onChange: handleTitleChange, required: true},
    {id: "date_start", type: "month", required: true, onChange: handleMonthChange},
    {id: "date_end", type: "month"},
    {id: "description", component: FormTextarea},
    {id: "site_link", type: "url"},
    {id: "download_link", type: "url"},
    {id: "github"},
    {id: "npm"}
  ]

  const currentProjects = projects.map(({id, title, app_section}) =>
    <option
      key={id}
      value={id}
    >{title}</option>
  )

  const relationOptions = dataList.map(({id, title, section}) =>
    <option
      key={id}
      value={id}
    >{section}: {title}</option>
  )

  const appSectionOptions = AdminService.appSections.map((entry) =>
    <option
      key={entry}
      value={entry}
    >{entry}</option>
  )

  const projectTypesOptions = AdminService.projectTypes.map((entry) =>
    <option
      key={entry}
      value={entry}
    >{entry}</option>
  )

  const devToolsOptions = Object.entries(AdminService.devToolsList)
    .map(([key, value]) =>
      <FormSelectButton
        type="checkbox"
        name="tools"
        key={key}
        value={key}
        display={value.display}
        checked={current.tools?.split(",").includes(key) ?? false}
      />
    )

  const devSkillsOptions = Object.entries(AdminService.devSkillsList)
    .map(([key, value]) =>
      <FormSelectButton
        type="checkbox"
        name="skills"
        key={key}
        value={key}
        display={value.display}
        checked={false}
      />
    )

  const dataInputs = textInputs.map(({id, type = "text", required, readOnly, onChange, component = FormInput}) => {
    const title = TypeUtils.idToTitle(id);
    const value = current[id] ?? "";

    return (
      <label key={id} htmlFor={id} className={required ? "required" : ""}>
        <span>{title} {required && "*"}</span>
        {React.createElement(component, {
          required, type, id, readOnly, onChange, value, name: id, placeholder: "Add value..."
        })}
      </label>
    )
  })

  return (
    <section className="admin-form-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="current_project">
          <span>Select Project</span>
          <FormSelect name="current_project" id="current_project" value="" onChange={switchProject}>
            <option value="">New Project</option>
            {currentProjects}
          </FormSelect>
        </label>
        <div className="form-inner">
          <h3 className="form-title"><span className="action">{isNew ? "Add" : "Edit"} Project</span> <span
            className="title">{current.title}</span></h3>
          {dataInputs}
          <label htmlFor="app_section">
            <span>App Section</span>
            <FormSelect name="app_section" id="app_section" value={current.app_section} required>
              <option value="">-- Select App Section --</option>
              {appSectionOptions}
            </FormSelect>
          </label>
          <label htmlFor="relation">
            <span>Project Relation</span>
            <FormSelect name="relation" id="relation" value={current.relation ?? ""}>
              <option value="">-- Select Relation --</option>
              {relationOptions}
            </FormSelect>
          </label>
          <label htmlFor="type">
            <span>Project Type</span>
            <FormSelect name="type" id="type" value={current.type ?? ""}>
              <option value="">-- Select Type --</option>
              {projectTypesOptions}
            </FormSelect>
          </label>
          <label>
            <span>Dev Tools</span>
            <div className="checkbox-wrapper">
              {devToolsOptions}
            </div>
          </label>
          <label>
            <span>Dev Skills</span>
            <div className="checkbox-wrapper">
              {devSkillsOptions}
            </div>
          </label>
          <TagInput currentTags={current.tags}/>
        </div>
        <button type="submit">Save</button>
      </form>
    </section>
  )
}

export default EditProject;