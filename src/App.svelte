
<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	//import { todos } from './store.js';
	import NavBar from './NavBar.svelte';
	import Welcome from './Welcome.svelte';
	import Todos from './Todos.svelte';
	import Bye from './Bye.svelte'
	let todo = '';
	let todos = [];

	//todos.subscribe((todos) => console.log('subscribe called ', todos));

	const submitTodo = () => {
		//why does this need to be turned into a string again?
		console.log('todo: ', todo)
		 todos = [todo,...todos];
		// todos.update(todoItems => [todo, ...todoItems])
        //start from a fresh string
        todo = '';
		console.log('todo array', todos)
	};

	const deleteTodo = event => {
		//when i click on todo list item that i bc event.detail
		todos = todos.filter((todo,i) => i !== event.detail)
		todos.update(() => [...todos])
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
	  	<ol>
		  {#each todos as todo, index}
			  <!-- <input bind:value={todos[index]}> -->
			  <li><Todos todo={todo} index={index} on:deleteTodo={deleteTodo}/> </li>
		  {/each}
		</ol>
	  {/if}  
	  <Bye/>
</main>

<style>
	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
