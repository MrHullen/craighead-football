<script>
  import { signup, login } from '$lib/db'
</script>

<div class="center">
  <button class="signup-button" on:click={login}>Login ⚽️</button>
</div>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f6f6f6;
    font-family: Arial, sans-serif;
  }

  .center {
    text-align: center;
  }

  .signup-button {
    padding: 20px 50px;
    font-size: 24px;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #007bff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .signup-button:hover {
    background-color: #0056b3;
  }
</style>
