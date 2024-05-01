<script>
    let users = [];
    let currentUserId = null;
    let currentUserReports = [];

    const getusers = async () => {
        const res = await fetch('api/user/getuser');
        users = await res.json();
    };

    const showData = async (user) => {
        currentUserId = user.id
        const res = await fetch(`api/report/getreports?id=${currentUserId}`);
        currentUserReports = await res.json();
    };
    
    function tilbage() {
        window.location.href = "/personale";
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
    <h1>Se patientdata</h1>
    <button on:click={getusers}>Vis patienter</button> <br><br>
    <button on:click={tilbage}>Tilbage</button> <br><br>
</div>

{#each users as user}
    <button on:click={() => showData(user)}>
        <p>{user.email}</p>
    </button>
    <br>
{/each}

{#if currentUserId}
    <h2>Data for {users.find(u => u.id === currentUserId).email}</h2>
    <h3>Blodtryk</h3>
    {#each currentUserReports as report}
        <p>{report.sys} / {report.dia}</p>
    {/each}
{/if}