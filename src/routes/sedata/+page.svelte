<h1>Se patientdata</h1>

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
</script>

<button on:click={getusers}>Vis patienter</button> <br><br>

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