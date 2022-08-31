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

    let className:string
    export { className as class }
</script>

{#if editing}
    {#if data.type == "image"}
        <div class="border-2 border-transparent hover:border-green :border-red-400 p-[2px] -m-1">
            <img src={data.string} class={className} alt="" />
        </div>
    {/if}
{:else}
    {#if data.type == "image"}
        <img src={data.string} class={className} alt="" />
    {/if}
{/if}