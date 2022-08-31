<script lang="ts">
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

    let className:string
    export { className as class }
</script>

{#if editing}
    {#if data.type == "image"}
        <div class="wrapper hover:-mt-5">
            <div class="hover-menu h-5 bg-green w-fit px-1 flex justify-center items-center text-sm text-white cursor-pointer">Edit</div>
            <div class="image-wrapper border-2 border-transparent -my-[2px]">
                <img src={data.string} class={className} alt="" />
            </div>
        </div>
    {/if}
{:else}
    {#if data.type == "image"}
        <img src={data.string} class={className} alt="" />
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