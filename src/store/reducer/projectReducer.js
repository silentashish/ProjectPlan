const initState = {
  projects: [
    { id: 1, title: "Ashish Gautam", content: "bla bla bla bla" },
    { id: 2, title: "New Brand things", content: "bla bla bla bla" },
    { id: 3, title: "my gand jd djjdh", content: "bla blddddd" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
