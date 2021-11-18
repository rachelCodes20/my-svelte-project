<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    // import { todos } from './store.js';
    // export let todos;
    export let todo;
    export let index;
    // let todo = ''
	let todos = [];

    const deleteHandler = index => {
        //we  need to send indx data when this is invoked
        dispatch('deleteTodo', index)

    }
    
</script>
    <div>
        <p>{todo}</p> 
        <!-- this index will be sent to deleteTodo in App to remove the todo -->
        <button class="btn btn-danger" on:click={deleteHandler(index)}>X</button><br/>
    </div>

<style>
    div {
        min-width: 239px;
        height: 43px;
        margin: 20px auto;
        padding-left: 17px;
        width: fit-content;
        background-color: rgba(250, 250, 250, .2);
    }
    /* main {
	
        text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

	} */
    p {
        line-height: 43px;
        display: inline-block;
        margin: 0;
    }
  
  
</style>