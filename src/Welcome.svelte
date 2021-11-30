<script>
    // export let name;
    import {name} from './store.js';
    export let status = true;

    const handleClick = (e) => {
        //name = e.detail;
        $name = e.target.value;
         //name.update(e => e.target.value);
        
        console.log('e detail ', e.target.value)
    }
    
    const nameSubmitted = () => {
        status = false;
    }
</script>

<main> 
   
{#if status === false}
    <h3>Welcome {$name}!</h3>
{:else}

    <h2>What's Your Name, Super-Organizer?</h2>
    <!-- <input type='text' bind:value={$name} on:click={handleClick}/> -->
    <input type='text' value={$name} on:input={handleClick}/>
    <!-- this index will be sent to deleteTodo in App to remove the todo -->
    <br/>
    <button type='button' class="welcomeButton" on:click={nameSubmitted}>Submit</button>
{/if}

</main>
<style>
main {
    background-color: rgb(31, 124, 237);
}

</style>