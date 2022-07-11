import { writable } from "svelte/store";

export const MuiConfig = writable({

    /**
     * Group for color settings that affect Mui
     */
    colors: {

        /**
         * Background colors for the Mui components
         */
        background: {

            /**
             * The background color of the main page
             */
            main: "#FFFFFF",

            /**
             * The background color of containers
             */
            container: "#EEEEEE",

            /**
             * The background color of components
             */
            component: "#DDDDDD",
        }
    },

    padding: {
        container: "2rem",
        2: "1rem",
        3: "2rem",
    },

    breakpoints: {
        small: 300,
        medium: 600,
        large: 1000,
    }
});