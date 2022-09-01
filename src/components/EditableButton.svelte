<script lang="ts">
import editingKey from "../stores/editing";

    import pageData from "../stores/pageData";

    export let editing: boolean = false
    export let key: string

    let className: string
    export { className as class }
</script>

{#if editing}
    {#if $pageData[key].type == "button"}
        <div class="wrapper hover:-mt-5">
            <div on:click={() => editingKey.set(key)} class="hover-menu h-5 bg-green w-fit px-1 flex justify-center items-center text-sm text-white cursor-pointer">Edit</div>
            <div class="button-wrapper">
                <button
					class={className}
					href={$pageData[key].button?.href}
					>{@html $pageData[key].button?.label}</button
				>
            </div>
        </div>
    {/if}
{:else}
    {#if $pageData[key].type == "button"}
        <button
            class={className}
            href={$pageData[key].button?.href}
            >{@html $pageData[key].button?.label}</button
        >
    {/if}
{/if}

<style>
    .hover-menu {
        display: none;
    }
    .wrapper:hover > .hover-menu {
        display: block;
    }

    .wrapper:hover > .button-wrapper {
        border-color: rgb(150 168 82);
    }
</style>