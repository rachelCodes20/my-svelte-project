<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    // export let name ;
    export let todo;
    export let index;
    // let todo = ''
	import {todos} from './store';

    const deleteHandler = index => {
        //we  need to send indx data when this is invoked
        dispatch('deleteTodo', index)
    }

    var collapseTodoItem = document.getElementsByClassName("collapsible");

    const open = () => {
        for (let i = 0; i < collapseTodoItem.length; i++) {
        let currBtn = collapseTodoItem[i];
        currBtn.addEventListener("click", function() {
        // collapseTodoItem[i].classList.add("collapsible");
        var content = currBtn.nextElementSibling;
        if (content.style.display === "none" ) {
        content.style.display = "block";
        } else {
        content.style.display = "none";
        }
    });

    }   
};

document.addEventListener('click', () => open());

</script>
<main>
    <script>
       
    </script>
    
        <button type="button" id=todoBtn class="collapsible" >{todo}</button> 
        <br/>
        <div class="content">
            <p >Cost of {todo}: $$ </p>
        </div>
        <!-- this index will be sent to deleteTodo in App to remove the todo -->
        <br/>
        <button  on:click={deleteHandler(index)}>X</button><br/>
</main>
    

<style>
   
  
  
</style>
