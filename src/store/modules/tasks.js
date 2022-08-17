 
import axios from 'axios'; 
const state = { 
    tasks:[], 
    workers:[],
    tables:[],
    search:"", 
};

const getters = {
  search: (state) => {  return state.search},
  alltasks: state => state.tasks, 
  alltables: state => state.tables,
  allworkers: state => state.workers,
  filteredtasks: function(state, getters){ 
   
    return getters.alltasks.filter((task)=>{
      if(task.tagname && task.status ){
       return task.tagname.toLowerCase().match(getters.search.toLowerCase())||
       task.description.toLowerCase().match(getters.search.toLowerCase())||
       task.status.toLowerCase().match(getters.search.toLowerCase()) 
      }
     })
   
  },
};
const mutations={
  setTasks: (state, tasks) => (state.tasks = tasks), 
  setWorkers: (state, workers) => (state.workers = workers),
  setTables: (state, tables) => (state.tables = tables), 
  newTask: (state, task) => state.tasks.push(task), 
  updateSearch (state, search) { state.search = search },
  updtTask(state, task) {
    const index = state.tasks.findIndex(item => item.id == task.id)
    state.tasks.splice(index, 1, task)
  } 
};
const actions = {  
    
   async fetchTasks(context) 
   {  
    const response = await axios.get('jsonfiles/tasks.json'); 
    context.commit('setTasks',  response.data);  
    
   },

    
   async fetchTables(context) 
   {  
    const response = await axios.get('jsonfiles/tables.json'); 
    context.commit('setTables',  response.data);  
    
   },
   async fetchWorkers(context) 
   {  
    const response = await axios.get('jsonfiles/workers.json'); 
    context.commit('setWorkers',  response.data);  
    
   },
 

    

  async addTask( context, task )
  { 
  // let response = await axios.post('jsonfiles/tasks.json', {
       let response = ({
        id: task.id,
        description: task.description,
        tagname:task.tagname,
         status:task.status,
        connections:task.connections,
  } )
   
  context.commit('newTask', response); 
   
 },

 

async createAction( context , {obj, task})
{     
 state[obj].push(task)
},

async deleteAction( context , {obj, id})
{ console.log(obj);
  state[obj]= state[obj].filter(key=>key.id!==id);
},
   
  
  async updateTask(context, task) {
     
    // const response = await axios.put(`/Contracts/${formData.id}`, formData );
    let response = ({
      id: task.id,
      description: task.description,
      tagname:task.tagname,
       status:task.status,
      connections:task.connections,
} )
    context.commit('updtTask', response);
    return response;
  } 
        };



export default {
  state,
  getters,
  actions,
  mutations
};
