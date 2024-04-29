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

<h1>Apopleksi-opfølgning</h1>
<div><input bind:value={user} placeholder="Navn" /></div>
<br>
<div><input bind:value={email} placeholder="E-mail" /></div>
<br>
<div><input bind:value={pass} placeholder="Adgangskode" /></div>
<br>
<button on:click={addUser}>Opret bruger</button>
<br><br>
<button on:click={seeData}>Se patientdata</button>