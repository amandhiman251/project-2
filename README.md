1. Create an input field in App component with a change listner which outputs the length of the entered text below it (e.g. in aparagraph).
2. create a new component(=> Validation) which recieves the text length as a prop.
3. Inside the Validation component, either output "Text is too short!" or " Text long enough" depending on the text length(e.g. take 5 as a minimum length).
4. Create anither component(=> Char) and style it as an inline box(=> display: inline-block, padding: 16px, margin: 16px, text-align: center, border: 1px solid black).
5. Render a list of Char components where each Char component recieves a diffrent letter of the entered text in the initial input field as a prop.
6. When you click a Char component it should be rempved from the entered text.
