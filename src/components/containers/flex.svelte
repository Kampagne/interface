<script lang="ts"> 
    /**
     * Turns this component into a column/vertical flex
     */
    export let col = false;

    /**
     * Turns this component into a row/horizontal flex
     */
    export let row = false;

    /**
     * Specifies the wrap behavior of the flex element
     */
    export let wrap: "nowrap" | "wrap" | "wrap-reverse" = "nowrap";

    /**
     * Equates to the flexbox's "justify" property. Allows you to specify alignment along the main axis
     */
    export let mainAlign: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right" = "flex-start";

    /**
     * Equates to the flexbox's "align-items" property. Allows you to specify alignment perpendicular to the main axis
     */
    export let crossAlign: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end" | "self-start" | "self-end" = "center";

    /**
     * Equates to the flexbox's "align-content" property. This aligns rows of the flexbox, and only has an effect when the content is wrapped.
     */
    export let contentAlign: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "start" | "end" | "baseline" | "first baseline" | "last baseline" = "flex-start";

    /**
     * The space between elements horizontally
     */
    export let colSpacing: String = "0px";

    /**
     * The space between elements vertically 
    */
    export let rowSpacing: String = "0px"; 

</script>

<div style="
    display: flex;
    { col ? 'flex-direction: column;' : '' }
    { row ? 'flex-direction: row;' : '' }
    flex-wrap: { wrap };
    justify-content: { mainAlign };
    align-items: { crossAlign };
    align-content: { contentAlign };
    row-gap: { colSpacing };
    column-gap: { rowSpacing };
    ">
    <slot />
</div>