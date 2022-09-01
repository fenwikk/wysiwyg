<script lang="ts">

import editingKey from "../stores/editing";
import pageData from "../stores/pageData";

let tempImage: Image = { src: "", alt: "" }


const saveImage = () => {
    let tempData = $pageData
    tempImage.src = tempImage.src != "" ? tempImage.src : ($pageData[$editingKey].image?.src || "")
    tempImage.alt = tempImage.alt != "" ? tempImage.alt : ($pageData[$editingKey].image?.alt || "")
    tempData[$editingKey].image = tempImage

    pageData.set(tempData)
    editingKey.set("")
}

</script>

{#if $editingKey != ""}
    <form class="fixed top-0 h-screen w-full z-50 flex justify-center items-center">
        <div class="z-40 absolute h-full w-full bg-gray-800/50" on:click={() => editingKey.set("")} />
        <div class="bg-white p-6 rounded-md z-50">
            <h3 class="text-xl">Editing Image: {$editingKey}</h3>
            <input class="bg-gray-400" type="text" on:change={(e) => tempImage.src = e.currentTarget.value} value={$pageData[$editingKey].image?.src}>
            <input class="bg-gray-400" type="text" on:change={(e) => tempImage.alt = e.currentTarget.value} value={$pageData[$editingKey].image?.alt}>

            <button on:click={saveImage}>Save</button>
        </div>
    </form>
{/if}