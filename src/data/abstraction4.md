```jsx
function Form() {
  return (
    <div>
      <FormGroup label="Name:" inputId="name" />
      <Button text="Submit" />
    </div>
  );
}

function FormGroup({ label, inputId }) {
  return (
    <div className="form-group">
      <Label text={label} htmlFor={inputId} />
      <InputField id={inputId} />
    </div>
  );
}

function Label({ text, htmlFor }) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

function InputField({ id }) {
  return <input type="text" id={id} />;
}

function Button({ text }) {
  return <button>{text}</button>;
}

```