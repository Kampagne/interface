<script lang="ts">
    export let halign = 'items-start';
    export let valign = 'justify-start';
    export let center = false;
    export let bg_image: String | Boolean = false;
</script>

<div style="width: 100%; height: 100vh; display:flex; flex-direction: column;
            align-items: { center == true ? 'center' : halign };
            justify-content: { center == true ? 'center' : valign };
            { bg_image != false ? 'background-image: url(\''+bg_image+'\')' : '' };
            background-size: cover;
            ">
    <slot />
</div>