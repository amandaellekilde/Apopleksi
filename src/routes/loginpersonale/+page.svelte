<script>
    let username = ""
    let password = ""

    const login = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const result = await response.text();
        if (response.status === 200) {
            window.location = '/personale';
        } else {
            alert('Forkert brugernavn eller password');
        }
    };

</script>


<h1>Loginside</h1>

<input bind:value={username} type="text" placeholder="Indtast Email" />
<input bind:value={password} type="password" placeholder="Indtast Password" />
<button color="primary" on:click={login}>Login</button>

