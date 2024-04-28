<h1>Se patientdata</h1>

<script>
    let users = [];

    const getusers = async () => {
        const res = await fetch('api/user/getuser');
        users = await res.json();
    };

    const showData = {
        /*Har jeg ikke lige fundet ud af endnu*/
    };

</script>

<button on:click={getusers}>Vis patienter</button>

{#each users as user}
    <button on:click={() => showData()}>
        <p>{user.email}</p>
    </button>
{/each}