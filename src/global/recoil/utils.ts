export const recoilDefaultSetter = <T>() => <T>(val: (((prev: T) => T) | T)) => ({});

export const defaultRestDataResponse: RestDataResponse = {
  education: [], experience: [], projects: [], code_snippets: []
};