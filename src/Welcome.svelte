<script>
    // export let name;
    import {name} from './store.js';
    export let status = true;

    const handleClick = () => {
        // name = e.detail;
        // $name = e.target.value;
        name.update(e => e.target.value);
        
        console.log('e detail ', e.target.value)
    }
    
    const nameSubmitted = () => {
        status = false;
    }
</script>

<main> 
   
{#if status === false}
    <h3>Welcome {name}!</h3>
{:else}
 <h2>What's Your Name, Super-Organizer?</h2>
    <!-- <input type='text' bind:value={$name} on:click={handleClick}/> -->
    <input type='text' value={$name} on:input={handleClick}/>
    <!-- this index will be sent to deleteTodo in App to remove the todo -->
    <button type='button' on:click={nameSubmitted}>Submit</button>
{/if}

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
	/* box-sizing: border-box; */

	} 

    button {
        
		min-width: 100px;
		margin: 0 auto;
        padding: 0.4em;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        max-width: fit-content;
        border-radius: 2px;
        }


</style>