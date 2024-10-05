const fp = require("fastify-plugin");

class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  async getAll() {
    return this.todoRepository.getAll();
  }

  async create(todoText){
    
    const res= this.todoRepository.create(todoText);
    console.log("service",res);
    return res;
    
  }
  async getOne(id) {
    
    return this.todoRepository.getOne(id);
  }
  async deleteOne(id) {
    this.todoRepository.deleteOne(id);
  }
  async deleteAll() {
    this.todoRepository.deleteAll();
  }
}
async function todoService(fastify, options) {
  const { todoRepository } = fastify;
  const service = new TodoService(todoRepository);
  console.log(service);
  fastify.decorate("todoService", service);
}

module.exports = fp(todoService);
