<script lang="ts">

import editingKey from "../stores/editing";
import pageData from "../stores/pageData";

let temp: string | undefined = undefined

const save = () => {
    let tempData = $pageData
    tempData[$editingKey].string = temp || $pageData[$editingKey].string

    pageData.set(tempData)
    editingKey.set("")
}

</script>

{#if $editingKey != ""}
    <div class="fixed top-0 h-screen w-full z-50 flex justify-center items-center">
        <div class="z-40 absolute h-full w-full bg-gray-800/50" on:click={() => editingKey.set("")} />
        <div class="bg-white p-6 rounded-md z-50">
            <h3 class="text-xl">Editing {$editingKey}</h3>
            <input class="bg-gray-400" type="text" on:change={(e) => temp = e.currentTarget.value} value={$pageData[$editingKey].string}>

            <button on:click={save}>Save</button>
        </div>
    </div>
{/if}