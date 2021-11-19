<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    // export let name ;
    export let todo;
    export let index;
    // let todo = ''
	let todos = [];

    const deleteHandler = index => {
        //we  need to send indx data when this is invoked
        dispatch('deleteTodo', index)
    }
    var collapseTodoItem = document.getElementsByClassName("collapsible");

    for (let i = 0; i < collapseTodoItem.length; i++) {
        collapseTodoItem[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

</script>
<main>
    <!-- <div> -->
        <!-- <p class="collapsible">{todo}</p>  -->
        <button type="button" class="collapsible">{todo}</button> 
        <div class="content">
            <p >Cost of {todo}: $5 </p>
        </div>
        <!-- this index will be sent to deleteTodo in App to remove the todo -->
        <button  on:click={deleteHandler(index)}>X</button><br/>
    <!-- </div> -->
</main>
    

<style>
    /* div {
        min-width: 239px;
        height: 43px;
        margin: 20px auto;
        padding-left: 17px;
        width: fit-content;
        /* background-color: rgba(250, 250, 250, .2); */
    /* }
     */ 
    p {
        line-height: 43px;
        display: inline-block;
        margin: 0;
        /* background-color: rgba(250, 250, 250, .2); */
    }
  
  
</style>