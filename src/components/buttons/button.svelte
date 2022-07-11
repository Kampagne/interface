<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let solid = false;
    export let outline = false;
    export let ghost = false;
    export let rounded = false;


    let test = "nope";
    // const style = () => {
    //     "Hi there, " + test; 
    // }
    $: style = "Hi there, " + test;
    $: color = "white";
    $: bgColor = "rgb(99 102 241)"

    const dispatch = createEventDispatcher();
    const emitClick = () => {
        dispatch("click");
        test = "Yupe!";
    }
</script>

<button on:click={emitClick}
        style="transition-property: all;
               transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
               transition-duration: 150ms;
               padding-top: 0.75rem;
               padding-bottom: 0.75rem;
               padding-left: 1rem;
               padding-right: 1rem;
               font-weight: 600;
               color: { color };
               background-color: { bgColor };
               ">
    <slot /> {style}
</button>