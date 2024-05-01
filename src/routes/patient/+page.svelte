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

    function logUd() {
        window.location.href = "/loginpatient";
    }

</script>


<style>
    :global(body) {
        background: #6d84f8;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    .container {
        text-align: center;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 50%;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    input {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>

<div class="container">
    <h1>Mine data</h1>
    <input bind:value={sys} type="text" placeholder="Systolisk blodtryk" />
    <br>
    <input bind:value={dia} type="text" placeholder="Diastolisk blodtryk" />
    <br>
    <input type="text" placeholder="Vægt" />
    <br>
    <input type="text" placeholder="Vandladning" />
    <br>
    <input type="text" placeholder="Afføring" />
    <br>
    <button on:click={saveReport}>Send</button>
    <br>
    <button on:click={logUd}>Log ud</button>
</div>
