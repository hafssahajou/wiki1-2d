<?php
$title = "login";
ob_start();
?>

<!-- Header, styles, etc. -->

<section class="bg-gray-100 font-sans">
    <div class="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold mb-6">Login</h1>

        
        <form id="form" action="index.php?action=process_login" method="post">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input  type="text" name="email" id="email" class="mt-1 p-2 w-full border rounded-md">
            <p class="errorMessage text-red-500"></p>

            <label for="password" class="block mt-4 text-sm font-medium text-gray-700">Password</label>
            <input  type="password" name="password" id="password" class="mt-1 p-2 w-full border rounded-md">
            <p class="errorMessage text-red-500"></p>

            <button type="submit" class="mt-4 bg-blue-50 text-white p-2 rounded-md">Login</button>
        </form>
    </div>
</section>


<!-- Add the script tag here -->
<script src="../app/assets/js/login.js"></script>

<!-- Footer, scripts, etc. -->

<?php $content = ob_get_clean(); ?>
<?php include 'layout/layout.php'; ?>
