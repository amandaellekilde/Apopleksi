<script>
    function tilbage() {
        window.location.href = "/patient";
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
    <h1> Tak for dit blodtryk </h1>
    <button on:click={tilbage}>Tilbage</button>
</div>