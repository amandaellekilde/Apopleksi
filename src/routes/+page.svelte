<script>
  function personale() {
    window.location.href = "/loginpersonale";
  }

  function patient() {
    window.location.href = "/loginpatient";
  }
</script>

<h1>Velkommen</h1>
<p>Er du personale eller borger?</p>

<button on:click={patient}>Borger</button>
<button on:click={personale}>Personale</button>

