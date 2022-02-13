const app = new Vue (
    {
        el: '#app',
        data: {
            newtodo: '',
            todos: [
                'pick up tomatoes',
                'buy cherries',
                'finish homework',
                'order new running shoes'
            ],
            doneClass: '',
            done: false,
        },
        methods: {
            addToDo() {
                this.todos.push(this.newtodo);
                this.newtodo = '';
            },
            removeToDo(index) {
                this.todos.splice(index, 1);
            },
            /*doneTask(index) {
                if (this.done == false) {
                    this[index]this.doneClass = 'doneClass';
                    this.done = true;
                } else {
                    this[index]this.doneClass = ''
                }

            }*/

        }

    }
)


/*if (this.done == false) {
    this.doneClass.splice(index, 1) = 'doneClass';
} else {
    
}*/