<script>
    let user = '';
    let email = '';
    let pass = '';

    const addUser = async () => {
        fetch('api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                email: email,
                pass: pass
            })
        });
    };

    function seeData() {
    window.location.href = "/sedata";
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
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        text-align: center;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>

<div class="container">
    <h1>Apopleksi-opfølgning</h1>
    <div><input bind:value={user} placeholder="Navn" /></div>
    <div><input bind:value={email} placeholder="E-mail" /></div>
    <div><input bind:value={pass} type="password" placeholder="Adgangskode" /></div>
    <button on:click={addUser}>Opret bruger</button>
    <br> <br>
    <button on:click={seeData}>Se patientdata</button>
</div>