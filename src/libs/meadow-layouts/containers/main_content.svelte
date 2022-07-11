<script lang="ts">
    // import { backgroundColor } from '../config';
    // import * from "../config";
    import { MuiConfig as config } from '../config';

    /**
     * The background color of this content window
     */
    export let bgColor = $config.colors.background.container;

    /**
     * The padding of this content window
    */
    export let p = $config.padding.container;

    /**
        * The background color of the title
    */
    export let bgTitle = $config.colors.background.component;
</script>

<div class="container bg-slate-100 shadow-lg w-2/5 rounded-xl"
     style="background-color: { bgColor };
            ">
    <header class="bg-slate-200 p-5 shadow-md rounded-t-xl"
            style="background-color: { bgTitle };
                   padding: { p }">
        <h1 class="text-center text-3xl font-semibold">
            <slot name="header" />
        </h1>
    </header>
    <main class="p-5 text-lg"
          style="padding: { p }">
        <slot name="content" />
    </main>
</div>

<!-- <style lang="scss">
    @use 'theme.scss';

    div {
        width: 400px;
        background-color: theme.$main;
    }
</style> -->