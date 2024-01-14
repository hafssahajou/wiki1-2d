<?php
$title = "regiter";
ob_start();
?>

<!-- Header, styles, etc. -->

<section class="bg-gray-100 font-sans">
    <div class="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold mb-6">Register</h1>

        <!-- Formulaire d'inscription -->
        <form action="index.php?action=process_registration" method="post">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="username" id="name" class="mt-1 p-2 w-full border rounded-md">

            <label for="email" class="block mt-4 text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" class="mt-1 p-2 w-full border rounded-md">
            <span class="errorMessage w-full bg-red-500 text-white rounded px-[20px]"></span>
           
            <label for="password" class="block mt-4 text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" id="password" class="mt-1 p-2 w-full border rounded-md">
            <span class="errorMessage w-full bg-red-500 text-white rounded px-[20px]"></span>
            <!-- Ajoutez d'autres champs d'inscription ici si nécessaire -->

            <button type="submit" name="login" class="mt-4 bg-green-50 text-white p-2 rounded-md">Register</button>
        </form>
    </div>
</section>

<script src="../../app/assets/js/register.js"></script>

<!-- Footer, scripts, etc. -->

<?php $content = ob_get_clean(); ?>
<?php include 'layout/layout.php'; ?>