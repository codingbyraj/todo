webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  text-align: center;\r\n}\r\n\r\n.print-todos {\r\n  padding-top: 3%;\r\n  max-width: 70%;\r\n  margin: auto;\r\n  /* pos ition: relative; */\r\n}\r\n\r\n.print-todos li {\r\n  border: 1px solid grey;\r\n  border-top: none;\r\n  list-style: none;\r\n  padding: 6px 0;\r\n  font-weight: bold;\r\n  /* position: absolute; */\r\n}\r\n\r\n.heading {\r\n  background: silver;\r\n  border: 1px solid !important;\r\n}\r\n\r\n.heading span {\r\n  /* padding: 6px 0; */\r\n}\r\n\r\n.print-todos .heading span:first-child {\r\n  display: inline-block;\r\n  width: 50%;\r\n  border-right: 1px solid;\r\n}\r\n\r\n.print-todos .heading span:nth-child(2) {\r\n  display: inline-block;\r\n  width: 20%;\r\n  border-right: 1px solid;\r\n}\r\n\r\n.print-todos .heading span:last-child {\r\n  display: inline-block;\r\n  width: 29%;\r\n}\r\n\r\n.print-todos li span {\r\n  text-align: center;\r\n}\r\n\r\n.todo-desc {\r\n  display: inline-block;\r\n  width: 50%;\r\n  /* border-right: 1px solid; */\r\n}\r\n\r\n.todo-staus {\r\n  display: inline-block;\r\n  width: 19%;\r\n}\r\n\r\n.todo-update-delete {\r\n  display: inline-block;\r\n  width: 29%;\r\n  /* border-left: 1px solid; */\r\n}\r\n\r\n.todo-staus span {\r\n  border: 1px solid;\r\n  margin: 0 5px;\r\n}\r\n\r\n.todo-update-delete span {\r\n  margin: 0 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*  */\r\n\r\nli.task-done {\r\n  background: #35CE8D;\r\n  color: whitesmoke;\r\n}\r\n\r\nspan.task-done {\r\n  -webkit-text-decoration-line: line-through;\r\n          text-decoration-line: line-through;\r\n}\r\n\r\ntask-txtbox{\r\n  text-align: center;  \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Todo Application</h1>\n<app-todo [todos]='todos' (result)=\"updateAfterAddTodo($event)\"></app-todo>\n\n<ul class=\"print-todos\" *ngIf=\"todos.length\">\n  <li class=\"heading clearfix\">\n    <span class=\"left\">Task</span>\n    <span class=\"left\">Toggle Status</span>\n    <span class=\"right\">Update/Delete</span>\n  </li>\n  <li *ngFor=\"let todo of todos\" [class.task-done]=\"todo.status\">\n    <task-txtbox [task]=\"todo\" (updateParentTask)= \"updatedTaskByChild($event)\" *ngIf=\"todo.isEditable\"></task-txtbox>    \n    <span class=\"todo-desc\" [class.task-done]=\"todo.status\" *ngIf=\"!todo.isEditable\" (click)=\"makeEditable(todo.id)\">\n      {{todo.data}}\n    </span>\n    <span class=\"todo-staus\">\n      <input type=\"checkbox\" [(ngModel)]=\"todo.status\">\n    </span>\n    <span class=\"todo-update-delete\">\n      <span class=\"edit\">\n        <i class=\"fas fa-pencil-alt\" (click)=\"makeEditable(todo.id)\"></i>        \n      </span>      \n      <span class=\"delete\">\n        <i class=\"far fa-trash-alt\" (click)=\"deleteTodo(todo.id)\"></i>\n      </span>\n    </span>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Todo App';
        this.editable = false;
        this.todos = [];
    }
    AppComponent.prototype.makeEditable = function (id) {
        console.log("make editable called ", id);
        for (var i in this.todos) {
            console.log("hi", this.todos[i].isEditable);
            if (this.todos[i].id == id) {
                this.todos[i].isEditable = !this.todos[i].isEditable;
            }
            console.log(this.todos);
        }
    };
    AppComponent.prototype.updateAfterAddTodo = function (updatedTodos) {
        this.todos = updatedTodos;
    };
    AppComponent.prototype.updatedTaskByChild = function (updatedData) {
        console.log("Before ", this.todos);
        for (var i in this.todos) {
            if (this.todos[i].id == updatedData.id) {
                this.todos[i].data = updatedData.data;
                this.todos[i].isEditable = !this.todos[i].isEditable;
            }
        }
        console.log("After ", this.todos);
        // this.makeEditable();
    };
    AppComponent.prototype.deleteTodo = function (taskId) {
        var deleteStatus, deleteIndex;
        for (var i in this.todos) {
            if (this.todos[i].id == taskId) {
                if (this.todos[i].status == false) {
                    var deleteConfirm = confirm("Your task is not completed! Do you want to delete it?");
                    if (!deleteConfirm) {
                        deleteStatus = false;
                    }
                    else {
                        deleteStatus = true;
                        deleteIndex = i;
                    }
                }
                else {
                    deleteStatus = true;
                    deleteIndex = i;
                    break;
                }
            }
        }
        if (deleteStatus) {
            this.todos.splice(deleteIndex, 1);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_todo_component__ = __webpack_require__("./src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_txtbox_task_txtbox_component__ = __webpack_require__("./src/app/task-txtbox/task-txtbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__task_txtbox_task_txtbox_component__["a" /* TaskTxtboxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task-txtbox/task-txtbox.component.css":
/***/ (function(module, exports) {

module.exports = ".todo-desc {\r\n  display: inline-block;\r\n  width: 50%;\r\n}\r\n\r\ntask-txtbox {\r\n  text-align: center;\r\n}\r\n\r\n.textbox {\r\n  width: 80%;\r\n  height: 24px;\r\n  border-radius: 5px;\r\n  border: 1px solid;\r\n  padding: 2px 4px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/task-txtbox/task-txtbox.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"todo-desc\" *ngIf=\"!editable\">\n  <input class=\"textbox\" type=\"text\" [(ngModel)]=\"task.data\" (blur)=\"updateTask()\" isfocus=\"true\" [autofocus]=\"true\">\n</span>"

/***/ }),

/***/ "./src/app/task-txtbox/task-txtbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskTxtboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskTxtboxComponent = /** @class */ (function () {
    function TaskTxtboxComponent() {
        this.updateParentTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](); // it goes to app-component
        this.focus = false;
    }
    TaskTxtboxComponent.prototype.ngOnInit = function () {
    };
    TaskTxtboxComponent.prototype.updateTask = function () {
        console.log("task in txtbox = ", this.task);
        this.updateParentTask.emit(this.task);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TaskTxtboxComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskTxtboxComponent.prototype, "updateParentTask", void 0);
    TaskTxtboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'task-txtbox',
            template: __webpack_require__("./src/app/task-txtbox/task-txtbox.component.html"),
            styles: [__webpack_require__("./src/app/task-txtbox/task-txtbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskTxtboxComponent);
    return TaskTxtboxComponent;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(id, data, status, isEditable) {
        this.id = id;
        this.data = data;
        this.status = status;
        this.isEditable = isEditable;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/***/ (function(module, exports) {

module.exports = ".container{    \r\n    /* border:1px solid blue; */\r\n    width: 50%;    \r\n    margin: auto;\r\n    padding: 5% 5% 7%;\r\n    -webkit-box-shadow: 0px 3px 13px gainsboro;\r\n            box-shadow: 0px 3px 13px gainsboro;\r\n}\r\n.data-section {\r\n  width: 80%;  \r\n  /* border: 1px solid red; */\r\n}\r\n.txtbox{    \r\n    width: 96%;\r\n    height: 30px;\r\n    font-size: 18px;\r\n    border: 1px solid grey;\r\n    border-radius: 4px;\r\n    padding: 0 10px;\r\n}\r\n.add-section {\r\n  width: 10%;\r\n  position: relative;\r\n  border: 1px solid slateblue;\r\n  border-radius: 4px;\r\n  padding: 0%;\r\n  right: 8%;\r\n  background: slateblue;\r\n  -webkit-transition:0.2s;\r\n  transition:0.2s;  \r\n}\r\n.btn-addtodo {\r\n  position: relative;\r\n    background: transparent;\r\n    height: 30px;\r\n    width: 100%;\r\n    border: none;   \r\n    z-index: 1000;\r\n  }\r\n.add-icon {         \r\n    -webkit-transition:0.2s;         \r\n    transition:0.2s;  \r\n    position: absolute;  \r\n    left: 27%;\r\n    top:0.5px;\r\n    font-size: 30px;\r\n    z-index: 0;\r\n    color: white;\r\n  }\r\n.add-section:hover .add-icon{\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    -webkit-transition:0.2s;\r\n    transition:0.2s;\r\n}"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n  <div class=\"data-section left\">\n      <input type=\"text\" class=\"txtbox\" [(ngModel)]=\"inputData\" placeholder=\"Enter Task\" autofocus>  \n  </div>  \n  <div class=\"add-section right clearfix\">\n      <input type=\"button\" class=\"btn-addtodo left\" value=\"\" (click)=\"addTodo()\">\n      <i class=\"add-icon fa fa-plus-circle\"></i>\n      \n  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("./src/app/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        this.result = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    TodoComponent.prototype.addTodo = function () {
        if (this.inputData.length > 0) {
            var newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */](this.todos.length + 1, this.inputData, false, false);
            this.todos.push(newTodo);
            this.result.emit(this.todos);
            this.inputData = "";
        }
        else {
            alert("Task Can't be Empty");
        }
    };
    TodoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "todos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "result", void 0);
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("./src/app/todo/todo.component.html"),
            styles: [__webpack_require__("./src/app/todo/todo.component.css")]
        })
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map