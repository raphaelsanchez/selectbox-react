# React SelectBox Component

A customizable, accessible Select component for React applications with search functionality.

## Installation

```bash
npm install @raphysan/selectbox-react
```

or

```bash
yarn add @raphysan/selectbox-react
```

## Usage

```jsx
import React from "react";
import SelectBox from "@raphysan/selectbox-react";

const options = [
  { name: "Option 1", value: "option1" },
  { name: "Option 2", value: "option2" },
  { name: "Option 3", value: "option3" },
];

function App() {
  return (
    <SelectBox
      name="example-select"
      label="Choose an option"
      options={options}
      onChangeValue={(value) => console.log("Selected value:", value)}
    />
  );
}

export default App;
```

## Props

| Prop          | Type                                   | Default            | Description                                  |
| ------------- | -------------------------------------- | ------------------ | -------------------------------------------- |
| name          | string                                 | (required)         | The name attribute for the select element    |
| label         | string                                 | undefined          | Label text for the select element            |
| placeholder   | string                                 | 'Select an option' | Placeholder text when no option is selected  |
| options       | Array<{ name: string, value: string }> | (required)         | Array of options for the select              |
| searchable    | boolean                                | true               | Enable search functionality                  |
| defaultValue  | { name: string, value: string }        | undefined          | Default selected option                      |
| onChangeValue | (value: string) => void                | undefined          | Callback function when an option is selected |
| value         | string                                 | undefined          | Controlled value for the select              |

## Features

- Customizable styling
- Keyboard navigation support
- Search functionality
- Accessibility compliant
- Support for both controlled and uncontrolled usage

## Accessibility

This component is built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly

## License

MIT © Raphael Sanchez
