<script lang="ts">
    import "../editor.css"
import editingKey from "../stores/editing";

    import pageData from "../stores/pageData";

    export let editing: boolean = false
    export let key: string

    let className: string
    export { className as class }
</script>

{#if editing}
    {#if $pageData[key].type == "image"}
        <div class="editable-wrapper">
            <div on:click={() => editingKey.set(key)} class="hover-menu">Edit</div>
            <div class="editable-content-wrapper">
                <img src={$pageData[key].image?.src} class={className} alt={$pageData[key].image?.alt} />
            </div>
        </div>
    {/if}
{:else}
    {#if $pageData[key].type == "image"}
        <img src={$pageData[key].image?.src} class={className} alt={$pageData[key].image?.alt} />
    {/if}
{/if}