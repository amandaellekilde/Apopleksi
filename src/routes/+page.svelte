<script>
  function personale() {
    window.location.href = "/loginpersonale";
  }

  function patient() {
    window.location.href = "/loginpatient";
  }
</script>

<style>
   :global(body){
            background: #6d84f8;
        }
  .container {
    text-align: center;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    width: 20%; 
    margin: auto; 
  }

  h1 {
    margin-top: 0;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
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
  <h1>Velkommen</h1>
  <p>Er du patient eller personale?</p>
  <button on:click={patient}>Patient</button>
  <button on:click={personale}>Personale</button>
</div>