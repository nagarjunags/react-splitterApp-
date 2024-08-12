export default function (plop) {
  // Helper to create the component name in PascalCase
  plop.setHelper("pascalCase", (text) => {
    return text
      .replace(/(?:^\w|[A-Z]|\b\w|\s+|\d+)/g, (word, index) =>
        index === 0 ? word.toUpperCase() : word.toUpperCase()
      )
      .replace(/\s+/g, "");
  });

  // Define the generator for creating a React component
  plop.setGenerator("component", {
    description:
      "Create a React component with TSX, CSS module, and Storybook story",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
        validate: (value) => (value ? true : "Name is required"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/Component.stories.tsx.hbs",
      },
    ],
  });
}
