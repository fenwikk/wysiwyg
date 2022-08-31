<script lang="ts">
    import pageData from "../stores/PageData";

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
        <div class="border-2 border-transparent hover:border-green :border-red-400 p-[2px] -m-1" contenteditable="true" placeholder="Click to edit" on:keyup={onEdit} bind:innerHTML={data.string}>

        </div>
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