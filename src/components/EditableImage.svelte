<script lang="ts">
import editingKey from "../stores/editing";

    import pageData from "../stores/pageData";

    export let editing: boolean = false
    export let key: string

    let className:string
    export { className as class }
</script>

{#if editing}
    {#if $pageData[key].type == "image"}
        <div class="wrapper hover:-mt-5">
            <div on:click={() => editingKey.set(key)} class="hover-menu h-5 bg-green w-fit px-1 flex justify-center items-center text-sm text-white cursor-pointer">Edit</div>
            <div class="image-wrapper border-2 border-transparent -my-[2px]">
                <img src={$pageData[key].string} class={className} alt="" />
            </div>
        </div>
    {/if}
{:else}
    {#if $pageData[key].type == "image"}
        <img src={$pageData[key].string} class={className} alt="" />
    {/if}
{/if}

<style>
    .hover-menu {
        display: none;
    }
    .wrapper:hover > .hover-menu {
        display: block;
    }

    .wrapper:hover > .image-wrapper {
        border-color: rgb(150 168 82);
    }
</style>