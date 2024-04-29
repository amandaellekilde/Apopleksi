<h1>Mine data</h1>

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

        window.location.href = "/patient/kvittering";
    };

</script>

<input bind:value={sys} type="text" placeholder="Systolisk blodtryk" />
<br>
<input bind:value={dia} type="text" placeholder="Diastolisk blodtryk" />
<br><br>
<input type="text" placeholder="Vægt" />
<br><br>
<input type="text" placeholder="Vandladning" />
<br><br>
<input type="text" placeholder="Afføring" />
<br><br>
<button on:click={saveReport}>Send</button>

