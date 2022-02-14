const app = new Vue (
    {
        el: '#app',
        data: {
            newtodo: '',
            todos: [
                {
                    text: 'pick up new running shoes',
                    done: false,
                },
            ],
        },
        methods: {
            addToDo() {
                if (this.newtodo.trim().length > 0) {
                const newTodoOb = {
                    text: this.newtodo.trim(),
                    done: false
                };
                
                    this.todos.push(newTodoOb);
                    this.newtodo = ''
                }

            },
            removeToDo(index) {
                this.todos.splice(index, 1);
            },
            doneTask(index) {
                this.todos[index].done = !this.todos[index].done;

            }

        }

    }
)


