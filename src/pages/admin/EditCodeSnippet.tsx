import React, {EventHandler, FormEvent, useEffect, useState} from "react";
import ServerService from "../../global/ServerService";
import SelectRelation from "../../components/admin/SelectRelation";
import FormInput from "../../components/form/FormInput";
import FormLabel from "../../components/form/FormLabel";
import FileInput from "../../components/admin/FileInput";

const EditCodeSnippet: React.FC = () => {

  const [projects, setProjects] = useState<RestProject[]>([]);

  useEffect(() => {
    ServerService.getTable<RestProject>("projects")
      .then(setProjects);
  }, [])

  const handleSubmit: EventHandler<FormEvent> = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    ServerService.postForm("update_code_snippet", formData)
      .then(console.log)
  }

  return (
    <section className="admin-form-wrapper">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-inner">
          <SelectRelation
            title="Code Snippet Relation"
            value=""
            required
            filterSections={["Projects"]}
          />
          <FormLabel
            htmlFor="github"
            required
          >
            <span>GitHub link</span>
            <FormInput
              name="github"
              id="github"
              value=""
              placeholder="Add value..."
              required
            />
          </FormLabel>
          <FileInput
            name="code_file"
            buttonTitle="Choose File"
            accept=".css,.html,.java,.js,.jsx,.php,.py,.sql,.tsx,.ts"
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </section>
  )
}

export default EditCodeSnippet;