const fp = require("fastify-plugin");

class TodoRepository {
  constructor(db) {
    this.db = db;
  }
  async getAll() {
    return this.db.todos;
  }
  async create(todoText){
    this.db.todos.push({
        text: todoText,
        id: this.db.todos.length
    })
    return this.db.todos;
  }
  async getOne(id) {
    console.log(this.db.todos);
    console.log(id)
    console.log(this.db.todos.find(todo => todo.id == id));
    return this.db.todos.find(todo => todo.id == id);
  }
  async deleteOne(id) {

  }
  async deleteAll() {

  }
}
async function todoRepository(fastify, options) {
  const { db } = fastify;
  const repo = new TodoRepository(db);
  console.log(repo);
  fastify.decorate("todoRepository", repo);
}

module.exports = fp(todoRepository);
