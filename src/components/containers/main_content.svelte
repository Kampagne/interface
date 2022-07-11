<div class="container bg-slate-100 shadow-lg w-2/5 rounded-xl">
    <header class="bg-slate-200 p-5 shadow-md rounded-t-xl">
        <h1 class="text-center text-3xl font-semibold">
            <slot name="header" />
        </h1>
    </header>
    <main class="p-5 text-lg">
        <slot name="content" />
    </main>
</div>

<style lang="scss">
    @use 'theme.scss';

    div {
        width: 400px;
        background-color: theme.$main;
    }
</style>