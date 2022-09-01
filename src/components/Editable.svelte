<script lang="ts">
    import "../editor.css"
    import pageData from "../stores/pageData";

    export let editing: boolean = false
    export let key: string

    let data = $pageData[key]

    const onEdit = () => {
        if (data.string == `<br>`)
            data.string = ""
        
        let tempdata = $pageData
        tempdata[key] = data
        pageData.set(tempdata)

        console.log($pageData)
    }
</script>

{#if editing}
    {#if data.type == "string"}
        <div class="editable-content-wrapper" contenteditable="true" placeholder="Click to edit" on:keyup={onEdit} bind:innerHTML={data.string} />
    {/if}
{:else}
    {#if data.type == "string"}
        {@html data.string}
    {/if}
{/if}

<style>
    [contenteditable][placeholder]:empty:before {
        content: attr(placeholder);
        position: absolute;
        color: gray;
        background-color: transparent;
    }
</style>