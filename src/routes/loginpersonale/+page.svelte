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
    <h1>Personale-login</h1>
    <input bind:value={username} type="text" placeholder="E-mail" />
    <input bind:value={password} type="password" placeholder="Adgangskode" />
    <button on:click={login}>Login</button>
</div>