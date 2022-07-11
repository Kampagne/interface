<script context="module">
    import MainContent from "./containers/main_content.svelte";
    import Flex from "./containers/flex.svelte";
    import SinglePaneLayout from "./layouts/single_pane_layout.svelte";
    
    export { 
        MainContent,
        Flex,
        SinglePaneLayout,
    };
</script>

<style global>
    * {
        margin: 0px;
        padding: 0px;
    }

    p {
        width: 100%;
    }
</style>