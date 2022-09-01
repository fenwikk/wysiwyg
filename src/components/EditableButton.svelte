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
    {#if $pageData[key].type == "button"}
        <div class="editable-wrapper">
            <div on:click={() => editingKey.set(key)} class="hover-menu">Edit</div>
            <div class="editable-content-wrapper">
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
        >
            {@html $pageData[key].button?.label}
        </button>
    {/if}
{/if}