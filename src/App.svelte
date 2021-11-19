
<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	// import { todos } from './store.js';
	import name from './Welcome.svelte';
	import NavBar from './NavBar.svelte';
	import Welcome from './Welcome.svelte';
	import Todos from './Todos.svelte';
	import Bye from './Bye.svelte'
	let todo = '';
	let todos = [];

	
	const submitTodo = (e) => {
		//why does this need to be turned into a string again?
		
		todos = [todo,...todos];
        //start from a fresh string
        todo = '';
		console.log('todo array', todos)
	};
	const deleteTodo = event => {
		//when i click on todo list item that i bc event.detail
		todos = todos.filter((todo,i) => i !== event.detail)
		// console.log('event val', event.detail)
		// console.log('todos', todo)
	}

    
</script>

	<NavBar/>
	<Welcome/>
	
<main>
	<h3>Get Started with My List!</h3>
		<form>
	  <!-- the todo string above with be assign a value eql to whatever input is -->
	  <div>
		  
	  </div>
	  <input type='text' required bind:value={todo}/>
	  <!-- how can i ensure the field doesn't register an empty string? -->
	  {#if todo !== ''}
	  <button type='submit' on:click|preventDefault={submitTodo}>Add Todo</button>
	  {/if}
	  </form>
	  {#if !todos.length}
		  <p>Add Some Todos!</p>
	  {:else}
		  {#each todos as todo, index}
			  <!-- <input bind:value={todos[index]}> -->
			  <Todos todo={todo} index={index} on:deleteTodo={deleteTodo}/> 
		
		  {/each}
	  {/if}  
	  <Bye/>
</main>

<style>
	
main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	input {
	
	padding: 12px 20px;
	margin: 8px 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: inherit;
	margin: 0 auto;
	/* box-sizing: border-box; */

	} 

	/* button {
        
		min-width: 100px;
		margin: 0 auto;
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        max-width: fit-content;
        border-radius: 2px;
        } */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
