<h1>Patientside</h1>

<script>
    import { onMount } from 'svelte';

    let report = [];
    let sys = '';
    let dia = '';
    
    onMount(async () => {
        const res = await fetch('api/report/self');
        report = await res.json();
    });

    const saveReport = async () => {
        await fetch('api/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sys: sys,
                dia: dia,
            })
        });
        const res = await fetch('api/report/self');
        report = await res.json();
    };

</script>

<input bind:value={sys} type="text" placeholder="Systolisk blodtryk" />
<input bind:value={dia} type="text" placeholder="Diastolisk blodtryk" />
<button on:click={saveReport}>Send</button>


{#each report as item}
    <div>
        <h6>{item.sys}</h6>
        <p>{item.dia}</p>
    </div>
{/each}
