#catalogue
## work shop - preparation
1. make sure npm(5XX) node(8XX) installed
2. npm install -g @angular/cli@latest
3. npm new project-name
4. cd project-name
5. ng server

## project stucture introduction
1. introduce angular as a front end framework to build a awesome & reactive spa 
2. angular cli can help us create project, create component, serve the app, build and optimize the code
3. package.json //dependencies
4. node_modules/ 
5. src/ source code
6. index.html // served by the server as the single page
7. <script>s in page source are auto injected by cli // main.ts is the first code to be executed
8. app.module.ts //
  declarations, // self defined app components
  imports, //angular itself built into multi-modules.eg the base functions we need to start our app
  providers, // expose service and provides
  bootstrap // the components needed in start up

## start project
1. add an <input> (data-binding and ngmodule)
2. add a list to display todo list, (*ngFor)
3. add finishe item function
4. show item status (*ngIf)
5. add <todoitem> component (@Component({}))
