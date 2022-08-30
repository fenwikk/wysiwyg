<script lang="ts">
    export let editing: boolean = false
    export let input: Editable = { type: "error" }

    if (input.type == "error") throw new Error("Sum ting wong");
    

    let data = input.string

    const check = () => {
        console.log(data)
    }
</script>

{#if editing}
    {#if input.type == "string" || input.type == "html"}
        <div contenteditable="true" placeholder="hu" on:change={()=> console.log(data)} bind:innerHTML={data}>

        </div>
    {/if}
{:else}
    {#if input.type == "string"}
        {data}
    {:else if input.type == "html"}
        {@html data}
    {/if}
{/if}

<button onclick={() => alert("hi")}>Check</button>

<style>
    [contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  position: absolute;
  color: gray;
  background-color: transparent;
}
</style>