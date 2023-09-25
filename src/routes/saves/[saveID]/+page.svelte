<script>
    import Sdd from 'svelte-device-detector'

    export let data
</script>
<main>
</main>

<Sdd showInDevice="desktop">
    {#if data.saveData !== null}
        <div class="bg-gray-100 w-fit m-auto mt-4 rounded-md border-2 border-gray-800" id="email">
            <h1 class="font-semibold text-2xl text-blue-800 p-2 pl-4 pr-4 text-center">{data.saveData.email}</h1>
        </div>

        <div class="bg-gray-100 w-fit m-auto mt-4 rounded-md border-2 border-gray-800" id="number">
            <h1 class="font-semibold text-2xl text-blue-800 p-2 pl-4 pr-4 text-center">{data.saveData.number}</h1>
        </div>

        <div class="bg-gray-100 w-fit m-auto mt-4 rounded-md border-2 border-gray-800" id="note">
            <h1 class="font-semibold text-2xl text-blue-800 p-2 pl-4 pr-4 text-center">{data.saveData.note}</h1>
        </div>

        {:else}

        <h1 class="text-4xl font-extrabold text-center mt-5">404, head <a href="/" class="text-blue-400">back</a></h1>
    {/if}
</Sdd>

<Sdd showInDevice="mobile">
    {#if data.saveData !== null}
        <div class="bg-gray-100 w-11/12 m-auto mt-4 rounded-md border-2 border-gray-800" id="email">
            <h1 class="font-semibold text-2xl text-blue-800 p-2 pl-4 pr-4 text-center">{data.saveData.email}</h1>
        </div>

        <div class="bg-gray-100 w-11/12 m-auto mt-4 rounded-md border-2 border-gray-800" id="number">
            <h1 class="font-semibold text-2xl text-blue-800 p-2 pl-4 pr-4 text-center">{data.saveData.number}</h1>
        </div>

        <div class="bg-gray-100 w-11/12 m-auto mt-4 rounded-md border-2 border-gray-800" id="note">
            <h1 class="font-semibold text-2xl text-blue-800 p-2 pl-4 pr-4 text-center">{data.saveData.note}</h1>
        </div>

        {:else}

        <h1 class="text-4xl font-extrabold text-center mt-5">404, head <a href="/" class="text-blue-400">back</a></h1>
    {/if}
</Sdd>